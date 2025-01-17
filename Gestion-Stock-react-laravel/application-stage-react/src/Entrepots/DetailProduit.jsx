import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
export default function AfficherdetailProduit(){
    const location = useLocation()
    const [dataProduitSel , setDataProduitSel] = useState(location.state.listData)
    console.log(dataProduitSel)
    const Navigate = useNavigate()
    const RetourToProduit = () =>{
        Navigate('/Products')
    }
    return <>
        <div className="row">
            <div className="col-6 mt-5 ml-5">
                <img style={{width:'100%'}} src={`http://127.0.0.1:8000/storage/${dataProduitSel.image}`} />
            </div>
            <div className="col-1"></div>
            <div className="col-5 mt-5">
                 <table className="table table-striped">
                    <tr class="table-active">
                        <th>Nom</th>
                        <td class="table-active">{dataProduitSel.nom}</td>
                    </tr>
                    <tr>
                        <th>Code</th>
                        <td>{dataProduitSel.nom}</td>
                    </tr>
                    <tr>
                        <th>Unité</th>
                        <td>{dataProduitSel.unite}</td>
                    </tr>
                    <tr>
                        <th>Caisse</th>
                        <td>{dataProduitSel.caisse}</td>
                    </tr>
                    <tr>
                        <th>Tare</th>
                        <td>{dataProduitSel.tare}</td>
                    </tr>
                    <tr>
                        <th>Poids</th>
                        <td>{dataProduitSel.poids}</td>
                    </tr>
                    <tr>
                        <th>Nombre palette</th>
                        <td>{dataProduitSel.Nombre_palette}</td>
                    </tr>
                    <tr>
                        <th>Fourchette De</th>
                        <td>{dataProduitSel.Fourchette_de}</td>
                    </tr>
                    <tr>
                        <th>Fourchette A</th>
                        <td>{dataProduitSel.Fourchette_a}</td>
                    </tr>
                    <tr>
                        <th>Prix</th>
                        <td>{dataProduitSel.prix} Dhs</td>
                    </tr>
                    <tr>
                        <th>Alerte Quantité</th>
                        <td>{dataProduitSel.Alerte_Quantité}</td>
                    </tr>
                    <tr>
                        <th>Quantité</th>
                        <td>{dataProduitSel.qte}</td>
                    </tr>
                    <tr>
                        <th>Marque</th>
                        <td>{dataProduitSel.idMarque}</td>
                    </tr>
                    <tr>
                        <th>Catégorie</th>
                        <td>{dataProduitSel.idCat}</td>
                    </tr>
                    <br />
                </table>
                <button className="btn btn-success pr-3" onClick={RetourToProduit}>Retour</button>{' '}
            </div>
        </div>
    </>
}