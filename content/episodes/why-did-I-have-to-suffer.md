---
title: "Why Did I Have to Suffer"
date: 2026-07-20T18:04:04+02:00
draft: true
author: ibrathesheriff
description: "Unnecessary struggles when configuring font files."
categories:
- rontend-tears
- vuejs
tags:
- frontend-tears
- vuejs
- fonts
keywords:
- rontend-tears
---
Yoh! Today I was struggling for some unknown reason when configuring external font files. I was migrating frontend code from a [Flask](https://flask.palletsprojects.com/en/stable/) project that was using Jinja templating to [Vue.js](https://vuejs.org/).

## The Task
The task was very simple, get this code in the file `htd-scss/globals/_fonts.scss` to work:
```css
@font-face {
    font-family: Hack;
    src: url('../htd-fonts/Hack-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: Hack;
    src: url('../htd-fonts/Hack-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: Hack;
    src: url('../htd-fonts/Hack-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
}

@font-face {
    font-family: Hack;
    src: url('../htd-fonts/Hack-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
}

@font-face {
    font-family: Sephora;
    src: url('../htd-fonts/Sephora.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: Sephora;
    src: url('../htd-fonts/Sephora-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: Sephora;
    src: url('../htd-fonts/Sephora-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
}

:root {
    --main-font: Hack, 'Courier New', monospace;
    --hacker-bytes-font: Sephora, Hack, 'Courier New', monospace;
}
```
I didn't even struggle getting this to work on Flask but yoh! the Vite pipeline in the new Vue.js project was fighting me.

## AI got this
