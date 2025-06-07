---
title: "\U0001F40D Technique Card: Lists in Python (practical)"
tags: [python, practical]
---

## 🟨🐍 **Technique Card: Lists in Python (practical)**

### 🐍 What’s a list?

A **list** is like a box that holds lots of things, all in one place. You can put numbers, words, or even other lists inside!

```python
my_shopping = ["apples", "milk", "bread"] # a list of three strings
```

!!! note
We use `[]` to create a list in python

---

### 🛠️ Make your own list

Try typing this into your program:

```python
favourite_animals = ["fox", "elephant", "dog"]
print(favourite_animals)
```

---

### 🔢 Get something _out_ of your list

You can grab one item by its **position** (starting from 0!):

```python
print(favourite_animals[0])  # This prints: fox
print(favourite_animals[2])  # This prints: dog
```

---

### ➕ Add something to your list

Use `.append()` to add an item to the end of the list:

```python
favourite_animals.append("cat")
print(favourite_animals)
```

---

### 🧹 Remove something from your list

Use `.remove()` to take something out:

```python
favourite_animals.remove("fox")
print(favourite_animals)
```

---

### 🧪 Try this mini challenge

Can you make a list of your top 3 favourite things and print out a sentence like:  
`My favourite fairy is Sky.`

!!! tip
Use an `f-string` and list index like this:

```python
top_fairies = ["Sky", "Ruby", "Amber", "Fern", "Heather"]
print(f"My favourite fairy is {top_fairies[0]}.")
```

---

### 🧭 Useful for projects like:

- Random band name generator
- Animal guessing games
- Quiz games

---

### 🐟 Deep Dive

To learn more about **lists in Python** please see the following card:

- [Technique Card: Lists in Python (deeper)](../technique-cards-deeper/lists-python-deeper.md)

---

### 🔗 Linked Cards

- 🐍 [Technique Card: Getting a Random Choice from a List in Python (practical)](random-choice-list-python-practical.md)
- 🐍 [Technique Card: Tuples in Python (practical)](tuples.md)
- 🐍 [Technique Card: Dictionaries in Python (practical)](dict-python.md)

---

### 📹 Video Link

[![Watch the video](../python.png)](lists-python-practical.mp4)

---
