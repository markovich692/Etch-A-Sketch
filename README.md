# Etch-A-Sketch

A **browser-based sketchpad** inspired by the classic Etch-A-Sketch toy. Built using **vanilla JavaScript, HTML, and CSS**, this project demonstrates dynamic DOM manipulation, event handling, and responsive layout with flexbox.

---

## Features

- Create a customizable **n x n grid**.
- **Draw** by hovering over grid cells — the cells leave a “trace” as you move the cursor.
- Dynamically **update the grid size** at any time.
- Smooth interactions with **hover** and **active** effects on buttons.

---

## How It Works

### 1. **Clone the repository**

```bash
git clone https://github.com/markovich692/Etch-A-Sketch.git

### 2. Open the project in a browser

* Navigate to the cloned folder.
* Open `index.html` in your preferred browser.

### 3. Set the grid size

* By default, the page only shows the **"Set Grid Size"** button — no grid is displayed initially.
* Click the button to enter a number (maximum **100**).
* This creates an **n x n grid**, where n is the number you entered.
* If a grid already exists, it will be cleared and replaced with the new size.

### 4. Start sketching

* Hover over the grid cells to leave a trace.
* You can draw freely on the grid to create sketches.

### 5. Adjust the grid anytime

* Click the **"Set Grid Size"** button again to input a new number.
* The previous grid will be replaced automatically with the new **n x n grid**.

---

## What This Project Showcases

* **DOM Manipulation** — dynamically creating and updating elements.
* **Event Handling** — responding to button clicks and mouse hover events.
* **Flexbox Layout** — arranging grid cells responsively.

---

## Usage Tips

* Only numbers between **1 and 100** are allowed for the grid size.
* The **hover effect** simulates drawing, and the **active button effects** provide visual feedback.

## Have Fun!

```
