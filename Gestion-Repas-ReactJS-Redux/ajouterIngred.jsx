import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ajouterIngredient } from "./actions";

export default function AjouterIngred()  {
    const [ingredient,setIngredient] = useState('')
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const ajouter = () => {
        dispatch(ajouterIngredient(id,ingredient))
        navigate('/listeRepas')
    }
    return <div className="m-4">
        <h1>Ajouter Ingredinet</h1>
        <input type="text" onChange={(event)=>setIngredient(event.target.value)} />
        <input type="button" onClick={ajouter}  value="Ajouter" className="btn btn-success" />
    </div>
}