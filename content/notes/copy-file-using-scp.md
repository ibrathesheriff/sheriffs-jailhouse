---
title: "Copy File Using Scp"
date: 2026-07-23T16:45:12+02:00
lastmodified: 2026-07-23T16:45:12+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "Using OpenSSH secure file copy"
categories:
- linux
- ssh
tags:
- linux
- ssh
- scp
keywords:
- linux
---
So you want to use ssh to copy a file from your local machine to remote?

Easy:
```
scp <local-file-to-copy> <USER:IP_ADDRRESS:/user>
```

For example, I was copying a SQL dump file so I ran:
```shell
scp usage-stats-21-07-2026.sql root:192.168.1.1
```
