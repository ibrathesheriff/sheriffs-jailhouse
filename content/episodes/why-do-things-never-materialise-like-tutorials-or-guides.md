---
title: "Why do things never work out as seen in tutorials and guides"
date: 2025-02-11T18:18:02+02:00
draft: false
author: ibrathesheriff
description: "This is a episode about..."
categories:
- dns
tags:
- dns
- nameservers
keywords:
- dns
---
So I'm on [Cloudflare](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site/) following a guide on how to deploy a Hugo site and the steps are flowing:

✅ Install Hugo

✅ Create a new Hugo project

✅ Setup a theme

✅ Create a post

✅ Create a GitHub repository

✅ Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account

✅ Select **Compute (Workers)** > **Workers & Pages** > **Create** > **Pages** > **Connect to Git**.

✅ Select the new GitHub repository that you created and, in the Set up builds and deployments section, provide the following information:

| Configuration option | Value  |
|----------------------|--------|
| Production branch    | main   |
| Build command        | hugo   |
| Build directory      | public |

✅ Then check it out at [https://sheriffs-jailhouse.pages.dev/](https://sheriffs-jailhouse.pages.dev/)

*Super easy, barely an inconvenience.*

## One last step...
After checking out the [Cloudflare documentation](https://developers.cloudflare.com/pages/configuration/custom-domains/) on configuring a custom domain and watching a video by [Coder Coder](https://www.youtube.com/watch?v=MTc2CTYoszY), I start messing around with the [ibrathesheriff.com](https://ibrathesheriff.com/) DNS records to shift things from [Netlify](https://www.netlify.com/) to Cloudflare. 

I then moved my nameservers from [GoDaddy](https://godaddy.com/) to Cloudflare and added the required `CNAME` records.

Done!

*Super easy, barely an inconvenience.*

## It's not working :/
When I navigated to [https://ibrathesheriff.com/](https://ibrathesheriff.com/) in Chrome.

Instead of seeing

![Image of the landing page of ibrathesheriff.com](/img/episodes/wtf/ibrathesheriff-posts-page.png)

I kept seeing

![Image failing to load ibrathesheriff.com](/img/episodes/wtf/ibrathesheriff-not-displaying.png)

So I revisited the [Cloudflare documentation](https://developers.cloudflare.com/pages/configuration/custom-domains/) and completed some of the steps again. I even considered changing the `CNAME` records to `A` records.

Unfortunately, none of the tinkering was working so I decided to give it some time. I thought, *"Maybe, I need to wait a few hours"*?

## The next day: rough start, great finish
I had given the system time to propagate my changes so I revisited [ibrathesheriff.com](https://ibrathesheriff.com/) and unfortunately, nothing had changed. It was still failing to reach the site.

So I rolled my sleeves and hit Google like a maniac. I bumped into a Cloudflare community conversation titled: [Cloudflare Pages doesn’t work with custom domain (on cloudflare)](https://community.cloudflare.com/t/cloudflare-pages-doesnt-work-with-custom-domain-on-cloudflare/539980) and found the solution that saved the day (shout out to **services56**):

![Cloudflare Pages custom domain not working solution](/img/episodes/wtf/nameserver-cloudflare-custom-domain-solution.png)

So I implemented the solution by changing my nameserver record from on my PC from `127.0.0.1` to 8.8.8.8 (Google's DNS) so that my PC would fetch records from there rather instead of working from my cache as it was stuck in the past.

## Tutorials and Guides cannot account for all configurations, operating systems and environments
The reality is that tutorials and guides are setup with certain conditions in mind. For example,
+ The Reader is probably working in a Linux or Mac environment.
+ The Reader has the same settings and configuration values as me.
+ The Reader's system isn't lacking core dependencies.

There are many reasons why the instructions provided in a tutorial or guide may not work for you and unfortunately, it's just impossible for the writer to account for all the reasons. Especially considering that for the most part the instructions work out for 99% of Readers. I mean they worked out for [Coder Coder](https://www.youtube.com/watch?v=MTc2CTYoszY) right.

It's unfortunate, because it sometimes leaves you feeling like an idiot: *"I can't even follow instructions that a 5 year old would be able to"?* Though you have done dozens of deployments, it make you second guess your skills.

But I have found myself in these situations so often that I tend to laugh as soon as I complete the tutorial/guide and I don't get the expected output. And don't get me wrong it's frustrating, I mean I had a solid Netlify setup that I could have continued with. Netlify never showed me flames like this! Why did I break the golden rule:
> If it ain't broke, don't fix it

I can start to question all you life decisions in moments like this lol. But what gets me through is:
+ Software is not perfect, you have to expect hiccups from time to time.
+ Better sometimes requires a little more effort.
    - I shifted from Netlify because from research I found that Cloudflare's infrastructure was better suited to serve my site faster to people around the world.
    - I mean think VPS vs. some AWS service right. I love me a VPS but AWS has a lot more to offer but it takes a little more effort to get things setup correctly.
    - But that effort is worth it if you gain access to more products, features, power, or speed.
+ Sometimes you aren't being an idiot, you are just unlucky. I did all the steps correctly in this case, I just was not aware about my nameserver configuration situation on my PC. I mean when a deployment fails why would I ever consider that in the equation?