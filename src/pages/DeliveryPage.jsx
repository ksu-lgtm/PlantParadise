import React from 'react';
import { Link } from 'react-router-dom';

const DeliveryPage = () => {
    return (
        <div className="delivery-page-simple">
            <div className="delivery-header">
                <h1>Доставка и оплата</h1>
                <p>Мы бережно доставим растения в любую точку России</p>
            </div>

            <div className="delivery-container-simple">
                <div className="delivery-section">
                    <h2>Способы доставки</h2>
                    <div className="delivery-methods-simple">
                        <div className="method-item">
                            <div className="method-header">
                                <h3>По Москве</h3>
                            </div>
                            <div className="method-price">300 ₽</div>
                            <p className="method-time">Срок: 1-2 дня</p>
                            <ul className="method-features">
                                <li>✅ Бесплатно от 3 000 ₽</li>
                                <li>✅ Курьер с растениями</li>
                                <li>✅ Оплата наличными или картой</li>
                            </ul>
                        </div>

                        <div className="method-item popular">
                            <div className="method-header">
                                <h3>Самовывоз</h3>
                            </div>
                            <div className="method-price">Бесплатно</div>
                            <p className="method-time">В день заказа</p>
                            <ul className="method-features">
                                <li>✅ Можно забрать сегодня</li>
                                <li>✅ Посмотреть растения вживую</li>
                            </ul>
                        </div>

                        <div className="method-item">
                            <div className="method-header">
                                <h3>По России</h3>
                            </div>
                            <div className="method-price">от 500 ₽</div>
                            <p className="method-time">Срок: 3-10 дней</p>
                            <ul className="method-features">
                                <li>✅ СДЭК и Почта России</li>
                                <li>✅ Термоупаковка зимой</li>
                                <li>✅ Трек-номер для отслеживания</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="delivery-section">
                    <h2>Как мы упаковываем растения</h2>
                    <div className="packaging-steps-simple">
                        <div className="step-item">
                            <span className="step-number">1</span>
                            <div className="step-content">
                                <h4>Фиксация грунта</h4>
                                <p>Закрепляем грунт бумагой</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <span className="step-number">2</span>
                            <div className="step-content">
                                <h4>Защита листьев</h4>
                                <p>Обматываем крафт-бумагой</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <span className="step-number">3</span>
                            <div className="step-content">
                                <h4>Фиксация в коробке</h4>
                                <p>Закрепляем горшок</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <span className="step-number">4</span>
                            <div className="step-content">
                                <h4>Наполнитель</h4>
                                <p>Заполняем пустоты</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <span className="step-number">❄️</span>
                            <div className="step-content">
                                <h4>Зимняя упаковка</h4>
                                <p>Грелки при температуре ниже 0°C</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Зоны доставки */}
                <div className="delivery-section">
                    <h2>Зоны доставки по Москве</h2>
                    <div className="zones-simple">
                        <div className="zone-item">
                            <h4>🌳 В пределах МКАД</h4>
                            <p>300 ₽ (бесплатно от 3000 ₽)</p>
                        </div>
                        <div className="zone-item">
                            <h4>🚗 За МКАД (до 10 км)</h4>
                            <p>400 ₽ (бесплатно от 4000 ₽)</p>
                        </div>
                        <div className="zone-item">
                            <h4>🛣️ За МКАД (10-30 км)</h4>
                            <p>500 ₽ (бесплатно от 5000 ₽)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryPage;