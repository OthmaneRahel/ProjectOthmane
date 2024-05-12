import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function EditProduit(){
    const [dataCate , setdataCate]=useState([{}])
    const location = useLocation();
    const [dataProd , setDataProd] = useState(location.state.listDataProduit)
    console.log(dataProd)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/AfficherListCategories').then((res)=>{
            setdataCate(res.data)
        })
    },[])
    console.log(dataProd)
    const Navigate = useNavigate();
    console.log(dataProd)
    const getValue = (event) =>{
        setDataProd((prevP)=>({
            ...prevP,
            [event.target.name] : event.target.value
        }))
    }
    const Modifier = () =>{
        axios.put('http://127.0.0.1:8000/api/AfficherListProduit/'+dataProd.idProduit,dataProd).then((res)=>{
            if(res.status == 200){
                Navigate('/Produits')
            }else{
                alert('non modifier')
            }
        })
    }
    const NavigateToAcceuil = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "Avez-vous sur Annuler la modification",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Abondonner"
        }).then((result) => {
            if (result.isConfirmed) {
              Navigate('/Produits')
            }
        });
    }
    return <>
        <h1 className="mx-5 my-4" style={{fontSize:'53px'}}>Edit Produit</h1>
        <div className="row mx-5 my-4">
            <div class="col">
                <label htmlFor=""><strong style={{fontSize:'30px'}}>Nom catégorie :</strong></label>
                <select name="idCategorie" className="form-select" onChange={getValue} value={dataProd.idCategorie}>
                    <option value="">Veuillez selectionnez le nom Categorie</option>
                        {
                            dataCate.map((e)=>{
                                return <option value={e.idCategorie}>{e.nom}</option>
                            })
                        }
                </select>
            </div>
            <div class="col mx-5">
                <label htmlFor=""><strong style={{fontSize:'30px'}}>Nom produit :</strong></label>
                <input type="text" className="form-control" name="NomProduit" onChange={getValue} value={dataProd.NomProduit}/>
            </div>
            <br />
            <label htmlFor=""><strong style={{fontSize:'30px'}}>Prix produit :</strong></label>
            <input type="number" min={0} className="form-control" name="prix" onChange={getValue} value={dataProd.prix}/>
            <label htmlFor=""><strong style={{fontSize:'30px'}}>Quantité produit :</strong></label>
            <input type="number" min={0} className="form-control my-3" name="quantite" onChange={getValue} value={dataProd.quantite}/>
            <br />
            <br />
            <div className="row">
                <div className="col-9 d-grid">
                    <button type="button" className="btn btn-info" onClick={Modifier}>Modifier produit</button>
                </div>
                <div className="col-3 d-grid">
                    <button type="button" className="btn btn-danger" onClick={NavigateToAcceuil}>Annuler</button>
                </div>
            </div>
            
        </div>
    </>
}