---
sidebar_position: 3
---

#   VM Setup

---
The following configurations are recommended **for this exercise only** in order to save time.

If you set up one `VM` with these settings - you can clone these settings to other VMs.

### Remove login on startup

```
sudo vim /etc/systemd/system/getty.target.wants/getty@tty1.service

## Change it to the following
ExecStart=-/sbin/agetty --autologin root --noclear %I $TERM
```

### Change the hostname

```
## Change the hostname
sudo hostnamectl set-hostname newhostname
## edit hosts file
sudo vim /etc/hosts
## Reboot
sudo reboot
```

### Remove the password when using sudo

```
sudo visudo

## Add this to the bottom of the file

<username> ALL=(ALL) NOPASSWD:ALL
```

## Set a nice terminal experience

```
# add this to .bashrc
force_color_prompt=yes
# add this to .profile
if [ -f ~/.bashrc ]; then
. ~/.bashrc
fi
# add this to .inputrc
"\e[A": history-search-backward
"\e[B": history-search-forward
```