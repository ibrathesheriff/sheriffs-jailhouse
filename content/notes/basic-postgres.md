---
title: "Basic Postgres Commands"
date: 2026-02-24T10:30:05+02:00
lastmodified: 2026-02-24T10:30:05+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "Just a cheatsheet created to keep some basic Postgres commands"
categories:
- postgress
- databases
tags:
- postgress
- databases
keywords:
- ostgress
---

## Switch to the postgres Linux user account
```shell
sudo -i -u postgres
```
where `postgres` can be the name for any Linux user.

Alternatively, run the psql command directly from your regular account:
```shell
sudo -u postgres psql
```

### Create a new user/role (e.g. "ibrathesheriff") with a password
```shell
CREATE ROLE ibrathesheriff WITH LOGIN PASSWORD 'your_strong_password';
```

To grant the user the ability to create databases:
```shell
CREATE ROLE ibrathesheriff WITH LOGIN PASSWORD 'your_strong_password' CREATEDB;
```

Create a new database (e.g., "ibrathesheriffdb") and assign ownership:
```shell
CREATE DATABASE ibrathesheriffdb OWNER ibrathesheriff;
```

Grant all privileges on the new database to the new user:
```shell
GRANT ALL PRIVILEGES ON DATABASE ibrathesheriffdb TO ibrathesheriffdb;
```


## Access the PostgreSQL prompt (psql)
```shell
psql
```

### List databases from PostgreSQL prompt
```shell
\l
```

### Connect to a database
```shell
\c <database-name>
```

For example,
```shell
\c ibrathesheriffdb
```

### View the tables of a database
```shell
\dt
```

### View the column properties of a table
```shell
\d <table-name>
```

### To quit the PostgreSQL prompt
```shell
\q
```

## Issues

### 
I was trying to run a drizzle migration script and ran into password authentication issues. So to test manually I ran the following command: 
```shell
psql -U postgres -h localhost -d nervebird
```

And the following error occurred:
```shell
psql: error: connection to server at "localhost" (127.0.0.1), port 5432 failed: FATAL:  password authentication failed for user "postgres"
connection to server at "localhost" (127.0.0.1), port 5432 failed: FATAL:  password authentication failed for user "postgres"
```

I ran the following command to open the PostgreSQL prompt:
```shell
sudo -u postgres psql
```

Then to change the password:
```shell
ALTER USER postgres WITH PASSWORD 'your_strong_password;
```
