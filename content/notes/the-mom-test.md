---
title: "The Mom Test"
date: 2026-11-18T12:10:55+02:00
lastmodified: 2026-11-18T12:10:55+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "Summary notes made while reading The Mom Test by Rob Fitzpatrick."
categories:
- talking-to-customers
tags:
- talking-to-customers
- surveying
keywords:
- talking-to-customers
---
So it's the end of the year and I am looking to send out a survey to the [hackthedegree](({{< ref "projects/hackthedegree" >}})) students. I want to find out:
+ what is still working?
+ what is not working?
+ the role AI should play in our learning workflow.

So I started by writing down 5 major questions that I want to answer using responses from the survey. I then gave them to Gemini and it found flaws in my approach:
+ *You are pitching your thesis inside the question*
+ *You are asking students to be product designers*
+ *You are asking hypothetical/flattering questions*

Based on responses from past surveys, I found this criticism to be fair. I felt my past survey guided the respondent, it shared a particular narrative. It felt like it was ensuring that my survey data would support my hypothesis no matter what. But that's not what I want. Gemini referenced [The Mom Test](https://www.momtestbook.com/) by Rob Fitzpatrick, so I decided to give it a go and see if I can get some advice on how I should word my questions.

![Cover page of The Mom Test by Rob Fitzpatrick](/img/notes/learning/talking-to-users/the-mom-test.webp)

## The Goal
The Mom Test: how to talk to customers and learn if your business is a good idea when everybody is lying to you

## Introduction
Talking to customers to find out something about a problem or solution can be related to excavating a delicate archaeological site. The truth is buried down there somewhere, but it's fragile. *Your tools are your goal and questions*. It's very easy to smash something into a million pieces using a shovel, bulldozer, or crate of dynamite. But you do not want to be overly delicate and try to excavate the entire site using a toothbrush.
> They use heavy-handed questions like "do you think it’s a good idea" and shatter their prize

Talking to customers is hard. We know we *ought* to talk to customers. But even though many of us do, we end up building things that nobody buys - even though talking to customers is supposed to avoid this.
> The advice that you ought to be talking to your customers is wellintentioned, but ultimately a bit unhelpful. It’s like the popular kid advising his nerdy friend to "just be cooler." They forget to mention that it’s hard.

## Chapter 1: The Mom Test
Never ask anyone whether your business is a good idea.
> The Mom Test is a set of simple rules for crafting good questions that even your mom can't lie to you about.

### Failing the mom test
+ You lead the customer along and force them into particular responses.
+ The customer has no room to tell you the truth.
+ The customer wants to protect your feelings.
    - This reminds of how people in high school preferred to lie and say that they ran out of something, rather then just saying **NO**.
+ You end up collecting a bunch of false positives.

> Our misguided entrepreneur has a few more conversations like this, becomes increasingly convinced he’s right, quits his job, and sinks his savings into the app. Then he wonders why nobody (even his mom) buys the app, especially since he had been so rigorous.

Doing it wrong is worse than doing nothing at all.

### Passing the mom test
+ Open with more general questions before leading the conversation with a specific question or 2.
+ But never ask about your idea directly, more about channels, mediums and customer usage i.e. understanding their behaviour.
+ Might not get a direct answer on your idea but you will obtain insights on your target customer segment and marketing.

### A useful conversation
> The measure of usefulness of an early customer conversation is whether it gives us concrete facts about our customers' lives and world views. These facts, in turn, allow us to improve our business.

Our original idea looked like this: **old people like cookbooks and iPads**. Therefore, we will build a cookbook for the iPad. It’s generic. Of which there are thousands of possible variations of this premise. With an idea this vague, we can’t answer any of the difficult questions like:
+ which recipes to include,
+ or how people will hear about it

Until we get specific, it always seems like a good idea.

But after a useful conversation we have a higher fidelity vision:
+ We now see that there are at least 2 specific customer segments we might serve, each of which needs a slightly different product.
+ We have identified major risks to address before we commit too heavily:
    - We could offer niche recipes (ethnic, diets) which experienced cooks may not already know. But how do we reach them when they don't search for apps? We could try newspapers and magazine PR.
    -  Alternately, we might make generic recipes for younger cooks who are easier to reach via the App Store and who haven’t memorised all their favourites yet. But we haven't spoken to anyone in this customer segment yet? But if they are not in the habit of buying expensive cookbooks, will they pay a premimum for ours?

> The first conversation gave us rope to hang ourselves. The second gave us actionable insight. Why? What was different about the second conversation?

> Mom was unable to lie to us because we never talked about our idea

We find out if people care about what we're doing by never mentioning it. Instead, we talk about them and their lives. However, the big mistake is almost always to mention your idea too soon rather than too late.

