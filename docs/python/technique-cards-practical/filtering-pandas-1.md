---
title: "\U0001F40D Technique Card: Filtering Data using Pandas (practical)"
tags: [python, pandas, practical]
---

### 🟨🐍 **Technique Card: Filtering Data using Pandas (practical)**

#### 🧰 What You’ll Learn

How to filter a table of data (DataFrame) using Pandas so you can work with just the parts you care about — like countries in a certain continent.

---

### 🧠 Key Concept

Filtering means picking only the rows in a table (called a DataFrame) that match something — like rows where the “Continent” is “Europe”.

---

### 🛠️ How to Do It

```python
import pandas as pd

# Read in the data
df = pd.read_csv("countries.csv")

# See what the table looks like
print(df.head())

# Filter rows where the continent is europe
europe_df = df[df["continent"] == "europe"]

# Show the first few rows of the result
print(europe_df.head())
```

---

### 🗂️ What’s Going On?

- `df["continent"] == "europe"` checks each row to see if it's in europe.
- `df[...]` gives you just the rows where that is True.
- You can store this in a new DataFrame like `europe_df`.

---

### 🌏 You Could Try

✅ Filtering by a different continent:

```python
asia_df = df[df["continent"] == "asia"]
```

✅ Filtering by more than one condition:

```python
# countries in asia with gini less than 35
equal_asia_df = df[(df["continent"] == "asia") & (df["gini"] < 35)]
```

✅ Using `|` for OR instead of `&`:

```python
# countries in asia OR europe
asia_or_europe_df = df[(df["continent"] == "asia") | (df["continent"] == "europe")]
```

---

### 🎯 Challenge Ideas

- Filter for countries with a GINI of more than 40 - what do you notice about them?
- Find all the countries in a continent of your own choice.
- Filter to see only countries in europe with a GINI of less than 30.

---

### 🧩 Vocabulary Boost

- **DataFrame** – A table of data in Pandas.
- **Filter** – Picking rows that match a condition.
- **Boolean** – True or False — used in filtering.

---

### 🔗 Linked Cards

- 🐍 [Technique Card: Reading CSV Files with Pandas (practical)](csv-pandas-practical.md)
- 🐍 [Technique Card: Pandas and Matplotlib Bar Charts (practical)](bar-1.md)
- 🐍 [Technique Card: Understanding Pandas Series and Dataframes (deeper)](../technique-cards-deeper/series-df.md)
- 📊 [Technique Card: Working With CSV Files (practical)](../../data-handling/technique-cards-practical/csv-files.md)
- 📊 [Technique Card: Telling Stories With Data (deeper)](../../data-handling/technique-cards-deeper/stories.md)

---

### 📹 Video Link - Filtering Data

[![Watch the video](../python.png)](filtering-pandas-1.mp4)

---

### 📹 Video Link - Filtering With Multiple Conditions

[![Watch the video](../python.png)](filtering-pandas-2.mp4)

---
