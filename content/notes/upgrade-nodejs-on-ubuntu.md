---
title: "Upgrade Node.js on Ubuntu"
date: 2025-09-26T19:47:59+02:00
lastmodified: 2025-09-26T19:47:59+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "This is a quick note on how to upgrade your version of Node.js on Ubuntu."
categories:
- installation
- upgrading
tags:
- installation
- upgrading
- ubuntu
- node
- js
keywords:
- node
---
This is a note to self on how to upgrade Node.js on Ubuntu.

## 'n'
The 'n' module provides a simple way to manage Node.js versions: Install the 'n' module globally using the following command:
```shell
sudo npm install -g n
```

## Upgrade to the latest stable version
```shell
sudo n stable
```

## Upgrade to the latest version
To upgrade the latest version of Node.js use the following command:
```shell
sudo n latest
```

Then verify the installation using:
```shell
node -v
```