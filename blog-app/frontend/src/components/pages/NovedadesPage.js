import React from "react";
import '../styles/components/pages/NovedadesPage.css';
const NovedadesPage = (props) => {
    return (
        <section>
            <h2>Novedades</h2>
            <div className="novedad">
                <h3>¡Bienvenidos a nuestra nueva aplicación!</h3>
                <h4>Descubre todas las nuevas características</h4>
                <p>Estamos emocionados de presentar nuestra última versión de la aplicación. Con nuevas funciones como notificaciones push y personalización de perfiles, ¡explora y disfruta de una experiencia mejorada!</p>
            </div>
            <div className="novedad">
                <h3>Actualización de la interfaz de usuario</h3>
                <h4>Mejora de la experiencia de usuario</h4>
                <p>Hemos escuchado tus comentarios y hemos realizado cambios significativos en nuestra interfaz de usuario. Desde un diseño más intuitivo hasta una navegación más fluida, ¡disfruta de una experiencia más agradable!</p>
            </div>
            <div className="novedad">
                <h3>Evento de lanzamiento de producto</h3>
                <h4>¡Únete a nosotros para conocer lo último!</h4>
                <p>Te invitamos a nuestro próximo evento de lanzamiento de producto, donde revelaremos las últimas innovaciones de nuestra compañía. No te pierdas la oportunidad de ser el primero en conocer lo que viene.</p>
            </div>
        </section>
    );
}

export default NovedadesPage;