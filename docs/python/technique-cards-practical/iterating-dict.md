---
title: "\U0001F40D Technique Card: Iterating Dictionaries and .items() Method (practical)"
tags: [python, practical]
---

## 🟨🐍 **Technique Card: Iterating Dictionaries (practical)**

---

### Basic Iteration (looping)

We can **iterate** over **key:value** pairs in Python **dictionaries** using:

```python
my_dict = {"bobo": "blue", "lisa": "silver", "dianne": "green"}
for key in my_dict:
    print(f"{key} loves {my_dict[key]}")
```

### 🧠 What About .items()

The `.items()` method in Python lets you work with **both the key and the value** of a dictionary **at the same time**. It gives you a `dict_items` object — think of it like a bag of key-value pairs!

---

### 🧪 How It Works

```python
my_dict = {"apple": 1, "banana": 2}

# Looping with .items()
for key, value in my_dict.items():
    print(key, value)
```

👆 This is a quick and clear way to get both the _name_ (key) and the _number_ (value).

!!! note
We often just use `k, v` instead of `key, value`

---

### 🔍 What You Might See

```python
print(my_dict.items())
# Output: dict_items([('apple', 1), ('banana', 2)])
```

It might look strange, but it’s just a collection of pairs!

---

### 🛠️ You Can Also

#### ✅ Turn It Into a List

```python
list_of_pairs = list(my_dict.items())
print(list_of_pairs)
# [('apple', 1), ('banana', 2)]
```

---

### 🎯 Challenges to Try

1. Create a dictionary of animals and how many of each you saw.
2. Use `.items()` to print a sentence like:
   `"I saw 3 foxes."`
3. Convert your dictionary to a list of key-value pairs.

---

### 🔗 Linked Cards

- 🐍 [Technique Card: Dictionaries in Python (practical)](dict-python.md)

### 📹 Video Link

[![Watch the video](../python.png)](https://www.youtube.com/watch?v=6FVclsLq7HE)

---
