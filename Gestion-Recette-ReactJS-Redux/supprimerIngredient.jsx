import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { supprimerIng } from "./actions";
export default function SupprimerIngredients() {
    const rec = useSelector((state) => state.recette);
    const dispatch = useDispatch();
    const [ingselectionne, setingselectionne] = useState("");
    const supp = () => {
            dispatch(supprimerIng(ingselectionne));
            setingselectionne("");
    };
    return (
        <div className="m-5">
            <h1>Supprimer Ingrédient :</h1>
            <label>Sélectionner un ingrédient :</label>
            <select id="selectIngredient" onChange={(e) => setingselectionne(e.target.value)} value={ingselectionne}>
                <option value=""> Sélectionnez un ingrédient </option>
                {rec.map((r) => (
                    r.ingredients.map((i) => (
                        <option value={i.nom}>{i.nom}</option>
                    ))
                ))}
            </select>
            <br />
            <button onClick={supp} className="btn btn-danger">Supprimer</button>
        </div>
    );
}
