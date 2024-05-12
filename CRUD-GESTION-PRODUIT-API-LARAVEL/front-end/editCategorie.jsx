import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
export default function EditCategorie(){
    const location = useLocation();
    const [dataCat , setdataCat] = useState(location.state.ListDataCategorie)
    console.log(dataCat)
    const Navigate = useNavigate();
    console.log(dataCat)
    const getValue = (event) =>{
        setdataCat((prevP)=>({
            ...prevP,
            [event.target.name] : event.target.value
        }))
    }
    const Modifier = () =>{
        axios.put('http://127.0.0.1:8000/api/AfficherListCategories/'+dataCat.idCategorie,dataCat).then((res)=>{
            if(res.status == 200){
                Navigate('/Categorie')
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
                Navigate('/Categorie')
            }
        });
    }
    return <>
        <h1 className="mx-5 my-4" style={{fontSize:'53px'}}>edit Categorie</h1>
        <div className="row mx-5 my-4">
            <div class="col">
                <label htmlFor=""><strong style={{fontSize:'30px'}}>Nom catégorie :</strong></label>
                <input type="text" class="form-control" id="" placeholder="nom" onChange={getValue} name="nom" value={dataCat.nom}/>
            </div>
            <div class="col mx-5">
                <label htmlFor=""><strong style={{fontSize:'30px'}}>Description :</strong></label>
                <input type="text" class="form-control" placeholder="decription categorie" name="description" onChange={getValue} value={dataCat.description}/>
            </div>
            <br />
            <div class="row my-5">
                <div className=" col-9 d-grid">
                    <button type="button" class="btn btn-primary btn-block" onClick={Modifier}>Modifier Categorie</button>
                </div>
                <div className="col-3 d-grid">
                    <button type="button" class="btn btn-danger btn-block" onClick={NavigateToAcceuil}>Annuler</button>
                </div>
            </div>
        </div>
    </>
}