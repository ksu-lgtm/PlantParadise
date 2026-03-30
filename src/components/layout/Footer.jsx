import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_cont">
        <div className="footer_logo">
          <img src="/src/assets/logo.svg" alt="PlantParadise" />
          <span>PlantParadise</span>
        </div>
        <div className="footer_links">
          <div className="footer_column">
            <h4>Информация</h4>
            <Link to="/about">О нас</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/delivery">Доставка</Link>
          </div>
          <div className="footer_column">
            <h4>Каталог</h4>
            <Link to="/catalog?category=succulents">Суккуленты</Link>
            <Link to="/catalog?category=foliage">Лиственные</Link>
            <Link to="/catalog?category=flowering">Цветущие</Link>
            <Link to="/catalog?category=palms">Пальмы</Link>
          </div>
          <div className="footer_column">
            <h4>Контакты</h4>
            <p>📞 +7 (999) 123-45-67</p>
            <p>📧 info@plantparadise.ru</p>
            <p>📍 Москва, ул. Цветочная, 1</p>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>© {new Date().getFullYear()} PlantParadise. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;