import React, { useState } from 'react';
import useStore from '../../store/useStore';
import { PRODUCTS, CATEGORIES } from '../../assets/products';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

function AdminProducts() {
  const products = useStore(state => state.products);
  const updateProduct = useStore(state => state.updateProduct);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (product) => {
    setEditingId(product.id);
    setEditForm({
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: product.category,
      description: product.description
    });
  };

  const handleSave = (id) => {
    updateProduct(id, editForm);
    setEditingId(null);
  };

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  // Функция для получения названия категории по значению
  const getCategoryLabel = (categoryValue) => {
    const category = CATEGORIES.find(c => c.value === categoryValue);
    return category ? category.label : categoryValue;
  };

  return (
    <div className="admin-products">
      <h2>Управление товарами</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Изображение</th>
            <th>Название</th>
            <th>Категория</th>
            <th>Цена</th>
            <th>В наличии</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
              </td>
              <td>
                {editingId === product.id ? (
                  <Input
                    name="name"
                    value={editForm.name}
                    onChange={handleChange}
                  />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editingId === product.id ? (
                  <select
                    name="category"
                    value={editForm.category}
                    onChange={handleChange}
                    className="admin-select"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  getCategoryLabel(product.category)
                )}
              </td>
              <td>
                {editingId === product.id ? (
                  <Input
                    name="price"
                    type="number"
                    value={editForm.price}
                    onChange={handleChange}
                  />
                ) : (
                  `${product.price} ₽`
                )}
              </td>
              <td>
                {editingId === product.id ? (
                  <Input
                    name="stock"
                    type="number"
                    value={editForm.stock}
                    onChange={handleChange}
                  />
                ) : (
                  product.stock
                )}
              </td>
              <td>
                {editingId === product.id ? (
                  <>
                    <Button onClick={() => handleSave(product.id)} size="sm">
                      💾 Сохранить
                    </Button>
                    <Button onClick={() => setEditingId(null)} size="sm" variant="ghost">
                      ✕ Отмена
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => handleEdit(product)} size="sm">
                    ✏️ Редактировать
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;