---
title: "How to Install Java 21 (Ubuntu)"
date: 2025-02-01T19:47:50+02:00
lastmodified: 2025-02-01T19:47:50+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "This is a note contains instructions on how to install Java 21 and switch between different versions of Java."
categories:
- install
tags:
- java
keywords:
- java
---
This is a note to self on how to install Java 21 on Ubuntu.

## First let's update!
```shell
sudo apt update -y && sudo apt upgrade -y
```

## Install Java Development Kit 21
```shell
sudo apt install openjdk-21-jdk -y
```

## Switch between Java versions
I have multiple versions of Java on my computer (8, 11 and 17), so to change the active version execute the following:
```shell
sudo update-alternatives --config java
```

Then follow the program instructions to switch to the required version of Java.