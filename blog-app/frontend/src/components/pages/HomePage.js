import React from "react";
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/banner-color.png" alt="imagen de portada" width="100%"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>¡Bienvenido a nuestro blog!</h2>
                    <p>Sumérgete en un mundo de historias, consejos y descubrimientos. Desde consejos de estilo de vida hasta exploraciones en profundidad de temas fascinantes, encontrarás inspiración y conocimiento aquí. ¡Explora, aprende y comparte tus pensamientos con nosotros!</p>
                </div>
                <div className="categorias">
                    <h2>Categorias</h2>
                    <div className="categoria">
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor">Juan Lopez - carteras.com</span>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default HomePage;