import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { deleteProduitPanier } from "./actions";
export default function Panier(){
    const panier = useSelector((state) => state.Panier);
    const [produitRech , setproduitRech ] = useState('')
    const [indexP , setIndexP]=useState(0)
    const Dispatch = useDispatch();
    let totalPricePanier = 0;
    const Deleteproduit = (idp) =>{
      Swal.fire({
        title: 'Confirmer la Suppression ?',
        text: "Avez-vous sur supprimer le produit !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Supprimer-le !'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            ' Supprimé !',
            ' Votre Produit a été Supprimé .',
            'success'
          )
          Dispatch(deleteProduitPanier(idp))
        }
      })
    }
    console.log(panier)
    
  return (
    <div>
        <br/>
        <input type="text" className="form-control" placeholder="Rechercher sur un produit dans votre panier ...." onChange={(event)=>setproduitRech(event.target.value)} />
      <br />
      <h1 className="container-fluid">Panier</h1>
      <table className="table  table-hover">
            <tbody>
                {
                  panier.length == 0 ? <table className="table table-striped">
                        <tbody>
                        <tr colSpan="6">
                            <td className="text-center">Aucun produit dans le panier</td>
                        </tr> 
                        </tbody>
                    </table>
                  :  
                  panier.filter((elem=>{
                        return produitRech.toLowerCase() === '' ? elem  : elem.NomProduit.toLowerCase().includes(produitRech)
                    })).slice(indexP  , indexP + 3).map((i , index)=>{
                      totalPricePanier += parseInt(i.prixProduit) * parseInt(i.quantite);
                        return <tr>
                        <td><img style={{width:100}} src={i.imageProduit}/></td>
                        <td>{i.NomProduit}</td>
                        <td>{i.prixProduit} </td>
                        <td>x{i.quantite}</td>
                        <td>{parseInt(i.prixProduit) * parseInt(i.quantite)} Dhs</td>
                        <td><button id="supprimerButton" type="button" className="btn btn-danger" onClick={()=>Deleteproduit(i.idproduit)}><i class="fa-solid fa-trash-can"></i></button></td>
                    </tr>
                    })
                }
            </tbody>
      </table>
      <ul class="pagination pagination-lg justify-content-center">
        <li class="page-item">
          <a class="page-link" onClick={()=>setIndexP(indexP - 3)} href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" >{indexP}</a></li>
        <li class="page-item">
          <a class="page-link" onClick={()=>setIndexP(indexP + 3)} href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
      <table id="buttom" className="table table-striped">
        <tbody>
          <tr className="colspan-6">
            <td style={{fontSize:'33px'}} className="text-center"><b><i class="fa-solid fa-hand-holding-dollar"></i> Le total A payer est : {totalPricePanier} {totalPricePanier == 0 ? 'DH' : 'DHS'} </b></td>
          </tr>
        </tbody>
      </table>
      </div>
  );
};