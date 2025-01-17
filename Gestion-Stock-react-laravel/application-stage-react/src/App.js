import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router , Route , Routes , Link } from 'react-router-dom';
import AfficherListEntrepots from './Entrepots/ListEntrepots';
import ListerClient from './Entrepots/AfficherCategorie';
import AfficherListCategorieDepense from './Entrepots/CategorieDepense';
import AfficherListDepenses from './Entrepots/ListeDepenses';
import AfficherListCategorie from './Entrepots/AfficherCategorie';
import AfficherListProduit from './Entrepots/ListProduit';
import AjouterProduct from './Entrepots/AjouterProduit';
import AfficherResponsable from './Entrepots/Responsable';
import AfficherVendeur from './Entrepots/Vendeur';
import AfficherFornisseur from './Entrepots/Fornisseur';
import AfficherClient from './Entrepots/VVClient';
import AfficherdetailProduit from './Entrepots/DetailProduit';
import Utilisateurs from './Entrepots/utulisateur';
import Ajouter from './hh';
export default function App() {
  return (
    <>
    <Router>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark  justify-content-center">
  <div class="container-fluid">
    <b class="navbar-brand" >Gestion stock</b>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        {/* <li class="nav-item">
          <Link class="nav-link text-light" to="/ajouter">Link</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/">Link</Link>
        </li> */}
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" to="/" role="button" data-bs-toggle="dropdown"> <i class="bi bi-receipt-cutoff"></i> Achats </a>
          <ul class="dropdown-menu bg-dark text-light">
            <li><Link class="dropdown-item bg-dark text-light" to="/Depenses"> <i class="bi bi-archive" style={{paddingRight:'13px'}}></i> Liste des depenses</Link></li>
            <li><Link class="dropdown-item bg-dark text-light" to="/"> <i class="bi bi-plus-circle"  style={{paddingRight:'13px'}}></i> Ajouter des dépenses</Link></li>
            {/* <li><a class="dropdown-item bg-dark text-light" to="/">A third link</a></li> */}
          </ul>
        </li>
        <li class="nav-item dropdown bg-dark text-light">
          <a class="nav-link dropdown-toggle text-light" to="/" role="button" data-bs-toggle="dropdown"> <i class="bi bi-upc"></i> Produits</a>
          <ul class="dropdown-menu bg-dark text-light">
            <li><Link class="dropdown-item bg-dark text-light" to="/Products"> <i class="bi bi-card-list" style={{paddingRight:'13px'}}></i>List produits</Link></li>
            <li><Link class="dropdown-item bg-dark text-light" to="/Ajouter-Produit"> <i class="bi bi-plus-circle" style={{paddingRight:'13px'}}></i> Ajouter produit</Link></li>
            <li><Link class="dropdown-item bg-dark text-light" to="/"> <i class="bi bi-plus-circle" style={{paddingRight:'13px'}}></i> Ajouter inventaire</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" to="/" role="button" data-bs-toggle="dropdown"> <i class="bi bi-gear"></i> Paramètres</a>
          <ul class="dropdown-menu bg-dark text-light">
            <li><Link class="dropdown-item bg-dark text-light" to="/Entrepots"> <i class="bi bi-building" style={{paddingRight:'13px'}}></i> Entrepots</Link></li>
            <li><Link class="dropdown-item bg-dark text-light" to="/Categories-depences"> <i class="bi bi-folder2-open" style={{paddingRight:'13px'}}></i> Catégories de dépenses</Link></li>
            <li><Link class="dropdown-item bg-dark text-light" to="/Categories"> <i class="bi bi-folder-symlink-fill" style={{paddingRight:'13px'}}></i> Categories</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" to="/" role="button" data-bs-toggle="dropdown"> <i class="bi bi-people"></i> Utilisateurs</a>
          <ul class="dropdown-menu bg-dark text-light">
            <li><Link class="dropdown-item bg-dark text-light" to="/users"> <i class="bi bi-person-circle" style={{paddingRight:'13px'}}></i> Utilisateurs</Link></li>
            <li><Link class="dropdown-item bg-dark text-light" to="/Responsable"> <i class="bi bi-person-lines-fill" style={{paddingRight:'13px'}}></i> Responsable</Link></li>
            <li><Link class="dropdown-item bg-dark text-light" to="/Client"> <i class="bi bi-person-lines-fill" style={{paddingRight:'13px'}}></i> Client</Link></li>
            <li><Link class="dropdown-item bg-dark text-light" to="/Vendeur"> <i class="bi bi-person-lines-fill" style={{paddingRight:'13px'}}></i> Vendeur</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/hh"> <i class="bi bi-bell"></i> Notification</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/logout"> <i class="bi bi-box-arrow-right"></i> Log Out</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <Routes>
        <Route path='/Entrepots' element={<AfficherListEntrepots/>}/>
        <Route path='/Categories-depences' element={<AfficherListCategorieDepense/>}/>
        <Route path='/Depenses' element={<AfficherListDepenses/>}/>
        <Route path='/Categories' element={<AfficherListCategorie/>}/>
        <Route path='/Products' element={<AfficherListProduit/>}/>
        <Route path='/Ajouter-Produit' element={<AjouterProduct/>}/>
        <Route path='/users' element={<Utilisateurs/>}/>
        <Route path='/Responsable' element={<AfficherResponsable/>}/>
        <Route path='/Client' element={<AfficherClient/>}/>
        <Route path='/Vendeur' element={<AfficherVendeur/>}/>
        <Route path='/Detail-produit' element={<AfficherdetailProduit/>}/>
        <Route path='/gg' element={<Ajouter/>}/>
    </Routes>
    </Router>
    </>
  );
}
