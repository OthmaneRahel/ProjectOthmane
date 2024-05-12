import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AjouterProduit(){
    const [newProduit , setnewProduit]=useState({idCategorie:'',NomProduit:'',prix:'',quantite:''})
    const [dataCate , setdataCate]=useState([{}])
    const [message,setMessage]=useState('');
    const [disabled , setDisabled]=useState(true)
    const Navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/AfficherListCategories').then((res)=>{
            setdataCate(res.data)
        })
    },[])
    const getValue = (event) =>{
        setnewProduit((prevP)=>({
            ...prevP,
            [event.target.name]:event.target.value
        }))
    }
    const AjouterProduit = () =>{
        axios.post('http://127.0.0.1:8000/api/AfficherListProduit/',newProduit).then((res)=>{
            if(res.status == 201 ){
                setMessage('Votre Produit a été ajouté avec success')
                setDisabled(false)
                setnewProduit({idCategorie:'',NomProduit:'',prix:'',quantite:''})
            }else{
                alert('error d\'ajout de produit')
            }
        })
    }
    const NavigateToListProd = () =>{
        Navigate('/Produits')
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
        <h1 className="mx-5 my-4" style={{fontSize:'53px'}}>Ajouter Produit</h1>
        <div className="row mx-5 my-4">
            <div class="col py-3">
                <label htmlFor=""><strong style={{fontSize:'30px'}}>Categorie :</strong></label>
                <select name="idCategorie" className="form-select" onChange={getValue} value={newProduit.idCategorie}>
                    <option value="">Veuillez selectionnez le nom Categorie</option>
                        {
                            dataCate.map((e)=>{
                                return <option value={e.idCategorie}>{e.nom}</option>
                            })
                        }
                </select>
            </div>
            <div class="col mx-5 py-3">
                <label htmlFor=""><strong style={{fontSize:'30px'}}>Nom Produit :</strong></label>
                <input type="text" class="form-control" placeholder="Nom produit" name="NomProduit" onChange={getValue} value={newProduit.NomProduit}/>
            </div>
            <br />
            <div class="mr-5 py-3">
                <label htmlFor=""><strong style={{fontSize:'30px'}}>Prix :</strong></label>
                <input type="number" min={0} class="form-control" id="" placeholder="prix produit" onChange={getValue} name="prix" value={newProduit.prix}/>
            </div>
            <div class="mr-5 py-3">
                <label htmlFor=""><strong style={{fontSize:'30px'}}>Quantité :</strong></label>
                <input type="number" min={0} class="form-control" id="" placeholder="quantité produit" onChange={getValue} name="quantite" value={newProduit.quantite}/>
            </div>
            <div class="row py-3">
                <div className="col-10 d-grid">
                    <button type="button" class="btn btn-primary btn-block" onClick={AjouterProduit}>Ajouter Produit</button>
                </div>
                <div className="col-2">
                    <button type="button" class="btn btn-danger " onClick={NavigateToListProd}>Afficher list Produit</button>
                </div>
            </div>
        </div>
    </>
}