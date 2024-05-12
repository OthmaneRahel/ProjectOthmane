import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ajouterRepas } from "./actions"
import { useNavigate } from "react-router-dom"

export default function AjouterRepas () {
    const listeRepas = useSelector(state=>state.listeRepas)
    const [nom,setNom]=useState()
    const [prix,setPrix]=useState()
    const [ingred,setIngred]=useState()
    const [caloreis,setCalories]=useState()
    const [allergenes,setAllergenes]=useState()
    const [temps,setTemps]=useState()
    const [type,setType]=useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const ajouter = () => {
        dispatch(ajouterRepas({
            id: listeRepas[listeRepas.length-1].id+1,
            nom: nom,
            prix: prix,
            details: {
              listeIngredients: [ingred],
              calories: caloreis,
              allergenes: [allergenes],
              tempsPreparation: temps, 
              typeCuisine: type,
            },
            commentaires: [],
            promotions: [],
          }))
          navigate('/listeRepas')
    } 
    return <div className="m-5">
        <h1>Ajouter Repas :</h1>
        <table>
            <tr>
                <th>Nom :</th>
                <td><input type="text" onChange={(event)=>{setNom(event.target.value)}}/></td>
            </tr>
            <tr>
                <th>Prix :</th>
                <td><input type="number" onChange={(event)=>{setPrix(event.target.value)}}/></td>
            </tr>
            <tr>
                <th>Ingredients :</th>
                <td><input type="text" onChange={(event)=>{setIngred(event.target.value)}}/></td>
            </tr>
            <tr>
                <th>Calories :</th>
                <td><input type="number" onChange={(event)=>{setCalories(event.target.value)}}/></td>
            </tr>
            <tr>
                <th>allergenes: </th>
                <td><input type="text" onChange={(event)=>{setAllergenes(event.target.value)}}/></td>
            </tr>
            <tr>
                <th>Temps Preparation: </th>
                <td><input type="number" onChange={(event)=>{setTemps(event.target.value)}}/> <i>- minutes</i></td>
            </tr>
            <tr>
                <th>Type Cuisine : </th>
                <td><input type="text" onChange={(event)=>{setType(event.target.value)}}/></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="button" value="Ajouter" onClick={ajouter} className="btn btn-success"/></td>
            </tr>
        </table>
        
    </div>
}