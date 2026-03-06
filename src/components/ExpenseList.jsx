export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0)
    return (
      <p className="text-center py-8 text-sm mono" style={{ color: "var(--text-muted)" }}>
        Nothing spent yet
      </p>
    );

  return (
    <div className="solid-card rounded-2xl overflow-hidden">
      <div className="px-5 py-4 border-b" style={{ borderColor: "var(--border-row)" }}>
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          All Expenses
        </p>
      </div>

      <div>
        {expenses.map((e, i) => (
          <div
            key={e.id}
            className="flex justify-between items-center px-5 py-3.5 transition-colors duration-150 group"
            style={{
              borderBottom: i < expenses.length - 1 ? "1px solid var(--border-row)" : "none",
            }}
            onMouseEnter={(ev) => ev.currentTarget.style.background = "var(--bg-row-hover)"}
            onMouseLeave={(ev) => ev.currentTarget.style.background = "transparent"}
          >
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text-heading)" }}>
                {e.name}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                {e.category}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="mono text-sm font-semibold" style={{ color: "var(--color-amount)" }}>
                ₹{parseFloat(e.amount).toFixed(2)}
              </span>
              <button
                onClick={() => onDelete(e.id)}
                className="del-btn"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}