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

### Good question / bad question
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
    - Good question.
        - What are they using now? How much does it cost and what do they love and hate about it? 
        - How much would those fixes be worth and how big of a pain would it be for them to switch to a new solution?
        - If someone has that would pay if a solution existed. Ask when is the last time they had the problem? How did they resolve it? Have they tried to search for a solution (e.g. on Google) - if not then they will most likely not pay for your solution. It's not a hair on fire problem. In the abstract, they like the idea of a solution, but in reality they will not pay.
        - It's easy to get someone emotional about a problem if you lead them there.
    - "Don’t you hate when your shoelaces come untied while you’re carrying groceries?" "Yeah, that’s the worst!"" And then I go off and design my special never-come-untied laces without realising that if you actually cared, you would already be using a double-knot. 
    - *Rule of thumb*: If they haven't looked for ways of solving it already, they're not going to look for (or buy) yours.
+ "Would you pay X for a product which did Y?"
    - Bad question. Adding a number doesn't help - like other leading questions, people will be overly optimistic about what they would do and want to make you happy. It's too much about your idea, not their life.
    - *Let's fix it*. As always, ask about what they currently do now, not what they believe they might do in the future. 
    - Common wisdom is that you price your product in terms of value to the customer rather than cost to you.
    - Another way to fix it, if you’re far enough along, is to literally ask for money. If you have the deposit or pre-order in hand, you know they were telling the truth.
+ "How are you dealing with it now?"
    - Good question. Beyond workflow information, this gives you a price anchor. Are they spend $100 per month for a duct-tape workaround or are they using an agency charging $120 000 per year?
    - By asking what they currently spend to solve the problem, you discover their price anchor before you ever mention a number. It stops you from accidentally pitching a budget tier to a customer who is ready and willing to pay enterprise prices.
    - *Rule of thumb*: While it's rare for someone to tell you precisely what they'll pay you, they’ll often show you what it’s worth to them.
+ "Where does the money come from?"
    - Good question. This isn't something you would necessarily ask a consumer (though you might), but in a B2B context it’s a must-ask.
        - Who's budget will it come out from?
        - Who in the company holds the power to torpedo the deal?
        - Often you don't speak to the budget owner. Your future pitches will hit unseen snags unless you learn who else matters and what they care about.
        - This knowledge of their purchasing process will eventually turn into a repeatable sales roadmap.
+ "Who else should I talk to?"
    - Good question. Lining up the first few conversations can be challenging, but if you’re onto something interesting and treating people well, your leads will quickly multiply via intros.
    - If someone doesn’t want to make intros, that’s cool too.
        - You’ve learned that you’re either screwing up the meeting (probably by being too formal, pitchy, or clingy),
        - or,  they don’t actually care about the problem you’re solving.
        - Take anything nice they say with an extra grain of salt.
+ "Is there anything else I should have asked?"
    - Good question.
        - People will answer you questions, but will sit on key information if not prompted.
        - Asking this question gives them a chance to politely "fix" your line of questioning. And they will!
        - You can discard later when you get better at asking good questions and as you get to know the industry.
    - *Rule of thumb*: People want to help you, but will rarely do so unless you give them an excuse to do so.

### Using the mom test
You'll notice that none of the good questions were about asking what you should build.  One of the recurring "criticisms" about talking to customers is that you're abdicating your creative vision and building your product by committee.
> Given that people don’t know what they want, that wouldn't be a terribly effective approach. Deciding what to build is your job

The questions to ask are about your customers' lives:
+ their problems
+ cares
+ constraints
+ goals
You humbly and honestly gather as much information about them as you can and then take your own visionary leap to a solution. Once you’ve taken the leap, you confirm that it’s correct (and refine it) through Commitment & Advancement.
> It boils down to this: you aren’t allowed to tell them what their problem is, and in return, they aren’t allowed to tell you what to build. They own the problem, you own the solution.

