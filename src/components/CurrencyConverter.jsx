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
        setError("Failed.");
        setLoading(false);
      });
  }, [currency]);

  return (
    <div className="solid-card p-5 rounded-2xl  h-full">
      <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
        Convert
      </p>

      <div className="mb-4">
        <p className="text-xs mb-1.5" style={{ color: "var(--text-muted)" }}>INR to</p>
        <select
          className="clean-input px-3 py-2 rounded-xl text-sm cursor-pointer w-full"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies.map((c) => (
            <option key={c} style={{ background: "var(--option-bg)" }}>{c}</option>
          ))}
        </select>
      </div>

      {loading && (
        <p className="text-xs mono" style={{ color: "var(--text-muted)" }}>Loading...</p>
      )}
      {error && (
        <p className="text-xs" style={{ color: "#ef4444" }}>{error}</p>
      )}
      {!loading && !error && rate !== null && (
        <>
          <p className="text-2xl font-bold mono" style={{ color: "var(--text-heading)" }}>
            {(total * rate).toFixed(2)}
          </p>
          <p className="text-xs mt-1 mono" style={{ color: "var(--text-muted)" }}>
            {currency} · rate
          </p>
        </>
      )}
    </div>
  );
}