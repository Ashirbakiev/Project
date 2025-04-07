import React from 'react';
import './BackgroundLetters.css'; // Подключаем стили

const BackgroundLetters = () => {
  const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  const numberOfLetters = 100;

  // Генерация случайных букв с позициями и наклоном
  const randomLetters = Array.from({ length: numberOfLetters }).map((_, index) => {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const left = Math.random() * 100;
    const top = Math.random() * 100;
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
    <div className="background">
      {randomLetters}
      <div className="content">
        {/* Ваш основной контент */}
        <h1>Ваш заголовок</h1>
        <p>Ваш текст и другие элементы интерфейса</p>
      </div>
    </div>
  );
};

export default BackgroundLetters;