---
title: "But Buildx Isnt Installed"
date: 2026-07-23T16:23:46+02:00
lastmodified: 2026-07-23T16:23:46+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "Resolving WARN[0000] Docker Compose is configured to build using Bake, but buildx isn't installed."
categories:
- web-development
- hacking
tags:
- software
- html
keywords:
- jabberwocky
---
I ran this command to deploy the hackthdegree API:
```shell
docker compose up --build -d
```

But I got this warning:
```shell
WARN[0000] Docker Compose is configured to build using Bake, but buildx isn't installed
```

## Resolving the warning
Just install the plugin using:
```shell
sudo apt install docker-buildx-plugin
```

## If it doesn't work
When I ran the command above I got:
```shell
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
E: Unable to locate package docker-buildx-plugin
```

So to resolve this I ran:
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

Then,
```shell
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list
```

Then,
```shell
sudo apt update
```

Then,
```shell
sudo apt install docker-buildx-plugin
```

Sorted!
