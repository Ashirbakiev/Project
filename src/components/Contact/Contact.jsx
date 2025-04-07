import React, { useState } from 'react';
import Welcome from '../Welcome/welcome';
import './Contact.css'; // Подключите стили

const Contact = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const cities = [
    'Москва',
    'Санкт-Петербург',
    'Новосибирск',
    'Екатеринбург',
    'Казань',
    // Добавьте больше городов
  ];

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  const numberOfLetters = 400;

  // Генерация случайных букв с позициями и наклоном
  const randomLetters = Array.from({ length: numberOfLetters }).map((_, index) => {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const left = Math.random() * 100;
    const top = Math.random() * 450;
    const rotate = Math.random() * 360;
    const fontSize = Math.random() * 24 + 12;

    return (
      <div
        key={index}
        className="letter"
        style={{
          left: `${left}vw`,
          top: `${top}vh`,
          transform: `rotate(${rotate}deg)`,
          fontSize: `${fontSize}px`,
        }}
      >
        {letter}
      </div>
    );
  });

  return (
    <section className="background" style={{paddingLeft:'150px',paddingRight:'150px',paddingTop:'74px'}}>
      <div>
      {randomLetters}
      </div>
    <div className='content'>
    <Welcome />
    <h2 style={{textAlign:'center',fontSize:"28px",color:"#2998FF",marginBottom:'30px',marginTop:'30px'}}>Контакты</h2>
    <h2 style={{textAlign:'center',fontSize:"28px",color:"#2998FF",marginBottom:'30px',marginTop:'30px'}}>ВЫБЕРИТЕ ГОРОД</h2>
    <input
        type="text"
        className="search-box"
        placeholder="Поиск города"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
    <div className="city-container">
    <div className="city-selector">
      
      
      
      <ul className="city-list" >
        {filteredCities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div></div>
    </div>
    </section>
  );
};

export default Contact;