import React, { useState } from "react";
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { AddProduct } from "./actions";
export default function AjouterProd(){
    const products = useSelector((state)=>state.products);
    const Dispatch = useDispatch()
    const [newProduct ,setnewProduct] = useState({idproduit:Date.now() , NomProduit : '',imageProduit:'',prixProduit: 0 , quantite : 0})
    const getValue = (event) =>{
        setnewProduct((prevP)=>({
            ...prevP,
            [event.target.name]:event.target.value
        }))
    }
    const AjoutProd = () =>{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Produit a été ajouté avec Success'
          })
        Dispatch(AddProduct(newProduct))
        setnewProduct((prevPR)=>({
            idproduit: Date.now(), NomProduit : '',imageProduit:'',prixProduit: 0 , quantite : 0
        }))
    }
    console.log(products);
    return(
        <div >
            <div id="items"  className="container p-5 d-flex justify-content-center ">
            <table>
                <tr>
                    <td className="form-label">Nom Produit :</td>
                    <td><input type="text" name="NomProduit" value={newProduct.NomProduit} className="form-control" onChange={getValue} /></td>
                </tr><br />
                <tr>
                    <td className="form-label">Image Produit :</td>
                    <td><input type="text" name="imageProduit"  value={newProduct.imageProduit} className="form-control" onChange={getValue} /></td>
                </tr><br />
                <br />
                <tr>
                    <td className="form-label">Prix :</td>
                    <td><input type="text" name="prixProduit" value={newProduct.prixProduit} className="form-control" onChange={getValue} /></td>
                </tr><br />
                <br />
                <tr>
                    <td></td>
                    <td><button type="button" onClick={AjoutProd} className="btn btn-lg btn-success">Ajouter Produit</button></td>
                </tr>
            </table>
        </div>
        </div>
    )
}