import React from 'react';
import './Courses.css'; // Подключаем стили для Courses

function Courses() {
  // Пример списка курсов
  const courses = [
    { id: 1, title: 'Математика для детей', description: 'Основы математики для начальной школы.' },
    { id: 2, title: 'Английский язык', description: 'Учим английский легко и интересно.' },
    { id: 3, title: 'Робототехника', description: 'Создание и программирование роботов.' },
    // Добавьте больше курсов по необходимости
  ];

  return (
    <section className="courses">
      <h2>Наши курсы</h2>
      <div className="courses-list">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {/* Можно добавить кнопку для записи на курс */}
            <button>Записаться</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;