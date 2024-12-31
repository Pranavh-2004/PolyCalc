# **PolyCalc (short for Polyglot Calculator)**

**PolyCalc** is a multi-language arithmetic calculator project aimed at mastering the basics of various programming languages. The project implements a simple calculator in multiple languages, including Python, C, Go, TypeScript, and JavaScript, demonstrating the fundamentals of input handling, arithmetic operations, and formatted output.

---

## **Features**

- 🧮 Performs basic arithmetic operations: addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
- ✅ Input validation for numbers and operators.
- 🎯 Displays results with two decimal precision.
- 🛠 Modular and structured code for each language, showcasing best practices.

---

## **Languages Implemented**

- **Python**
- **C**
- **Go**
- **TypeScript**
- **JavaScript**

---

## **Getting Started**

Follow the instructions below to run the calculator in your preferred language.

### **Python**

1. Install Python 3.x.
2. Run the program:
   ```bash
   python simple_calculator.py
   ```

### **C**

1. Use GCC to compile:
   ```bash
   gcc simple_calculator.c -o simple_calculator
   ```
2. Run the program:
   ```bash
   ./simple_calculator
   ```

### **Go**

1. Install Go.
2. Run the program:
   ```bash
   go run simple_calculator.go
   ```

### **Typescript**

1. Install dependencies: (shown wrt pnpm as i used it for this project)
   ```bash
   pnpm install
   ```
2. Compile the code:
   ```bash
   pnpm tsc
   ```
3. Run the compiled code:
   ```bash
   node simple_calculator.js
   ```

### **Javascript**

1. Run directly with Node.js:
   ```bash
   node simple_calculator.js
   ```

## Project Structure

The project is organized into the following directories and files:

```plaintext
PolyCalc/
├── Python/
│   └── calculator.py
├── C/
│   └── calculator.c
├── Go/
│   └── calculator.go
├── TypeScript/
│   └── calculator.ts
├── JavaScript/
│   └── calculator.js
├── README.md
└── .gitignore
```

## **Contributing**

Contributions are welcome! If you’d like to add more languages or features:

1. **Fork this repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/new-language
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "Add [language] implementation"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/new-language
   ```
5. **Submit a pull request.**

## License

This project is licensed under the [MIT License](LICENSE).