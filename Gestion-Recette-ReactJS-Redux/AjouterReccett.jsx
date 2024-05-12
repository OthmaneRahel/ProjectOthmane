import React, { useState } from "react";
import { ajouterR } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function AjouterRecette() {
    const rec = useSelector((state) => state.recette);
    const [newRecette, setNewRecette] = useState({ id: Date.now(), nom: '', ingredients: [] });
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const add = () => {
        dispatch(ajouterR(newRecette));
        setNewRecette({
            id: Date.now(),
            nom: '',
            ingredients: []
        });
        navigate('/afficher')
    };
    console.log(rec);
    return (
        <div>
            <div className="m-4">
                <h1>Ajouter Recette</h1>
                <input type="text" onChange={(event) => setNewRecette({ ...newRecette, nom: event.target.value })} value={newRecette.nom} />
                <input type="button" onClick={add} value="Ajouter" className="btn btn-success" />
            </div>
        </div>
    );
}
