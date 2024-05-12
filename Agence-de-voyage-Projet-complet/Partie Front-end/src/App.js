import './App.css';
import NavBar from './components/project_pfe/Acceuil';
import Accueil from './components/project_pfe/imageAcceuil';
import {Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import VoyageOrg from './components/project_pfe/VoyageOrganisee';
import Aff from './components/project_pfe/voyageUniq';
import Contact from './components/project_pfe/contact';
import Footer from './components/project_pfe/footer';
import HajOrg from './components/project_pfe/HajOrganise';
import HajUnique from './components/project_pfe/HajUnique';
import Reservation_Voyage from './components/project_pfe/Reservation_Voyage';
import VolOrganisee from './components/project_pfe/VolOrganisee';
import AjouterVoyage from './components/project_pfe/AjouterVoyage';
import AjouterVols from './components/project_pfe/AjouterVol';
import VolUnique from './components/project_pfe/VolUnique';
import Reservation_Vol from './components/project_pfe/Reservation_Vol';
import ConfirmationReservationVoyage from './components/project_pfe/Confimation_Reservation_voyage';
import ConfirmationReservationVol from './components/project_pfe/Confimation_Reservation_vol';
import AjtHaj from './components/project_pfe/AjouterHaj';
function App() {
    
  return (
    <div className="App">
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light text-dark" >
               <a className="navbar-brand" href="/acceuil"><img src="images/logopfe.png" width={'80px'}/><b className='nomVyg'>Nezaha Voyages</b></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{marginRight:'24px'}}>
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                        <Link className="nav-link" to="/acceuil">
                            <i class="fa-solid fa-house"></i> Accueil
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link text-dark" to="/listeVoyage">
                            <i class="fa-solid fa-person-walking-luggage"></i> Voyage organisé
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link text-dark" to="/haj-omra">
                            <i class="fa-solid fa-kaaba"></i> Haj et Omra
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/listVol">
                            <i class="fa-solid fa-plane-departure"></i> Vol
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/Contact">
                            <i class="fa-solid fa-id-badge"></i> Contact Us
                        </Link>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <div className="login_bt">
                        <ul>
                           <li><a href="#"><span className="user_icon"></span></a></li>
                           <li><a href="#"></a></li>
                        </ul>
                     </div>
                  </form>
               </div>
            </nav>
            <Routes>
                <Route path='/' element={<Accueil/>}/>
                <Route path="/acceuil" element={<Accueil/>}  />
                <Route path="/listeVoyage" element={<VoyageOrg/>} />
                <Route path='/voyage-sel/:id' element={<Aff/>}/>
                <Route path='/reservation' element={<Reservation_Voyage/>}/>
                <Route path='/haj-sel/:id' element={<HajUnique/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/haj-omra" element={<HajOrg/>}/>
                <Route path="/listVol" element={<VolOrganisee/>}/>
                <Route path="/vol-sel/:id" element={<VolUnique/>}/>
                <Route path="/ajouterV" element={<AjouterVoyage/>}/>
                <Route path="/ajouterVol" element={<AjouterVols/>}/>
                <Route path="/reservation-vol" element={<Reservation_Vol/>} />
                <Route path="/reserveVoyages" element={<ConfirmationReservationVoyage/>} />
                <Route path="/reserveVol" element={<ConfirmationReservationVol/>}/>
                <Route path="/ajouterHaj" element={<AjtHaj/>}/>
            </Routes>
          </Router>
          <Footer/>
    </div>
  );
}

export default App;
