import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { augmenterQte , DesxQte , addtopanier } from "./actions";
export default function AfficherProduct(){
    const products = useSelector((state)=>state.products);
    const Panier = useSelector((state)=>state.Panier)
    const Dispatch = useDispatch();
    const [elementRecherche , setelementRecherche]=useState('')
    const Augmenter= (qte)=>{
        Dispatch(augmenterQte(qte))
    }
    const decQte = (qte) =>{
        Dispatch(DesxQte(qte));
    }
    const ajouterAuPanier = (product)=>{
        Swal.fire('Produit Ajouté Avec Success Au Panier ')
        if(Panier.includes(product)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ce produit deja Existe dans votre panier !',
              })
        }else{
            Dispatch(addtopanier(product))
        }
    }
    console.log(decQte)
    console.log(elementRecherche)
    console.log(Panier)
    return (
        <div>
            <div className="row">
                <div className="col-7 mx-5">
                    <br />
                    <input type="text" className="form-control" placeholder="Search product ..." onChange={(event)=>setelementRecherche(event.target.value)} />
                </div>
            </div>
            <div className="row">
            {
                products.filter((element)=>{
                    return elementRecherche.toLowerCase() === '' ? element  : element.NomProduit.toLowerCase().includes(elementRecherche)
                }).map((i)=>{
                    return <div id="items" className="col-3 border p-5">

                        <img src={i.imageProduit} alt="image" className="image-item"/><br />
                        <br />
                        <h5>{i.NomProduit}</h5>
                        <b>{i.prixProduit}</b><br />
                        <i>Stock : </i>
                        <button className="btn btn-warning" type="button" onClick={()=>decQte(i.idproduit)}>-</button>{' '}{i.quantite}{' '}
                        <button className="btn btn-warning" type="button" onClick={()=>Augmenter(i.idproduit)}>+</button><br />
                        <br />
                        <button type="button" className="btn btn-lg btn-primary" onClick={()=>ajouterAuPanier(i)}><i class="fa-solid fa-cart-plus"></i> Add To Panier</button>
                    </div>
                })
            }
        </div>
        </div>
    )
}