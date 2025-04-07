import React, { useState } from 'react';
import './Home.css'; // Подключаем стили для Home
import Map from '../Map';
import styled from 'styled-components';
import ProgramWrapper from '../ProgramWrapper';
import CardGrid from '../CardGrid/CardGrid';
import CarouselWrapper from '../CarouselWrapper';
import Welcome from '../Welcome/welcome';
import Statistics from '../statistics/statistics';
import BackgroundLetters from '../BackgroundLetters/BackgroundLetters';

function Home() {
  const [activeWrapper, setActiveWrapper] = useState(null); // Новое состояние для оболочек



  // Пример списка сертификатов
  const certificates = [
    {
      id: 1,
      title: 'Сертификат качества',
      image: 'https://via.placeholder.com/200x150',
    },
    {
      id: 2,
      title: 'Сертификат безопасности',
      image: 'https://via.placeholder.com/200x150',
    },
    {
      id: 3,
      title: 'Сертификат преподавателя',
      image: 'https://via.placeholder.com/200x150',
    },
    
    // Добавьте больше сертификатов по необходимости
  ];

  // Пример списка блогов
 

  // Список оболочек
  const wrappers = [
    {
      id: 1,
      title: 'Английский язык',
      content: 'Дополнительная информация по курсу английского языка. Мы предлагаем уникальные методики и опытных преподавателей.',
    },
    {
      id: 2,
      title: 'Подготовка к школе',
      content: 'Подготовка к школе включает развитие необходимых навыков и знаний для успешного старта в учебе.',
    },
    {
      id: 3,
      title: 'Математика для детей',
      content: 'Наши курсы математики помогут вашему ребенку понять основы и развить логическое мышление.',
    },
    // Добавьте больше оболочек по необходимости
  ];

  // Обработчик для переключения панелей


  // Обработчик для переключения оболочек
  const toggleWrapper = (id) => {
    if (activeWrapper === id) {
      setActiveWrapper(null);
    } else {
      setActiveWrapper(id);
    }
  };
  const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  const numberOfLetters = 400;

  // Генерация случайных букв с позициями и наклоном
  const randomLetters = Array.from({ length: numberOfLetters }).map((_, index) => {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const left = Math.random() * 100;
    const top = Math.random() * 300;
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
      <div>
      {randomLetters}
      </div>
      <div className="content">
      <div style={{paddingLeft:'150px',paddingRight:'150px',paddingTop:'74px'}}>
      {/* Приветственный блок */}
      <Welcome/>
      {/* Интерактивные панели с темами */}
      <section className="topics">
        <h2>Программы</h2>
        <CardGrid />
      </section>
      </div>
      <Statistics/>
      {/* Свидетельства и сертификаты */}
      <section className="certificates">
        <h2>Свидетельства и сертификаты</h2>
        <div className="certificates-list">
          {certificates.map((cert) => (
            <div className="certificate-card" key={cert.id}>
              <img src={cert.image} alt={cert.title} />
              <h3>{cert.title}</h3>
            </div>
          ))}
        </div>
        
      </section>

      {/* Интересное в блоге */}
      <section className="blog">
        <h2>Интересное в блоге</h2>
        <CarouselWrapper />
      </section>
 {/*   <Map />
      <section className="additional-info">
        <div className="info-image">
          <img src="https://via.placeholder.com/500x300" alt="Дополнительная информация" />
        </div>
        <div className="info-text">
          <h2>Почему выбирают нас?</h2>
          <p>
            Мы предлагаем качественное образование, опытных преподавателей и индивидуальный подход к каждому ребенку.
            Наши программы разработаны с учетом современных образовательных стандартов и интересов детей.
          </p>
          <button className="learn-more-button">Узнать больше</button>
        </div>
      </section>
      {/* Новая секция "Оболочки" */}  
      
    </div>
    </div>
  );
}

export default Home;