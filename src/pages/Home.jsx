import React, { useEffect } from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';
import logozombie2 from '../assets/logozombie2.png';
import cazadoraImage from '../assets/cazadora.jpg';
import botasImage from '../assets/botas.webp';
import guantesImage from '../assets/guantes.jpg';
import introAudio from '../assets/welcome.mp3'; 

const Home = () => {
    useEffect(() => {
        const audio = new Audio(introAudio); 
        audio.play(); 
    }, []); 

    return (
        <div className="home-container">
            <header className="header-section">
                <div className="header-content">
                    <img src={logozombie2} alt="Zombie" className="header-image" />
                    <div className="header-text">
                        <h1>Zombie Threads</h1>
                        <p>Equípate para el fin del mundo con estilo.</p>
                    </div>
                </div>
            </header>

            <section className="alerts-section">
                <h2>Avisos Importantes</h2>
                <div className="alerts-cards">
                    <div className="alert-card">
                        <h3>Aviso Crítico</h3>
                        <p>Asegúrate de tener siempre tu equipo listo para cualquier eventualidad.</p>
                    </div>
                    <div className="alert-card">
                        <h3>¡Atención!</h3>
                        <p>Los horarios de entrega pueden variar debido a condiciones climáticas.</p>
                    </div>
                    <div className="alert-card">
                        <h3>Nuevo Producto</h3>
                        <p>¡Acabamos de agregar nuevas prendas zombie a nuestra colección! No te lo pierdas.</p>
                    </div>
                </div>
            </section>

            <section className="offers-section">
                <h2>Ofertas de Ropa</h2>
                <div className="offers-cards">
                    <div className="offer-card">
                        <img src={cazadoraImage} alt="Cazadora de Sobreviviente" className="offer-image" />
                        <h3>Cazadora de Sobreviviente</h3>
                        <p>50% de descuento en cazadoras resistentes al clima.</p>
                        <div className="availability-box">6 unidades disponibles</div>
                    </div>
                    <div className="offer-card">
                        <img src={botasImage} alt="Botas Todo Terreno" className="offer-image" />
                        <h3>Botas Todo Terreno</h3>
                        <p>30% de descuento en botas perfectas para cualquier terreno.</p>
                        <div className="availability-box">10 unidades disponibles</div>
                    </div>
                    <div className="offer-card">
                        <img src={guantesImage} alt="Guantes de Protección" className="offer-image" />
                        <h3>Guantes de Protección</h3>
                        <p>Compra 2 pares y lleva el segundo con un 70% de descuento.</p>
                        <div className="availability-box">15 unidades disponibles</div>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="contact-container">
                    <h2>Contáctanos</h2>
                    <p>¿Tienes alguna pregunta o duda? ¡Estamos aquí para ayudarte!</p>
                    <p>Correo electrónico: zombieT@gmail.com</p>
                    <p>Teléfono: +123 456 7890</p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
