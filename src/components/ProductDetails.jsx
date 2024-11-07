import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css';
import pumpkinImage from '../Images/pumpink.png'; // Ruta de la imagen de calabaza

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const { id } = useParams(); 

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error('Producto no encontrado');
      }
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (err) {
      setError('Error al cargar los detalles del producto');
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    setNotificationMessage('Gracias por añadir al carrito. Tu compra será procesada con éxito en unos minutos.');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // La notificación se oculta después de 3 segundos
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

  if (!product) {
    return <div className="error">Producto no encontrado</div>;
  }

  return (
    <div className="product-details">
      {showNotification && (
        <div className="notification">
          {notificationMessage}
        </div>
      )}
      <div className="product-details-container">
        <div className="product-details-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details-info">
          <h1>{product.title}</h1>
          <p className="product-price">Precio: ${product.price}</p>
          <p className="product-category">Categoría: {product.category}</p>
          <p className="product-description">{product.description}</p>
          <div className="product-rating">
            <span className="rating-star">★</span>
            <span>{product.rating.rate}</span>
            <span className="rating-count">
              ({product.rating.count} valoraciones)
            </span>
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            🛒 Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
