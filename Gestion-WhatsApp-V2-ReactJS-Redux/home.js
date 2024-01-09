import React from 'react';
//import './App.css';

function Appo() {
    const redirectToApp = () => {
        // Rediriger vers la page principale de l'application
        window.location.href = "/page_principale";
    };

    return (
        <div className="container">
            <h1>Ma Messagerie</h1>
            <p>Bienvenue dans notre application de messagerie.</p>
            <button onClick={redirectToApp}>Ouvrir l'application</button>
        </div>
    );
}

export default Appo;