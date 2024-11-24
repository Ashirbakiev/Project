// Header.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css'; // Импортируем стили

function Header() {
  const location = useLocation();

  return (
    <nav>
      {location.pathname !== '/' && (
        <NavLink to="/" exact>
          Home
        </NavLink>
      )}
      {location.pathname !== '/about' && (
        <NavLink to="/about">
          О нас
        </NavLink>
      )}
      {location.pathname !== '/programs' && (
        <NavLink to="/programs">
          Программы
        </NavLink>
      )}

{location.pathname !== '/events' && (
        <NavLink to="/events" exact>
          События
        </NavLink>
      )}
      {location.pathname !== '/news' && (
        <NavLink to="/news">
          Новости
        </NavLink>
      )}
      {location.pathname !== '/blog' && (
        <NavLink to="/blog">
          Блог
        </NavLink>
      )}{location.pathname !== '/Franchise' && (
        <NavLink to="/Franchise" exact>
          Франшиза
        </NavLink>
      )}
      {location.pathname !== '/contacts' && (
        <NavLink to="/contacts">
          Контакты
        </NavLink>
      )}
      {location.pathname !== '/login' && (
        <NavLink to="/login">
          Войти
        </NavLink>
      )}
    </nav>
  );
}

export default Header;
