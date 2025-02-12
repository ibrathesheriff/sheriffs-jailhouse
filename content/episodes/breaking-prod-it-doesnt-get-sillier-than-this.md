---
title: "When it comes to Breaking Prod it doesn't get sillier than this"
date: 2025-02-11T12:03:56+02:00
draft: false
author: ibrathesheriff
description: "This episode is about how poorly structured error logging led to my most hilarious site crash."
categories:
- breaking-prod
- hardware
tags:
- breaking-prod
- logging
keywords:
- breaking-prod
---
I wish I had listened to the sweet sweet advice given in this meme:

![Meme about not having any errors if there is no error log](/img/episodes/memes/cant-have-any-errors-if-no-error-log.jpg)

Because if I had, I would avoided one of the strangest bugs I have ever introduced into a system. Have you ever accidentally implemented a recursive routine?

## It all began with an error log
The wonderful folks at Crowdstrike define a error log as *a file that contains detailed records of error conditions a computer software encounters when it's running*.

While working on [RINAIBRA](/projects/rinaibra) I decided to setup an error log using a database table. Each time an unexpected exception was experienced the error condition information was added to the database and an email was sent to me to notify me about the issue.

> Ahh programming, where you're the detective and you're the criminal and you plant evidence to make it easy to get yourself caught by yourself. - @thecompanioncube4211, YouTube

It was a very simple system that revolved around this function:

```python
def log_unexpected_error(function, details):
    """
    Used to log an error. It saves the details of the error in the database and also sends the development team an email
    about the issue.

    :param function: the function where the error arose
    :param details: the details of the error
    """
    error_id = generate_id()
    date_created = utility.get_current_date_str_with_time()
    new_error_log = ErrorLog(error_id, date_created, function, details, 0)
    session.add(new_error_log)
    session.commit()
    emailer.send_error_log(error_id, date_created, function, details)
```

When an unexpected exception arose, the wonderfully named `log_unexpected_error` function was called with the information for the function where the error occurred and the details i.e. error conditions information. For example if a route failed to access a User's profile:

```python
user = get_user_by_su_email(su_email)
if user is None:
    log_unexpected_error("db.generate_house_qr_code(su_email)", "Failed to get the user using "
                         "get_user_by_su_email(su_email) with the email " + su_email)
    return get_status_response("Request failed. Please try again.")
```

So just before communicating that an error occurred to the User the `log_unexpected_error` function was called.

## This looks simple enough, where did things go wrong?
Remember the last line of the `log_unexpected_error` function:
```python
emailer.send_error_log(error_id, date_created, function, details)
```
The `send_error_log` function called the `send_email` function that was also part of the `emailer` module.

To understand where things went wrong let's quickly review the bottom of `send_email` function:
```python
try:
    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message.as_string())
        server.close()
        return True
    except Exception as e:
        db.log_unexpected_error("emailer.send_email()",
                                "Failed to send an email to " + receiver_email + " causing exception: " + str(e))

    return False
```
Everything seems fine initially, but a closer look reveals a curious sequence of function calls.

**Q**: Wait why is the `send_email` function calling the `log_unexpected_error` function?  
**A**: My 3AM brain's answer was, if the platform fails to send an email because an error occurs there should be an error log entry for that. It's an error after all.

You guessed it, I forgot to account for the emailing system crashing. [RINAIBRA](/projects/rinaibra) was a maintenance communication system after all, the email system could never go down because how would our Users receive notifications?

## So the email system went down...
My friend and I initially created [RINAIBRA](/projects/rinaibra) to address communication challenges related to maintenance communication within our residence at Stellenbosch University. Unforeseen was the platform's eventual adoption by all university residences. Consequently, our initial system and service choices reflected a resource-constrained approach.

I mean we spent I think $12 on [GoDaddy](https://godaddy.com/) for the domain, and hosted the platform on [Pythonanywhere](https://www.pythonanywhere.com/) for $5 per month. We hosted the MySQL database on [Pythonanywhere](https://www.pythonanywhere.com/) and used our free Gmail account (hellorinaibra@gmail.com) to send emails. We were just two penny-pinching students. The perfect conditions for a disaster.

Gmail is not meant to be used as a transactional email service, I think at the time you could only send a maximum of 1000 or 2000 emails per day. When we first launched the platform it was being used by less than 100 students so 1000 looked like a large number. But then in 2021 we added about 14 more residences causing our User count to go past 1500.

At the start of the year students had to complete move-in forms on the platform to indicate the state of the rooms and tick off Terms and Conditions checkboxes. To remind students to fill in their move-in forms, administrators could click a button which would send an request to an endpoint that would grab the students who had not yet completed their move-in forms and sent them a reminder via email.

*You can already see where this is going :)*