## Chapter 2: Avoiding bad data
Bad data can lead to false negatives (thinking the idea is dead when it’s not), or more dangerously, false positives (convincing yourself you're right when you’re not).

There are three types of bad data:
1. Compliments
2. Fluff (generics, hypotheticals, and the future)
3. Ideas

Even when using The Mom Test these things happen. Once you start to notice, it’s easy to get back on track
by deflecting compliments, anchoring fluff, and digging beneath ideas.

### Deflect compliments
You want facts and commitments, not compliments.
> The best way to escape the misinformation of compliments is to avoid them completely by not mentioning your idea. If they happen anyway, you need to deflect the compliment and get on with the business of gathering facts and commitments. 

**A good conversation:**

You: "...And that’s it. It’s like X for Y, but better because of Z."

Then: "That’s really cool. I love it."

They just said a compliment - ignore it and get back to digging for the truth e.g.

You: "Whoops — really sorry about that — I got excited and started pitching. Listen: you guys seem to be doing a good job in this space — do you mind if I ask how you’re dealing with this stuff at the moment?"

Ignore compliments (which can be easier said than done) and focus on finding out the truth - don't register them as positive data.

**Symptoms (in the meeting):**
+ "Thanks!"
+ "I'm glad you like it."

**Symptoms (back at the office):**
+ "That meeting went really well."
+ "We're getting a lot of positive feedback."
+ "Everybody I've talked to loves the idea."

All of these are warning signs. If you catch yourself or your teammates saying something like this, try to get specific.
+ Why did that person like the idea?
+ How much money would it save him?
+ How would it fit into his life?
+ What else has he tried which failed to solve his problem?

If you don’t know, then you've got a compliment instead of real data.

*Rule of thumb*: Compliments are the fool's gold of customer learning: shiny, distracting, and entirely worthless.

### Anchor fluff
Fluff comes in 3 cuddly shapes:
+ Generic claims ("I usually", "I always", "I never") 
+ Future-tense promises ("I would", "I will")
+ Hypothetical maybes ("I might", "I could")

If such phrases are used they are giving generic and hypothetical fluiff. Follow The Mom Test and bring them back to specifics in the past. Ask when it last happened, for them to talk you through it, how they solved it, and what else they tried.
> The world’s most deadly fluff is: "I would definitely buy that."

It sounds concrete and as a Founder you want to believe it. But folks are wildly optimistic about what they would do in the future. They're always more positive, excited, and willing to pay in the imagined future than they are once it arrives.

Fluff-inducing questions include:
+ "Do you ever..."
+ "Would you ever..."
+ "What do you usually..."
+ "Do you think you..."
+ "Might you..."
+ "Could you see yourself..."

You don't need to avoid these questions 100% of the time. They aren't toxic but their responses are useless.
> While using generics, people describe themselves as who they want to be, not who they actually are. You need to get specific to bring out the edge cases.

Some people are complainers not customers.

### Dig beneath ideas
Sometimes people will "flip" to your side of the table and start listing ideas, possibilities and feature requests.
> Write them down, but don’t rush to add them to your todo list. Startups are about focusing and executing on a single, scalable idea rather than jumping on every good one which crosses your desk.

Don't just write their idea or feature request on your todo list - instead dig into the motivations behind the request.

*This is hilarious:*

They started calling every Friday asking me to email over a CSV (data file) of the week’s stats, so we added CSV export to the dashboard. Later, they asked for the report as a PDF instead of an CSV, so we obediently built PDF export. That took longer.

Salt was rubbed in the wound when, weeks later, they were still calling me every Friday and asking me to export and send over the same stupid analytics report. And every week, I would do so while politely explaining that, you know, we built this awesome self-serve dashboard so they could have their data whenever they wanted. And then, the next Friday, they'd call me.

*This would have broken me hahah:*

So, I finally—and inadvertently—did the smart thing when I asked, "Why do you want this feature? What do branded reports get you that unbranded ones don’t? It's the same data, right?"" She replied, "Oh yeah, of course. I mean, nobody even reads these. Our clients just like to get something emailed to them at the end of every week and we think they’d be happier if it was a bit fancier, you know?"" I knew exactly.
> When you hear a request, it's your job to understand the motivations which led to it. You do that by digging around the question to find the root cause.

+ Why do they bother doing it this way?
+ Why do they want the feature?
+ How are they currently coping without the feature? Dig!

**Questions to dig into feature requests:**
+ "Why do you want that?"
+ "What would that let you do?"
+ "How are you coping without it?"
+ "Do you think we should push back the launch add that feature, or is it something we could add later?"
+ "How would that fit into your day?"

**Questions to dig into emotional signals:**
+ "Tell me more about that."
+ "That seems to really bug you — I bet there’s a story here."
+ "What makes it so awful?"
+ "Why haven't you been able to fix this already?"
+ "You seem pretty excited about that — it’s a big deal?"
+ "Why so happy?"
+ "Go on."

*Rule of thumb*: Ideas and feature requests should be understood, but not obeyed.

### Stop seeking approval
As we've seen, compliments are dangerous and sneaky.
> The main source of compliment-creation is seeking approval, either intentionally or inadvertently.

Doing it intentionally is fishing for compliments. You aren't looking for contradictory information. You’ve already made up your mind, but need someone's blessing take the leap.

**Symptoms of Fishing For Compliments:**
+ "I'm thinking of starting a business... so, do you think it will work?"
+ "I had an awesome idea for an app — do you like it?"

Accidental approval-seeking is what I call "The Pathos Problem." Happens when you expose your ego, people then want to protect you by saying nice things.

**Symptoms of The Pathos Problem:**
+ "So here’s that top-secret project I quit my job for... what do you think?"
+ "I can take it — be honest and tell me what you really think!"

To deal with The Pathos Problem, keep the conversation focused on the other person and ask about specific, concrete cases and examples. People rarely lie about specific stuff that's already happened, regardless of your ego. 

Keep your idea and your ego out of the conversation until you’re ready to ask for commitments.

*Rule of thumb*: If you’ve mentioned your idea, people will try to protect your feelings.

### Cut off pitches
Being pitchy is the dark side of the "seeking approval" coin. Instead of inviting compliments by being vulnerable, you’re demanding them by being annoying.

**Symptoms:**
+ "No no, I don’t think you get it..."
+ "Yes, but it also does this!"

If you slip into pitch mode, just apologise. You're excited about your idea. That's good!
> "Whoops—I just slipped into pitch mode. I’m really sorry about that—I get excited about these things. Can we jump back to what you were just saying? You were telling me that..."

*Rule of thumb*: Anyone will say your idea is great if you’re annoying enough about it.

### Talk less
You can't learn anything useful unless you’re willing to spend a few minutes shutting up (even if you have something really smart to say).

If you accidently or intentionally mention your idea, people may start commenting on it. They may mention things you already have solved or you may want to comment on something they say. Don't cut them off, or correct them, let them speak. You can tell them about your idea at the end.

*Rule of thumb*: The more you’re talking, the worse you’re doing.

## Chapter 3: Asking important questions
When applying The Mom Test:
+ Don't overcompensate and ask trivial questions.
+ In addition to ensuring that you aren’t asking trivialities, you also need to look for the world-rocking scary questions you're shrinking from.
+ The best way to find them is to run thought experiments.
    - Imagine that the company has failed and ask why that happened.
    - Then imagine it as a huge success and ask what had to be true to get there.
    - Find ways to learn about those critical pieces.

> You can tell it’s an important question when the answer to it could completely change (or disprove) your business. If you get an unexpected answer to a question and it doesn’t affect what you’re doing, it wasn't a terribly important question.

Every time you talk to someone, you should be asking a question which has the potential to completely destroy your currently imagined business.

*Rule of thumb*: You should be terrified of at least one of the questions you’re asking in every conversation.

### Love bad news
> One of the reasons we avoid important question is because asking them is scary. It can bring us the upsetting realisation that our favourite idea is fundamentally flawed. Or that the major client is never going to buy. Although it seems unfortunate, this we need to learn to love bad news.

Sinking your life savings into a cafe or tech startup is bad. On the other hand, if you have $50k and spend $5k to learn you're running down a dead end, that’s awesome. You can use the rest to find a viable path to your goal.

We go through the futile process of asking for opinions and fish for compliments because we crave approval.
> We want to believe that the support and sign-off of someone we respect means our venture will succeed. But really, that person’s opinion doesn’t matter. They have no idea if the business is going to work. Only the market knows.

> You're searching for the truth, not trying to be right.

Some of the most informative (and thus best) responses you can get are along the lines of,
+ "Umm, I’m not so sure about that"
+ "That's pretty neat"

Both are lukewarm responses which tell you they don't care. In this context, "best" means learning, not selling.

If they are engaged in the conversation ask some follow-up questions. Find out:
+ Is it not a hair on fire problem?
+ Are they fundamentally different from your ideal customer?
+ Do they not care about the specific implementation?
+ Or, maybe they have been over-pitched by other people.

*Rule of thumb*: There’s more reliable information in a "meh" than a "Wow!" You can’t build a business on a lukewarm response.

### Look before you zoom
Another way we miss the important questions is by instead spending our time on ultimately unimportant details. This can happen when we get stuck in the details before understanding the big picture.

Most people have lots of problems which they don’t actually care enough about to fix, but which they’ll happily tell you the details of if you ask them.
> If you focus the conversation too quickly on one problem area, you can think you’ve validated a "top" problem when you haven’t. You just led them there.

The premature zoom is a real problem because it leads to data which seems like validation, but is actually worthless. In other words, it’s a big source of false positives.

Caveat: We can immediately zoom in on the problem if we are 100% certain it's a mustsolve problem which people are ready to pay for.

Asking **"Does-this-problem-matter" questions**:
+ "How seriously do you take X"
+ "Do you make money from it?"
+ "Have you tried making more money from it?"
+ "How much time do you spend on it each week?"
+ "Do you have any major aspirations for your X?"
+ "Which tools and services do you use for it?"
+ "What are you already doing to improve this?"
+ "What are the 3 big things you’re trying to fix or improve right now?"

*Rule of thumb*: Start broad and don't zoom in until you’ve found a strong signal, both with your whole business and with every conversation.

## Look at the elephant
> Lastly, sometimes we comfort ourselves by asking questions which don’t actually de-risk the business or resolve those critical, big, scary, lurking questions. We ignore the elephant in the room.

Successful startups tend to depend on multiple failure points.
+ Is there a problem here?
+ Can they afford the solution?

Don't overlook the goals and constraints of your customers.

There are businesses where the risk is in your product, not in the market or the customer. The customer will pay if your product gets big enough.
+ Product risk — Can I build it? Can I grow it? Will they keep using it?
    - Video games are pure product risk. What sort of question could you ask to validate your game idea? "Do you like having fun?" Practically 100% of the risk is in the product and almost none is in the customer.
+ Market risk — Do they want it? Will they pay? Are there enough of them?

> The farmers responded along the lines of, "If you can build what you say you can build, I'll equip my whole herd." The problem is, he couldn't build it. The risk was in the product.

When dealing with a product that is heavy on product risk the conversations you have with customers are a starting point. You will have to start building product earlier and with less certainty than if you had pure market risk.

### Prepare your list of 3
Always pre-plan the 3 most important things you want to learn from any given type of person. Your 3 questions will be different for each type of person you’re talking to.

Don't feel obliged to repeat questions you already have reliable data on. Pick up where you left off and keep filling in the picture.

*Rule of thumb*: You always need a list of your 3 big questions.

## Chapter 4: Keeping it casual (page 65/134)

## Chapter 5: Commitment and advancement

## Chapter 6: Finding conversations

## Chapter 7: Choosing your customers

## Chapter 8: Running the process

## Chapter 9: Conclusion and cheatsheet

## Mentioned Books or Resources
+ [The Four Steps to the Epiphany](https://web.stanford.edu/group/e145/cgi-bin/winter/drupal/upload/handouts/Four_Steps.pdf) by Steve Blank
+ [The Startup Owner's Manual: The Step-By-Step Guide for Building a Great Company](https://www.wiley.com/en-us/shop/general-introductory-business-management/the-startup-owner's-manual-the-step-by-step-guide-for-building-a-great-company-p-9781119690689) by Steve Blank and Bob Dorf.