---
sidebar_position: 1
---

# Level 2

## Introduction
---

Unlike other pieces of software that don’t require your knowledge of how they work in order to use them, `git` really does work better if you learn it from the inside out.

:::caution
The commands don’t really make sense unless you understand what is going on under the hood
:::

Furthermore, if you look up any advanced or semi-advanced tutorial on the topic of `git`, they will often start using terms like DAGs, checksums, nodes, trees, commit objects.

We will not be doing that here. 

Let's start from the beginning

## Do Work, Add, Commit
---

Create empty directory and cd into it

```shell-session
user@host:~/repos$ mkdir ag-git-tutorial
user@host:~/repos$ cd ag-git-tutorial/
```
### 1. Initialize Repository

```bash
git init
```


* you have created a repository. Note that there is now `.git` directory.
	
<div style={{textAlign: 'center'}}>

![1.git_init.png (304×121)](/img/git_tutorial/1.git_init.png)

</div>

### 2. Do some work

```bash
echo "some text" > my_first_file.txt
git add my_first_file.txt
```


* `git add` writes to the repository in a thing called the **binary object**

<div style={{textAlign: 'center'}}>

![1.git_init.png (304×121)](/img/git_tutorial/2.git_add.png)

</div>

#### What is the Staging Area/Index/Cache?

The `git add` command allows us to choose the files for the next `commit`. The files that are added but not yet committed go into the `staging area`. We may want to add or remove multiple files before actually committing them to the project history. `Staging` gives us the opportunity to *group related changes* into distinct snapshots—a practice that makes it possible to track the **meaningful progression** of a software project (instead of just arbitrary lines of code).

:::tip
To undo `git add` you can use `git restore`.
:::

### 3. Commit

```bash
git commit -m "My first commit"
```


* We have already written to the repository with `git add`, so `git commit` isn’t actually writing to the repository.

**What is a commit actually doing?**

`git commit` takes what’s already written to the repository and

1. Creates a commit object for what has been written, which has a unique ID.
	1. a. The **ID** is a *checksum* (a sequence of numbers and letters) that encodes some things, including
		1. the content of the commit (files etc.)
		2. commit message
		3. committer/author
		4. commit date
		5. the ID of the previous commit
2. Sticks the **labels**** `HEAD` and `master` onto that commit object.
	1. `HEAD` is like your location. It denotes the location that will advance when you `commit`. More on this later.
	 
<div style={{textAlign: 'center'}}>

![image](/img/git_tutorial/3.git_commit.png)

</div>

This can be verified by running:

```shell-session
user@host:~/repos/ag-git-tutorial$ git log --oneline
cf0de9b (HEAD -> master) first commit
```

#### What do the labels `HEAD` and `master` represent?

1. `master` is the branch
2. `HEAD` represents that you are currently on that branch. It is like your position on a tape.
	1. The term "HEAD" in `git` is derived from the metaphor of a tape head, which is a component in a tape recorder that reads the information stored on the tape. In `git`, the HEAD pointer indicates the current location within the commit history of a repository.

### 4. Do some more work

```bash
echo "this was added during the second commit" > my_second_file.txt
git add my_second_file.txt
```

* `git add`  wrote the changes (i.e. new file `my_second_file.txt`) to the repo.
* All of our labels are still at the `previous commit`
* Notice that at this point, we do not have an **ID** because we have not created a `commit` at this node.
* This new node is the `staging area`

<div style={{textAlign: 'center'}}>

![image](/img/git_tutorial/4.git_add.png)

</div>


### 5. Commit again

```bash
git commit -m "My second commit"
```


	 
<div style={{textAlign: 'center'}}>

![image](/img/git_tutorial/5.git_commit.png)

</div>


## Inspecting the differences
---

We want to see the differences between the commits.

### Option 1. `git diff`

```shell-session
user@host:~/repos/ag-git-tutorial$ git log --oneline
9bd44fc (HEAD -> master) My second commit
cf0de9b first commit
user@host:~/repos/ag-git-tutorial$ git diff cf0de9b 9bd44fc
diff --git a/my_second_file.txt b/my_second_file.txt    # which file
new file mode 100644                                    # new file was added and its permissions
index 0000000..ddfa2cd
--- /dev/null                                           # file was empty before (since it was a new file)
+++ b/my_second_file.txt                                # changes in the file
@@ -0,0 +1 @@
+this was added during the second commit
```

