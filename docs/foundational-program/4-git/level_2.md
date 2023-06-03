Create an empty directory and `cd` into it
Okay, so everything is going great. Do work --> Add --> Commit --> Do work... 
Until… Oh no, you made a mistake, so you would like to go back and fix something.
	1. The commit message will appear, you can edit it, or simply hit save and exit.
At this point, your commit ID `B` will be overwritten with a new commit ID, but your history will still look like this: 
You may notice that when you use `git reset` or `git commit --amend`, it seems like you are rewriting history. You may also notice that the commit IDs have changed. What happened to those other commits?
Since you are simply creating a new `commit`, you can enter a commit message here. You will see a
Alternatively, to switch to the last branch that you were at, you can use `git switch -`
At this point:
In the simple merge example, we could have told git explicitly to not use **fast-forward** with
Note that you can use a few extra switches with `git log` to see this graph.
It is a good idea to use a **tool*** to resolve the merge. There are many such tools. We will use Visual Studio Code to resolve the conflict.
In the **Source Control** on the sidebar, click on the file `my_second_file.txt` and then click on `Resolve in Merge Editor` in the bottom right corner.
Let's see how this new commit is reflected with `git log`. Note the use of `--graph`.