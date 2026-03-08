---
title: "Change Nameserver on Ubuntu"
date: 2025-07-16T00:38:20+02:00
lastmodified: 2025-07-16T00:38:20+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "How to change Nameserver on Ubuntu"
categories:
- dns
tags:
- dns
- nameserver
- ubuntu
keywords:
- dns
---
There are cases where you may want to change your local nameservers to use a popular service provider like Google. I wrote an episode that details a situation where this is required titled: [Why do things never work out as seen in tutorials and guides](https://ibrathesheriff.com/episodes/why-do-things-never-materialise-like-tutorials-or-guides/).

## Changing your Nameserver
By default the Nameserver is 127.0.0.1 in the `resolv.conf` file. To change it is very simple, open `/etc/resolv.conf` and change the record to:
```text
nameserver 8.8.8.8
```

## Cloudflare
If you would like to use Cloudflare instead open `/etc/resolv.conf` and enter:
```text
nameserver 1.1.1.1
```