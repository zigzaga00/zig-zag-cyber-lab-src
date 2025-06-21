---
title: Unit 202 - Mission 002 - Training Card
tags: [SR, "202", sna]
---

## 🛰️ Technique Card — Mission 002

### 🔓 Anonymous FTP Access

---

### 📡 What is FTP?

**FTP** stands for **File Transfer Protocol** — it is a way for computers to share and transfer files across a network.

Think of it like a **digital mailbox**:

- One side can **drop off files**.
- The other side can **pick them up** — if they have the right keys (credentials)… or if the box is left unlocked!

---

### 👤 What is Anonymous FTP?

Sometimes, FTP servers are set up to allow **"anonymous" login**, meaning:

- You don’t need a **username** or **password** to get in.
- Anyone can connect and look around the files being shared.

🔍 **Why is this useful for attackers?**
If a server is misconfigured or forgotten, attackers (like you, Shadow Recruit!) might be able to:

- **Log in anonymously**
- **Explore** the directories and files
- **Find hidden data** that was never meant to be public

---

### 🔍 How to Find FTP

Before you can connect to an FTP server, you need to **discover** if one is running on a target machine.

To do that, use **Nmap**, your Network Gecko scanning tool.

Run this command:

```
nmap -sS [target IP]
```

This does a **stealthy SYN scan** of the **top 1000 most common ports**, including:

- **Port 21** → FTP
- **Port 22** → SSH

📋 **What to look for:**

- If Nmap says **`21/tcp open ftp`**, the machine is running an FTP server.
- If you also see **`22/tcp open ssh`**, that’s a clue where stolen creds might be used!

---

### 🗂️ How to Use Anonymous FTP

When you try to connect, use: `ftp [target IP]`

```
Username: anonymous
Password: [blank so just press enter]
```

Once inside, look around for:

- Text files
- Credentials
- Archived communications
- Hidden clues

Use the `ls` and `cd` commands (from Terminal Tigers training) to:

- **List files**
- **Change directories**
- **Look for usernames, passwords, and secret hints**

To read the contents of files you will need to transfer them to your local machine first using `get secret.txt` if there is one file you want called `secret.txt` or `mget *` if there are lots of files you want to loot.

!!! tip

> You can turn off the confirmation prompt when getting multiple files using `mget *` by typing `prompt` first

---

### 🔑 From FTP to SSH

The real treasure might not be in the FTP server itself.

Sometimes you’ll find **login credentials** that can be used on **other services** — like:

- SSH (secure shell), often running on **port 22**

➡️ If you find a **username and password** in an FTP file, try using it to **SSH into the same machine or even another machine**.

`ssh username@[10.10.10.21]`

💡 Remember:

- **FTP shares the files.**
- **SSH gets you into the machine.**

---

**[⬅️ Go to Mission 002: The Anonymous Courier](./u202-sr-002-mission.md)**

---

### 🧠 Spy Tips

- Always check for folders like `creds/`, `logs/`, or `archives/`.
- Pay attention to file names — they might hint at **usernames**, **code words**, or **locations**.
- If you get stuck, think: **What would a spy do? Where would I hide intel?**

---

### 🐾 Shadow Recruit Wisdom

> “Sometimes the door is already open. All you have to do is push.”

---

### 📹 Video Training Link (Part 1)

[![Watch the video](../../../sna1.png)](./unit-202-sr-002.mp4)

---
