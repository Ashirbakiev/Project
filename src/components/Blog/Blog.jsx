import React from 'react';
import './Blog.css'; // Подключаем стили для About
import Welcome from '../Welcome/welcome';

function Blog() {
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
        <div className="courses-block">

        </div>
        <div className="courses-block">
            <div></div>
        </div>
        <div className="courses-block">
            <div></div>
        </div>
        <div className="courses-block">
            <div></div>
        </div>
        <div className="courses-block">
            <div></div>
        </div>
        <div className="courses-block">
            <div></div>
        </div>
   
      </div>
      </div>
    </section>
  );
}

export default Blog;