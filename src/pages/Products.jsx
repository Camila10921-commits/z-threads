import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Products.css';
import Footer from '../components/Footer';
import pumpkinImage from '../../src/Images/pumpink.png'; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError('Error al cargar los productos');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <img src={pumpkinImage} alt="Calabaza girando" className="pumpkin" /> {/* Calabaza girando */}
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="products">
      <h2>Explora Nuestros Productos</h2>
      <div className="product-cards">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.title}
              className="product-image" 
            />
            <h4>{product.title}</h4>
            <p className="product-price">Precio: ${product.price}</p>
            <Link to={`/product-details/${product.id}`}>
              <button className="product-button">Ver Detalles</button>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products