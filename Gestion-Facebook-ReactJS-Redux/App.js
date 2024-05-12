import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Addpost from './components/ReduxPostsTp/addpost.js';
import Addami from './components/ReduxPostsTp/addami.js';
import Afficher from './components/ReduxPostsTp/afficher.js';
export default function App () {
    return <Router>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><Link class="nav-link" to="/">Acceuil</Link></li>
          <li class="nav-item"><Link class="nav-link" to="/addpost">Ajouter un post</Link></li>
          <li class="nav-item"><Link class="nav-link" to="/addami">Ajouter un Ami</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Afficher />} />
        <Route path="/addpost" element={<Addpost />} />
        <Route path="/addami" element={<Addami />} />
      </Routes>
    </div>
  </Router>
} 