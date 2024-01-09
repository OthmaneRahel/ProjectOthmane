import { useDispatch, useSelector } from "react-redux";
import { supprimerRepas } from "./actions";
import { useNavigate } from "react-router-dom";

export default function ListeRepas() {
    const listeRepas = useSelector((state)=>state.listeRepas)
    const dispatch = useDispatch()
    const supprimer = (id) => {
        dispatch(supprimerRepas(id))
    }
    const navigate = useNavigate()
    const Commentaire = (id) => {
        navigate('/listeCommentaire/'+id)
    }
    const ajouterPromotion = (id) => {
        navigate('/ajouterPromo/'+id)
    }
    const ajouterI = (id) => {
        navigate('/ajouterIngredient/'+id)
    }
    return <div className="m-5">
        <h1>Liste Repas : </h1>
            {listeRepas.map((r)=>{
                return <div className="border border-5 p-3 w-50 m-2">
                    <b>ID : </b>{r.id} 
                    <b> - Nom : </b>{r.nom}
                    <b> - Prix : </b>{r.prix} <br />
                    <b> - Details : </b><ul>
                        <li>liste Ingredients: <ul>
                            {r.details.listeIngredients.map((i)=>{
                                return <li>{i} </li>
                            })}
                            <li><input type="button" onClick={()=>ajouterI(r.id)} value="Ajouter Ingredient" className="btn btn-outline-warning btn-sm"/></li>
                                </ul>
                        </li>
                        <li>Calories: {r.details.calories}</li>
                        <li>Allergenes:  <ul>
                            {r.details.allergenes.map((a)=>{
                                return <li>{a}</li>
                            })}
                                </ul>
                        </li>
                        <li>Temps Preparation: {r.details.tempsPreparation}</li>
                        <li>Type Cuisine: {r.details.typeCuisine}</li>
                            
                    </ul><hr />
                    <input type="button" value="List Commentaires" onClick={()=>{Commentaire(r.id)}} className="btn btn-warning" /> <hr />
                    <div className="bg-info p-3">
                    <h4>Promotions : </h4>
                            {r.promotions.map(p=>{
                                return <div>
                                    <h6>Libelle : {p.libelle}</h6>
                                    <p>{p.description}</p>
                                    <b>Value : {p.value}</b> <hr />
                                </div>
                            })}
                            <input type="button" onClick={()=>{ajouterPromotion(r.id)}} value="Ajouter Promotion" className="btn btn-info btn-sm m-2" />
                    </div> <hr />
                    <input type="button" value="Supprimer" className="btn btn-danger" onClick={()=>{supprimer(r.id)}}/> 
                </div> 
            })} 
    </div>
}