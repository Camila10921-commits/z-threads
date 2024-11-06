const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const productId = window.location.pathname.split('/').pop();
  
    useEffect(() => {
      fetchProductDetails();
    }, []);
  
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los detalles del producto');
        setLoading(false);
      }
    };
  
    if (loading) {
      return <div className="loading">Cargando detalles...</div>;
    }
  
    if (error) {
      return <div className="error">{error}</div>;
    }
  
    if (!product) {
      return <div className="error">Producto no encontrado</div>;
    }
  
    return (
      <div className="product-details">
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
            <button className="add-to-cart-button">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default ProductDetails;