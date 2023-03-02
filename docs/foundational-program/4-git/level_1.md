---
sidebar_position: 1
---

# Level 1 

Prerequisite: 
* Computer setup
* GitHub Account
* Knowledge of basic commands on the command line

## Introduction
---

### What is git?

Git is a distributed version control system that allows developers to track changes in their codebase, collaborate with others, and easily revert to previous versions.

### What is a git repository?

A Git repository (a.k.a a **git repo** or just **repo**) is a directory where a git project's files and version history are stored.

### What is GitHub?

:::caution
git ≠ GitHub
:::
GitHub is a web-based platform that provides hosting for git repositories and adds collaboration and social features on top of Git.

### Why use git?

It is a fundamental and foundational tool that is a requirement if you want to work with code, collaborate on code with others, have the ability to revert complex changes, and be part of the coding community.

### Is git difficult?

I would say
* Not easy
* Not intuitive

However, it is reliable, powerful, and the learning curve is worth it.

## Basic git

`git` command: The basic subcommands

```shell-session
user@host:~/repos$ git
These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   // highlight-next-line
   clone     Clone a repository into a new directory
   // highlight-next-line
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
// highlight-next-line
   add       Add file contents to the index

examine the history and state (see also: git help revisions)
   // highlight-next-line
   log       Show commit logs
   // highlight-next-line
   status    Show the working tree status

grow, mark and tweak your common history
   // highlight-next-line
   commit    Record changes to the repository

collaborate (see also: git help workflows)
   // highlight-next-line
   pull      Fetch from and integrate with another repository or a local branch
   // highlight-next-line
   push      Update remote refs along with associated objects
   // highlight-next-line
   remote               Manage set of tracked repositories
```

### Local repository

```shell-session
user@host:~/repos$ mkdir ag-git-tutorial
user@host:~/repos$ cd ag-git-tutorial/
user@host:~/repos/ag-git-tutorial$ git init
Initialized empty Git repository in /home/agontcharov/repos/ag-git-tutorial/.git/
user@host:~/repos/ag-git-tutorial$ echo "some text" > my_first_file.txt
user@host:~/repos/ag-git-tutorial$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        my_first_file.txt

nothing added to commit but untracked files present (use "git add" to track)
user@host:~/repos/ag-git-tutorial$ git add my_first_file.txt
user@host:~/repos/ag-git-tutorial$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   my_first_file.txt

user@host:~/repos/ag-git-tutorial$ git commit -m "my first commit"
[master (root-commit) 02852f4] my first commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 my_first_file.txt
user@host:~/repos/ag-git-tutorial$ git log --oneline
02852f4 (HEAD -> master) my first commit
user@host:~/repos/ag-git-tutorial$
```


### Remote repository

1. Go to your github profile and create a new repository called ag-git-tutorial, and you should see this:

### …or create a new repository on the command line

```bash
echo "# ag-git-tutorial" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/<your-username>/ag-git-tutorial.git
git push -u origin main
```
### …or push an existing repository from the command line
```bash
git remote add origin https://github.com/<your-username>/ag-git-tutorial.git
git branch -M main
git push -u origin main
```

In our case, we have created a local repository, so we will follow the instructions in step 2, however, our branch was called `master`, so for this tutorial, let's use `master`. 

Modified instructions

```shell-session
user@host:~/repos/ag-git-tutorial$ git remote add origin https://github.com/<your-username>/ag-git-tutorial.git
user@host:~/repos/ag-git-tutorial$ git push --set-upstream origin master
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 334 bytes | 334.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/AleksandrGontcharov/ag-git-tutorial.git
 * [new branch]      master -> master
branch 'master' set up to track 'origin/master'.
```


### Conclusion

This tutorial showed you how to use git, but didn't show you how git works?

Questions you should have:

1. What is origin?
2. What is a remote repository?
3. What is a commit?
4. What does git push do?
5. What about git clone?
6. What does git add do?
7. Why do we have to add before we commit? Why not just commit?
8. Do I have to use the command line? What about GUI tools?
9. What does git log do?

All of these will be answered in Level 2.