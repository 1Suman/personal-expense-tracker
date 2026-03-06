import { useState, useEffect } from "react";

const currencies = ["USD", "EUR", "GBP", "JPY", "AUD"];

export default function CurrencyConverter({ total }) {
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://api.frankfurter.app/latest?from=INR&to=${currency}`)
      .then((res) => res.json())
      .then((data) => {
        setRate(data.rates[currency]);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch rate. Try again.");
        setLoading(false);
      });
  }, [currency]);

  return (
    <div className="glass-card p-5 rounded-2xl">
      <h2 className="text-lg font-semibold mb-3 tracking-tight" style={{ color: "var(--text-heading)" }}>
        Currency Converter
      </h2>
      <div className="flex items-center gap-3">
        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Convert total to:</span>
        <select
          className="glass-input p-2 rounded-xl cursor-pointer"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies.map((c) => (
            <option key={c} style={{ background: "var(--option-bg)" }}>{c}</option>
          ))}
        </select>
      </div>
      <div className="mt-4 text-xl font-bold">
        {loading && (
          <p className="text-sm animate-pulse" style={{ color: "var(--text-muted)" }}>
            Fetching rate...
          </p>
        )}
        {error && (
          <p className="text-rose-500 text-sm">{error} — Showing USD instead</p>
        )}
        {!loading && !error && rate && (
          <p className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {currency} {(total * rate).toFixed(2)}
          </p>
        )}
        {!loading && !error && !rate && (
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>Select a currency to convert</p>
        )}
      </div>
    </div>
  );
}