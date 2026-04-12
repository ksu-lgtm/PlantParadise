import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useStore from '../../store/useStore';
import AuthModal from '../ui/AuthModal';

function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const navigate = useNavigate(); // Добавьте это
  const user = useStore(state => state.user);
  const logout = useStore(state => state.logout);
  const favorites = useStore(state => state.favorites);
  const cart = useStore(state => state.cart);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const favCount = favorites.length;

  return (
    <header className="header">
      <div className="header_cont">
        <Link to="/" className="logo">
          <img src="/PlantParadise/logo.svg" alt="PlantParadise" />
          <span className="logo_text">PlantParadise</span>
        </Link>

        <nav className="h_links">
          <NavLink to="/catalog">Каталог</NavLink>
          <NavLink to="/about">О нас</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
          <NavLink to="/delivery">Доставка</NavLink>
          {user?.role === 'admin' && (
            <NavLink to="/admin">Админ-панель</NavLink>
          )}
        </nav>

        <div className="h_ic">
          <button onClick={() => navigate('/favorites')} style={{ position: 'relative' }}>
            🤍
            {favCount > 0 && <span className="cart-badge">{favCount}</span>}
          </button>
          <button onClick={() => navigate('/cart')} style={{ position: 'relative' }}>
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          {user ? (
            <button onClick={logout}>
              👤 {user.name}
            </button>
          ) : (
            <button onClick={() => setIsAuthOpen(true)}>
              🔑 Войти
            </button>
          )}
        </div>
      </div>
      <AuthModal open={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </header>
  );
}

export default Header;