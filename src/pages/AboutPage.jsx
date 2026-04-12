import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero секция */}
      <section className="about-hero">
        <h1>О нас</h1>
        <p>
          PlantParadise - это больше, чем просто магазин растений.
          Мы создаем уют и дарим природу вашему дому с 2020 года.
        </p>
      </section>

      {/* Наша история */}
      <section className="about-story">
        <div className="about-story-content">
          <h2>Наша история</h2>
          <p>
            Всё началось с маленькой любви к растениям. Основательница нашего магазина,
            Анна, начала собирать свою коллекцию суккулентов на подоконнике обычной
            московской квартиры.
          </p>
          <p>
            Сегодня PlantParadise - это команда профессиональных флористов и
            энтузиастов, которые помогают тысячам людей находить "свои" растения
            и создавать настоящие оазисы в городских квартирах.
          </p>
          <p>
            Мы гордимся тем, что каждое растение в нашем магазине выращено с любовью
            и заботой в лучших питомниках России и Голландии.
          </p>
        </div>
        <div className="about-story-image">
          <img
            src="/PlantParadise/src/assets/story-image.jpg"
            alt="Наша история"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Преимущества */}
      <section className="about-advantages">
        <h2>Почему выбирают нас</h2>
        <div className="advantages-grid">
          <div className="advantage-card">
            <span className="advantage-icon">🌱</span>
            <h3>Здоровые растения</h3>
            <p>Каждое растение проходит контроль качества перед продажей</p>
          </div>
          <div className="advantage-card">
            <span className="advantage-icon">🚚</span>
            <h3>Бережная доставка</h3>
            <p>Специальная упаковка и термозащита в холодное время года</p>
          </div>
          <div className="advantage-card">
            <span className="advantage-icon">💚</span>
            <h3>Поддержка 24/7</h3>
            <p>Консультируем по уходу за растениями в любое время</p>
          </div>
          <div className="advantage-card">
            <span className="advantage-icon">🏆</span>
            <h3>Гарантия качества</h3>
            <p>Заменяем растение, если оно не прижилось в течение 14 дней</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;