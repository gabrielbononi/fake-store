import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div
      className="product-card"
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        margin: '16px',
        borderRadius: '8px',
        width: '250px',
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '100%', height: 'auto' }}
      />
      <h2>{product.title}</h2>
      <p>
        <strong>Price: ${product.price}</strong>
      </p>
    </div>
  );
};

export default ProductCard;
