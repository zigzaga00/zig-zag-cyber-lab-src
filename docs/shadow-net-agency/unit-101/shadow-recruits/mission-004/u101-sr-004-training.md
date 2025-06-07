---
title: "\U0001F576️ Technique Card: Power and Privilege | SR 101"
tags: [sna, SR, "101"]
---

# 🕶️ Technique Card: Power and Privilege - Different Types of Linux User

### Unit 101 – Terminal Tigers 🐯 | Rank: Shadow Recruit

**ShadowNet Agency: Recruit Training File – Classified Level 1**

---

## 🕵️ Mission Prep Briefing

In every secure system, not all users are equal. Some have clearance to view confidential data, others can only access what they need. To succeed in your next mission, you’ll need to understand **how Linux handles users, groups, and privileges**.

---

## 👤 Types of Linux Users

Linux systems have different user roles:

- **root** – 👑 The one true superuser. Has _complete control_. There is **only one** root user per system.
- **Regular users** – Like you. Access is limited to keep the system safe.
- **System users** – Used by services and background processes (e.g., `daemon`, `syslog`).

To see who you are:

```bash
whoami
```

To see all users:

```bash
cat /etc/passwd
```

---

## 🧪 sudo – Power on Demand

Some trusted users are allowed to temporarily act like root using the `sudo` command:

```bash
sudo <command>
```

This is only possible if you're in a **special group** – usually called `sudo` or `wheel`.

Check if you're in the sudo group:

```bash
groups
```

!!! note
The original meaning of `sudo` was **super user do** as when using `sudo` a regular user can do as the super user (root) can do

---

## 🕸️ Linux Groups: The Network of Trust

Every user can belong to **one or more groups**. Groups help control who can:

- Read sensitive logs
- Access protected directories
- Run powerful commands

Example groups:

- `adm` – Can read log files
- `sudo` or `wheel` – Can use the `sudo` command
- `www-data` – Used by web servers

See which groups **you** belong to:

```bash
groups
```

Check another user:

```bash
groups otherUser
```

---

## 🗂️ /etc/passwd and /etc/group

Two files tell you **everything** about users and groups:

- `/etc/passwd` – Lists all user accounts
- `/etc/group` – Lists all groups and who is in them

!!! note
Passwords are **NOT** stored in `/etc/passwd` - they are found in `/etc/shadow` but this is a **restricted** file and even then the passwords of users have been **hashed** so they cannot easily be read

Explore with:

```bash
cat /etc/passwd
cat /etc/group
```

🔍 Want to find all users in the `adm` group?

```bash
grep adm /etc/group
```

🧠 Clue: Try looking for **patterns** in these files. Who belongs to what?

---

## 🎯 Try This

✅ Who are the users on the system?  
✅ What groups exist?  
✅ Find all the users in the `adm` group.

---

## 💻 Command Summary

| Command                       | Purpose                                         |
| ----------------------------- | ----------------------------------------------- |
| `whoami`                      | Shows your current user                         |
| `groups`                      | Lists your groups                               |
| `groups <user>`               | Lists another user’s groups                     |
| `cat /etc/passwd`             | View all user accounts                          |
| `cat /etc/group`              | View all groups                                 |
| `grep <groupname> /etc/group` | See who’s in a group                            |
| `sudo <command>`              | Run a command as a privileged user (if allowed) |

---

🧠 Remember:  
Not every user is what they seem. In ShadowNet, knowing **who has access** is just the beginning.  
Stay alert. Stay curious.

**— ShadowNet Academy: Question. Train. Triumph.**

---

**[⬅️ Go to Mission 004: Who has the Power?](u101-sr-004-mission.md)**

---

### 📹 Video Training Link

[![Watch the video](../../../sna1.png)](unit-101-sr-004.mp4)

---
