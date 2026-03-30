import useStore from '../../store/useStore';
import { formatPrice } from '../../utils/formatters';
import { CATEGORIES } from '../../assets/products';

function AdminCategories() {
  const products = useStore(s => s.products);

  // Используем наши категории, но исключаем 'all'
  const productCategories = CATEGORIES.filter(c => c.value !== 'all');

  return (
    <div className="admin-categories">
      <h2>🗂️ Товары по категориям</h2>
      {productCategories.map(cat => {
        const list = products.filter(p => p.category === cat.value);
        return (
          <section key={cat.value} style={{ marginBottom: '2rem' }}>
            <h3>{cat.label} ({list.length} товаров)</h3>
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Фото</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Склад</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map(p => (
                    <tr key={p.id} className={p.stock === 0 ? 'row-danger' : p.stock < 10 ? 'row-warn' : ''}>
                      <td>{p.id}</td>
                      <td>
                        <img
                          src={p.image}
                          alt={p.name}
                          style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                      </td>
                      <td>{p.name}</td>
                      <td>{formatPrice(p.price)}</td>
                      <td className={p.stock === 0 ? 'text-danger' : p.stock < 10 ? 'text-warn' : ''}>
                        {p.stock === 0 ? '❌ Нет' : p.stock}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default AdminCategories;