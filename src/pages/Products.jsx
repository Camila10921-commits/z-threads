import { Link } from 'react-router-dom';
import '../styles/Products.css';
import Footer from '../components/Footer';
import robloxLogo from '../assets/robloxlogo.jpg';
import fornitelogo from "../assets/fornitelogo.jpg";
import minecraflogo from '../assets/minecraflogo.jpg';
import callofdutylogo from '../assets/callofdutylogo.jpg';
import leaguelogo from '../assets/leaguelogo.jpg';
import apexlogo from '../assets/apexlogo.jpg';
import freelogo from "../assets/freelogo.jpg";
import valorantlogo from "../assets/valorantlogo.jpg";

const products = [
    { id: 1, nombre: 'Fortnite', precio: '55.999', img: fornitelogo },
    { id: 2, nombre: 'Roblox', precio: '123.950', img: robloxLogo },
    { id: 3, nombre: 'Minecraft', precio: '26.695', img: minecraflogo },
    { id: 4, nombre: 'Call of Duty: Warzone', precio: '40.550', img: callofdutylogo },
    { id: 5, nombre: 'League of Legends', precio: '77.600', img: leaguelogo },
    { id: 6, nombre: 'Apex Legends', precio: '98.000', img: apexlogo },
    { id: 7, nombre: 'Free Fire', precio: '39.999', img: freelogo },
    { id: 8, nombre: 'Valorant', precio: '48.890', img: valorantlogo },
];


const Products = () => {
    return (
        <div className="products">
            <h2>Explora Nuestros Juegos</h2>
            <div className="product-cards">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.img} alt={product.nombre} />
                        <h4>{product.nombre}</h4>
                        <p>Precio: ${product.precio}</p>
                        <Link to={`/product-details?id=${product.id}`}>
                            <button className="product-button">Ver Detalles</button>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Products;
