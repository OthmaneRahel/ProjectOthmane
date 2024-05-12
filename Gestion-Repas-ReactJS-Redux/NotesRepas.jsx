import { useDispatch, useSelector } from "react-redux";
import { supprimerRepas } from "./actions";

export default function PrixRepas () {
    const listeRepas = useSelector((state)=>state.listeRepas).sort((a,b)=>b.prix - a.prix)
    const dispatch = useDispatch()
    const supprimer = (id) => {
        dispatch(supprimerRepas(id))
    }

    return <div className="m-5">
        <h1>Trier les repas par prix : </h1>
            {listeRepas.map((r)=>{
                return <div className="border p-3 w-50 m-2">
                    <b>ID : </b>{r.id} 
                    <b> - Nom : </b>{r.nom}
                    <b> - Prix : </b>{r.prix} <br />
                    <input type="button" value="Supprimer" className="btn btn-danger" onClick={()=>{supprimer(r.id)}}/> 
                </div> 
            })} 
    </div>
}