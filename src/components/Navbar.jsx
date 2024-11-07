import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import logozombie from '../assets/logozombie.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src= {logozombie} />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Productos</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
