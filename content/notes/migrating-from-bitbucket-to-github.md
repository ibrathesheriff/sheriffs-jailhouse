---
title: "Migrating From BitBucket to Github"
date: 2025-07-06T20:24:40+02:00
lastmodified: 2025-07-06T20:24:40+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "Moving a repository from BitBucket to GitHub"
categories:
- git
tags:
- bitbucket
- github
- migrations
- software-revision
keywords:
- git
---
I was going to open with *"Ready to kick the Bucket and join the Hub?"* But something about it didn't quite sound right. So instead I will just say, ready to ditch BitBucket and move your repository to GitHub? If so, this is the note for you!

## Step 0: Create GitHub repository
Create a new empty repository on GitHub i.e. it should not contain a `README.md`, `gitignore` or LICENSE. It **MUST** be empty.

You can use the same name as your BitBucket repository's name.

## Step 1: Clone your BitBucket repository
```shell
git clone git@bitbucket.org:username/old-repo.git
```

## Step 2: Change directory to the repository
```shell
cd old-repo
```

## Step 3: Renaming remote
```shell
git remote rename origin bitbucket
```

## Step 4: Link repository to GitHub repository
Using SSH:
```shell
git remote add origin git@github.com:username/new-repo.git
```

Using HTTPS:
```shell
git remote add origin https://github.com/username/new-repo.git
```

I found using the SSH approach ideal.

## Step 5: Push to GitHub
```shell
git push origin master
```
If this step is successful you should now see your BitBucket repository contents on GitHub.

## Step 6: Remove BitBucket link 
```shell
git remote rm bitbucket
```

Done! Bye-bye BitBucket...
