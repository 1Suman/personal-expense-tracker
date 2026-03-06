export default function SummaryPanel({ expenses, total }) {
  const breakdown = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + parseFloat(e.amount);
    return acc;
  }, {});

  return (
    <div className="solid-card p-5 rounded-2xl h-full">
      <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
        Summary
      </p>

      <p className="text-3xl font-bold mono" style={{ color: "var(--text-heading)" }}>
        ₹{total.toFixed(2)}
      </p>
      <p className="text-xs mt-1 mb-4" style={{ color: "var(--text-muted)" }}>
        {expenses.length} {expenses.length === 1 ? "entry" : "entries"}
      </p>

      {Object.keys(breakdown).length > 0 ? (
        <div className="space-y-2 border-t pt-3" style={{ borderColor: "var(--border-row)" }}>
          {Object.entries(breakdown).map(([cat, amt]) => (
            <div key={cat} className="flex justify-between items-center text-sm">
              <span style={{ color: "var(--text-secondary)" }}>{cat}</span>
              <span className="mono font-medium" style={{ color: "var(--text-heading)" }}>
                ₹{amt.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>Empty</p>
      )}
    </div>
  );
}