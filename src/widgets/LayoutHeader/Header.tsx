import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Блог постов</h1>
      <nav>
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
