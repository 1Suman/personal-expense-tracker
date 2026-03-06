# 💸 Personal Expense Tracker

A clean, responsive expense tracking web app built with **React + Vite**, featuring a glassmorphism UI, live currency conversion, and dark/light mode.

🔗 **Live Demo:** [personal-expense-tracker-olive.vercel.app](https://personal-expense-tracker-olive.vercel.app)

---

## ✨ Features

- **Add Expenses** — Enter a name, amount (INR), and category
- **Category Breakdown** — Summary panel shows spending per category
- **Delete Expenses** — Remove entries instantly with real-time total updates
- **Live Currency Converter** — Convert your total from INR to USD, EUR, GBP, JPY, or AUD using live exchange rates
- **Dark / Light Mode** — Persistent theme toggle stored in `localStorage`
- **Fully Responsive** — Works on desktop (1600×900) and mobile (414×749)

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React + Vite | Frontend framework & build tool |
| Tailwind CSS | Utility-first styling |
| Custom CSS Variables | Glassmorphism UI, dark/light theming |
| Frankfurter API | Live exchange rates |
| localStorage |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/personal-expense-tracker.git

# Navigate into the project
cd personal-expense-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📁 Project Structure

```
src/
├── App.jsx                  # Root component, theme logic
├── main.jsx                 # Entry point
├── index.css                # Global styles, CSS variables
└── components/
    ├── ExpenseForm.jsx      # Add expense form
    ├── ExpenseList.jsx      # Expense list with delete
    ├── SummaryPanel.jsx     # Total + category breakdown
    └── CurrencyConverter.jsx # Live INR converter
```

---

## 📱 Responsive Design

Tested and optimized for:
- 🖥️ Desktop — 1600×900
- 📱 Mobile — 414×749

---
