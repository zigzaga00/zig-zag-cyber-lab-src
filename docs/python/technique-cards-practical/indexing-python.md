---
title: "\U0001F40D Technique Card: Python Indexing (practical)"
tags: [python, practical]
---

## 🟨🐍 **Technique Card: Python Indexing**

### 🧠 What This Teaches

How to **access specific items** in a list using **index numbers**, and how to go deeper into **lists inside lists** or **tuples inside lists** using double indexing like `[0][1]`.

---

### 🧰 You Will Use

- `[]` square brackets
- Index numbers starting from **0**
- Lists and tuples

---

### 🎯 Main Concept

Python lists are **ordered** collections, and we use **index numbers** to get items.

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # "apple"
```

- The **first** item is at index `0`
- The **second** is at index `1`, and so on.

---

### 🧱 Lists Inside Lists (Nested Lists)

```python
my_lists = [[1, 2], [3, 4]]
print(my_lists[0])     # [1, 2]
print(my_lists[0][1])  # 2
```

- `my_lists[0]` = the first list: `[1, 2]`
- `my_lists[0][1]` = the **second item** in that inner list: `2`

---

### 🍇 Tuples Inside Lists

```python
mixed = [("apple", "banana"), ("carrot", "pea")]
print(mixed[1][0])  # "carrot"
```

- `mixed[1]` = `("carrot", "pea")`
- `mixed[1][0]` = `"carrot"`

---

### 💡 Try This!

```python
animals = [["dog", "cat"], ["lion", "tiger"]]

print(animals[1][1])  # tiger
print(animals[0][0])  # dog
```

---

### 🛠️ Common Mistake

⚠️ Don't forget Python starts counting at **0**, not 1!

---

### 🎲 Practise!

Try making your own:

```python
favourite_things = [["rainbows", "sunsets"], ["ice cream", "cake"]]
```

Then try printing the second thing in the first list.

---

### 🔗 Linked Cards

- 🐍 [Technique Card: Lists in Python (practical)](lists-python-practical.md)
- 🐍 [Technique Card: Tuples in Python (practical)](tuples.md)

---

### 📹 Video Link

[![Watch the video](../python.png)](indexing-python.mp4)

---
