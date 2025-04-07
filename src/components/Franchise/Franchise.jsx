import React from 'react';
import './Franchise.css'; // Подключаем стили для About
import { NavLink, useLocation } from 'react-router-dom';
import Welcome from '../Welcome/welcome';
import Maps from './maps.js';
import Img1 from './logo/8a9f450cab7597247c3f7c45fb4a1b6f.png'
import Img2 from './logo/ee1299ea5ba8419920799a4793689a6d.png'
import Img3 from './logo/3e89b1dd7aa9eba1d7576dba4913a098.png'
import Img4 from './logo/30af9b1b276977c8ee358c316931188f.png'


function Franchise() {
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
      <Welcome />
      <h3 style={{textAlign:'center',fontSize:"28px",color:"#2998FF",marginBottom:'30px',marginTop:'30px'}}>Франшиза</h3>

      <section className={` bg-[url('/src/assets/images/2.png')] bg-cover bg-center rounded-3xl`} style={{height:'540px'}} >
          <div className="welcome-content">
            <h1>Франшиза академии<br/> развития интеллекта для<br/> детей от 5 до 16 лет</h1>
            <p>Центр дополнительного образования детей — откройте готовый бизнес по франшизе</p>
            
          </div>
          {/* Пример изображения */}
          <div className="welcome-image" style={{height: "150px"}}>
            
          </div><button className="cta-button">Оставить заявку</button>
        </section>



      <div className="courses-container">
        <div className="courses-block">
          <h2>ГОТОВЫЙ БИЗНЕС ОТ СОБСТВЕННИКА</h2>
          <div className='place-self-end'>
            <img src={Img1} style={{width:'270px'}}></img>
          </div>
        </div>
        <div className="courses-block">
          <h2>БЫСТРЫЙ ЗАПУСК</h2>
          <div className='place-self-end'>
            <img src={Img2} style={{width:'270px'}}></img>
          </div>
        </div>
        <div className="courses-block">
          <h2>ПОДДЕРЖКА БИЗНЕСА НА ВСЕХ ЭТАПАХ</h2>
          <div className='place-self-end'>
            <img src={Img3} style={{width:'270px'}}></img>
          </div>
        </div>
        <div className="courses-block">
          <h2>ВЫРУЧКА ДО 1000000₽ <br/>В МЕСЯЦ</h2>
          <div className='place-self-end'>
            <img src={Img4} style={{width:'270px'}} ></img>
          </div>
        </div>
        
      </div>
      <section className={` rounded-3xl flex justify-between`} >
          <div className="welcome-content">
            <h1 style={{color:"#2998FF"}}>Что такое IT CITY ?</h1>

            <p style={{color:"#2998FF"}}>IT CITY - академия развития интеллекта для детей от 5 до 16 лет. Наша цель - предоставить возможность подрастающему поколению во всем мире обучаться и развиваться с помощью методик . . . . Наша миссия - сделать качественное дополнительное образование для детей и взрослых доступным повсеместно.</p>
            <Maps/>
            <button className="cta-button">Купить готовый бизнес</button>
          </div>
          {/* Пример изображения */}

          <div className="welcome-content">
            <h1 style={{color:"#2998FF"}}>26<br/>Стран</h1>
            <h1 style={{color:"#2998FF"}}>1024<br/>Центра</h1>
            <h1 style={{color:"#2998FF"}}>20000<br/>Учеников</h1>
            <h1 style={{color:"#2998FF"}}> 13<br/>Лет на рынке</h1>
            <h1 style={{color:"#2998FF"}}>9<br/>Эффективных<br/> методик</h1>
          </div>
        </section>
    </div>
    </div>
    </div>
    
  );
}

export default Franchise;