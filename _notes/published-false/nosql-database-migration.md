---
title: Changing or Migrating the Schema for NoSQL Databases
weight: 400
tags: software
published: false
---

If you don't want to hear me chit-chat about database migrations, skip ahead to the tutorial: [How to iteratively version and migrate your NoSQL table in JavaScript]()

A few facts:
- I use statically typed languages likes TypeScript and Java
- I'm primarily used to using SQL databases in production in the past
- I am currently on a project with an NoSQL database, accessed via TypeScript

So I find myself in the position where I am being [[Agile]], iteratively adding and changing features. I'd like the User object saved in my NoSQL database (in my case, AWS DynamoDB) to have a very different new structure.

Not just adding new fields. Restructuring and refactoring as I realize a new, better way to handle my logic.

DynamoDB (and most NoSQL databases), from what I can tell, don't have an ecosystem of database migration tools surrounding them. I'm talking about common SQL migration tools, like [flyway](https://flywaydb.org/) for Java or [db-migrate](https://github.com/db-migrate/node-db-migrate) for Node. 

This is the story of how I approached schema change migrations for the data in my DynamoDB NoSQL database.

## What is a database migration, anyways?

Traditionally, a database migration in the SQL usage of the term is applying a transformation function to your entire database. It might add/delete a table, add/delete a column, change a table/column name, change primary keys, or anything else. 

Anytime you want to change your database structure, you write a migration file that describes the SQL transforms. A tool like flyway or db-migrate applies those migrations. It's nice to use tools like these because they help support you with:
- knowing which migrations have been run and which need to be run
- what to do when a migration fails

And finally, it's worth noting that a SQL database migration is **atomic**.  That is, it performs the migration for the whole database, and if a piece of it fails, the whole migration fails.

## What does it even mean to migrate a NoSQL table?

Strictly speaking, it means nothing. Despite using TypeScript and pretending like I can define the structure of the JSON object in my DynamoDB table, the database will accept any object I throw at it, and is therefore not strictly schema'd. There is no schema that defines my table, only my representation of a schema.

However, as an application developer, I do need to expect objects to be retrieved from the database in a specific structure. If they don't match the expected structure, my code won't work. So we write tests that we're putting things in and taking things out in the structurally expected way.

But what if I want to change that structure? There's all this data hanging out in documents in my table, and they're all structured in the old version. Their properties have the wrong names, or they're missing fields, or anything else. 

When I talk about migrating my NoSQL table, I mean dealing with updating those existing documents when my JSON schema changes in the application.

## Option 1 - SQL-inspired all-in migration

We could try to replicate the process of SQL migrations. This would look like:

1. Write a function that transforms the document to a new version
2. Create a new database table
3. Write some function (like a lambda) that runs across each record in your table and applies the transformer function and saves it in the new table
4. When it's done, change your code to point to the new table
5. Delete the old table

I did not like this option because:
- It's a lot of work if you're migrating frequently, which I probably will be as we do active beta development
- It's very manual. I have to change the table my code is pointing to after every migration

Okay, so what else could we do?

## Option 2 - Iterative migrations when reading