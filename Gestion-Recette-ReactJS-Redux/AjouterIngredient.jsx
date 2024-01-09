import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIng } from "./actions";
import { useNavigate } from "react-router-dom";
export default function AjouterIng() {
    const recette = useSelector((state)=>state.recette)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ingredient , setingredient]=useState({nom : '' , quantite : ''})
    const [id , setid]=useState('')
    const getval = (e) =>{
        setingredient((previngre)=>({
            ...previngre,
            [e.target.name]:e.target.value
        }))
    }
    const add = () =>{
        dispatch(addIng(id , ingredient))
        navigate('/afficherIngredient')
    }
    console.log(recette)
    console.log(ingredient)
    console.log(id)
  return (
    <div className="m-5">
      <h1>Ajouter Ingrédient :</h1>
      <label>Sélectionner une Recette :</label>
      <select onChange={(ev)=>setid(ev.target.value)}>
        <option>Veuillez selectionnez votre recette souhaite</option>
        {
            recette.map((i)=>{
                return <option value={i.id}>{i.nom}</option>
            })
        }
      </select><br />
      <br />
      <label >Nom ingredient :</label>
      <input type="text" name="nom" onChange={getval}/><br />
      <br />
      <label >quantite :</label>
      <input type="text" name="quantite" onChange={getval}/><br />
      <br />
      <button type="button" className="btn btn-primary" onClick={add}>Ajouter Ingredient</button>
    </div>
  );
}
