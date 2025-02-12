---
title: "They Say Computer Science Is About Software"
date: 2025-02-09T14:57:17+02:00
draft: false
author: ibrathesheriff
description: "This episode illustrates why people think Computer Science folks can fix hardware issues."
categories:
- hardware
tags:
- breaking-computers
- hardware-fix
keywords:
- hardware-fix
---
As soon as you sign up for a Computer Science degree there are two common requests from non-programmers:
+ Hey, I hear you study CS, could you code a social media app for Cats that want to meet Dogs for me?
+ Hey, I hear you study CS, so you know computers right? Could you please fix my printer for me?

![Printer meme comic](/img/episodes/memes/fix-my-printer-meme-1.png)

The first request is great if you feel the idea is the next billion dollar startup but the second request tends to be frustrating at times. It's frustrating because as Programmers our work relates to software not hardware. So these requests feel like asking a Podiatrist (foot Doctor) to operate on your brain. Sure they are a Doctor but where's the direct relation?

Unfortunately (or fortunately, I guess it depends), Programmers tend to be techies so we tend to like learning about how Computers work to write more performant software, or we tend to spend our spare time building gaming PCs so I understand where non-programmers would get the idea that we can fix any hardware issue (printers included). There's moments where that "I don't do hardware" statement is proven false.

![Will Smith printer meme](/img/episodes/memes/fix-my-printer-meme-2.png)

I found myself in that situation recently when I had to fix a minor hardware issue.

## How did I get there?
Recently, I decided to play a game of rapid fire entry of `sudo` commands into my bash. I was trying to fix an OS dependency issue related to Python 3.12. The next morning I switched on my HP Pavillion laptop and realised I had corrupted my Ubuntu Desktop. So yeah, kids never copy-and-paste random Stackoverflow suggestions that involve `sudo`.

While I hatched a brilliant plan to fix the OS issue on my laptop I decided to setup my Optiplex 7010 Dell desktop to use in the meantime for work. Unfortunately, when I switched it on it was flashing orange. Initially, I thought there was an issue with my monitor connection but after a few minutes I started to fear for the worst - a hardware issue!

## How did I fix it? Skycuttter saves the day...
So I gave it a Google and ended up on the well titled Dell Community conversation: [Optiplex 7010 Flashing orange power button](https://www.dell.com/community/en/conversations/desktops-general-locked-topics/optiplex-7010-flashing-orange-power-button/647f30e6f4ccf8a8de6ece1e). There I found a response from the person who saved the day **Skycuttter**. They had experienced the very same issue and said it was a RAM placement issue so:
1. Turn off the computer.
2. Unplug the power & remove the computer case.
3. The Dell Optiplex 7010 has four memory slots, remove the memory, and switch slots.
4. Replace computer case and then reattach power plug.
5. Start computer!

### 2. Unplug the power & remove the computer case.
![Optiplex 7010 Dell with the case open](/img/episodes/breaking-computers/dell-case-opened.png)

### Looking for the memory slots
![Optiplex 7010 Dell memory slots](/img/episodes/breaking-computers/memory-slots.png)

### 3. The Dell Optiplex 7010 has four memory slots, remove the memory, and switch slots.
So this is the moment I totally made my warranty void. Oops... I put the evidence on the web as well, just wow!

![Fixing the memory slot placement](/img/episodes/breaking-computers/void-the-warranty.png)

## So next time: reinforcing the misconception
So next time someone comes to me saying their Dell desktop power button is flashing orange I will probably be able to fix it and unfortunately reinforce the misconception that Computer Science is hardware related as well.