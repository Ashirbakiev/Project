import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Programs from './components/Programs/programs.jsx';
import Footer from './components/Footer/Footer.jsx';
import FormLogin from './components/Auth/Login.tsx';
import FormSignup from './components/Auth/Signup.tsx';
import MemotestMcQueen from './components/MemotestGame/MemotestMcQueen.tsx';
import Game2 from './components/MemotestGame2/ui/Game.tsx';
import Franchise from './components/Franchise/Franchise.jsx';
import Contact from './components/Contact/Contact.jsx'
import Blog from './components/Blog/Blog.jsx';
import News from './components/News/News.jsx';
import Events from './components/Events/Events.jsx';
import Chess from './components/Chess/Game.tsx';
 
function App() {
  return (
    <Router>
      {/* Включаем верхнее меню на всех страницах */}
      <Header />
      {/* Настраиваем маршруты для различных страниц */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/News" element={<News />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Login" element={<FormLogin />} />
        <Route path="/Signup" element={<FormSignup />} />
        <Route path="/Game1" element={<MemotestMcQueen />} />
        <Route path="/Game2" element={<Game2 />} />
        <Route path="/Game3" element={<Chess />} />
        <Route path="/Franchise" element={<Franchise />} />
      </Routes>
      {/* Включаем нижнее меню на всех страницах */}
      <Footer />
    </Router>
  );
}

export default App;