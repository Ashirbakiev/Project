import React from 'react';
import './Footer.css'; // Подключаем стили для Footer

function Footer() {
  return (
    <footer className="footer">
      {/* Контактная информация */}
      <div className="footer-info">
        <p>Адрес: ул. Примерная, д. 1, г. Москва</p>
        <p>Email: info@amakids.ru | Телефон: +7 (123) 456-78-90</p>
      </div>
      {/* Социальные сети */}
      <div className="footer-social">
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">VK</a>
      </div>
      {/* Авторские права */}
      <div className="footer-copy">
        <p>&copy; 2024 Amakids. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;