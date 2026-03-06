import { useState } from "react";

const categories = ["Food", "Travel", "Marketing", "Utilities", "Other"];

export default function ExpenseForm({ onAdd }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = () => {
    if (!name || !amount) return alert("Please fill all fields");
    onAdd({ name, amount, category });
    setName("");
    setAmount("");
    setCategory("Food");
  };

  return (
    <div className="glass-card p-5 rounded-2xl">
      <h2 className="text-lg font-semibold mb-4 tracking-tight" style={{ color: "var(--text-heading)" }}>
        Add Expense
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <input
          className="glass-input p-2.5 rounded-xl"
          placeholder="Expense name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="glass-input p-2.5 rounded-xl"
          placeholder="Amount (INR)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="glass-input p-2.5 rounded-xl cursor-pointer"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} style={{ background: "var(--option-bg)" }}>{c}</option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2.5 rounded-xl font-semibold tracking-wide hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-600/25 hover:shadow-violet-500/40 active:scale-[0.98] transition-all duration-200 cursor-pointer"
      >
        Add Expense
      </button>
    </div>
  );
}