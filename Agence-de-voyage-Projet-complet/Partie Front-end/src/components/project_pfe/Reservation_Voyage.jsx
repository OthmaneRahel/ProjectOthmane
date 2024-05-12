import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
export default function Reservation_Voyage(){
    const location = useLocation()
    const [listD , setListD]=useState(location.state.dataReservationDispo)
    const navigate = useNavigate()
    console.log(listD)
    const ReservD = () =>{
        navigate('/reserveVoyages',{state:{listD}})
    }
    const NavigateToVoyages = () =>{
        navigate('/listeVoyage')
    }
    return <>
        <Fade top>
            <div className="content-table">
                        <table className="table table-striped" id="section1">
                            <thead className="bg-primary py-5" style={{fontSize:'23px'}}>
                                <th width={'10%'} className="text-dark" style={{textAlign:'center'}}>DÉPART</th>
                                <th width={'30%'} className="text-dark" style={{textAlign:'center'}}>FORMULE</th>
                                <th width={'10%'} className="text-dark" style={{textAlign:'center'}}>PRIX</th>
                                <th width={'8%'} className="text-dark" style={{textAlign:'center'}}>SÉLECTIONNER</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={`http://127.0.0.1:8000/storage/${listD.agenceVyg}`} className="" alt="" srcset="" width={'100%'} /><br/>
                                        <b style={{color:'#FFD43B',fontSize:'28px'}}><i class="fa-solid fa-plane-departure"></i></b>{' '}<b>Départ le : {listD.date_debut}</b>
                                        <div className="row">
                                                </div>
                                                <b style={{color:'#FFD43B',fontSize:'28px'}}><i class="fa-solid fa-plane-arrival"></i></b>{' '}<b> Retour le : {listD.date_fin}</b>
                                            </td>
                                            <td>
                                                <b>{listD.formule}</b>
                                            </td>
                                            <td style={{fontSize:'20px' , textAlign:'center'}}>
                                                <b>{listD.prixV} Dhs <br/><sub>Par Personne</sub></b>
                                            </td>
                                            <td>
                                                
                                                    <div className="d-grid">
                                                        <button  className="btn btn-warning btn-block" onClick={ReservD}>Je valide la reservation</button>
                                                    </div>    
                                            </td>
                                        </tr>
                            </tbody>
                        </table>
                    <div className="d-grid p-5" id="buttonTarif">
                        <button className="btn btn-warning" onClick={NavigateToVoyages}>Retour</button>
                    </div>
            </div>    
        </Fade>
    </>
}