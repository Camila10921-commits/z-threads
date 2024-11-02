import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import gamerprologo1 from '../assets/gamerprologo1.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src= {gamerprologo1} />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Productos</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
