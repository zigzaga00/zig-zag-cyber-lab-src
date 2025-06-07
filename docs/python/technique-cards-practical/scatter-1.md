---
title: "\U0001F40D Technique Card: Scatter Graphs with matplotlib (practical)"
tags: [python, matplotlib, practical]
---

## 🟨🐍 **Technique Card: Scatter Graphs with `matplotlib` (practical)**

### 🎯 What You’ll Learn

- How to use `matplotlib` to make a **scatter graph** in Python.
- How to plot **x and y values**.
- How to spot **correlation patterns**.

---

### 🧰 You Will Need

```python
import matplotlib.pyplot as plt
```

---

### ✏️ Example: Plotting Dummy Data

Here’s some simple data showing **hours revised** (x-axis) and **test scores** (y-axis).

```python
import matplotlib.pyplot as plt

# Dummy data
hours_revised = [1, 2, 3, 4, 5, 6, 7]
test_scores = [52, 55, 60, 63, 67, 72, 75]

# Create the scatter plot
plt.scatter(hours_revised, test_scores)

# Add labels and title
plt.xlabel("Hours Revised")
plt.ylabel("Test Score (%)")
plt.title("Revision Time vs Test Score")

# Show the graph
plt.show()
```

---

### 👀 What You’ll See

A scatter graph where the points go **upwards** as the hours increase – this is a **positive correlation**.

---

### 🔍 Patterns to Look For

| Pattern Type       | What It Looks Like                     | What It Means                 |
| ------------------ | -------------------------------------- | ----------------------------- |
| **Positive**       | Points rise together ↗️                | More x = more y               |
| **Negative**       | One goes up, the other down ↘️         | More x = less y               |
| **No Correlation** | Points are random, no clear pattern ❓ | No clear link between x and y |

---

### 📉 Negative and No Correlation

What happens to the data points on the scatter graph when you start to plot the following data...

```python
hours_tv_watched = [1, 2, 3, 4, 5, 6, 7]
test_scores = [95, 88, 81, 75, 68, 54, 41]
```

...and how about with this data...

```python
hours_pet_sleeps = [1, 2, 3, 4, 5, 6, 7]
test_scores = [83, 45, 56, 52, 75, 38, 61]
```

---

### 💡 Practise

- Try creating **scatter graphs** base on data you provide in your code - can you get **positive correlation**? How about **negative correlation**? And **no correlation**?
- Use data from a **dataset** provided in our projects - would a **scatter graph** help you answer any questions you may have about it?
- Collect some **real data** yourself and see if a **scatter graph** can help you understand it.

---

### 🏷️ Adding Labels to the Data Points

To label each data point on a **scatter plot in Matplotlib**, you can use the `plt.text()` function to add a label **next to each point**.

---

### ✏️ Example with Labels on Each Point

```python
import matplotlib.pyplot as plt

# Dummy data
hours_revised = [1, 2, 3, 4, 5, 6, 7]
test_scores = [52, 55, 60, 63, 67, 72, 75]
student_names = ["Ali", "Ben", "Chloe", "Dani", "Eve", "Finn", "Grace"]

# Create the scatter plot
plt.scatter(hours_revised, test_scores)

# Add labels to each point
for i in range(len(student_names)):
    plt.text(hours_revised[i] + 0.1, test_scores[i], student_names[i], fontsize=9)

# Add axis labels and title
plt.xlabel("Hours Revised")
plt.ylabel("Test Score (%)")
plt.title("Revision Time vs Test Score")

# Show the graph
plt.show()
```

---

### 💡 Notes:

- `+ 0.1` moves the label slightly to the right so it doesn’t sit right on top of the dot.
- You can tweak this for **better readability**: move the label above, below, or next to the point by adjusting the x and y positions.

---

### 🔗 Linked Cards

- 🐍 [Technique Card: Pandas and Matplotlib Bar Charts (practical)](../technique-cards-practical/bar-1.md)
- 🐍 [Technique Card: Reading CSV Files with Pandas (practical)](csv-pandas-practical.md)
- 🐍 [Technique Card: Filtering Data using Pandas (practical)](filtering-pandas-1.md)
- 📊 [Technique Card: Understanding Correlation (deeper)](../../data-handling/technique-cards-deeper/correlation.md)

### 📹 Video Link - Basic Scatter Graphs

[![Watch the video](../python.png)](scatter-1.mp4)

---

### 📹 Video Link - Real World Data

[![Watch the video](../python.png)](scatter-2.mp4)

---

### 📹 Video Link - Adding Labels to Data Points

[![Watch the video](../python.png)](scatter-3.mp4)

---
