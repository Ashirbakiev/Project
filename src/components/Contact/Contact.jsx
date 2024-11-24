import React, { useState } from 'react';
import './Contact.css'; // Подключаем стили для Contact

function Contact() {
  // Состояния для формы
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки данных
    alert('Сообщение отправлено!');
    // Сброс формы
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact">
      <h2>Свяжитесь с нами</h2>
      <form onSubmit={handleSubmit}>
        {/* Поле имени */}
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        {/* Поле email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        {/* Поле сообщения */}
        <div className="form-group">
          <label htmlFor="message">Сообщение:</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          ></textarea>
        </div>
        {/* Кнопка отправки */}
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
}

export default Contact;