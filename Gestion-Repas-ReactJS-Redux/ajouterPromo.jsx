import { useState } from "react"
import { useDispatch } from "react-redux"
import { ajouterPromo } from "./actions"
import { useNavigate, useParams } from "react-router-dom"

export default function AjouterPromotion() {
    const {id} = useParams()
    const [promo,setPromo] = useState({libelle:'',description:'',value:0})
    const getValue = (event) => {
        setPromo({...promo,[event.target.name]:event.target.value})
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const ajouter = () => {
        dispatch(ajouterPromo(id,promo))
        navigate('/listeRepas')
    }
    return <div className="m-5">
        <h1>Ajouter Promotion :</h1>
        <b>Libelle : </b>
        <input type="text" onChange={getValue} name="libelle"/><br /><br />
        <b>Description : </b>
        <input type="text" onChange={getValue} name="description"/><br /><br />
        <b>Value : </b>
        <input type="number" onChange={getValue} name="value"/><br /><br />
        <input type="button" value="Ajouter" onClick={ajouter} className="btn btn-primary"/>
    </div>
}