Here are 3 simple rules to help you -they are called the **The Mom Test:**
1. Talk about their life instead of your idea.
2. Ask about specifics in the past instead of generics or opinions about the future.
3. Talk less and listen more.

It's called The Mom Test because it leads to questions that even your mom can't lie to you about. 

## Good question / bad question
+ "Do you think it’s a good idea?"
    - Awful question! Unless you’re talking to a deep industry expert, this is self-indulgent noise with a high risk of false positives.
    - *Let's fix it*. Consider we are building an app for construction companies to manager supplies:
        - How do they currently do it?
        - Talk about which parts they love and hate.
        - Ask which other tools and processes they tried before settling on this one.
        - Are they actively searching for a replacement? If so, what's the sticking point? If not, why not? Where are they losing money with their current tools?
        - Is there a budget for better ones?
    - Now, take all that information and decide for yourself whether it’s a good idea. 
    - *Rule of thumb*: Opinions are worthless.
+ "Would you buy a product which did X?"
    - Bad question, answer is almost always *"yes"*, which makes it worthless. You’re asking for opinions and hypotheticals from overly optimistic people who want to make you happy.
    - *Let's fix it*.
        - Ask how they currently solve X and how much it costs them to do so.
        - And how much time it takes.
        - Ask them to talk you through what happened the last time X came up. If they haven't solved the problem, ask why not.
        - Have they tried searching for solutions and found them wanting? Or do they not even care enough to have Googled for it?
    - *Rule of thumb*: Anything involving the future is an over-optimistic lie.
+ "How much would you pay for X?"
    - Bad question - likely to trick you because the number makes it feel rigorous and truthy.
    - *Let's fix it*. Just like the others, fix it by asking about their life as it already is.
        - How much does the problem cost them?
        - How much do they currently pay to solve it?
        - How big is the budget they've allocated?
    - *Rule of thumb*: People will lie to you if they think it's what you want to hear.
+ "What would your dream product do?"
    - Sort-of-okay question, but only if you ask good follow-ups (otherwise it's a bad question).
    - *Let's fix it*. The value comes from understanding why they want these features.
        - You don't want to just collect feature requests. You aren't building the product by committee. But the motivations and constraints behind those requests are critical.
    - *Rule of thumb*:  People know what their problems are, but they don’t know how to solve those problems.
+ "Why do you bother?"
    - Good question. I love this sort of question. It’s great for getting from the perceived problem to the real one. 
    - e.g. why do you bother to send so many emails about spreadsheets? So we are certain that we're all working off th e latest version. Can help to point to a solution.
    - *Rule of thumb*: You're shooting blind until you understand their goals.
+ "What are the implications of that?"
    - Good question. Some problems have big, costly implications. Others exist but don’t actually matter. You need to find out which is which. It also gives you a good pricing signal.
    - i.e. is it a real hair on fire problem?
    - *Rule of thumb*:  Some problems don’t actually matter.
+ "Talk me through the last time that happened." / "Talk me through your workflow."
    - Good question. Whenever possible, you want to be shown, not told by your customers. Learn through their actions instead of their opinions.
    - If you a burger point, it's pointless to ask customers if they prefer cheeseburgers or hamburgers because you can just watch what they buy - you would have to talk to them though if you wanted to understand why they prefer one over the other.
    - Being walked through their full workflow answers many questions in one fell swoop:
        - How do they spend their days, what tools do they use, and who do they talk to? 
        - What are the constraints of their day and life?
        - How does your product fit into that day?
        - Which other tools, products, software, and tasks does your product need to integrate with?
    - *Rule of thumb*: Watching someone do a task will show you where the problems and inefficiencies really are, not where the customer thinks they are.
+ "What else have you tried?"
    -
    - *Let's fix it*.
    - *Rule of thumb*: 
+ "Would you pay X for a product which did Y?"
    -
    - *Let's fix it*.
    - *Rule of thumb*: 
+ "How are you dealing with it now?"
    -
    - *Let's fix it*.
    - *Rule of thumb*: 
+ "Where does the money come from?"
    -
    - *Let's fix it*.
    - *Rule of thumb*: 
+ "Who else should I talk to?"
    -
    - *Let's fix it*.
    - *Rule of thumb*: 
+ "Is there anything else I should have asked?"
    -
    - *Let's fix it*.
    - *Rule of thumb*: 

## Chapter 2: Avoiding bad data

## Chapter 3: Asking important questions

## Chapter 4: Keeping it casual

## Chapter 5: Commitment and advancement

## Chapter 6: Finding conversations

## Chapter 7: Choosing your customers

## Chapter 8: Running the process

## Chapter 9: Conclusion and cheatsheet