import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="header">
      <h1>Loja Online</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/products">Produtos</a>
        <a href="/contact">Contato</a>
      </nav>
    </header>
  );
};

export default Header;
