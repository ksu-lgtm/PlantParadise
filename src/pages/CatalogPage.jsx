import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ui/ProductCard';
import Sidebar from '../components/layout/Sidebar';
import Input from '../components/ui/Input';
import { PRODUCTS } from '../assets/products';

function CatalogPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('default');

  // Фильтрация товаров
  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS;

    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }

    if (search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (sort) {
      case 'price-asc':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [category, search, sort]);

  return (
    <div className="catalog-layout">
      <Sidebar active={category} onSelect={setCategory} />

      <main className="catalog-main">
        <div className="catalog-controls">
          <Input
            placeholder="Поиск растений..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="sort-select"
          >
            <option value="default">По умолчанию</option>
            <option value="price-asc">Цена ↑</option>
            <option value="price-desc">Цена ↓</option>
            <option value="name">Название</option>
          </select>
        </div>

        <div className="results-info">
          Найдено растений: {filteredProducts.length}
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default CatalogPage;