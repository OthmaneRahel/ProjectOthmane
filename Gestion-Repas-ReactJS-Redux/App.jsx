import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ListeRepas from "./listeRepas";
import ListeCommentaire from "./listeCommentaire";
import AjouterRepas from "./ajouterPepas";
import AjouterPromotion from "./ajouterPromo";
import AjouterIngred from "./ajouterIngred";
import FiltreRepas from "./FiltreRepas";
import AjouterComment from "./ajouterComment";
import PrixRepas from "./NotesRepas";

export default function App () {
    return <Router>
        <nav>
            <ul className="nav">
            <li className="nav-item"><Link to='/listeRepas' className="nav-link">Liste Repas</Link></li>
            <li className="nav-item"><Link to='/ajouterRepas' className="nav-link">Ajouter Repas</Link></li>
            <li className="nav-item"><Link to='/filtre' className="nav-link">Filtrer Par Temps</Link></li>
            <li className="nav-item"><Link to='/noteRepas' className="nav-link">Prix Repas</Link></li>
            </ul>
        </nav>
        <Routes>
        <Route path='/listeRepas' element={<ListeRepas/>}/> 
        <Route path='/ajouterRepas' element={<AjouterRepas/>}/> 
        <Route path='/listeCommentaire/:id' element={<ListeCommentaire/>}/> 
        <Route path='/ajouterPromo/:id' element={<AjouterPromotion/>}/> 
        <Route path='/ajouterIngredient/:id' element={<AjouterIngred/>}/> 
        <Route path='/filtre' element={<FiltreRepas/>}/> 
        <Route path='/noteRepas' element={<PrixRepas/>}/> 
        <Route path='/ajouterComment/:id' element={<AjouterComment/>}/> 
        </Routes>
    </Router>
} 