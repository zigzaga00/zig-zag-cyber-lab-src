---
title: "\U0001F40D Technique Card: Getting Input From the User in Python (practical)"
tags: [python, practical]
---

## 🟨🐍 **Technique Card: Getting Input From the User in Python (practical)**

### 🌟 What You’ll Learn

How to **ask the user questions** in your Python program and **use their answers** in creative ways. You'll also learn how to **turn the input into numbers** when needed.

---

### 🧑‍💻 Why Is This Useful?

Sometimes you want your program to feel _interactive_, like:

- “What’s your name?”
- “How old are you?”
- “Pick a number between 1 and 10!”

Using `input()` lets your program talk to the user and get answers back.

---

### 🧪 Try It Out: Basic Input

```python
name = input("What is your name? ")
print("Hello, " + name + "!")
```

✅ This asks the user for their name and then says hello.

---

### 🧠 Remember: `input()` always gives you a **string**

That means even if you type a number, Python thinks it's **text**.

```python
age = input("How old are you? ")
print(age + 5)  # ⚠️ This gives an error!
```

---

### 🔧 Converting Input to a Number

If you want to use numbers (like adding or comparing), you’ll need to **cast** the string to a number using `int()` or `float()`.

```python
age = int(input("How old are you? "))
print("Next year, you'll be", age + 1)
```

Here’s what happens:

- `input()` asks the question
- `int(...)` changes the answer from text to a number

You could also use:

```python
age = input("How old are you? ")
age = int(age)
print("Next year, you'll be ", age + 1)
```

---

### 🧪 Try This Challenge

```python
number = int(input("Pick a number: "))
print("Double your number is", number * 2)
```

---

### 🎒 You Might Need This Too

Sometimes you want a number with decimals, not just whole numbers. Use `float()` instead:

```python
temperature = float(input("What’s the temperature today? "))
print("Tomorrow might be", temperature + 1.5)
```

---

### ⚠️ Be Careful!

If the user types something that **isn’t a number**, Python will give an error!  
You’ll learn how to fix that with **error handling** in other technique cards.

---

### 💡 Top Tips

- Always use `input()` for asking questions.
- Remember: It gives back a string (text), even if it looks like a number.
- Use `int()` for whole numbers, `float()` for decimal numbers.
- Put `input()` _inside_ the brackets of `int()` or `float()` when needed.

---

### 🔗 Other Useful and Related Technique Cards

- 🐍 [Technique Card: str and int in Python (practical)](str-int-python-practical.md)

---

### 📹 Video Link

[![Watch the video](../python.png)](input-python-practical.mp4)

---
