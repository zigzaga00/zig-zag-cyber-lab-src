---
title: "\U0001F40D Technique Card: Lists in Python (deeper)"
tags: [python, deeper]
---

## 🟦🐍 **Technique Card: Lists in Python (deeper)**

### 🧃 What is a list _really_?

A **list** is a **container**. But in Python, it doesn’t hold the actual items — it holds **pointers (or references)** to them in memory.

Think of it like a row of boxes, each one holding a label that says where the actual item is stored.

```python
my_numbers = [3, 7, 9]
```

Behind the scenes, this is a list of _addresses_ (like treasure maps) pointing to where the number `3`, `7`, and `9` live in memory.

---

### 🌀 Lists are **mutable**

This means lists **can change** after they are made.

You can:

- Add items (`append`)
- Remove items (`remove`, `pop`)
- Change items directly

```python
my_numbers[0] = 42
print(my_numbers)  # [42, 7, 9]
```

This change affects the **same list** in memory. Python doesn’t make a new one unless you ask for a copy.

---

### 🔄 Two names, one list?

If you do this:

```python
a = [1, 2, 3]
b = a
b.append(4)
print(a)  # [1, 2, 3, 4] 😲
```

Both `a` and `b` point to the **same list in memory**!

You didn’t make a copy — you just gave the list another name. To make a copy, you can do:

```python
c = a.copy()
```

Now `c` is a different list, even though it starts with the same items.

---

### 🧪 Try this!

```python
animals = ["tiger", "lion"]
zoo = animals
zoo.append("zebra")

print("animals:", animals)
print("zoo:", zoo)
```

**Why do both change?**  
Because they’re the _same_ list under the hood!

Let's look at this a little bit more to help us understand...

...time to dig into **computer memory**!

---

### 🧠 Where Python Lists Live: Stack and Heap

When you create a list in Python, it might look simple:

```python
my_list = [10, 20, 30]
```

But under the hood, Python is doing something more clever using **two parts of memory**:

#### 📦 1. The Heap — Where the List Really Lives

The **heap** is a part of memory where Python stores objects that can **change size or content** — like lists, dictionaries, or custom objects.

- The actual **list structure and its items** (like `10`, `20`, `30`) are stored in the **heap**.
- The heap allows lists to **grow, shrink, and be shared** between different parts of your program.

#### 📍 2. The Stack — Where the Reference Lives

The variable name `my_list` lives in a different part of memory called the **stack**. But it doesn't hold the whole list — it holds a **reference** (or a **pointer**) to the list in the heap.

Think of it like this:

```text
[stack]          [heap]
my_list ───────▶ [10, 20, 30]
```

- The **stack** keeps track of your variable names and what they point to.
- The **heap** holds the actual data.

#### 💡 Interesting!

- If you create another variable like `other_list = my_list`, both variables **point to the same list** in the heap.
- If you change the list using one variable, the change will be visible through the other too — because they point to the **same place in memory**.

```python
other_list = my_list
other_list.append(40)
print(my_list)  # [10, 20, 30, 40]
```

---

### 📦 Why this matters

Understanding this helps when:

- You're working with functions that return or change lists
- You're debugging unexpected changes
- You're managing memory in bigger programs

---

### 🔍 Curious Extras

- Python lists are stored as **arrays of pointers**
- All items in the list don’t have to be the same type
- Lists grow dynamically as you add more items

---
