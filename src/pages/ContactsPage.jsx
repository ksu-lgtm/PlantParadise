import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо за сообщение! Мы свяжемся с вами в ближайшее время 🌱');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contacts-page-simple">
      <div className="contacts-header">
        <h1>Контакты</h1>
        <p>Свяжитесь с нами любым удобным способом</p>
      </div>

      <div className="contacts-container-simple">
        {/* Контактная информация */}
        <div className="info-grid-simple">
          <div className="info-card-simple">
            <div className="info-icon-simple">📍</div>
            <h3>Адрес</h3>
            <p>г. Москва, ул. Цветочная, д. 15</p>
            <p className="info-note-simple">Ежедневно с 10:00 до 21:00</p>
          </div>

          <div className="info-card-simple">
            <div className="info-icon-simple">📞</div>
            <h3>Телефон</h3>
            <p><a href="tel:+79991234567">+7 (999) 123-45-67</a></p>
            <p className="info-note-simple">Звоните в рабочее время</p>
          </div>

          <div className="info-card-simple">
            <div className="info-icon-simple">✉️</div>
            <h3>Email</h3>
            <p><a href="mailto:info@plantparadise.ru">info@plantparadise.ru</a></p>
            <p className="info-note-simple">Ответ в течение 24 часов</p>
          </div>

          <div className="info-card-simple">
            <div className="info-icon-simple">⏰</div>
            <h3>Режим работы</h3>
            <p>Пн-Пт: 10:00 - 21:00</p>
            <p>Сб-Вс: 11:00 - 20:00</p>
          </div>
        </div>

        {/* Карта и форма в две колонки */}
        <div className="two-columns">
          <div className="map-block">
            <h3>Как нас найти</h3>
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.373292184625!2d37.61555731590297!3d55.75202398055365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a7a0b5b5b%3A0x9c9b3b3b3b3b3b3b!2sMoscow!5e0!3m2!1sen!2sru!4v1620000000000!5m2!1sen!2sru"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                title="Карта магазина"
              ></iframe>
            </div>
            <p className="map-note">🚇 м. Тверская, 5 минут пешком</p>
          </div>

          <div className="form-block">
            <h3>Напишите нам</h3>
            <form onSubmit={handleSubmit} className="contact-form-simple">
              <div className="form-group-simple">
                <label htmlFor="name">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Анна"
                  required
                />
              </div>

              <div className="form-group-simple">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="anna@example.com"
                  required
                />
              </div>

              <div className="form-group-simple">
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ваш вопрос или пожелание..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button-simple">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>

        <div className="social-block">
          <h3>Мы в соцсетях</h3>
          <div className="social-links-simple">
            <a href="#" className="social-link-simple">📷 Instagram</a>
            <a href="#" className="social-link-simple">✈️ Telegram</a>
            <a href="#" className="social-link-simple">📘 VKontakte</a>
            <a href="#" className="social-link-simple">▶️ YouTube</a>
          </div>
        </div>

        <div className="faq-block">
          <h3>Часто задаваемые вопросы</h3>
          <div className="faq-list">
            <div className="faq-item-simple">
              <p className="faq-question-simple"><strong>Как вы упаковываете растения?</strong></p>
              <p className="faq-answer-simple">Используем термоупаковку и бумажный наполнитель. Зимой добавляем грелки.</p>
            </div>

            <div className="faq-item-simple">
              <p className="faq-question-simple"><strong>Какие способы оплаты?</strong></p>
              <p className="faq-answer-simple">Наличные, карты, Apple Pay, Google Pay, безнал для юрлиц.</p>
            </div>

            <div className="faq-item-simple">
              <p className="faq-question-simple"><strong>Можно ли вернуть растение?</strong></p>
              <p className="faq-answer-simple">Да, в течение 14 дней при сохранении чека.</p>
            </div>

            <div className="faq-item-simple">
              <p className="faq-question-simple"><strong>Сколько стоит доставка?</strong></p>
              <p className="faq-answer-simple">По Москве 300₽, бесплатно от 3000₽. По России от 500₽.</p>
            </div>
          </div>
        </div>

        <div className="catalog-link-block">
          <Link to="/catalog" className="catalog-link-button">
            Перейти в каталог растений
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;