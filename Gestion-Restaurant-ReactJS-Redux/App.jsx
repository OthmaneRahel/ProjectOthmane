import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AjouterIng from './components/V1-RAHEL-OTHMANE/AjouterIngredient.jsx';
import AfficherIngredient from './components/V1-RAHEL-OTHMANE/AfficherIngredient.jsx';
import AjouterRecette from './components/V1-RAHEL-OTHMANE/AjouterReccett.jsx';
import AfficherRecette from './components/V1-RAHEL-OTHMANE/AfficherListRecette.jsx';
import SupprimerIngredients from './components/V1-RAHEL-OTHMANE/supprimerIngredient.jsx';
import SupprimerRecette from './components/V1-RAHEL-OTHMANE/supprimerRecette.jsx';
export default function App () {
    return(
        <div>
        <Router>
        <nav className='navbar navbar-expand-lg navbar-dark bg-success'>
          <div className='container'>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/AddI'>
                    {' '}Ajouter Ingredient
                  </Link>
                </li>
            </ul>
              <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/afficherIngredient' >
                  {' '}Afficher Ingredient
                </Link>
              </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/addRecette' >
                    {' '}Ajouter Recette
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/afficher'>
                    AfficherListRecette
                  </Link>
                </li>
                <li className='nav-item ' >
                  <Link className='nav-link' to='/suppI'>
                    {' '} Supprimer Ingredient
                  </Link>
                </li>
                <li className='nav-item ' >
                  <Link className='nav-link' to='/suppR/'>
                    {' '} Supprimer Recette
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/AddI' element={<AjouterIng/>} />
          <Route path='//afficherIngredient' element={<AfficherIngredient/>}  />
          <Route path='/addRecette' element={<AjouterRecette/>} />
          <Route path='/afficher' element={<AfficherRecette/>} />
          <Route path='/suppI' element={<SupprimerIngredients/>}  />
          <Route path='/suppR' element={<SupprimerRecette/>}  />
        </Routes>
      </Router>
      </div>
    )
}