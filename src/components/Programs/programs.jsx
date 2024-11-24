import React from 'react';
import './programs.css'; // Подключаем стили для About
import { NavLink, useLocation } from 'react-router-dom';
import Welcome from '../Welcome/welcome';

function Programs() {
  return (
    <section className="about">
      <Welcome />
      <h3>О нас</h3>
      <div className="courses-container">
        <div className="courses-block">
          <h2>АНГЛИЙСКИЙ ЯЗЫК</h2>
        </div>
        <div className="courses-block">
          <h2>МАТЕМАТИКА</h2>
        </div>
        <div className="courses-block">
          <h2>МЕНТАЛЬНАЯ АРИФМЕТИКА</h2>
        </div>
        <div className="courses-block">
          <h2>СКОРОЧТЕНИЕ</h2>
        </div>
        <div className="courses-block">
          <h2>ПРОГРАММИРОВАНИЕ</h2>
        </div>
        <div className="courses-block">
          <h2></h2>
          <NavLink to="/Game1" exact>
          РАЗВИТИЕ ПАМЯТИ
        </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Programs;