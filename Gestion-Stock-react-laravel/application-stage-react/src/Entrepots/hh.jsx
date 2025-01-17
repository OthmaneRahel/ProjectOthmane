import React, { useState } from "react";
import { Dropdown, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation des styles Bootstrap

export default function AfficherListEntrepots(){
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <div className="container mt-4">
            <Dropdown>
                <Dropdown.Toggle variant="">
                    <i className="bi bi-list"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShowModal}>Afficher le modèle</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Titre du modèle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Contenu du modèle ici...
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Fermer
                    </Button>
                    <Button variant="primary">
                        Enregistrer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
