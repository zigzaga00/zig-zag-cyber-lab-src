---
title: "\U0001F40D Technique Card: Reading CSV Files with Pandas (practical)"
tags: [python, data, practical, pandas]
---

## 🟨🐍 **Technique Card: Reading CSV Files with Pandas (practical)**

**Skill**: Reading and exploring data  
**You’ll need**: Python, Pandas installed (`pip install pandas`), a `.csv` file  
**You’re learning this because**: It helps you work with real-world data easily, especially for **Digital Changemaker** projects.

---

### 🔍 What You’ll Learn

- How to import `pandas`
- How to read a CSV file into a DataFrame
- How to look at the first few rows
- How to understand the shape and structure of your data

---

### 🧰 Step-by-Step

1. **Import pandas**

```python
import pandas as pd
```

2. **Read a CSV file**  
   Replace `"data.csv"` with your own file name.

```python
data = pd.read_csv("data.csv")
```

3. **Look at the top of the data**  
   This shows the first 5 rows.

```python
print(data.head())
```

4. **See how many rows and columns there are**

```python
print(data.shape)
```

5. **See the column names**

```python
print(data.columns)
```

6. **See a summary of the data**  
   Useful to check numbers and missing values.

```python
print(data.info())
```

---

### 💡 Tip

- Make sure your `.csv` file is in the same folder as your Python file, or give the full path.
- If you get encoding errors, try:

```python
pd.read_csv("data.csv", encoding="utf-8")
```

---

### 🎯 Try It Out

Load an example CSV file - create one like the following if you want to keep it simple:

```csv
Name,Food,Distance_km
Tom,Apples,150
Sara,Strawberries,600
Ben,Carrots,50
```

Use the tools given on this technique card to explore the data.

---

### 🧪 Make It Your Own

- Use **Pandas** to work with data from our **digital changemakers** project idea cards!

---

### 🔗 Linked Cards

- 📊 [Technique Card: Working With CSV Files (practical)](../../data-handling/technique-cards-practical/csv-files.md)

### 📹 Video Link

[![Watch the video](../python.png)](https://www.youtube.com/watch?v=XjNZK14qDp0)

---
