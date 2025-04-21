import React from 'react';
import './ProductList.css';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Produto 1', description: 'Descrição do Produto 1', price: '$50', imgSrc: 'produto1.jpg' },
    { id: 2, name: 'Produto 2', description: 'Descrição do Produto 2', price: '$75', imgSrc: 'produto2.jpg' },
    { id: 3, name: 'Produto 3', description: 'Descrição do Produto 3', price: '$100', imgSrc: 'produto3.jpg' }
  ];

  return (
    <div id="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={`../assets/images/${product.imgSrc}`} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className="price">{product.price}</div>
          <button>Comprar</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
