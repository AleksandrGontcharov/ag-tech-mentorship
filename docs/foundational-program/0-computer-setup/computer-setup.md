---
sidebar_position: 1
---

# → Windows


This setup is for 2023.

## Install Terminal and PowerShell
---

1. Open the **Start Menu**.
2. Click on **Microsoft Store**.
3. Search and download the following applications:
   * **Windows Terminal**
   * **PowerShell**


## Set up Terminal and PowerShell
---

### Set up profiles
1. Open **Terminal**
	1. Set up the Default Profile to be **PowerShell**
	2. Hide every profile except **PowerShell** and **Command Prompt**
2. Create a `repos` directory in ```C:\Users\<yourusername>\``` and make ```C:\Users\<yourusername>\repos``` your starting directory in **PowerShell** and **Command Prompt**.

### Set up fonts in Terminal

1. Go to https://www.nerdfonts.com/font-downloads and install `Cousine Nerd Font`
	1. Feel free to download more fonts to your preference.
2. Set `Cousine Nerd Font` as your font under **Appearance** of **PowerShell** and **Command Prompt**.
3. Set `Tango Dark` as your color theme.

### Set up the PowerShell Themes and PSReadLine

This will make your PowerShell easier to use.

#### First, install `winget` if you don't have it

Find installation instructions here: [winget.run](https://winget.run/)

#### Install Oh-My-Posh


```powershell title="PowerShell"
# Install oh-my-posh (terminal themes)
winget install JanDeDobbeleer.OhMyPosh -s winget
```

### Configure your PowerShell profile

This will open the **PowerShell** profile, if it prompts you to create the file if it doesn't exist, say yes. The powershell profile is a script executed everytime you start PowerShell. 

```powershell
notepad $PROFILE
```

*Paste the following into the file and save:*

```powershell title="C:\Users\<user>\Documents\PowerShell\Microsoft.PowerShell_profile.ps1"  showLineNumbers
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/amro.omp.json" | Invoke-Expression

Import-Module -Name Terminal-Icons
Import-Module PSReadLine
Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -PredictionViewStyle ListView
Set-PSReadLineOption -EditMode Windows

function List-All-Files([switch] $foo) {
     ls -Force
}

Set-Alias ll List-All-Files
```

Now restart PowerShell and debug if you see any errors.

### Change the PowerShell theme with oh-my-posh

```powershell
# Step #1 - run this command in a directory (preferably in a git repo)
Get-PoshThemes
# Step #2 -> find the theme you like and change the the name in your PowerShell profile
code $PROFILE 
# Step #3 - reload the profile
. $PROFILE
```

## Install Tools
---

### Directly from Powershell

:::caution  
You may need to open PowerShell as Administrator
:::

```powershell
# Visual Studio Code
winget install -e --id Microsoft.VisualStudioCode`
# Obsidian (Markdown Editor)
winget install -e --id Obsidian.Obsidian
# Node JS
winget install -e --id OpenJS.NodeJS
# Python (install latest version (3.11 as of this writing))
winget search Python.Python # search for latest version
winget install Python.Python.3.11
```

### Install Chocolatey

[Chocolatey Software | Installing Chocolatey](https://chocolatey.org/install)

:::info
Chocolatey is a tool that you can use to install software.
:::
You can install chocolatey with this comman
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### Install more software with Chocolatey

:::caution
You may need to open PowerShell as Administrator.
:::

```powershell
# install the just command runner
choco install just
# install jq
choco install jq
# install grep
choco install grep
```

:::tip
`just`,`jq`, and `grep` are great tools that you will learn how to use later.
:::

## Configure git

:::info
You will need this to use git.
:::

```powershell
git config --global user.email "you@example.com"
git config --global user.name "Your Name"     
```