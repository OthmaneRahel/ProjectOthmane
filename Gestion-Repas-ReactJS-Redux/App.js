import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AjouterRepas from './AddRepas';
import ListeRepas from './ListRepas';
import ListeCommentaires from './ListComments';
import AjouterPromotions from './AddPromotion';
import AjouterIngredients from './AddIngredients';
import FiltrerRepas from './FilterRepas';
import TrierRepas from './TrierRepas';
import '../bootstrap-5.2.3-dist/bootstrap-5.2.3-dist/css/bootstrap.min.css';

function App(props){
    return (
        <div>
          <Router>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="/repas">Listes Repas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/repas/add">Ajouter nouveau repas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/comments">Liste Commentaires</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/promotions/add">Ajouter une nouvelle promotion</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/ingredients/add">Ajouter un nouveau ingrédients</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/repas/filter">Filtrer les repas par temps de préparation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/repas/trier">Trier les repas par leur prix en order croissant</a>
            </li>
          </ul>
          <Routes>
            <Route path='/repas' element={<ListeRepas />} />
            <Route path='/repas/add' element={<AjouterRepas />} />
            <Route path='/comments' element={<ListeCommentaires />} />
            <Route path='/promotions/add' element={<AjouterPromotions />} />
            <Route path='/ingredients/add' element={<AjouterIngredients />} />
            <Route path='/repas/filter' element={<FiltrerRepas />} />
            <Route path='/repas/trier' element={<TrierRepas />} />
          </Routes>
          </Router>
        </div>
    )
}
export default App;