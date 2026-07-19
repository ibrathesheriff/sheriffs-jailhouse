---
title: "Self Hosting Judge0"
date: 2026-07-19T13:25:32+02:00
lastmodified: 2026-07-19T13:25:32+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "The steps I took to self-host judge0 on a Hetzner cloud instance."
categories:
- sandbox
- safely-run-code
tags:
- safely-run-code
- sandbox
- judge0
- hetzner
keywords:
- safely-run-code
---
This note details the steps I took to self-host [judge0](https://judge0.com/) on a Hetzner cloud instance.

I setup the cloud instance as follows:
+ Location: Helsinki as Falkenstein and Nuremberg had no cost optimised option available at the time. I wanted the CX33 option.
+ OS: Ubuntu 22.04 LTS as suggested by [judge0](https://github.com/judge0/judge0/blob/master/CHANGELOG.md#deployment-procedure) docs.
+ CPU: 4 vCPU
+ RAM: 8 GB
+ Disk: 80 GB SSD
+ Price: $8.99 per month.

## Step 0: Connect to the Server
```shell
ssh root@YOUR_SERVER_IP
```

## 1. Update Ubuntu and GRUB

### Update Ubuntu
```shell
sudo apt update
sudo apt upgrade -y
```

### Update GRUB
Open file `/etc/default/grub`
```shell
sudo nano /etc/default/grub
```

Then, add `systemd.unified_cgroup_hierarchy=0` in the value of `GRUB_CMDLINE_LINUX` variable.

Apply the changes: `sudo update-grub`

Restart your server: `sudo reboot`

Then to double check,
```shell
ssh root@YOUR_SERVER_IP
stat -fc %T /sys/fs/cgroup/
```
You should see see `tmpfs`.

## 2. Create a non-root user

```shell
adduser judge0
```

Add it to `sudo`:
```shell
usermod -aG sudo judge0
```

Copy your SSH key:
```shell
rsync --archive --chown=judge0:judge0 ~/.ssh /home/judge0
```

After creating the non-root user and copying your SSH key, you can safely close the current root SSH session.
```shell
exit
```

Now reconnect:

```shell
ssh judge0@YOUR_SERVER_IP
```

## 3. Install Docker
First, let's update:
```shell
sudo apt update
```

Now install Docker:
```shell
sudo apt install -y docker.io docker-compose-v2
```

Enable Docker:
```shell
sudo systemctl enable docker
sudo systemctl start docker
```

Allow your user to run Docker:
```shell
sudo usermod -aG docker $USER
```

Log out and back in.

Verify:
```shell
docker --version
docker compose version
```

### 4. Get Judge0

### Git route
If using the Git route check if you have Git:
```shell
git --version
```

If not then run,
```shell
sudo apt install git -y
```

### wget route (took this route)
This is the suggested approach according to the [judge0](https://github.com/judge0/judge0/blob/master/CHANGELOG.md#deployment-procedure) docs

First install `unzip`:
```shell
sudo apt install unzip
```

Then use `wget` to get the archive containing the judge0 source files:
```shell
wget https://github.com/judge0/judge0/releases/download/v1.13.1/judge0-v1.13.1.zip
```

Decompress the archive:
```shell
unzip judge0-v1.13.1.zip
```

## 5. Configure environment
I used the `wget` route so get my Judge0 CE v1.13.1 instance running.

### Configure the Redis Password
I generated a password using [random.org](https://www.random.org/passwords/?num=1&len=32&format=plain&rnd=new) and then opened the `judge0.conf` file.
```shell
cd judge0-v1.13.1
vim judge0.conf
```
Then I set `REDIS_PASSWORD=` to the generated password and saved the changes to the file.

### Configure the Postgress Password
Ensure you are in the `judge0-v1.13.1` directory
```shell
vim judge0.conf
```
Then I set `POSTGRES_PASSWORD` to the generated password and saved the changes to the file.

### Setup the Docker Jazz
I ran the following commands to complete the Docker setup:
```shell
docker-compose up -d db redis
sleep 10s
docker-compose up -d
sleep 5s
```

## So something went wrong...
When I navigated to `http://<IP ADDRESS OF YOUR SERVER>:2358/docs` I didn't get anything.

So I ran,
```shell
docker ps
```
To check my active containers and only saw to:
```text
CONTAINER ID   IMAGE           COMMAND                  CREATED              STATUS              PORTS      NAMES
42b232c3c8d6   postgres:16.2   "docker-entrypoint.s…"   About a minute ago   Up About a minute   5432/tcp   judge0-v1131-db-1
9b5edfee2eb7   redis:7.2.4     "docker-entrypoint.s…"   About a minute ago   Up About a minute   6379/tcp   judge0-v1131-redis-1
```
Even tried `docker ps -a` and got the same output.

This command `docker logs judge0-server` just produced an error so I ran:
```shell
docker compose down
docker compose up -d
```

And it worked!

![And it worked!](/img/notes/learning/cloud-service-providers/judge0-successfully-self-hosted-on-hetzner.png)