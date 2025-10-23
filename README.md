```markdown
# 🧮 My Calculator

A modern and responsive **React.js** calculator with a clean design and essential math operations.  
This project was built to demonstrate strong understanding of **componentization**, **state management with React Hooks**, and **front-end architecture best practices**.

---

## 🚀 Tech Stack

- ⚛️ **React.js** — main library for UI development  
- 💅 **Styled-components** — modular and reusable styling  
- 🧠 **React Hooks (useState)** — state control and component behavior  
- 🌐 **Vite / Create React App** — modern development environment (depending on your setup)  

---

## 💡 Features

✔️ Basic operations: **addition (+)**, **subtraction (-)**, **multiplication (x)**, and **division (/)**  
✔️ **Division by zero handling** — shows `"Error"` on the display  
✔️ **Clear (C)** and **Delete last digit (CE)** functions  
✔️ **Decimal point support**  
✔️ Displays **current operation history**  
✔️ Entire logic handled through **React state**, with no external libraries  

---

## 🧱 Project Structure

```

src/
├── components/
│   ├── Button.jsx       # Reusable button component
│   ├── Input.jsx        # Calculator display component
│
├── styles/
│   └── index.js         # Global and layout styles (Container, Content, Row, Title)
│
├── App.jsx              # Main application logic
├── global.js            # Global styles (fonts, background, etc.)
└── main.jsx             # React entry point

```

---

## 🧩 Core Logic (`App.jsx`)

The calculator relies on **three main states**:

| State | Description |
|--------|-------------|
| `currentNumber` | Current display value (stored as a string for easy digit handling) |
| `firstNumber` | The first number stored before an operation |
| `operation` | The selected operator (`+`, `-`, `x`, `/`) |

The `handleEqual()` function coordinates which math operation to execute based on the selected operator.  
Error handling ensures the calculator never enters an invalid state.

---

## 🖥️ User Interface

The UI was designed to be **minimalistic and intuitive**, with proper spacing, typography, and button hierarchy.  
Buttons are organized into `<Row />` components to mimic the classic calculator layout.

Example layout:

```


````

## ⚙️ How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-calculator.git
````

2. **Navigate into the project folder**

   ```bash
   cd react-calculator
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open in your browser**

   ```
   http://localhost:5173
   ```

---

## 🧠 Key Learnings & Best Practices

* Component-based architecture
* Correct usage of `useState` and asynchronous state updates
* Logical consistency between multiple operations
* Clean UI/UX and responsive layout
* String and number manipulation in React
* Clean Code and naming conventions

---

## 🧰 Future Improvements

* Add **dark/light mode**
* Enable **keyboard input support**
* Add **operation history**
* Migrate to **TypeScript**
* Add **unit tests** with Jest and React Testing Library

---

## 👨‍💻 Author

**Helber Soares Mota**
🚀 Full Stack Developer | Officer at the Brazilian Navy
📍 Rio de Janeiro, Brazil
🔗 [LinkedIn](https://www.linkedin.com/in/helbersoares) • [GitHub](https://github.com/helberjf)

---

## 🏁 License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute it as you wish.

---
