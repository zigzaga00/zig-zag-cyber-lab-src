---
title: "\U0001F40D Technique Card: Series and Dataframes in Pandas (deeper)"
tags: [python, pandas, deeper]
---

## 🟦🐍 **Technique Card: Understanding Series and DataFrames in Pandas (deeper)**

### 👩‍🏫 What Are We Learning?

When we work with data using **Pandas**, we often hear about **Series** and **DataFrames**. But what exactly are they? This card will help you understand the difference and why they matter.

---

### 🧱 What Is a Pandas Series?

A **Series** is like:

- A **list** of data with a label for each item.
- A **dictionary** with keys (labels) and values.
- A **column** in a spreadsheet.

```python
import pandas as pd

s = pd.Series([100, 200, 300], index=["a", "b", "c"])
print(s)
```

```
a    100
b    200
c    300
dtype: int64
```

➡ Each item has a label (`a`, `b`, `c`) and a value (`100`, `200`, `300`).

---

### 📊 What Is a Pandas DataFrame?

A **DataFrame** is like:

- A **whole table** or spreadsheet.
- A **collection of Series** working together.
- It has **rows** and **columns**.

```python
data = {
    "Name": ["Lila", "Tom", "Ravi"],
    "Age": [10, 11, 9]
}
df = pd.DataFrame(data)
print(df)
```

```
   Name  Age
0  Lila   10
1   Tom   11
2  Ravi    9
```

➡ You can think of `df["Name"]` or `df["Age"]` as separate **Series**.

---

### 📦 Analogy: The Bookshelf

| Concept     | Analogy              |
| ----------- | -------------------- |
| Series      | A **single book**    |
| DataFrame   | A **shelf of books** |
| Index       | The **page number**  |
| Column Name | The **book title**   |

So when you grab `df["Age"]`, you're pulling out just the **Age book** (a Series), and the DataFrame is the whole shelf.

---

### 🔍 How to Explore a DataFrame

```python
df.shape      # (3, 2) → 3 rows, 2 columns
df.columns    # Index(['Name', 'Age'])
df.head()     # First 5 rows
df.info()     # Quick summary
```

---

### 🧠 Why This Matters

When you understand that:

- A **Series** is one column.
- A **DataFrame** is many columns working together.

…you’ll be able to **use your code more cleverly**, especially when:

- Filtering data
- Making graphs
- Calculating averages
- Loading and saving data

---

### 💬 Fun Fact

Even when you filter a DataFrame down to one column using `df["column"]`, you're working with a **Series** again!

---

### 🔗 Linked Cards

- 🐍 [Technique Card: Reading CSV Files with Pandas (practical)](../technique-cards-practical/csv-pandas-practical.md)
- 🐍 [Technique Card: Filtering Data using Pandas (practical)](../technique-cards-practical/filtering-pandas-1.md)
- 🐍 [Technique Card: Pandas and Matplotlib Bar Charts (practical)](../technique-cards-practical/bar-1.md)
- 🐍 [Technique Card: Scatter Graphs with matplotlib (practical)](../technique-cards-practical/scatter-1.md)

---
