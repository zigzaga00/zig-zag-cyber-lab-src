---
title: "Technique Card: links and navigation in html (practical)"
tags: [html]
---

## 🌐🟨 Technique Card

### **HTML: Links and Navigation**

Create clickable paths between your pages — or out to the world!

---

### 🚀 What you’ll learn

- How to add clickable links using `<a>`
- The difference between **internal** and **external** links
- How to build a simple navigation menu

---

### 🛠 Try this example

Copy and paste this into your HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <!-- Navigation Menu (internal links) -->
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Me</a></li>
        <li><a href="projects.html">Projects</a></li>
      </ul>
    </nav>

    <h1>Welcome to My Page!</h1>

    <!-- External link -->
    <p>
      Check out this cool site:
      <a href="https://www.natgeokids.com" target="_blank">Nat Geo Kids</a>
    </p>
  </body>
</html>
```

---

### 🧩 What’s going on?

| Tag / Attribute      | What it means                                                |
| -------------------- | ------------------------------------------------------------ |
| `<a href="...">`     | Anchor tag: makes a clickable link                           |
| `href="about.html"`  | **Internal link** – connects to another page in your project |
| `href="https://..."` | **External link** – goes to another website on the internet  |
| `target="_blank"`    | Opens the link in a new tab (helpful for external links)     |
| `<nav>`              | Groups together your site’s main links                       |
| `<ul>` and `<li>`    | Make a list for your menu items                              |

---

### 🔀 Internal vs. External Links

| Internal Links                            | External Links                                   |
| ----------------------------------------- | ------------------------------------------------ |
| Go to other pages in your **own** website | Go to a page on a **different** website          |
| Use file names like `about.html`          | Use full URLs like `https://bbc.com`             |
| Don’t need `target="_blank"` (usually)    | Often use `target="_blank"` to open in a new tab |

---

### 🧪 Try it yourself!

- Make a nav bar that links to 3 other pages in your project folder
- Add an external link to your favourite site that opens in a new tab
- Try changing the order or text in your nav menu

---

### 💡 Top Tips

- Internal links only work if the file name is correct — spelling matters!
- You can create a folder called `pages/` and link like this: `pages/about.html`
- Always test your links to make sure they work

---

### 🧠 Fun Fact

Links were the **original magic** of the web — connecting ideas and pages like a giant spider web (that’s where the name "World Wide Web" comes from!).

---

### 🔗 You might also like...

👉 **Technique Cards**

- [Technique Card: HTML basics (practical)](html-basics.md)
- [Technique Card: working with images in html (practical)](html-images-1.md)

---

### 📹 Video Link

[![Watch the video](../network1.png)](https://www.youtube.com/watch?v=R8HhHR6PM4U)

---
