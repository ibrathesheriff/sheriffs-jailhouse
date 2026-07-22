---
title: "Mysqldump Couldn't Execute"
date: 2026-07-21T14:20:20+02:00
lastmodified: 2026-07-21T14:20:20+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "A quick note on how I solved an issue related to COLUMN_STATISTICS when completing a MySQL data dump."
categories:
- databases
- mysql
tags:
- databases
- mysql
- database-backups
keywords:
- mysql
---
I was preparing a database host migration on [Pythonanywhere](https://help.pythonanywhere.com/pages/MySQLBackupRestore/). The help article stated that all I had to do was execute:
```shell
mysqldump -u yourusername -h yourusername.mysql.pythonanywhere-services.com --set-gtid-purged=OFF --no-tablespaces 'yourusername$dbname'  > db-backup.sql
```

So I did, and the following error occurred:
```shell
mysqldump: Couldn't execute 'SELECT COLUMN_NAME,                       JSON_EXTRACT(HISTOGRAM, '$."number-of-buckets-specified"')                FROM information_schema.COLUMN_STATISTICS                WHERE S
CHEMA_NAME = 'uthanzi$hackthedegree' AND TABLE_NAME = 'code_reviews';': Unknown table 'COLUMN_STATISTICS' in information_schema (1109)
```

There was an issue with column statistics so to leave them out I used this instead:
```shell
mysqldump -u yourusername -h yourusername.mysql.pythonanywhere-services.com --no-tablespaces --single-transaction --column-statistics=0 -p 'yourusername$dbname' > db-backup.sql
```
My database was on a 5.7 MySQL server so it didn't have the `COLUMN_STATISTICS` table. So by adding `--column-statistics=0` the query is skipped entirely.

