// CardGrid.js
import React from 'react';
import './CardGrid.css';
import Img1 from './logo/c104e2791254a17106dddbd9faefbdf5.png'
import Img2 from './logo/ffc8069bd864b7858c2771312e0a0ba7.png'
import Img3 from './logo/fa6ab00df3cebb16ab49caf86c89d7d5.png'
import Img4 from './logo/f490a4724005f5f34e594929c13c272f.png'

const CardGrid = () => {
  return (
    <div className="courses-container">
      <div className="courses-block" style={{justifyContent:"space-between"}}>
        <div style={{width:"300px"}}>
        <h2 style={{height:'126px',}}>Занятия в центрах</h2>
        <p>Классический формат занятий с использованием современных технологий.</p>
        <button>... КУРСОВ</button>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img src={Img1 } style={{width:'320px',height:'320px',}}></img>
        </div>
      </div>
      <div className="courses-block">
      <div style={{width:"368px"}}>
        <h2 style={{height:'126px',}}>Онлайн обучение</h2>
        <p>Индивидуальный и удобный для каждого темп обучения. Занимайтесь из дома на интерактивной платформе.</p>
        <button>... КУРСОВ</button>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <img src={Img2 } style={{width:'320px',height:'320px',}}></img>
        </div>
      </div>
      <div className="courses-block">
      <div style={{width:"300px",flexDirection:'column',justifyContent:'space-between'}}>

        <h2>МАСТЕР КЛАССЫ</h2>
        <p>Мастер классы по программированию и робототехнике</p>
        <button>... КУРСОВ</button>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <img src={Img3 } style={{width:'320px',height:'320px',}}></img>
        </div>
      </div>
      <div className="courses-block">
      <div style={{width:"300px"}}>
        <h2>Логопеды</h2>
        <p>Подберем для вас индивидуального логопеда и организуем удобные онлайн-занятия с гарантией результата.</p>
        <button>... КУРСОВ</button>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <img src={Img4 } style={{width:'320px',height:'320px',}}></img>
        </div>
      </div>
      
    </div>
  );
};

export default CardGrid;
