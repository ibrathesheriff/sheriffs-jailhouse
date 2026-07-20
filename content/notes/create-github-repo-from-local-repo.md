---
title: "Create A GitHub Repository From Local Repository"
date: 2026-07-20T13:42:20+02:00
lastmodified: 2026-07-20T13:42:20+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "Just a quick reference to use when creating a GitHub repository from a local Git repository on your machine."
categories:
- git
tags:
- git
- github
- local-git
keywords:
- git
---
So you have turned a folder into a Git repository on your machine. How do you get this local repository onto GitHub?

## Step 0: Turn your folder into a Git repository (if you haven't already)
Navigate to your project folder,
```shell
cd /path/to/your/project
```

Turn the folder into a Git repository,
```shell
git init -b main
```

Stage all your project files for tracking,
```shell
git add .
```

Now save your files with a first commit message,
```shell
git commit -m "Initial commit"
```

## Step 1: Create the remote GitHub repository
Create an empty repository on GitHub.

Add the repository name and description but leave it empty. **DO NOT** add a `README.md`, `.gitignore`, or `LICENSE`. It must be an empty repository!

![Empty GitHub Repo](/img/notes/learning/git/create-github-repo-from-local-repo.png)


## Step 2: Link your local repository to your remote GitHub repository
Link your local repository to your remote GitHub repository
```shell
git remote add origin <GITHUB_LINK>.git
```

Push your code to GitHub,
```shell
git push -u origin main
```

Easy!

*In fact, these steps are detailed on your empty GitHub repo!*
