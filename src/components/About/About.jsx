import React from 'react';
import './About.css'; // Подключаем стили для About
import Welcome from '../Welcome/welcome';
import Img1 from './logo/fbcbe960c3a251f8b65c5efb429e0eee.png'
import Img2 from './logo/94332fab28b2e2068acb8691e23e6543.png'
import Img3 from './logo/8ee44b2d22426bdd17e5c6cab4a37de9.png'
import Img4 from './logo/8ac863bff6fdbb076c4f57f68780acfb.png'
import Img5 from './logo/6170f91fcc6a47dfad068c2fe770251f.png'

function About() {
  return (
    <section className="about">
      <Welcome />
      <h3>О нас</h3>
      <div className="courses-container">
        <div className="courses-block">
          <h2 style={{width:"438px"}}>13 ЛЕТ УСПЕШНОГО ОПЫТА</h2>
          <img className='place-self-end' src={Img1} style={{width:'282px', height:'282px'}}></img>
        </div>
        <div className="courses-block">
          <h2 style={{width:"500px"}}>{'>'}20000 УЧЕНИКОВ ЕЖЕГОДНО ЗАНИМАЮТСЯ<br></br> В НАШИХ ЦЕНТРАХ</h2>
          <img className='place-self-end' src={Img2} style={{width:'282px', height:'282px'}}></img>
        </div>
        <div className="courses-block" >
          <h2 style={{width:"438px"}}>ГОТОВАЯ МЕТОДИЧЕСКАЯ БАЗА КУРСОВ</h2>
          <img className='place-self-end' src={Img3} style={{width:'282px', height:'282px'}}></img>
        </div>
        <div className="courses-block" >
          <h2 style={{width:"415px"}}>45 ФИЛИАЛОВ ОТКРЫТО В РАМКАХ СОБСТВЕННОЙ СЕТИ</h2>
          <img className='place-self-end' src={Img4} style={{width:'282px', height:'282px'}}></img>
        </div>
        <div className="courses-block">
          <h2 style={{width:"540px"}}>УДОБНАЯ СИСТЕМА<br></br> РАБОТЫ С КЛИЕНТАМИ</h2>
          <img className='place-self-end' src={Img5} style={{width:'282px', height:'282px'}}></img>
        </div>
        <div className="courses-block">
          <h2></h2>
        </div>
      </div>
    </section>
  );
}

export default About;