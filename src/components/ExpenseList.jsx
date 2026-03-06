export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0)
    return (
      <p className="text-center mt-4 text-sm italic" style={{ color: "var(--text-muted)" }}>
        No expenses yet — start adding some above ↑
      </p>
    );

  return (
    <div className="glass-card p-5 rounded-2xl">
      <h2 className="text-lg font-semibold mb-4 tracking-tight" style={{ color: "var(--text-heading)" }}>
        All Expenses
      </h2>
      {expenses.map((e) => (
        <div
          key={e.id}
          className="flex justify-between items-center py-3 px-2 -mx-2 rounded-lg transition-all duration-200 group"
          style={{ borderBottom: "1px solid var(--border-row)" }}
        >
          <div>
            <p className="font-medium" style={{ color: "var(--text-heading)" }}>{e.name}</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{e.category}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold" style={{ color: "var(--color-amount)" }}>
              ₹{parseFloat(e.amount).toFixed(2)}
            </span>
            <button
              onClick={() => onDelete(e.id)}
              className="text-xs px-2.5 py-1 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
              style={{
                color: "var(--color-delete)",
                "--hover-bg": "var(--color-delete-bg)",
              }}
              onMouseEnter={(ev) => {
                ev.currentTarget.style.color = "var(--color-delete-hover)";
                ev.currentTarget.style.background = "var(--color-delete-bg)";
              }}
              onMouseLeave={(ev) => {
                ev.currentTarget.style.color = "var(--color-delete)";
                ev.currentTarget.style.background = "transparent";
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}