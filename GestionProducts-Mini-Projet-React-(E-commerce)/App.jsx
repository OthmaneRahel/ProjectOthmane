import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AfficherProduct from './components/MiniProjectReact/AfficherProduct.jsx';
import Panier from './components/MiniProjectReact/panierProduit.jsx';
import AjouterProd from './components/MiniProjectReact/AjouterProduit.jsx';
import Acceuil from './components/MiniProjectReact/Acceuil.jsx';
import LoginUsers from './components/MiniProjectReact/login.jsx';
import Desconnect from './components/MiniProjectReact/Deconnexion.jsx';
export default function App () {
    return <div>
    <Router>
    <nav className='navbar navbar-expand-lg navbar-dark bg-success'>
      <div className='container'>
        <Link className='navbar-brand' to='/Acceuil'>
        <i class="fa-solid fa-store"></i>
          {" "}Mon store
        </Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
              <i class="fa-solid fa-right-to-bracket"></i>
                {' '}Login
              </Link>
            </li>
        </ul>
          <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/AjouterProduit' >
              <i className="fa-solid fa-plus"></i>
              {' '}Ajouter Produit
            </Link>
          </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/afficher' >
              <i class="fa-brands fa-shopify"></i>
                {" "}Products 
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/panier' disabled={!logs}>
              <i class="fa-solid fa-cart-shopping"></i>
                {' '}Panier
              </Link>
            </li>
            <li className='nav-item ' >
              <Link className='nav-link' to='/desco' disabled={!logs}>
              <i class="fa-solid fa-right-from-bracket"></i>
                {' '}LogOut
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path='/login' element={<LoginUsers/>}  />
      <Route path='/Acceuil' element={<Acceuil/>} />
      <Route path='/AjouterProduit' element={<AjouterProd />} />
      <Route path='/afficher' element={<AfficherProduct />} />
      <Route path='/panier' element={<Panier />} />
      <Route path='/desco' element={<Desconnect />} />
    </Routes>
  </Router>
</div>
} 