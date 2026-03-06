import { useState } from "react";

const categories = ["Food", "Travel", "Marketing", "Utilities", "Other"];

export default function ExpenseForm({ onAdd }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = () => {
    if (!name.trim() || !amount) return alert("Please fill all fields");
    onAdd({ name: name.trim(), amount, category });
    setName("");
    setAmount("");
    setCategory("Food");
  };

  return (
    <div className="solid-card p-5 rounded-2xl">
      <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
        New Entry
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          className="clean-input px-3 py-2.5 rounded-xl text-sm w-full"
          placeholder="Expense name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <input
          className="clean-input px-3 py-2.5 rounded-xl text-sm mono w-full"
          placeholder="Amount (₹)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <select
          className="clean-input px-3 py-2.5 rounded-xl text-sm cursor-pointer w-full"
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
        className="accent-btn mt-3 w-full py-2.5 rounded-xl"
      >
        Add Expense
      </button>
    </div>
  );
}