import React from 'react';
import './programs.css'; // Подключаем стили для About
import { NavLink, useLocation } from 'react-router-dom';
import Welcome from '../Welcome/welcome';
import Img1 from "./logo/1.png"
import Img2 from "./logo/2.png"
import Img3 from "./logo/3.png"
import Img4 from "./logo/4.png"
import Img5 from "./logo/5.png"
import Img6 from "./logo/6.png"
import Img7 from "./logo/7.png"
import Img8 from "./logo/8.png"
import Img9 from "./logo/9.png"
import Img10 from "./logo/10.png"
import Img11 from "./logo/11.png"
import Img12 from "./logo/12.png"

function Programs() {
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
      <h3 style={{textAlign:'center',fontSize:"28px",color:"#2998FF",marginBottom:'30px',marginTop:'30px'}}>О нас</h3>
      <div className="courses-container">
        <div className="courses-block" style={{backgroundImage: `url(${Img1})`, backgroundSize:"cover"}} >
        </div>
        <div className="courses-block" style={{backgroundImage: `url(${Img2})`, backgroundSize:"cover"}}>
        </div>
        <div className="courses-block" style={{backgroundImage: `url(${Img3})`, backgroundSize:"cover",}}>
        </div>
        <div className="courses-block" style={{backgroundImage: `url(${Img4})`,backgroundSize:"cover"}}>
        </div>
        <div className="courses-block" style={{backgroundImage: `url(${Img5})`,backgroundSize:"contain"}}>
        </div>
        <NavLink to="/Game1" exact>
        <div className="courses-block" style={{backgroundImage: `url(${Img6})`,backgroundSize:"contain"}}>
        </div>
        </NavLink>
        <NavLink to="http://localhost:3001/" exact>
        <div className="courses-block" style={{backgroundImage: `url(${Img7})`,backgroundSize:"cover"}}>
        </div>
        </NavLink>
        <div className="courses-block" style={{backgroundImage: `url(${Img8})`,backgroundSize:"contain"}}>
        </div>
        <div className="courses-block" style={{backgroundImage: `url(${Img9})`,backgroundSize:"contain"}}>
        </div>
        <div className="courses-block" style={{backgroundImage: `url(${Img10})`,backgroundSize:"contain"}}>
        </div>
        <div className="courses-block" style={{backgroundImage: `url(${Img11})`,backgroundSize:"contain"}}>
        </div>
        <div className="courses-block" style={{backgroundImage: `url(${Img12})`,backgroundSize:"contain"}}>
        </div>
   
      </div>
      </div>
    </section>
  );
}

export default Programs;