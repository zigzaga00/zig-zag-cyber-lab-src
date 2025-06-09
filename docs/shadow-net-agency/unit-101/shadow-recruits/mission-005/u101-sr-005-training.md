---
title: "\U0001F576️ Technique Card: Access Permissions | SR 101"
tags: ["101", sna]
---

# 🕶️ Technique Card: Understanding Access Permissions on Linux

### Unit 101 – Terminal Tigers 🐯 | Rank: Shadow Recruit

**ShadowNet Agency: Recruit Training File – Classified Level 1**

---

## 🕵️ Intel Drop: Who Can Do What?

Every file in a Linux system has **access permissions** that control _who_ can **read**, **write**, or **execute** it. These permissions are divided into **three sets**:

- 👤 **User (u)** – The file’s owner
- 🧑‍🤝‍🧑 **Group (g)** – Users in the same group as the file
- 🌍 **Others (o)** – Everyone else on the system

Each set can have three permissions:

| Symbol | Meaning       | Value |
| ------ | ------------- | ----- |
| `r`    | Read (view)   | 4     |
| `w`    | Write (edit)  | 2     |
| `x`    | Execute (run) | 1     |

---

## 🔢 The Numbers Game

Linux lets us use **numbers** to represent these permissions:

```bash
chmod 755 file.txt
```

Here’s how it breaks down:

- `7` = **4 (r) + 2 (w) + 1 (x)** → `rwx`
- `5` = **4 (r) + 0 (no w) + 1 (x)** → `r-x`
- Another `5` for others → `r-x`

So `chmod 755` means:

```
User:  rwx
Group: r-x
Others: r-x
```

Try it out:

```bash
touch testfile
chmod 741 testfile
ls -l testfile
```

What do you see?

---

## 🧪 Investigating a File

Use this command to **see file permissions**:

```bash
ls -l filename
```

Example output:

```
-rwx--x--- 1 agentY evilagents 532 Apr 13 09:00 stealth_script.sh
```

Breakdown:

- `-rwx--x---` → permissions
- `agentY` → owner
- `evilagents` → group

---

## 🔍 Who’s in the Group?

To **see who is in a group**:

```bash
grep evilagents /etc/group
```

Or:

```bash
getent group evilagents
```

---

## 🧑‍💻 System vs User Accounts

- **User accounts**: Created for humans like you! They usually have home directories (e.g., `/home/sr101`).
- **System accounts**: Created for services, scripts, or stealthy purposes. They _might not_ have a home directory or login shell.

Spot them in `/etc/passwd`. A system account might look like this:

```
stealthsvc:x:999:998::/var/lib/stealthsvc:/usr/sbin/nologin
```

Notice the lack of a home and the non-login shell.

---

## 🔧 Changing Permissions

Use `chmod` to change file permissions:

```bash
sudo chmod 700 file.sh          # Numeric version: rwx --- ---
```

Need help breaking it down? Use this memory tip:

> **Read = 4**, **Write = 2**, **Execute = 1**

Add them up for the permissions you want!

---

## 🎯 Practice Drill

1. Create a file with:

```bash
touch recruit_file
chmod 731 recruit_file
ls -l recruit_file
```

2. Interpret what those numbers mean.

Keep your eyes open, recruits. Not every account on the system is what it seems…

**Trust your tools. Decode the clues. Silence the threat.**

---

**[⬅️ Go to Mission 005: The Execution Key](u101-sr-005-mission.md)**

---

### 📹 Video Training Link

[![Watch the video](../../../sna1.png)](https://www.youtube.com/watch?v=vP5nB3t3Deo)

---
