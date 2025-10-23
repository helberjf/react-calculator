# React Calculator

A clean, modern, and responsive calculator built with React. This project showcases componentization, predictable state with React Hooks, and simple, readable front-end architecture that’s easy to review in minutes.

- Live demo: 
- Repository: <a href="https://github.com/helberjf/react-calculator" target="_blank">helberjf/react-calculator</a>

---

## Highlights for recruiters

- Clear separation of concerns: presentation components vs. calculation logic in the container
- Predictable state management using React Hooks (useState) and explicit handlers
- Robust edge-case handling (e.g., division by zero renders “Error”)
- Minimal, readable code with a straightforward structure
- Easy to run locally and simple to extend

---

## Tech Stack

- ⚛️ React.js — UI library
- 💅 Styled-components — modular, reusable styling
- 🧠 React Hooks (useState) — state and component behavior
- ⚡ Vite — fast dev server and build tooling

---

## Features

- Basic operations: addition (+), subtraction (-), multiplication (×), division (÷)
- Decimal point support
- Clear (C) and Delete last digit (CE)
- Division-by-zero handling (display shows “Error”)
- Displays the first operand and selected operation as “history” while you type the second operand
- All logic handled through React state (no external math libraries)

---

## Project Structure

```text
src/
├── components/
│   ├── Button.jsx   # Reusable button component
│   └── Input.jsx    # Calculator display (current value, history, operation)
│
├── styles/
│   └── index.js     # Global layout components (Container, Content, Row, Title)
│
├── App.jsx          # Main app: state + handlers (core calculator logic)
├── global.js        # Global styles (fonts, theme, background)
└── main.jsx         # React entry point
```

Key state pieces (in App.jsx):
- currentNumber: string shown on the display (stored as string to simplify digit concatenation and CE behavior)
- firstNumber: the stored first operand before an operation
- operation: selected operator (+, -, ×, ÷)

The handleEqual() function coordinates which operation to execute based on the selected operator. Error handling prevents invalid states (e.g., division by zero).

---

## Getting Started

Prerequisites
- Node.js LTS (recommended 18.x or newer)
- npm (or yarn/pnpm)

Install and run
```bash
# Clone
git clone https://github.com/helberjf/react-calculator.git
cd react-calculator

# Install dependencies
npm install
# or: yarn
# or: pnpm install

# Start development server (Vite default)
npm run dev

# Open the printed URL in your terminal (commonly):
# http://localhost:5173
```

Production build
```bash
npm run build
# Optional local preview (if configured)
npm run preview
```

Common scripts (adjust according to your package.json)
- npm run dev — start development server
- npm run build — production build
- npm run preview — preview the built app locally

---

## How to Use

- Click digits (0–9) to build the currentNumber
- Use “.” to insert a decimal point (the UI prevents invalid formats)
- Choose an operation: +, -, ×, ÷
- Press “=” to compute the result
- Press “CE” to delete the last digit
- Press “C” to reset to the initial state
- If you divide by zero, the display shows “Error” and the next input resets gracefully

Example display behavior
- The main display shows currentNumber
- A smaller “history” line shows firstNumber and operation while you enter the second operand
- Error states reset appropriately once you input again

---

## Architecture and Decisions

Why the display is a string
- Easier digit-by-digit input, CE behavior, and decimal insertion
- Converts to numbers only at the moment of calculation

Single source of truth in App.jsx
- App.jsx owns the calculator state (currentNumber, firstNumber, operation)
- Child components (Input, Button) are “presentational” and receive data/handlers via props

Explicit handlers
- handleAddNumber, handleDeleteNumber (CE), handleClear (C), handleOperation (+, -, ×, ÷), handleEqual
- Small, predictable functions that make behavior easy to reason about and test

Error handling
- Division by zero sets currentNumber to "Error"
- Subsequent input replaces “Error” with a fresh value (no corrupted state)

Styling
- Styled-components provide encapsulated, reusable UI blocks (Container, Content, Row, Title)
- Keeps component styles colocated and maintainable

---

## Example: Input usage

In App.jsx, the display component receives the current value and the operation context, allowing the UI to render both the currentNumber and the “history” line when applicable.

```jsx
<Input
  value={currentNumber}
  history={firstNumber !== '0' ? firstNumber : ''}
  operation={operation}
/>
```

This keeps Input “dumb” (presentational) while App.jsx owns the logic.

---

## Edge Cases Covered

- Division by zero -> "Error"
- CE when there is only one digit -> resets to "0"
- Prevents malformed decimals (e.g., multiple dots)
- Clean reset behavior after “Error” or full clear (C)

---

## Roadmap

- Dark/Light theme toggle
- Full keyboard support (numbers, operations, Enter, Escape, Backspace)
- Operation history view
- TypeScript migration
- Unit tests with Jest/Vitest + React Testing Library
- Minor UX improvements (focus, active states, announce results for screen readers)

---

## What recruiters can look for

- Readability: clear state names, small handlers, straightforward branching
- Predictability: explicit state transitions and careful error handling
- Separation of concerns: App.jsx contains logic; Input/Button components focus on presentation
- Extensibility: easy to add keyboard support, percentage, sign toggle, memory, etc.
- Consistency: consistent styling and layout semantics using styled-components

---

## Contributing

Contributions are welcome. Please open an issue or a pull request with a clear description of the change and its motivation.

---

## License

This project is licensed under the MIT License.

---

## Author

<strong>Helber Soares Mota</strong><br />
Full Stack Developer | Rio de Janeiro, Brazil<br />
LinkedIn: <a href="https://www.linkedin.com/in/helbersoares" target="_blank">linkedin.com/in/helbersoares</a> • GitHub: <a href="https://github.com/helberjf" target="_blank">github.com/helberjf</a>