On Wednesday March 10 2021, the [RINAIBRA](/projects/rinaibra) platform triggered a surge of email notifications, including those for reported, in-progress, and resolved maintenance issues, as well as move-in form reminders.  This volume-over 1000 (or 2000) emails—caused our email system to crash as Gmail blocked all outgoing email requests for the remainder of the day.

## Let the recursion begin

### I get the call
I got a call from an administrator saying that the site was no longer responsive. He was trying to submit maintenance issues but the page just kept saying "processing...", it was not actually submitting the issue.

So I dropped off the call and immediately logged onto Pythonanywhere to view the server logs and was shocked to see:
```text
RecursionError: maximum recursion depth exceeded
```

I was like what the hell! How is this possible? I do not use any recursion in this web application.

### It's not making sense
It wasn't making sense why this error was occurring, it felt so random so I opened a SQL console and queried the `error_logs` table to view the most recently added records. That's what led me to the `send_email` function as all the recent logs referenced this function. I then reviewed the `log_unexpected_error` function code and it hit me.

### Accidental recursion
So as Users completed actions related to maintenance issues or move-in forms notifications were sent via email using the `send_email` function. The surge of emails caused the platform to hit the maximum allowed outgoing email requests for the day meaning the `send_email` function started to fail to fulfil email requests so an exception occurred and the `log_unexpected_error` function was called.

The `log_unexpected_error` function would then add the error log to the database and attempt to notify me about the error via email by using the `send_email` function. The `send_email` function would fail to fulfil the email request to notify me as Gmail had blocked the platform for the day so it would call the `log_unexpected_error` function which would add the error log to the database and try to notify me about the error via email using the `send_email` function. This loop would keep on going until Python gave up on tracking the function calls and hence raised the `RecursionError`.

They say, "Recursion is defined as a process which calls itself."

But a better definition is:

> Recursion is defined as a process which calls itself directly or indirectly and the corresponding function is called a recursive function.

This incorporates *"directly or indirectly"*. By accident I had created an example of the *indirectly* case of recursion.

## Fixing the issue

### Getting the platform to be responsive again
![Meme about standing back as I try run a fix directly onto prod](/img/episodes/memes/stand-back-trying-this-in-production.jpg)

I could not get Gmail to unblock us in a timely manner. The only option I was to wait a day but that didn't make sense as Users would not be able to use the platform all day. So the only sensible option was to break the recursion. This was simple, if the error log request came from a function that was directly responsible for sending emails the `log_unexpected_error` function would not attempt to send me an email to notify me about the issue.

```python
if function != "emailer.send_multiple_emails()" and function != "emailer.send_email_with_no_logo()" and \
        function != "emailer.send_email()":
    emailer.send_error_log(error_id, date_created, function, details)
```

This way the error was logged once and the `send_email` function would not be triggered to continue the loop. The final version of the `log_unexpected_error` function:

```python
def log_unexpected_error(function, details):
    """
    Used to log an error. It saves the details of the error in the database and also sends the development team an email
    about the issue.

    :param function: the function where the error arose
    :param details: the details of the error
    """
    error_id = generate_id()
    date_created = utility.get_current_date_str_with_time()
    new_error_log = ErrorLog(error_id, date_created, function, details, 0)
    session.add(new_error_log)
    session.commit()
    if function != "emailer.send_multiple_emails()" and function != "emailer.send_email_with_no_logo()" and \
            function != "emailer.send_email()":
                emailer.send_error_log(error_id, date_created, function, details)
```

### The git commit message
```shell
logger no sends an email if the issue is coming from the emailer
```

### How could I have avoided this: Microservices vs. Majestic Monolith
[RINAIBRA](/projects/rinaibra) was a [Majestic Monolith](https://signalvnoise.com/svn3/the-majestic-monolith/) so the coupling between functions and modules caused this issue. In a Microservices setup the email service could have gone down without causing the entire application to become unresponsive. The email service is important to send notifications but Users can use the platform without the email service.

### How could I have avoided this: Testing (duh)
When I start testing a function I always consider the following input situations:
+ zero
+ small numbers
+ large numbers
+ the average number

The zero situation in this case would have been Gmail stops working which is easy to test on your laptop - just switch off your WIFI!

## What was the damage?
By the end of the day, we had *frustrated Users*.

*Over 10,000 error logs* were added that day.

And I *felt quite silly*.

## Breaking things happens
[RINAIBRA](/projects/rinaibra) was my very first startup experience as the tech lead. Early on, I was solely responsible for all the platform development. I was still a University student so I made so many rookie mistakes but I would do it all again. Though having a system crashing can be stressful, I always laughed about it after deploying the fix.