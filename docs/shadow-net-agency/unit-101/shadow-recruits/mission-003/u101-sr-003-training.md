---
title: "\U0001F576️ Technique Card: Quickly Finding Files | SR 101"
tags: [sna, "101", SR]
---

# 🕶️ Technique Card: Quickly Finding Files

### Unit 101 – Terminal Tigers 🐯 | Rank: Shadow Recruit

**ShadowNet Agency: Recruit Training File – Classified Level 1**

---

## 🎯 Objective

Some files don’t want to be found.  
Terminal Tiger Shadow Recruits need elite search skills to uncover hidden threats buried deep in the system.  
In this card, you'll learn how to become a digital tracker using the **`find`** command.

---

## 🛠️ Technique: The `find` Command

`find` is a command-line tool used to search for files and directories.

### 🔍 Basic Syntax:

```bash
find [where to search] [what to search for]
```

---

## 🧭 Mission Tools

### 🔹 Search from the Top

To search the entire file system:

```bash
find /
```

This tells your terminal: **Start from the root directory and look everywhere.**

---

### 🔹 Name of the File

Use the `-name` flag to search by name:

```bash
find / -name secret.txt
```

But what if you don’t know the full name?

---

### 🔹 Use Wildcards: `*`

The `*` means **match anything**.

```bash
find / -name "*secret*"
```

This finds any file with **secret** anywhere in its name—like `top-secret-file.txt` or `stolen-secret.txt`.

---

### 🔹 Silence the Noise

Sometimes you'll see “Permission denied” errors while searching - these errors can make finding what we are looking for very difficult as the terminal window gets cluttered.

Redirect those errors to the void:

```bash
find / -name "*secret*" 2>/dev/null
```

> `2>` means “send errors somewhere”  
> `/dev/null` is the **black hole** of Linux—it swallows anything!

---

## 🐾 Try This

🔹 Can you search for all `.txt` files across the system?

```bash
find / -name "*.txt" 2>/dev/null
```

🔹 Can you find a file if you only know part of its name? Of course you can! So use your new found skills to find a file which includes `example-log` in its full name.

---

## 🕶️ ShadowNet Tip

Combine your tools.  
Think like an agent.  
Files can hide, but they can’t escape your command line.

> The ghosts of the file system leave traces. Use `find` to follow them.

---

**[⬅️ Go to Mission 003: Uncover the Ghost File](u101-sr-003-mission.md)**

---

### 📹 Video Training Link

[![Watch the video](../../../sna1.png)](unit-101-sr-003.mp4)

---
