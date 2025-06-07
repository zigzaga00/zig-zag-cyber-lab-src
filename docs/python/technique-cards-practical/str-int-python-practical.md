---
title: "\U0001F40D Technique Card: str and int in Python (practical)"
tags: [python, practical]
---

### 🟨🐍 **Technique Card: str and int in Python**

#### 🧠 **What Are str and int?**

- `str` means **string** → it's text, like `"hello"` or `"5"`
- `int` means **integer** → it's a **whole number**, like `5` or `42`

```python
name = "Alex"        # str (text)
age = 10             # int (number)
```

!!! note
We use `=` in Python to **assign** a **value** to a **variable** | for example `"Alex"` is the **value** which is **assigned** to a **variable** we have called `name`

---

### 🧩 **Problem**

You want to print:  
➡️ `"Alex is 10 years old."`

But this **won’t work**:

```python
print(name + " is " + age + " years old.")
```

❌ You’ll get an error! Why?  
Because you can’t add (`+`) a `str` and an `int` directly.

---

### 🛠️ **2 Ways to Fix It**

#### ✅ 1. **Convert the number to a string**

```python
print(name + " is " + str(age) + " years old.")
```

💡 Use `str()` to turn a number into text.

---

#### ✅ 2. **Use an f-string** (fancy and easy - it is the **recomended** solution!)

```python
print(f"{name} is {age} years old.")
```

💡 Put an `f` before the string and use `{}` to plug in values.

---

### ✨ Try It!

```python
favourite_number = 7
print("My favourite number is " + str(favourite_number))      # Method 1
print(f"My favourite number is {favourite_number}")           # Method 2
```

---

### 🧪 Challenge!

Change the code so it says:

```text
"Jordan is 12 years old and loves the number 8!"
```

---

### 📎 Tips

- Use `type()` to check if something is a string or an int  
  → e.g., `print(type(name))`

---

### 🐟 Deep Dive

You can find out more about `str` and `int` by checking out [Technique Card: str and int in Python (deeper)](../technique-cards-deeper/str-int-python-deeper.md)

---

### 📹 Video Link

[![Watch the video](../python.png)](str-int-python-practical.mp4)
