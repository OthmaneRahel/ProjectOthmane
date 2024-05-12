import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { ajouterComment } from "./actions"

export default function AjouterComment() {
    const {id} = useParams()
    const [comment,setComment] = useState({auteur:'',texte:'',note:0})
    const getValue = (event) => {
        setComment({...comment,[event.target.name]:event.target.value})
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const ajouter = () => {
        dispatch(ajouterComment(id,comment))
        navigate('/listeCommentaire/'+id)
    }
    return <div className="m-5">
        <h1>Ajouter comment : </h1>
        <b>Auteur : </b>
        <input type="text" onChange={getValue} name="auteur"/> <br />
        <hr /><b>Text</b> <br />
        <textarea name="texte" onChange={getValue} cols="30" rows="10"></textarea><br />
        <input type="button" value="Ajouter" onClick={ajouter} className="btn btn-success" />
    </div>
}