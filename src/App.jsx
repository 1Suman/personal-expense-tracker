import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import CurrencyConverter from "./components/CurrencyConverter";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const total = expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);

  return (
    <div className="min-h-screen px-5 py-8 sm:px-8 lg:px-12">
      <div className="max-w-2xl mx-auto">

        <div className="mb-10">
          <div className="flex items-center justify-end mb-5">
            <button
              onClick={() => setIsDark(!isDark)}
              className="theme-toggle w-9 h-9 rounded-xl flex items-center justify-center text-base"
              aria-label="Toggle theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>

          <div className="text-center py-6">
            <h1
              className="text-4xl sm:text-5xl font-extrabold leading-none tracking-tight"
              style={{ color: "var(--text-heading)" }}
            >
              Expense Tracker
            </h1>
            <p className="mt-3 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Track · Analyze · Convert
            </p>
          </div>
        </div>

        <ExpenseForm onAdd={addExpense} />

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 mt-5">
          <div className="sm:col-span-3">
            <SummaryPanel expenses={expenses} total={total} />
          </div>
          <div className="sm:col-span-2">
            <CurrencyConverter total={total} />
          </div>
        </div>

        <div className="mt-5">
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </div>

      </div>
    </div>
  );
}