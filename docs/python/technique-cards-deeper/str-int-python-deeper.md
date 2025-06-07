---
title: "\U0001F40D Technique Card: str and int in Python (deeper)"
tags: [python, deeper]
---

### 🟦🐍 **Deeper Dive: What’s Really Happening with str and int in Python?**

#### 🧠 **Big Idea**

Computers don’t know what “text” or “numbers” are the way we do. They only understand **binary** — 1s and 0s.  
But programming languages like Python help us **label** and **use** things like `"hello"` and `42` in a human way.

---

### 🔢 **What’s an `int`?**

An `int` is a **whole number**.

```python
age = 10
```

🧠 Inside the computer, `10` is stored as **binary**: `00001010`

Python treats this as a number it can:

- Add, subtract, multiply
- Compare (`>`, `<`)
- Use in loops or math

---

### 🔤 **What’s a `str`?**

A `str` is **text**, like:

```python
name = "Alex"
```

Each letter in `"Alex"` is stored as a **character code**:

- `"A"` = 65
- `"l"` = 108
- `"e"` = 101
- `"x"` = 120

🧠 These are stored using something called **ASCII** or **Unicode**.

So `"Alex"` becomes:  
`[65, 108, 101, 120] → 01000001 01101100 01100101 01111000`

The computer sees a **list of character codes**, not letters!

---

### ❌ Why Can’t You Add a str and an int?

```python
name = "Alex"
age = 10
print(name + " is " + age + " years old.")
```

🔴 This fails because Python sees:

```
"Alex" + " is " + [a number??] + " years old."
```

You’re mixing **text** with a **number**. Python says: “I don’t know how to glue these together.”

✅ You must convert the number into text with `str(age)` or use an f-string:

```python
print(f"{name} is {age} years old.")
```

---

### 🧠 Type Checking

Use `type()` to see what kind of thing you're using:

```python
print(type("Alex"))    # <class 'str'>
print(type(10))        # <class 'int'>
```

---

### 🧪 Did You Know?

- `"5"` and `5` look similar but behave very differently.
- `"5" + "3"` = `"53"` (text joined together)
- `5 + 3` = `8` (math!)

---

### 💬 What Does This All Mean?

You’re not just writing text and numbers — you’re **giving instructions to a machine** that sees everything as **patterns of bits**.

Understanding this helps you:

- **Fix errors** faster
- **Explain your code** to others
- Start thinking like a **real computer scientist**

---

### 📎 Optional Extension

Try this challenge:

```python
score = "7"
print(score + 3)      # What happens?
print(int(score) + 3) # What changes?
```

---

### 🛠️ Practical Technique Card

To look at how to actually use `str` and `int` in projects please check out:

- [Technique Card: str and int in Python (practical)](../technique-cards-practical/str-int-python-practical.md)

---

### 📹 Video Link

[![Watch the video](../python.png)](https://www.youtube.com/watch?v=tafvGBxYp5Q)

---
