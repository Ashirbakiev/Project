import './welcome.css';

const Welcome = () => {
  return (
    <section className="welcome">
        <div className="welcome-content">
          <h2>Академия</h2>
          <h1>Развития Интелекта</h1>
          <p>Присоединяйтесь! Пробный урок - Бесплатно</p>
          <button className="cta-button">Записаться сейчас</button>
        </div>
        {/* Пример изображения */}
        <div className="welcome-image">
          <img src="https://via.placeholder.com/600x400" alt="Приветствие" />
        </div>
      </section>
      // CardGrid.js
  );
};

export default Welcome;
