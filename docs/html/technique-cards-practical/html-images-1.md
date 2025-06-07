---
title: "Technique Card: working with images in html (practical)"
tags: [html]
---

## 🌐🟨 Technique Card

### **HTML: Working with Images 1 (practical)**

Learn how to add pictures to your web pages and make them look great!

---

### 🚀 What you’ll learn

- How to use the `<img>` tag
- How to set the image source
- How to add image descriptions (for accessibility)
- How to change the size of an image

---

### 🛠 Try this example

Save an image in the same folder as your HTML file. Call it `cat.png`.

Now use this code in your HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Images in HTML</title>
  </head>
  <body>
    <h1>My Favourite Animal</h1>
    <img src="cat.png" alt="A cute cat" width="300" />
    <p>This is a picture of a cat. Isn’t it cute?</p>
  </body>
</html>
```

!!! important
Lots of images found online are **copyright** protected - we can get free, good quality images which we are **allowed to use** from [pexels](https://www.pexels.com/) and [unsplash](https://unsplash.com/) | when downloading images from **pexels** the **medium quality** is okay

---

### 🧩 What’s going on?

| Part    | What it means                                       |
| ------- | --------------------------------------------------- |
| `<img>` | Adds an image — it doesn’t need a closing tag!      |
| `src`   | The file name of the image (or a web address)       |
| `alt`   | Description for screen readers or when image breaks |
| `width` | How wide the image should be (in pixels)            |

---

### 🧪 Try it yourself!

- Change the file name to another picture:  
  `src="dog.png"`
- Use an online image:  
  `src="https://example.com/bird.jpg"`
- Add a height:  
  `height="200"`
- Remove the `width` and `height` and see what happens!

---

### 💡 Top Tips

- 📁 Make sure your image file is saved in the _same folder_ as your HTML file (unless using a web link).
- 📏 You can control image size using **width** and **height** in pixels (`px`).
- 🎨 Want to center the image or add a border? Try the `CSS: Styling Basics` card!

---

### 🔗 You might also like...

👉 **Technique Cards**

- [Technique Card: HTML basics (practical)](html-basics.md)
- [Technique Card: links and navigation in html (practical)](html-links.md)

---

### 📹 Video Link

[![Watch the video](../network1.png)](https://www.youtube.com/watch?v=W1zwsHIL9vY)

---
