import React from 'react';
import useStore from '../../store/useStore';
import { useNotify } from '../../context/NotifyContext';
import { formatPrice } from '../../utils/formatters';

function ProductCard({ product }) {
  const addToCart = useStore(state => state.addToCart);
  const toggleFavorite = useStore(state => state.toggleFavorite);
  const favorites = useStore(state => state.favorites);
  const { push } = useNotify();

  const isFavorite = favorites.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product.id);
    push('🌱 Растение добавлено в корзину');
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product.id);
    push(isFavorite ? '💔 Удалено из избранного' : '❤️ Добавлено в избранное');
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200x200?text=🌿';
          }}
        />
      </div>
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{formatPrice(product.price)}</p>
      <p className="product-stock">В наличии: {product.stock} шт.</p>
      <div className="product-actions">
        <button
          onClick={handleToggleFavorite}
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
        <button
          onClick={handleAddToCart}
          className="cart-btn"
          aria-label="Добавить в корзину"
        >
          🛒 В корзину
        </button>
      </div>
    </div>
  );
}

export default ProductCard;