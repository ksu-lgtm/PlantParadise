import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import ProductCard from '../components/ui/ProductCard';
import { PRODUCTS } from '../assets/products';

const FavoritesPage = () => {
  const favorites = useStore(state => state.favorites);

  // Получаем только те товары, которые в избранном
  const favoriteProducts = PRODUCTS.filter(product =>
    favorites.includes(product.id)
  );

  if (favoriteProducts.length === 0) {
    return (
      <div className="favorites-empty">
        <div className="empty-state">
          <span className="empty-icon">🤍</span>
          <h2>В избранном пока пусто</h2>
          <p>Добавляйте растения в избранное, чтобы не потерять</p>
          <Link to="/catalog" className="empty-button">
            Перейти в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>Избранное</h1>
        <p className="favorites-count">
          {favoriteProducts.length} {favoriteProducts.length === 1 ? 'растение' :
            favoriteProducts.length < 5 ? 'растения' : 'растений'}
        </p>
      </div>

      <div className="product-grid">
        {favoriteProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;