* Show changes between commits
* The commits don’t have to be sequential or even related (e.g. can be in different branches).
### Option 2. `git log --patch`

The `git diff`command calculates the differences between two commits. That difference is called a `patch`, hence why the switch is `--patch`.

```shell-session
user@host:~/repos/ag-git-tutorial$ git log --patch cf0de9b..9bd44fc
commit 9bd44fc4e5e9a44c8cb0e32d32e7191d818f4b21 (HEAD -> master)
Author: First Name <name@email.com>
Date:   Wed Mar 1 17:49:16 2023 -0800

    My second commit

diff --git a/my_second_file.txt b/my_second_file.txt
new file mode 100644
index 0000000..ddfa2cd
--- /dev/null
+++ b/my_second_file.txt
@@ -0,0 +1 @@
+this was added during the second commit
```

### Option 3. `git show`

If you use `git show <commit-id>` it shows the differences for a commit compared to its parent

```bash
git show 9bd44fc
```

If you use `git show <commit-id>:filename`, it shows you what the file looked like at that commit.

```bash
git show cf0de9b:my_first_file.txt
```


## Undo, undo!
---
Okay, so everything is going great. Do work --> Add --> Commit --> Do work.. 

Until.. Oh no, I made a mistake. I would like to go back and fix something.

In this section, we discuss how to do that.

### Option 1. `git reset`

#### `git reset --mixed`

```bash
git reset --mixed <commit-d-A>
```

The `HEAD` and `master` labels have moved back to the previous commit with ID `A`, all the
changes that you made for commit `B` are still in your directory, however they are **not staged**.

	 
<div style={{textAlign: 'center'}}>

![image](/img/git_tutorial/6.git_reset.png)

</div>


#### `git reset --soft`

```bash
git reset --soft <commit-d-A>
```

The `HEAD` and `master` labels have moved back to the previous commit with ID `A`, all the
changes that you made for commit `B` are still in your directory, they are also **staged**.

	 
<div style={{textAlign: 'center'}}>

![image](/img/git_tutorial/7.git_reset.png)

</div>

#### `git reset --hard

```bash
git reset --hard <commit-d-A>
```

The `HEAD` and `master` labels have moved back to the previous commit with ID `A`. Your directory looks exactly like it did at commit `A`. You have lost all the work that you committed to commit `B`.

	 
<div style={{textAlign: 'center'}}>

![image](/img/git_tutorial/8.git_reset.png)

</div>

### Option 2. `git commit --amend`

Imagine you are still at commit `B`, however, you realize that you want to add one small change to commit `B`. One option is to make the change `git add` and `git commit` again, creating a new commit.

However, you can also

1. Make required change
2. `git add`
3. `git commit --amend` 
	1. the commit message will appear, you can edit it, or simply hit save and exit.

At this point, your commit ID `B` will be overwritten with a new commit ID, but your history will sitll look like this: 

<div style={{textAlign: 'center'}}>

![image](/img/git_tutorial/5.git_commit.png)

</div>


:::tip
####  Where did all of those commits go?
You may notice that when you use `git reset` or `git commit --amend`,  it seems like you are rewriting history. You may also notice that the commit IDs have changed. What happened to those other commits?

You can use `git reflog` to see **all** of your previous commits, including the ones that are not visible with `git log`
:::

### Option 3. `git revert`

Let’s say that you want to simply go back to the previous commit without making any changes. However, you want to keep it in history, that you have made this mistake and undid the mistake. This is where you would use `git revert`.`

Why would you want to keep it in history? 
* You may want to **communicate the mistake to your team**.
* Your team may already have the history because you `pushed`, undoing history when you work with others can be risky. (more on `push` later in the remote repository section.)

```bash
git revert <bad commit-id>
```

Since you are simply creating a new commit you can enter a commit message here. You will see a
default message that is suitable for most cases.

After this commit, you are at:


<div style={{textAlign: 'center'}}>

![image](/img/git_tutorial/9.git_revert.png)

</div>

## Branching

### 1. Creating a new branch

### 2. Switching to a new branch

### 3. Committing on a new branch

### Merging

### 1. Merging the branch - simple merge


### 1. Merging the branch - complex merge


## Remote repositories

