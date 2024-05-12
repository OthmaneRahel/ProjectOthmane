import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddCont from './components/ReduxAppWhatssap/addContacts.js';
import AfficherConctact from './components/ReduxAppWhatssap/AfficherContactChat.js';
import Addmessage from './components/ReduxAppWhatssap/AddMessage.js';
import AfficherMessage from './components/ReduxAppWhatssap/AfficherChats.js';
export default function App () {
    return <div>
    <Router>
      <nav class="navbar navbar-expand-sm bg-success ">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li  class="nav-item"><Link  class="nav-link" to='/chats'>chats</Link></li>
          <li  class="nav-item"><Link class="nav-link" to='/contacts'>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/chats' element={<AfficherMessage/>} />
        <Route path='/Addmessage' element={<Addmessage/>} />
        <Route path='/contacts' element={<AfficherConctact/>}/>
        <Route path='/afficher' element={<AddCont/>}/>
      </Routes>
    </Router>
  </div>
} 