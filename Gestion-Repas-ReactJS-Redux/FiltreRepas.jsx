import { useDispatch, useSelector } from "react-redux";
import { supprimerRepas } from "./actions";
import { useEffect, useState } from "react";

export default function FiltreRepas() {
    const listeRepas = useSelector((state)=>state.listeRepas)
    const [liste,setListe] = useState([])
    const [temps,setTemps] = useState(0)
    const dispatch = useDispatch()
    const supprimer = (id) => {
        dispatch(supprimerRepas(id))
    }
    useEffect(()=>{
        if(temps!=0) {
            setListe(listeRepas.filter(r=>r.details.tempsPreparation==temps))
        } else setListe(listeRepas)
    })
    return <div className="m-5">
        <h1>Filtrer Par Temps de preparation : </h1>
        <input type="number" onChange={(event)=>setTemps(event.target.value)}/>
            {liste.map((r)=>{
                return <div className="border p-3 w-50 m-2">
                    <b>ID : </b>{r.id} 
                    <b> - Nom : </b>{r.nom}
                    <b> - Prix : </b>{r.prix} <br />
                    <b> - Temps Preparation : </b>{r.details.tempsPreparation} <br />
                    <input type="button" value="Supprimer" className="btn btn-danger" onClick={()=>{supprimer(r.id)}}/> 
                </div> 
            })} 
    </div>
}