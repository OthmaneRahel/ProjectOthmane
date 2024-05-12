import axios from "axios";
import React, { useState } from "react";

export default function AjtHaj() {
    const [haj, setHaj] = useState({
        nom: '',
        image: null,
        date_depart: '',
        date_arrivee: '',
        prix: '',
        description: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const getValue = (event) => {
        const value = event.target.type === 'file' ? event.target.files[0] : event.target.value;
        setHaj((prevHaj) => ({
            ...prevHaj,
            [event.target.name]: value
        }));
    };

    const AjtHaj = async (event) => {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire
        setLoading(true);
        const formData = new FormData();
        formData.append('nom', haj.nom);
        formData.append('image', haj.image);
        formData.append('date_depart', haj.date_depart);
        formData.append('date_arrivee', haj.date_arrivee);
        formData.append('prix', haj.prix);
        formData.append('description', haj.description);

        try {
            const res = await axios.post('http://127.0.0.1:8000/api/hajomra/', formData);
            if (res.status === 201) {
                setHaj({
                    nom: '',
                    image: null,
                    date_depart: '',
                    date_arrivee: '',
                    prix: '',
                    description: ''
                });
                alert('Haj & Omra ajouté avec succès!');
            }
        } catch (error) {
            console.error('Error while adding Haj & Omra:', error);
            setError('Erreur lors de l\'ajout du Haj & Omra. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text text-center text-light bg-success">Ajouter Haj & Omra</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form encType="multipart/form-data" onSubmit={AjtHaj}>
                <label className="form-label" htmlFor="nom">Nom</label>
                <input className="form-control" type="text" name="nom" id="nom" value={haj.nom} onChange={getValue} />
                <label className="form-label" htmlFor="date_depart">Date Départ</label>
                <input className="form-control" type="date" name="date_depart" id="date_depart" value={haj.date_depart} onChange={getValue} />
                <label className="form-label" htmlFor="date_arrivee">Date Arrivée</label>
                <input className="form-control" type="date" name="date_arrivee" id="date_arrivee" value={haj.date_arrivee} onChange={getValue} />
                <label className="form-label" htmlFor="prix">Prix</label>
                <input className="form-control" type="number" name="prix" id="prix" value={haj.prix} onChange={getValue} />
                <label className="form-label" htmlFor="description">Description</label>
                <textarea className="form-control" name="description" id="description" cols="10" rows="5" value={haj.description} onChange={getValue}></textarea>
                <label className="form-label" htmlFor="image">Image</label>
                <input className="form-control" type="file" name="image" id="image" onChange={getValue} />
                <button className="btn btn-success" type="submit" disabled={loading}>{loading ? 'Envoi en cours...' : 'Ajouter Haj & Omra'}</button>
            </form>
        </div>
    );
}
