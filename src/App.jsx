import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Banner />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
