import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Fade } from "react-reveal";
import Swal from "sweetalert2";
export default function ConfirmationReservationVol() {
    const [client, setClient] = useState({ nom: '', prenom: '', telephone: '', email: '' });
    const location = useLocation()
    const [liD , setLtD]=useState(location.state.listD)
    const navigate = useNavigate()

    console.log(liD)
    const [C,setC]=useState([]);
    const voy = useSelector((state) => state.vols);
    const filterVoy = voy.find((e)=>e.idVol == liD.idVol);
    console.log(filterVoy)
    const [reservation, setReservation] = useState({
        nombre_adultes: '',
        nombre_chambres:'',
        nombre_enfants: '',
        nombre_bebe: '',
        idclient: '',
        idVolDispo:liD.idVolDispo,
        idVygDispo: '',
        montant_total: 0,
    });
    const typeprix = { adulte: 7990, enfant: 6990, bebe: 2000 };
    const getvalue = (e) => {
        setReservation((prevReservation) => ({
            ...prevReservation,
            [e.target.name]: e.target.value
        }));
    };

    const getValue = (e) => {
        setClient((prevClient) => ({
            ...prevClient,
            [e.target.name]: e.target.value
        }));
    };
    let prixAdulte = reservation.nombre_adultes * typeprix.adulte;
    let prixEnfants = reservation.nombre_enfants * typeprix.enfant;
    let prixBebe = reservation.nombre_bebe * typeprix.bebe;
    let montanttotal = prixAdulte + prixEnfants + prixBebe;
    useEffect(() => {
        setReservation((prev) => ({
            ...prev,
            montant_total: montanttotal
        }));
    }, [montanttotal]);
    const add = () => {
        axios.post("http://127.0.0.1:8000/api/client/", client)
            .then((res) => {
                if (res.status === 201) {
                    console.log(res.data);
                    var idcle = res.data.Clients.idclient;
                    setReservation(prevReservation => ({
                        ...prevReservation,
                        idclient: idcle,
                        montant_total: montanttotal
                    }));
                    const updatedReservation = {
                        ...reservation,
                        idclient: idcle,
                        montant_total: montanttotal
                    };
                    axios.post("http://127.0.0.1:8000/api/reservation", updatedReservation)
                        .then((res) => {
                            if (res.status === 201) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Votre reservation a été bien Reservé",
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
                            } else {
                                alert('Impossible d\'ajouter la réservation');
                            }
                        });
                }
           
    })}
    const NavigateToVol = () =>{
        Swal.fire({
            title: "Avez-vous sur ?",
            text: "Voulez-vous Annuler votre reservation",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, Annuler!"
          }).then((result) => {
            if (result.isConfirmed) {
                navigate('/listVol')
            }})
    }
    const generatePDF = () => {
        const doc = new jsPDF();
        const currentDate = new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const currentTime = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        const logoX = 5, logoY = 5, logoWidth = 65, logoHeight = 65;
        const titleX = 100, titleY = 77;
        const infoX1 = 15, infoX2 = 105;
        const infoStartY = 102, infoIncrement = 18;
        const totalAmountFontSize = 24;
        const imageURL = process.env.PUBLIC_URL + 'images/logopfe.png'
        doc.addImage(imageURL, 'JPEG', logoX, logoY, logoWidth, logoHeight);
        const agencyNameX = logoX + logoWidth;
        const agencyNameY = logoY + logoHeight / 2;
        const agencyNameFontSize = 32;
        doc.setFontSize(agencyNameFontSize);
        doc.text('Nezaha Voyage', agencyNameX, agencyNameY, { align: 'left' });
        doc.setFontSize(30);
        doc.text('Confirmation Reservation', titleX, titleY, { align: 'center' });
        doc.setFontSize(15);
        doc.text(`Date : Le ${currentDate}`, infoX1, infoStartY);
        doc.text(`A : ${currentTime}`, infoX1, infoStartY + infoIncrement);
        doc.text(`Nom  : ${client.nom}`, infoX1, infoStartY + 2 * infoIncrement);
        doc.text(`Prénom  : ${client.prenom}`, infoX1, infoStartY + 3 * infoIncrement);
        doc.text(`Téléphone : ${client.telephone}`, infoX1, infoStartY + 4 * infoIncrement);
        doc.text(`Email  : ${client.email}`, infoX1, infoStartY + 5 * infoIncrement);
        doc.text(`Destination : ${filterVoy.nomVille}`, infoX2, infoStartY);
        doc.text(`Nombre de chambres : ${reservation.nombre_chambres}`, infoX2, infoStartY + infoIncrement);
        doc.text(`Nombre Adulte : ${reservation.nombre_adultes}`, infoX2, infoStartY + 2 * infoIncrement);
        doc.text(`Nombre Enfants : ${reservation.nombre_enfants}`, infoX2, infoStartY + 3 * infoIncrement);
        doc.text(`Nombre Bebe : ${reservation.nombre_bebe}`, infoX2, infoStartY + 4 * infoIncrement);
        doc.text(`Date Début Voyage : ${liD.date_debut}`, infoX2, infoStartY + 5 * infoIncrement);
        doc.text(`Date Fin Voyage : ${liD.date_fin}`, infoX2, infoStartY + 6 * infoIncrement);
        const maxWidth = doc.internal.pageSize.getWidth(); 
        const formuleText = `Formule : ${liD.formule}`;
        const splitFormule = doc.splitTextToSize(formuleText, maxWidth - infoX1);
        const formuleHeight = doc.getTextDimensions(splitFormule).h;
        doc.setFontSize(14);
        doc.text(splitFormule, infoX1, infoStartY + 7 * infoIncrement, { maxWidth: maxWidth - infoX1 });
        doc.setFontSize(totalAmountFontSize);
        doc.text(`Montant total : ${montanttotal} Dhs`, infoX1, infoStartY + 8 * infoIncrement + formuleHeight);
        doc.save('Confirmation_de_Reservation.pdf');
    };
    return (
        <div className="row hh">
                <div className="col-6 col-lg-6 col-md-6">
                <Fade top>
                    <div>
                        <div className="Properties_section_2">
                            <div className="blog_img">
                                <img src={`http://127.0.0.1:8000/storage/${filterVoy.image}`}/>
                            </div>
                                <div className="image_box">
                                    <div className="left_box">
                                        <h1 className="road_text">{liD.formule}</h1>
                                            <div className="area_main">
                                                <h3 className="area_text"><a href="#">Date Depart:<br />{liD.date_debut}</a></h3>
                                                <h3 className="area_text"><a href="#">Date Arrivée:<br />{liD.date_fin}</a></h3>
                                        </div>
                                    </div>
                                        <div className="right_box">
                                            <div className="rate_text">{liD.prixV} Dhs</div>
                                        </div>
                        </div>
                        </div>
                    </div>
                 </Fade>
                </div>
                <div className="col-6 mybabefati">
                    <input className="form-control" type="text" onChange={getValue} name="nom" id="" placeholder="Nom" /><br />
                    <input className="form-control" type="text" onChange={getValue} name="prenom" id="" placeholder="Prenom" /><br />
                    <input className="form-control" type="text" onChange={getValue} name="telephone" id="" placeholder="Telephone"/><br />
                    <input className="form-control" type="text" onChange={getValue} name="email" id="" placeholder="Email"/><br />
                    <label className="form-label">Nombre chambre :</label>
                    <input  type="number" className="form-control" onChange={getvalue} placeholder="Maximun 4" min={1} max={4} name="nombre_chambres" id="" /><br />
                    <label className="form-label">Nombre Adulte :</label>
                    <input  type="number" className="form-control" onChange={getvalue} placeholder="Maximun 8" min={1} max={8} name="nombre_adultes" id="" /><br />
                    <label className="form-label">Nombre Enfants :</label>
                    <input  type="number" className="form-control" onChange={getvalue} placeholder="Maximun 3" min={0} max={3} name="nombre_enfants" id="" /><br />
                    <label className="form-label">Nombre Bébé :</label>
                    <input  type="number" className="form-control" onChange={getvalue} name="nombre_bebe" placeholder="Maximun 1" min={0} max={1} id="" /><br />
                    <input  type="number" className="form-control" onChange={getvalue} name="montant_total" readOnly value={reservation.montant_total}/><br />
                    <div className="d-grid">
                        <button  className="btn btn-warning btn-block" onClick={() => { add(); generatePDF(); }}>Confirmer votre reservation</button>
                    </div>  
                </div>
                <div className="d-grid mybabefati">
                    <button className="btn btn-danger btn-block" onClick={NavigateToVol}>Annuler</button>
                </div>  
        </div>
    );
}
