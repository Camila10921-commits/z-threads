import { useLocation } from 'react-router-dom';
import '../styles/ProductDetails.css';
import Footer from '../components/Footer';
import robloxLogo1 from '../assets/robloxlogo1.jpg';
import fornitelogo1 from "../assets/fornitelogo1.jpg";
import minecraflogo1 from '../assets/minecraflogo1.jpg';
import callofdutylogo1 from '../assets/callofdutylogo1.jpg';
import leaguelogo1 from '../assets/leaguelogo1.jpg';
import apexlogo1 from '../assets/apexlogo1.jpg';
import freelogo1 from "../assets/freelogo1.jpg";
import valorantlogo1 from '../assets/valorantlogo1.jpg';

const products = [
    { id: 1, nombre: 'Fortnite', precio: '55.999', description: 'Juego de supervivencia y batalla en equipo.', img: fornitelogo1 },
    { id: 2, nombre: 'Roblox', precio: '123.950', description: 'Plataforma de juegos con mundos creados por usuarios.', img: robloxLogo1 },
    { id: 3, nombre: 'Minecraft', precio: '26.695', description: 'Juego de exploración y construcción.', img: minecraflogo1 },
    { id: 4, nombre: 'Call of Duty: Warzone', precio: '40.550', description: 'Juego de disparos en primera persona en modo battle royale.', img: callofdutylogo1 },
    { id: 5, nombre: 'League of Legends', precio: '77.600', description: 'Juego de estrategia y combate en equipo.', img: leaguelogo1 },
    { id: 6, nombre: 'Apex Legends', precio: '98.000', description: 'Battle royale con personajes únicos y habilidades especiales.', img: apexlogo1 },
    { id: 7, nombre: 'Free Fire', precio: '39.999', description: '50 jugadores luchan en una isla para ser el último en pie.', img: freelogo1 },
    { id: 8, nombre: 'Valorant', precio: '48.890', description: 'Juego de disparos táctico en primera persona con personajes únicos.', img: valorantlogo1 },
];

const ProductDetails = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id'); 
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2>Juego no encontrado</h2>;
    }

    return (
        <div className="product-details-container">
            <div className="product-details">
                <div className="product-image">
                    {product.img && <img src={product.img} alt={product.nombre} />}
                </div>
                <div className="product-info">
                    <h2>{product.nombre}</h2>
                    <p className="description">{product.description}</p>
                    <p className="price">Precio: ${product.precio}</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ProductDetails;
