import '../styles/Home.css';
import Footer from '../components/Footer'; 
import rachetlogo from '../assets/rachetlogo.jpg';
import halologo from '../assets/halologo.webp';
import residentlogo from '../assets/residentlogo.jpg'

const Home = () => {
    return (
        <div className="home-container">
            <header className="header-section">
                <h1>Bienvenidos a GamerE Pro</h1>
                <p>Encuentra las mejores ofertas y productos destacados</p>
            </header>

            <section className="alerts-section">
                <h2>Avisos</h2>
                <div className="alerts-cards">
                    <div className="alert-card">
                        <h3>Aviso Importante</h3>
                        <p>Recuerda que si tienes algún problema, puedes escribirnos a nuestro WhatsApp.</p>
                    </div>
                    <div className="alert-card">
                        <h3>¡Aviso Especial!</h3>
                        <p>Recuerda que el horario de atención ha cambiado.</p>
                    </div>
                </div>
            </section>

            <section className="offers-section">
                <h2>Ofertas Especiales</h2>
                <div className="offers-cards">
                    <div className="offer-card">
                        <img src={halologo} alt="Logo Halo" />
                        <h3>Halo: the master chief collection</h3>
                        <p>¡Descuento del 50%!</p>
                    </div>
                    <div className="offer-card">
                        <img src={rachetlogo} alt="Logo Rachet" />
                        <h3>Ratchet & Clank: Una dimensión aparte</h3>
                        <p>¡Descuento del 30%!</p>
                    </div>
                    <div className="offer-card">
                        <img src={residentlogo} alt="Logo resident" />
                        <h3>Resident Evil</h3>
                        <p>¡Descuento del 15%!</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
