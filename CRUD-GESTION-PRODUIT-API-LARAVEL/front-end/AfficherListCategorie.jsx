import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AfficherListCategories(){
    const [ListDataCategorie,setListDataCategorie]=useState([{}]);
    const [message,setMessage]=useState('');
    const [disabled , setDisabled]=useState(true)
    const Navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/AfficherListCategories').then((res)=>{
            setListDataCategorie(res.data)
        })
    },[])
    console.log(ListDataCategorie)
    const SupprimerCate = (id) =>{
        Swal.fire({
            title: "Avez-vous sur ?",
            text: "Avez-vous sur de confirmer votre suppression !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Supprimer !"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://127.0.0.1:8000/api/AfficherListCategories/'+id).then((res)=>{
                    if(res.status == 200){
                        const listCat = ListDataCategorie.filter((i)=>i.idCategorie != id)
                        setListDataCategorie(listCat);
                        setMessage('Votre Categorie a été supprimé avec success')
                        setDisabled(false)
                    }else{
                        setMessage('Votre Categorie est n\'est pas supprimé')
                        setDisabled(false)
                    }
                })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your category has been deleted.",
                    icon: "success"
                  });
        }})
    }
    const Modifier = (categorie) =>{
        Navigate('/Categories/edit',{state:{ListDataCategorie:categorie}})
    }
    return <>
    <div className="p-2">
        <table className="table table-striped">
            <thead className="bg-black text-light">
                <th>idCategorie</th>
                <th>nom</th>
                <th>description</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
                    ListDataCategorie.length > 0 ? 
                        ListDataCategorie.map((i)=>{
                            return <tr>
                                <td>{i.idCategorie}</td>
                                <td>{i.nom}</td>
                                <td>{i.description}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>SupprimerCate(i.idCategorie)}>Supprimer</button>{' '}
                                    <button type="button" className="btn btn-primary" onClick={()=>Modifier(i)}>Modifier</button>
                                </td>
                            </tr>
                        })
                    :
                    <tr>
                        <td colspan='6' className="text-center"><b>Aucun categorie a Afficher</b></td>
                    </tr>
                }
            </tbody>
        </table>
    </div>
    </>
}