export default function SummaryPanel({ expenses, total }) {
  const breakdown = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + parseFloat(e.amount);
    return acc;
  }, {});

  return (
    <div className="glass-card p-5 rounded-2xl">
      <h2 className="text-lg font-semibold mb-3 tracking-tight" style={{ color: "var(--text-heading)" }}>
        Summary
      </h2>
      <p className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
        ₹{total.toFixed(2)}
      </p>
      <p className="text-xs mt-1 uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
        Total Spent
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {Object.entries(breakdown).map(([cat, amt]) => (
          <div
            key={cat}
            className="p-2.5 rounded-xl text-sm transition-all duration-200"
            style={{
              background: "var(--bg-pill)",
              border: "1px solid var(--border-pill)",
            }}
            onMouseEnter={(ev) => {
              ev.currentTarget.style.background = "var(--bg-pill-hover)";
              ev.currentTarget.style.borderColor = "var(--border-pill-hover)";
            }}
            onMouseLeave={(ev) => {
              ev.currentTarget.style.background = "var(--bg-pill)";
              ev.currentTarget.style.borderColor = "var(--border-pill)";
            }}
          >
            <span className="font-medium" style={{ color: "var(--text-secondary)" }}>{cat}</span>
            <span className="ml-1" style={{ color: "var(--text-muted)" }}>₹{amt.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}