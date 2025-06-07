---
title: "\U0001F40D Technique Card: Tuples in Python (practical)"
tags: [python, practical]
---

## 🟨🐍 **Technique Card: Python Tuples**

### 🧠 What This Teaches

How to create and use **tuples** in Python, how they're different from lists, and when you might want to use them.

---

### 🧰 You Will Use

- `()` round brackets
- Index numbers starting from 0
- Tuple unpacking
- `.count()` and `.index()` methods

---

### 🧱 What is a Tuple?

A **tuple** is like a **list** — it holds a group of items.  
But unlike a list, a tuple **cannot be changed** (we say it's _immutable_).

```python
fruit_tuple = ("apple", "banana", "cherry")
```

- Items in a tuple are **ordered**
- You can access them just like a list:

```python
print(fruit_tuple[1])  # banana
```

---

### 🔒 Why Use a Tuple Instead of a List?

Think of a tuple like a **sealed box**. Once you put things in, no one can change what’s inside. This is helpful when:

- ✅ You want to **protect your data** so no one (even you!) changes it by accident.
- ✅ You’re sending or using **fixed info**, like coordinates, colours, settings, or labels.
- ✅ You want your code to run a little **faster** – Python can deal with tuples more quickly than lists.
- ✅ You’re using **dictionary keys** – only unchangeable things like strings and tuples can be used as keys.

🧠 **Imagine**:  
You’re storing a list of favourite numbers. But if that list should never change once chosen, using a **tuple** makes sure it stays safe and locked.

```python
favourites = (3, 7, 42)
```

---

### 🧠 Common Use Cases

✅ Grouping coordinates:

```python
position = (10, 20)
```

✅ Returning multiple values from a function:

```python
def get_info():
    return ("Alice", 10)

name, age = get_info()
```

✅ Pairing data in a fixed structure:

```python
pair = ("dog", "bark")
```

---

### 🚫 Tuples Can't Be Changed

```python
my_tuple = (1, 2, 3)
my_tuple[0] = 99  # ❌ This will give an error!
```

---

### 💡 Tuple Tricks

#### Tuple with one item:

```python
lonely = ("single",)  # Don't forget the comma!
```

#### Use `tuple()` to convert a list:

```python
nums = [1, 2, 3]
nums_tuple = tuple(nums)
```

---

### 🧮 Methods You Can Use

```python
example = ("apple", "banana", "apple")

print(example.count("apple"))  # 2
print(example.index("banana")) # 1
```

---

### 🎲 Practise!

Try these:

```python
weather_today = ("sunny", 20)
print("Today it is", weather_today[0], "and", weather_today[1], "degrees.")
```

Or create a list of city-weather tuples!

```python
cities = [("London", 15), ("Paris", 18), ("Oslo", 10)]
```

---

### 🔗 Linked Cards

- 🐍 [Technique Card: Lists in Python (practical)](lists-python-practical.md)
- 🐍 [Technique Card: Python Indexing (practical)](indexing-python.md)
- 🐍 [Technique Card: Dictionaries in Python (practical)](dict-python.md)

---

### 📹 Video Link

[![Watch the video](../python.png)](https://www.youtube.com/watch?v=PTklQ91F4a4)

---
