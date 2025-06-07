---
title: "\U0001F40D Technique Card: Pandas and Matplotlib Bar Charts (practical)"
tags: [python, practical, matplotlib]
---

## 🟨🐍 **Technique Card: Bar Charts using `matplotlib` (practical)**

### 💡 What This Lets You Do

Create simple **bar charts** to visually compare data. Great for showing totals, categories, and differences.

---

### 🧰 You'll Need

- Python installed
- `matplotlib` installed (`pip install matplotlib` if needed)

---

### 🪄 Code Example: A Simple Bar Chart

```python
import matplotlib.pyplot as plt

# Data
categories = ["Apples", "Bananas", "Cherries"]
quantities = [10, 15, 7]

# Create bar chart
plt.bar(categories, quantities)

# Add labels
plt.title("Fruit Sold Today")
plt.xlabel("Fruit")
plt.ylabel("Quantity")

# Show chart
plt.show()
```

---

### 🔍 Key Parts Explained

| Code                                  | What It Does                                  |
| ------------------------------------- | --------------------------------------------- |
| `import matplotlib.pyplot as plt`     | Brings in the chart-making tools              |
| `plt.bar()`                           | Makes a bar chart                             |
| `plt.title()`, `xlabel()`, `ylabel()` | Adds labels                                   |
| `plt.show()`                          | Displays the chart in a window or output cell |

---

### 🛠️ Try This

Change the values in `categories` and `quantities` to match your own data (like food miles, recycling totals, etc.).

---

### 🎯 Mini Challenges

1. Create a bar chart showing how many children cycle, walk, or drive to school.
2. Try changing the colours using `color=["red", "yellow", "pink"]`.
3. Sort your data so the tallest bar is first.

---

### 📊 Using Data from a CSV with Pandas and Plotting with Matplotlib

You can load data from a `.csv` file using `pandas`, then select the columns you want to plot and assign them to `x` and `y` variables for clarity.

#### 🧪 Example Code

```python
import pandas as pd
import matplotlib.pyplot as plt

# Read data from a CSV file
df = pd.read_csv("fruit_sales.csv")

# Prepare x and y data from specific columns in the DataFrame
x = df["Fruit"]
y = df["Sold"]

# Create a bar chart
plt.bar(x, y)

# Add labels and a title
plt.title("Fruit Sold Today")
plt.xlabel("Fruit")
plt.ylabel("Quantity")
plt.show()
```

---

### 📁 Example CSV File (`fruit_sales.csv`)

| Fruit   | Sold |
| ------- | ---- |
| Apples  | 12   |
| Bananas | 18   |
| Oranges | 9    |

---

### ✅ Tips

- Make sure your `.csv` file is saved in the **same folder** as your Python script, or provide the full path to the file.
- Your column names in the `.csv` must **match exactly** what you type in your code (`"Fruit"` and `"Sold"` in this example).

---

### 🔗 Linked Cards

- [🐍 Technique Card: Reading CSV Files with Pandas (practical)](csv-pandas-practical.md)
- [📊 Technique Card: Working With CSV Files (practical)](../../data-handling/technique-cards-practical/csv-files.md)
- [📊 Technique Card: Percentages (deeper)](../../data-handling/technique-cards-deeper/percentages.md)
- [📊 Technique Card: Telling Stories With Data (deeper)](../../data-handling/technique-cards-deeper/stories.md)

---

### 📹 Video Link - Basic Bar Charts

[![Watch the video](../python.png)](bar-1.mp4)

---

### 📹 Video Link - Real World Data

[![Watch the video](../python.png)](bar-2.mp4)

---
