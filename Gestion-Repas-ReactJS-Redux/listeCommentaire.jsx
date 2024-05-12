import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { incrementNote, supprimerComment } from "./actions";

export default function ListeCommentaire() {
    const {id} = useParams()
    const listeRepas = useSelector((state)=>state.listeRepas)
    const listeCommentaire = listeRepas.find((r)=>r.id==id).commentaires
    const dispatch = useDispatch()
    const sup = (auteur) => {
        dispatch(supprimerComment(auteur,id))
    }    
    const plusNote = (auteur) => {
        dispatch(incrementNote(auteur,id))
    }    
    const navigate = useNavigate()
    const ajouter = () => {
        navigate('/ajouterComment/'+id)
    }
    return <div className="m-5">
        <h1>Commentaires :</h1>
            {listeCommentaire.map(c=>{
                return <div className="border p-3">
                            <h6>Auteur : {c.auteur}</h6>
                            <p>{c.texte}</p>
                            <b>Note : {c.note}</b> 
                            <input type="button" value="+" onClick={()=>{plusNote(c.auteur)}} className="btn btn-outline-warning btn-sm m-2" /><br />
                            <input type="button" value="delete" onClick={()=>{sup(c.auteur)}} className="btn btn-danger" />
                        </div>
                })} <br/>
            <input type="button" value="Ajouter Commentaire" onClick={ajouter}  className="btn btn-primary"/>
    </div>
}