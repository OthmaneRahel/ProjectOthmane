import React, { useState } from "react";
import Footer from "./footer";
import { Fade } from "react-reveal";
import { AddDemande } from "./actionsThunk";
import { useDispatch } from "react-redux";
function Contact() {
    const Dispatch = useDispatch();
    const [message , setmessage ] = useState('')
    const [isDisabled , setisDisabled]=useState(false)
    const [newDemande , setnewDemande]=useState({Nom:'',Prenom:'',adresseEmail:'',NomDemande:'',demande:'',autre_demande:''})
    const getValue = (event)=>{
        setnewDemande((prevDemande)=>({
            ...prevDemande,
            [event.target.name]:event.target.value,
        }))
    }
    const Ajouter = () =>{
        Dispatch(AddDemande(newDemande))
        setnewDemande({Nom:'',Prenom:'',adresseEmail:'',NomDemande:'',demande:'',autre_demande:''})
        setmessage('Votre demande a été envoyé avec success');
        setisDisabled(true)
    }
    return (
        <div className="row">
            <Fade top>
            <div className="col-1"></div>
            <div className="col-lg-5 p-5" style={{margin:'auto'}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53211.0827602568!2d-7.6597463390666904!3d33.53537517878397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d6834f7e94b%3A0x5d7196c6fff04acf!2sA%C3%AFn%20Chock%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1714506192241!5m2!1sfr!2sma" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-1"></div>
            <div className="col-lg-4 p-4" style={{margin:'auto'}}>
                <form>
                <br/>
                {
                    isDisabled == true ?
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Success !</strong> {message}
                    </div>
                    : ''
                }
                <h1 className="py-2">Avez-vous une demande spéciale ?</h1>
                <input type="text" placeholder="Votre nom" className="form-control" name="Nom" onChange={getValue} value={newDemande.Nom}/>
                <br/>
                    <input type="text" placeholder="Votre prénom" className="form-control" name="Prenom" onChange={getValue} value={newDemande.Prenom}/>
                <br/>
                <input type="email" placeholder="Votre adresse email" className="form-control" name="adresseEmail" onChange={getValue} value={newDemande.adresseEmail}/>
                <br/>
                <select className="form-select" name="NomDemande" onChange={getValue} value={newDemande.NomDemande}>
                    <option value="">Demande</option>
                    <option value="hotel">Hôtel</option>
                    <option value="voyage">Voyage</option>
                    <option value="billet">Billet d'avion</option>
                    <option value="autres">Autres...</option>
                </select>
                <br />
                {
                    newDemande.NomDemande == 'autres' ? 
                    <input type="text" placeholder="Quel est votre choix ?" className="form-control" name="autre_demande" onChange={getValue}/>
                    : ''
                } <br />
                <textarea cols={30} rows={5} placeholder="Votre message" className="form-control" name="demande" onChange={getValue} value={newDemande.demande}/>
                <br/>
                <div className="d-grid mybabefati">
                    <button type="button" className="btn btn-lg btn-warning mb-5"  onClick={Ajouter}> Envoyer votre demande </button>
                </div> 
            </form>
        </div>
        <div className="col-1"></div>
        </Fade>
    </div>

    )
}
export default Contact 