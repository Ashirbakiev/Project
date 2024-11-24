// CardGrid.js
import React from 'react';
import './CardGrid.css';

const CardGrid = () => {
  return (
    <div className="courses-container">
      <div className="courses-block">
        <h2>Занятия в центрах</h2>
        <p>Классический формат занятий с использованием современных технологий.</p>
        <button>... КУРСОВ</button>
      </div>
      <div className="courses-block">
        <h2>Онлайн обучение</h2>
        <p>Индивидуальный и удобный для каждого темп обучения. Занимайтесь из дома на интерактивной платформе.</p>
        <button>... КУРСОВ</button>
      </div>
      <div className="courses-block">
        <h2>Репетиторы 1-11 класс</h2>
        <p>Индивидуальные занятия по школьной программе с репетиторами, подготовка к ОГЭ и ЕГЭ.</p>
        <button>... КУРСОВ</button>
      </div>
      <div className="courses-block">
        <h2>Логопеды</h2>
        <p>Подберем для вас индивидуального логопеда и организуем удобные онлайн-занятия с гарантией результата.</p>
        <button>... КУРСОВ</button>
      </div>
    </div>
  );
};

export default CardGrid;
