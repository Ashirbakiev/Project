import './welcome.css';

const Welcome = () => {
  return (
    <section className={` bg-[url('/src/assets/images/shutterstock_527757256_1200x630.jpg')] bg-cover bg-center rounded-3xl`} style={{padding:'20px'}} >
        <div className="welcome-content">
          <h2>Академия</h2>
          <h1>Развития Интелекта</h1>
          <p>Присоединяйтесь! Пробный урок - Бесплатно</p>
          <button className="cta-button">Записаться сейчас</button>
        </div>
        {/* Пример изображения */}
        <div className="welcome-image">
        </div>
      </section>
      // CardGrid.js
  );
};

export default Welcome;
