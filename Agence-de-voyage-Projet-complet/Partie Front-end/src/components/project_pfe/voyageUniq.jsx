import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import { Fade } from 'react-reveal';
import { Link } from "react-router-dom";
import './InfosBVoyage.css'
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Aff(){
    const {id} = useParams();
    const [dataReservationDispo , setdataReservationDispo]=useState([])
    const vyg =  useSelector((state)=>state.voyages)
    const navigate = useNavigate()
    const Voyage = vyg.find((i)=>i.idVoyage == id)
    const DateAjourdhui = new Date();
    console.log(dataReservationDispo)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/AfficherListReserDispo/${id}`).then((resp)=>{
            setdataReservationDispo(resp.data)
        })
    },[])
    const NavigateToVoyages = () =>{
        navigate('/listeVoyage')
    }
    const ReservD = (ReserDispo) =>{
        navigate('/reservation',{state:{dataReservationDispo:ReserDispo}})
    }
    return <div>
            <div>
                <Fade top>
            <div className="row px-5 hubqalbifati">
                <div className="col-8">
                    <div className="Omrifati">
                        <span> <i class="bi bi-geo-alt-fill"></i> {Voyage.nomVille} {' '} <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></span><br />
                    </div>
                    <div className="fati">
                        <img src={`http://127.0.0.1:8000/storage/${Voyage.image}`}/>
                    </div>
                </div>
                <div className="col-4 fati2">
                    <div className="pr"><b className="">A partir de <br /> <span className="prixVoyage">{Voyage.prix}</span> MAD <br /> Par Personne</b></div>
                    <br />
                    <br />
                    <div className="kk">
                        <div className="row">
                                <div className='col-6'>
                                    <b className="text-center"><i style={{fontSize:'30px'}} class="fa-solid fa-stopwatch"></i> 8 jours / 7 nuits</b>
                                </div>
                                <div className='col-6'>
                                    <b className="text-center"><i style={{fontSize:'30px'}} class="fa-solid fa-utensils"></i> Petit déjeuner</b>
                                </div>
                        </div><br />
                        <div className="row py-3">
                                <div className='col-6'>
                                    <b className="text-center"><i style={{fontSize:'30px'}} class="fa-solid fa-plane-up"></i> Vol A/R</b>
                                </div>
                                <div className='col-6'>
                                    <b className="text-center"><i style={{fontSize:'30px'}} class="fa-solid fa-bus"></i> Transfert Aeroport</b>
                                </div>
                        </div>
                    </div>
                    <div className="monbebefati">
                        <b style={{fontSize:'30px'}}>Réservez directement au</b><br />
                        <b style={{fontSize:'25px'}}><i class="fa-solid fa-square-phone"></i> 00212522302548</b>
                    </div>
                    <div><br /> 
                    </div>
                    <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
                        <ul class="navbar-nav">
                            <div className="d-grid">
                                <li><a className="btn btn-primary btn-block" href="#section1"><b style={{textAlign:'center'}}>VOIR TARIFS & DISPOS</b></a></li>
                            </div>
                        </ul>
                    </div>
                </div>
                <br />
            </div>
                <Fade top>
                    <div className="description">
                        <b>Description :</b><br />
                        <p>{Voyage.description}</p>
                        <br/>
                    </div>
                </Fade>
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
                                {
                                    dataReservationDispo.map((e)=>{
                                        return <tr>
                                            <td>
                                                <img src={`http://127.0.0.1:8000/storage/${e.agenceVyg}`} className="" alt="" srcset="" width={'100%'} /><br/>
                                                <b style={{color:'#FFD43B',fontSize:'28px'}}><i class="fa-solid fa-plane-departure"></i></b>{' '}<b>Départ le : {e.date_debut}</b>
                                                <div className="row">
                                                </div>
                                                <b style={{color:'#FFD43B',fontSize:'28px'}}><i class="fa-solid fa-plane-arrival"></i></b>{' '}<b> Retour le : {e.date_fin}</b>
                                            </td>
                                            <td>
                                                <b>{e.formule}</b>
                                            </td>
                                            <td style={{fontSize:'20px' , textAlign:'center'}}>
                                                {/* kanbghik kanbghik kanbghik kanbghik kanbghik kanbghik kanbghik kanbghik kanbghik */}
                                                <b>{e.prixV} Dhs <br/><sub>Par Personne</sub></b>
                                            </td>
                                            <td>
                                                {
                                                    DateAjourdhui < new Date(e.date_fin) ?
                                                    <div className="d-grid">
                                                        <button  className="btn btn-warning btn-block" onClick={()=>ReservD(e)}>Je reserve</button>
                                                    </div>    
                                                    :
                                                    <div className="d-grid">
                                                        <button className="btn btn-danger btn-block" disabled> Epuisé </button>
                                                    </div>
                                                }
                                                
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    <div className="d-grid p-5" id="buttonTarif">
                        <button className="btn btn-warning" onClick={NavigateToVoyages}>Retour</button>
                    </div>
                    </div>
                    
                </Fade>
                </Fade>
            </div>
    </div>
}