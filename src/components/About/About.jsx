import React from 'react';
import './About.css'; // Подключаем стили для About
import Welcome from '../Welcome/welcome';

function About() {
  return (
    <section className="about">
      <Welcome />
      <h3>О нас</h3>
      <div className="courses-container">
        <div className="courses-block">
          <h2>9 ЛЕТ УСПЕШНОГО ОПЫТА</h2>
        </div>
        <div className="courses-block">
          <h2>5000 УЧЕНИКОВ ЕЖЕГОДНО ЗАНИМАЮТСЯ В НАШИХ ЦЕНТРАХ</h2>
        </div>
        <div className="courses-block">
          <h2>ГОТОВАЯ МЕТОДИЧЕСКАЯ БАЗА КУРСОВ</h2>
        </div>
        <div className="courses-block">
          <h2>18 ФИЛИАЛОВ ОТКРЫТО В РАМКАХ СОБСТВЕННОЙ СЕТИ</h2>
        </div>
        <div className="courses-block">
          <h2>УДОБНАЯ СИСТЕМА РАБОТЫ С КЛИЕНТАМИ</h2>
        </div>
        <div className="courses-block">
          <h2></h2>
        </div>
      </div>
    </section>
  );
}

export default About;