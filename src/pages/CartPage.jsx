import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import { formatPrice } from '../utils/formatters';
import CheckoutModal from '../components/ui/CheckoutModal';

function CartPage() {
  const [showCheckout, setShowCheckout] = useState(false);
  const cart = useStore(state => state.cart);
  const products = useStore(state => state.products);
  const removeFromCart = useStore(state => state.removeFromCart);
  const updateCartQty = useStore(state => state.updateCartQty);

  // Получаем полные данные о товарах в корзине
  const cartItems = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return product ? {
      ...product,
      quantity: item.quantity,
      sum: product.price * item.quantity
    } : null;
  }).filter(Boolean);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.sum, 0);

  const handleCheckout = () => {
    // Здесь логика оформления заказа
    setShowCheckout(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-state">
          <span className="empty-icon">🛒</span>
          <h2>Корзина пуста</h2>
          <p>Добавьте растения в корзину, чтобы оформить заказ</p>
          <Link to="/catalog" className="empty-button">
            Перейти в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {showCheckout && (
        <CheckoutModal
          total={cartTotal}
          onConfirm={handleCheckout}
          onClose={() => setShowCheckout(false)}
        />
      )}

      <div className="cart-page">
        <div className="cart-header">
          <h1>Корзина</h1>
          <p className="cart-count">
            {cartItems.length} {cartItems.length === 1 ? 'товар' :
              cartItems.length < 5 ? 'товара' : 'товаров'}
          </p>
        </div>

        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-number">{index + 1}</div>

              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.name}</h3>
                <p className="cart-item-price">{formatPrice(item.price)}</p>
              </div>

              <div className="cart-item-quantity">
                <button
                  className="quantity-btn"
                  onClick={() => updateCartQty(item.id, -1)}
                >
                  −
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => updateCartQty(item.id, 1)}
                >
                  +
                </button>
              </div>

              <div className="cart-item-sum">
                {formatPrice(item.sum)}
              </div>

              <button
                className="cart-item-remove"
                onClick={() => removeFromCart(item.id)}
                title="Удалить"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Итого:</span>
            <strong>{formatPrice(cartTotal)}</strong>
          </div>
          <button
            className="checkout-button"
            onClick={() => setShowCheckout(true)}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </>
  );
}

export default CartPage;