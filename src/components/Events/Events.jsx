
import React from 'react';
import Welcome from '../Welcome/welcome';
import Img1 from './Logo/ad8bbbae6ec61f30ef7c0d4b12a6c90a.png'
import Img2 from './Logo/e85c38619c66095d13afb4c9320d1729.png'
import Img3 from './Logo/fc46de84c70ef8506e6354b4d041dff4.png'

function Events() {
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
        <section className="background" style={{ paddingLeft: '150px', paddingRight: '150px', paddingTop: '74px' }}>
            <div>
                {randomLetters}
            </div>
            <div className='content'>
                <Welcome />
                <h3 style={{ textAlign: 'center', fontSize: "28px", color: "#2998FF", marginBottom: '30px', marginTop: '30px' }}>О нас</h3>
                <div className="courses-container">
                    <div className="courses-block" style={{ backgroundImage: `url(${Img1})`, backgroundSize: "cover" }} >
                    </div>
                    <div className="courses-block" style={{ backgroundImage: `url(${Img2})`, backgroundSize: "cover" }}>
                    </div>
                    <div className="courses-block" style={{ backgroundImage: `url(${Img3})`, backgroundSize: "cover", }}>
                    </div>
                    <div className="courses-block" >
                    </div>
                    <div className="courses-block" >
                    </div>
                    <div className="courses-block" >
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Events;