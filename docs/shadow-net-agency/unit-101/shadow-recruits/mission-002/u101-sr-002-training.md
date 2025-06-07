---
title: "\U0001F576️ Technique Card: File Discovery, Decoding and Reading | SR 101"
tags: [sna, "101", SR]
---

# 🕶️ Technique Card: Discovering and Decoding Files

### Unit 101 – Terminal Tigers 🐯 | Rank: Shadow Recruit

**ShadowNet Agency: Recruit Training File – Classified Level 1**

---

## 📁 Operation Context

In the shadows of every system, some files **whisper secrets** — but only to those who know how to uncover them.

This technique card gives you access to a new toolkit for reading, editing, and even **decoding** hidden transmissions. Master these skills and you’ll be ready to uncover and decode hidden files.

---

## 🔍 Hidden Files – Revealing the Invisible

Some files are hidden from casual users. But Shadow Recruits know better.

Use this command to see **everything** — even files that don’t want to be seen:

```bash
ls -a
```

Hidden files begin with a `.` (dot). If you don’t use `-a`, you won’t see them.

---

## 📖 Reading a File

To **read the contents** of a file quickly, use:

```bash
cat secret.txt
```

This shows the file’s content in your terminal.

Example:

```bash
cat .secretmessage.txt
```

---

## ✍️ Editing Files with nano

If you need to write or edit a file, use this powerful terminal editor:

```bash
nano mywork.txt
```

When inside `nano`, you can type or delete text. Press `Ctrl + X` to exit. If you made changes, you’ll be asked whether to save.

---

## 🧪 Creating Files (touch & echo)

You can **create** an empty file using:

```bash
touch newfile.txt
```

Or write something directly into a file like this:

```bash
echo "Hello, world!" > message.txt
```

This command overwrites the file with your message.

---

## 🔐 Cracking the Code – base64

You might find a message that looks like this:

```
U2hhZG93TmV0IHJ1bGVzIQ==
```

That’s **Base64** — a way of hiding text. To decode it, use:

```bash
echo "U2hhZG93TmV0IHJ1bGVzIQ==" | base64 -d
```

This will reveal the hidden message behind the scrambled text.

!!! note
The `|` character is called a **pipe** and can usually be found at the bottom left corner of your keyboard

---

## 🔒 Encoding Your Own Messages

You can use `base64` to **encode** your own messages - please remember that it is easy for an enemy to **decode** these so **do not** use this technique for **top secret** work.

```bash
echo "this is my message" | base64 > message.txt
```

---

## 🎓 Field Notes

- Use `ls -a` to reveal the whispers.
- Use `cat` to read them.
- Use `base64 -d` to decode their secrets.
- Use `nano`, `touch`, and `echo` to create your own messages.

---

## 🧪 ShadowNet Training Task

Practice your skills:

1. Open a terminal.
2. Use `pwd` to find your location.
3. Use `ls -a` to look for hidden files.
4. Use `cd` to enter the correct directories.
5. Try to locate the file: `.hidden-file.txt`.
6. Decode its contents.
7. Read the secret message!
8. Leave your own secret message for other recruits in the same directory as `.hidden-file.txt` | encode it with `base64` and make sure it is hidden.

---

> 🐯 _Only those who see the unseen can hear what files whisper. Use your tools wisely, Shadow Recruit._

---

**[⬅️ Go to Mission 002: The Whispering Files](u101-sr-002-mission.md)**

---

### 📹 Video Training Link

[![Watch the video](../../../sna1.png)](https://www.youtube.com/watch?v=Nroj4VsI7ZM)

---
