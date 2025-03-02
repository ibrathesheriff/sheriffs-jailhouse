---
title: "Install gcc on Windows"
date: 2025-02-28T14:48:45+02:00
lastmodified: 2025-02-28T14:48:45+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "This is a note on how to install gcc on Windows to compile C programs."
categories:
- installation
tags:
- windows
- gcc
- c
keywords:
- gcc
---
If I ever find myself on Windows ever again (hopefully not), I just want to note that I found these to be the best steps to follow to install [gcc](https://gcc.gnu.org/) on Windows.

## Step 1: Install Chocolatey
On Ubuntu I love to hit the command-line to install software, Chocolatey brings that experience to Windows. It is a command-line package manager and installer for software on Windows. To install it just follow the instructions on the official [Chocolatey website](https://chocolatey.org/install).

## Step 1: Install gcc
Open Command Prompt as an Administrator and execute the following:
```shell
choco install mingw
```
  
Then execute `refreshenv`, after the installation process completes to load the changes made to the PATH environment variable. Then close and reopen the Command Prompt.

Then to test create `hello.c`:
```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
}
```

Then to run the compiled program:

```shell
hello.exe
```

or

```shell
.\test.exe
```

## To check your gcc version
If you ever need to check your gcc version then execute the following from a Command Prompt:
```shell
gcc -v
```
