import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import CurrencyConverter from "./components/CurrencyConverter";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
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
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">

      <button
        onClick={() => setIsDark(!isDark)}
        className="theme-toggle fixed top-5 right-5 z-50 p-2.5 rounded-xl cursor-pointer"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg
            className="w-5 h-5 text-amber-400 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-indigo-500 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.005 9.005 0 0012 21a9.005 9.005 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>

      
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
          Expense Tracker
        </h1>
        <p className="mt-2 text-sm tracking-wide uppercase" style={{ color: "var(--text-muted)" }}>
          Track · Analyze · Convert
        </p>
      </div>


      <div className="max-w-3xl mx-auto grid gap-5">
        <ExpenseForm onAdd={addExpense} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <SummaryPanel expenses={expenses} total={total} />
          <CurrencyConverter total={total} />
        </div>
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </div>
    </div>
  );
}