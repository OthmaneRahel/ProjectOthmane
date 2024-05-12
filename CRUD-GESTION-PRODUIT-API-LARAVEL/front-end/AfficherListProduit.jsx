import axios from "axios";
import Swal from "sweetalert2";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function AfficherListProduit(){
    const [listDataProduit,setListDataProduit]=useState([{}]);
    const [message,setMessage]=useState('');
    const Navigate = useNavigate()
    const [disabled , setDisabled]=useState(true)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/AfficherListProduit').then((res)=>{
            setListDataProduit(res.data)
        })
    },[])
    console.log(listDataProduit)
    const SupprimerProduit = (id) =>{
        Swal.fire({
            title: "Avez-vous sur ?",
            text: "Avez-vous sur de confirmer votre suppression !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, Supprimer !"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://127.0.0.1:8000/api/AfficherListProduit/'+id).then((res)=>{
                    if(res.status == 200){
                        const listRes = listDataProduit.filter((i)=>i.idProduit != id);
                        setListDataProduit(listRes);
                        console.log(listRes)
                    }else{
                        setMessage('Votre Produit est n\'est pas supprimé')
                    }
                })
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
              });
            }
          });
    }
    const Modifier = (produit) =>{
        Navigate('/Produits/edit',{state : {listDataProduit : produit}});
    }
    return <>
    <div class="search-container">
</div>
    <div className="p-2">
        <table className="table table-striped">
            <thead className="bg-black text-light">
                <th>IdProduit</th>
                <th>idCategorie</th>
                <th>NomProduit</th>
                <th>prix</th>
                <th>quantite</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
                    listDataProduit.length > 0 ? 
                        listDataProduit.map((i)=>{
                            return <tr>
                                <td>{i.idProduit}</td>
                                <td>{i.idCategorie}</td>
                                <td>{i.NomProduit}</td>
                                <td>{i.prix}</td>
                                <td>{i.quantite}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>SupprimerProduit(i.idProduit)}>Supprimer</button>
                                    {' '}<button type="button" className="btn btn-primary" onClick={()=>Modifier(i)}>Modifier</button>
                                </td>
                            </tr>
                        })
                     : 
                        <tr>
                            <td colspan='6' className="text-center"><b>Aucun produit a Afficher</b></td>
                        </tr>
                    
                }
            </tbody>
        </table>
    </div>
    </>
}