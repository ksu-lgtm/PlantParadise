import { CATEGORIES } from '../../assets/products';

function Sidebar({ active, onSelect }) {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Категории</h3>
      <div className="category-list">
        {CATEGORIES.map(({ value, label }) => (
          <button
            key={value}
            className={`category-btn ${active === value ? 'active' : ''}`}
            onClick={() => onSelect(value)}
          >
            <span className="category-btn-text">{label}</span>
            {active === value && <span className="category-btn-check">✓</span>}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;