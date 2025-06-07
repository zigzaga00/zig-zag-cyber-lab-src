---
title: "Technique Card: Lists in Programming and Scratch in Particular (deeper)"
tags: [scratch, deeper]
---

## 🟦🐱 Deeper Dive: How Lists Work in Programming and Scratch in Particular

### 🚀 What This Card Is For:

To help you understand what’s _really_ happening when you use a list in programming — especially how lists are stored in memory and how Scratch uses them.

---

### 🧩 What is a List?

In programming, a **list** is a way to store lots of values in **one place**, in a specific **order**.

It’s like:

```text
A labelled box with slots inside:
MyList = [ "apple", "banana", "pear" ]
```

Each item has a **position** (starting from 1 in Scratch, and usually from 0 in most other languages).

---

### 🧠 What’s Really Happening (In Any Language):

When you make a list, the computer does a few clever things:

1. **Finds a place in memory** where it can store each item.
2. Keeps track of the **order** of the items.
3. Lets you access, change, or delete items using a **position number (index)**.
4. Adjusts the memory when you add or remove items.

The list acts like a row of memory boxes, one after the other.

---

### 📦 Where Is the List Stored in Memory?

When a list is created, it’s often stored in a special part of computer memory called the **heap**.

#### What’s the heap?

- The **heap** is a big pool of memory used for storing things that can grow and change while the program is running (like lists!).
- Unlike the **stack**, which is for short-lived things like function calls and local variables, the heap is great for bigger, flexible things that can stay around longer.

#### Why use the heap?

- **Lists can change size**, and the heap is designed to handle that.
- The heap gives the program room to **expand or shrink the list** as needed.
- A **reference or pointer** (a memory address) is kept in your code so you can find and use the list later.

Think of the heap like a big warehouse:

- Your list lives in a labelled crate inside.
- You keep a note of the crate’s location so you can look things up later.

---

### 🔍 Lists in Scratch

Scratch makes lists simple, but behind the scenes it’s still working like a real programming list:

| Feature               | What You See in Scratch                   | What’s Happening Behind the Scenes              |
| --------------------- | ----------------------------------------- | ----------------------------------------------- |
| You create a list     | “Make a List” dialog                      | Scratch sets up storage in memory (likely heap) |
| Add item to list      | `add [item] to [list]`                    | New memory is used to hold the item             |
| Delete item from list | `delete (2) of [list]`                    | Memory is reshuffled and indexes updated        |
| Access an item        | `item (3) of [list]`                      | Scratch looks up that memory position           |
| Replace an item       | `replace item (1) of [list] with [value]` | That memory slot is updated                     |

> 🧠 Note: Scratch hides this complexity, but if you learn Python or JavaScript later, you’ll see lists behave in very similar ways — just with more code.

---

### 🧪 Mutable and Dynamic

- **Mutable**: Lists can be changed — items can be added, removed, or altered.
- **Dynamic**: Lists can grow and shrink. Scratch and most languages automatically manage memory to keep this working smoothly.

---

### ⚡ Common Uses for Lists

- Storing high scores in a game
- Keeping track of a to-do list
- Making a quiz with lots of questions
- Creating menus or inventories
- Remembering a path, recipe steps, or player names

---

### 🛠️ Related Scratch Blocks

| Block                                     | What It Does                         |
| ----------------------------------------- | ------------------------------------ |
| `add [thing] to [list]`                   | Adds an item to the end              |
| `delete (2) of [list]`                    | Deletes the item at position 2       |
| `insert [thing] at (1) of [list]`         | Puts the item into a specific place  |
| `replace item (3) of [list] with [thing]` | Changes one item                     |
| `item (x) of [list]`                      | Reads an item                        |
| `length of [list]`                        | Tells how many items are in the list |
| `list contains [thing]?`                  | Checks if an item is there           |

---

### 🧭 Why This Matters

Lists are one of the most **powerful tools** in all programming. Even in Scratch, you’re using the same ideas real software engineers use!

Understanding how lists are stored and used helps you:

- Think like a computer scientist
- Avoid mistakes like losing data
- Build more powerful programs

---

### 🛠️ More Practical

To learn more about **practically using lists** in Scratch you can check out the following card: [Technique Card: Using Lists in Scratch (practical)](../technique-cards-practical/lists-scratch.md)

---
