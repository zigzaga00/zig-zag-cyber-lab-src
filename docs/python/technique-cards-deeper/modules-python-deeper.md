---
title: "\U0001F40D Technique Card: Importing and Using Modules in Python (deeper)"
tags: [python, deeper]
---

## 🟦🐍 Technique Card: Importing and Using Modules in Python (deeper)

### 🌟 What You’ll Explore

Learn how to **import** a sack full of ready-made code (called a _module_) so you can use cool tools like picking a random item from a list.

---

### 🎒 What’s a Module?

A **module** is like a **sack of code**.

Imagine a sack filled with helpful tools that someone else made for you — tools that help your program do smart things without you having to build them from scratch.

One sack might help with maths.  
Another might help with telling the time.  
And one fun sack is called `random` — it’s full of tools for picking things randomly!

---

### 🎯 Why Use a Sack (Module)?

- It saves time.
- It gives your program superpowers!
- You don’t have to build everything yourself.

---

### 🪄 How Do I Open a Sack?

You use the **import** command:

```python
import random
```

This means:  
🗣️ “Hey Python, bring me the sack called `random`!”

Now you can use anything inside the sack.

---

### 🧺 How to Grab a Tool from the Sack

Let’s say we want to pick a random name from a list:

```python
name = random.choice(["Ava", "Ziggy", "Sky"])
```

Here’s what’s happening:

- `random` = the sack
- `choice` = a tool inside the sack
- The **dot** (`.`) joins them: `random.choice`

💡 You can think of the dot like a **possessive apostrophe**:

> “The `choice` that _belongs to_ `random`”

Just like:

> “Ziggy’s hat” = the hat that belongs to Ziggy
>
> `random.choice()` = the choice tool that belongs to the random sack

---

### 🛠️ What’s Inside These Sacks?

Each sack (module) contains code: clever instructions written by other programmers.

We don’t need to know exactly how that code works to _use_ it — just like we can use a calculator without knowing how all the buttons are wired inside.

---

### 🚪 Can We Import Just One Tool?

Yes! But it’s a bit like pulling just _one_ thing out of the sack and leaving the rest behind:

```python
from random import choice
```

Now you can write:

```python
name = choice(["Storm", "Flame", "Frost"])
```

That works, but sometimes it’s nicer to keep using the sack so we _know where the tool came from_. It is more clear when we have lots of code - if we have `choice()` it is not so clear but if we use `random.choice()` it is **more clear** that the `choice()` code came from the `random` module (sack!)

---

### 🧠 Quick Recap

- A **module** is like a sack full of code.
- We use `import` to bring the sack into our project.
- We use the **dot** (`.`) to take tools out of the sack.
- `random.choice()` means: “Use the _choice_ tool from the _random_ sack!”

---

### 🔗 Other Useful and Related Cards

- 🐍 [Technique Card: Lists in Python (practical)](../technique-cards-practical/lists-python-practical.md)
- 🐍 [Technique Card: Getting a Random Choice from a List in Python (practical)](../technique-cards-practical/random-choice-list-python-practical.md)

---
