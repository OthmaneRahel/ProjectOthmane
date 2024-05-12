import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AjouterCategorie(){
    const [newCategorie , setnewCategorie]=useState({nom:'',description:''})
    const [message,setMessage]=useState('');
    const [disabled , setDisabled]=useState(true)
    const Navigate = useNavigate();
    const getValue = (event) =>{
        setnewCategorie((prevP)=>({
            ...prevP,
            [event.target.name]:event.target.value
        }))
    }
    const AjouterCategorie = () =>{
        axios.post('http://127.0.0.1:8000/api/AfficherListCategories/',newCategorie).then((res)=>{
            if(res.status == 201 ){
                setMessage('Votre categorie a été ajouté avec success')
                setDisabled(false)
                setnewCategorie({nom:'',description:''})
            }else{
                alert('error d\'ajout de categorie')
            }
        })
    }
    const NavigateToCategorie = () =>{
        Navigate('/Categorie')
    }
    return <>
        {disabled == false ? (
            <div className="px-5 mt-4">
                <div className="alert alert-success " role="alert">
                <b className="text-green">{message}</b>
            </div>
            </div>
            ) : null
        }
        <h1 className="mx-5 my-4" style={{fontSize:'53px'}}>Ajouter Categorie</h1>
        <div className="row mx-5 my-4">
            <div class="col">
                <label htmlFor=""><strong style={{fontSize:'30px'}}>Nom catégorie :</strong></label>
                <input type="text" class="form-control" id="" placeholder="Nom categorie" onChange={getValue} name="nom" value={newCategorie.nom}/>
            </div>
            <div class="col mx-5">
                <label htmlFor=""><strong style={{fontSize:'30px'}}>Description :</strong></label>
                <input type="text" class="form-control" placeholder="decription categorie" name="description" onChange={getValue} value={newCategorie.description}/>
            </div>
            <br />
            <div class="row my-5">
                <div className="col-9 d-grid">
                    <button type="button" class="btn btn-primary btn-block" onClick={AjouterCategorie}>Ajouter Categorie</button>
                </div>
                <div className="col-3 d-grid">
                    <button className="btn btn-success btn-block" type="button" onClick={NavigateToCategorie}>Afficher Categorie</button>
                </div>
            </div>
        </div>
    </>
}