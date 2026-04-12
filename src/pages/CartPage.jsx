import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import { formatPrice } from '../utils/formatters';
import useCart from '../hooks/useCart';

function CartPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cart = useStore(state => state.cart);
  const products = useStore(state => state.products);
  const removeFromCart = useStore(state => state.removeFromCart);
  const updateCartQty = useStore(state => state.updateCartQty);
  const { handleCheckout } = useCart();

  // Состояние для формы
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Укажите ваше имя';
    if (!formData.phone.trim()) newErrors.phone = 'Укажите телефон';
    if (!formData.email.trim()) newErrors.email = 'Укажите email';
    if (!formData.address.trim()) newErrors.address = 'Укажите адрес';
    if (!formData.city.trim()) newErrors.city = 'Укажите город';
    return newErrors;
  };

  const onSubmitOrder = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    const orderData = {
      ...formData,
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total: cartTotal,
      date: new Date().toISOString()
    };
    
    const order = handleCheckout(orderData);
    
    if (order) {
      // Очищаем корзину
      cartItems.forEach(item => {
        removeFromCart(item.id);
      });
      // Очищаем форму
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        city: ''
      });
    }
    
    setIsSubmitting(false);
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

      {/* Форма оформления заказа */}
      <div className="checkout-form-section">
        <h3>Данные для доставки</h3>
        <form onSubmit={onSubmitOrder} className="checkout-form">
          <div className="form-row">
            <div className="form-group">
              <label>ФИО *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleFormChange}
                className={errors.fullName ? 'error' : ''}
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label>Телефон *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Город *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleFormChange}
                className={errors.city ? 'error' : ''}
              />
              {errors.city && <span className="error-text">{errors.city}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Адрес *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleFormChange}
              className={errors.address ? 'error' : ''}
            />
            {errors.address && <span className="error-text">{errors.address}</span>}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <span>Итого:</span>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>
            <button
              type="submit"
              className="checkout-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Оформляем...' : 'Оформить заказ'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CartPage;