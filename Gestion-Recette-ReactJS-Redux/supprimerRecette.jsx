import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { supprimerRecette } from "./actions";
export default function SupprimerRecette() {
  const rec = useSelector((state) => state.recette);
  const dispatch = useDispatch();
  const [id , setid]=useState('')
  console.log(id)
  const supp = () =>{
    dispatch(supprimerRecette(id))
  }
  return (
    <div className="m-5">
      <h1>Supprimer Recette :</h1>
      <label>Sélectionner une Recette :</label>{' '}
      <select onChange={(e)=>setid(e.target.value)}>
        <option>Veuillez Selectionnez votre recette </option>
        {rec.map((i)=>{
            return <option value={i.id}>{i.nom}</option>
        })}
      </select>
      <br />
      <button className="btn btn-danger" onClick={supp}>Supprimer</button>
    </div>
  );
}
