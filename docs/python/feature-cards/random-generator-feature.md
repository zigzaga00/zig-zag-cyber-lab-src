---
title: Feature Card - Random Generator
tags: [feature-card, python]
---

## 🟩🐍 **Feature Card: Build a Random Generator**

- **Type:** Feature
- **Useful for:** Creating fun, surprising results like band names, superpowers, stories, passwords, and more!

---

### 🧠 What Is It?

A **random generator** is a program that **mixes things up and surprises the user**. You can use it to generate things like:

- 🎸 Funny band names
- 🦸 Superhero identities
- 📖 Silly story titles
- 🔐 Random passwords
- 🐉 Magical spells or creature names

These projects are fun and creative, and they help you learn how to combine **lists**, **random choices**, and **string output**.

---

### 🧪 You Could Try…

#### 🟡 Basic Band Name Generator

```python
import random

word1 = ["Electric", "Spiky", "Wobbly", "Cosmic"]
word2 = ["Tigers", "Wizards", "Socks", "Bananas"]

name = f"{random.choice(word1)} {random.choice(word2)}"
print(f"Your band name is: {name}")
```

---

#### 🟣 Make It More Personal

Ask the user a question and use the answer in the result:

```python
import random

word1 = input("What’s your favourite colour? ")
word2 = ["Banana", "Tiger", "Wizard", "Sock"]
print(f"Your superhero is the {word1} {random.choice(word2)}")
```

---

#### 🟢 Add Themes or Categories

```python
import random

theme = input("Choose a theme (spooky, space): ")

if theme == "spooky":
    word1 = ["Haunted", "Creepy", "Ghastly"]
    word2 = ["Pumpkins", "Ghosts", "Bats"]
elif theme == "space":
    word1 = ["Galactic", "Cosmic", "Starlit"]
    word2 = ["Rockets", "Aliens", "Comets"]
else:
    word1 = ["Mystery"]
    word2 = ["Things"]

name = f"{random.choice(word1)} {random.choice(word2)}"
print(f"Your band name is: The {name}")
```

---

### 🧰 Technique Cards (Practical Skills)

These **practical technique cards** can help take your understanding further:

- 🐍 [Technique Card: Lists in Python](../technique-cards-practical/lists-python-practical.md)
- 🐍 [Technique Card: Random Choice from Lists](../technique-cards-practical/random-choice-list-python-practical.md)
- 🐍 [Technique Card: Strings and Integers](../technique-cards-practical/str-int-python-practical.md)
- 🐍 [Technique Card: User Input](../technique-cards-practical/input-python-practical.md)

---

### 🔧 Challenges

- Make a name generator with a theme the user picks
- Add a third word for more creative names
- Ask more questions to influence the result
- Make a generator that prints **3 results** at once
- Build a **password generator** that uses random letters and numbers
- Create a **madlib** story generator

---

## 🎯 When to use this Feature

| **Project Examples**                                                          | **Why a Random Generator**              |
| ----------------------------------------------------------------------------- | --------------------------------------- |
| [Band Name Generator](../project-ideas/band-name-generator-python-project.md) | Create Funny Random Band Names and More |

---

### 📹 Video Link

[![Watch the video](../python.png)](https://www.youtube.com/watch?v=gbQ3L_sNtig)

---
