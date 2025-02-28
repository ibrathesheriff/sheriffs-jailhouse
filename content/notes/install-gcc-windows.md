---
title: "Install gcc Windows"
date: 2025-02-28T14:48:45+02:00
lastmodified: 2025-02-28T14:48:45+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "This is a note on how to install gcc to compile C programs in Windows"
categories:
- install
tags:
- windows
- gcc
- c
keywords:
- gcc
---
Setup gcc on Windows:
```shell
choco install mingw
```

Then execute `refreshenv`, after the installation process completes, close and reopen the Command Prompt or run the following command to load the changes made to the PATH environment variable.

Then to test create `hello.c`

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