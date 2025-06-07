---
title: "\U0001F40D Technique Card: Dictionaries in Python (practical)"
tags: [python, practical]
---

## 🟨🐍 **Technique Card: Dictionaries in Python (practical)**

**Skill:** Using dictionaries to store and look up information  
**Good for:** Storing pairs of data like names and scores, words and meanings, country and capital, etc.

---

### 🧠 What’s a Dictionary in Python?

A dictionary is like a mini **reference book** or a **box of labelled drawers**.  
You use a **key** to look up a **value** like in a real dictionary you use a **word** to look up a **meaning**.

```python
# Example: animal sounds
animal_sounds = {
    "cat": "meow",
    "dog": "woof",
    "cow": "moo"
}

print(animal_sounds["dog"])  # Output: woof
```

---

### 💡 Common Use Cases for Dictionaries

| Use Case                         | Description                                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| Storing settings or options      | For example, keeping a user’s preferences for a game (`{"volume": 70, "difficulty": "easy"}`) |
| Counting things                  | Like how many times each word appears in a sentence                                           |
| Matching things                  | Country to capital, word to translation, username to password                                 |
| Lookup tables                    | Fast way to get values using keys (e.g., Morse code translator)                               |
| Storing scores                   | Player names and their scores in a game                                                       |
| Representing data from CSV files | Each row of data as a dictionary with column names as keys                                    |

---

### 🧪 Try it Yourself

```python
# Create a dictionary of favourite colours
favourite_colours = {
    "Alice": "blue",
    "Bob": "green",
    "Charlie": "red"
}

# Print Bob's favourite colour
print(favourite_colours["Bob"])
```

---

### 🧱 Key Techniques

| Task                    | How to do it                                          |
| ----------------------- | ----------------------------------------------------- |
| Create a dictionary     | `my_dict = {"key": "value"}`                          |
| Get a value             | `my_dict["key"]`                                      |
| Add a new pair          | `my_dict["new_key"] = "new_value"`                    |
| Change a value          | `my_dict["key"] = "new_value"`                        |
| Loop through dictionary | `for key in my_dict:` <br> `print(key, my_dict[key])` |

!!! note
The **values** in a Python **dictionary** can be any **datatype** such as **strings** or **integers** or even **lists** and a **dictionary** can mix the **datatypes** of the **values** but the **keys** can only be **strings** or **integers** or **floats** or **tuples**

---

### 🎯 Practice Challenges

1. **Pet Sounds Dictionary**  
   Create a dictionary of animals and the sounds they make. Ask the user to type in an animal and print the sound.

2. **Top Scores**  
   Make a dictionary of names and scores. Print out each player’s name and score.

3. **Mini Translator**  
   Create a simple English to French dictionary. Ask the user for a word and show the translation.

---

### 🛠️ Useful Concepts

- A dictionary is **faster** than a **list** to retrieve data (it doesn’t matter much in small projects but when working with large amounts of data it begins to make a difference).
- Keys must be **unique**.
- You **can’t use a list as a key**, but you can use strings or numbers.

---

### 🔗 Linked Cards

- 🐍 [Technique Card: Iterating Dictionaries and .items() Method (practical)]()
- 🐍 [Technique Card: Lists in Python (practical)](lists-python-practical.md)
- 🐍 [Technique Card: Tuples in Python (practical)](tuples.md)

---

### 📹 Video Link

[![Watch the video](../python.png)](https://www.youtube.com/watch?v=Fq0mYaAeGcw)

---
