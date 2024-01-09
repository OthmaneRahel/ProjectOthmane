import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Ajoutermenu from './components/RestaurantAppRedux/AjouterMenu.jsx';
import AfficherListMenu from './components/RestaurantAppRedux/AfficherListMenu.jsx';
import Addclient from './components/RestaurantAppRedux/Addclient.jsx';
import AfficherListClient from './components/RestaurantAppRedux/AfficherListClient.jsx';
import AjouterNewOrders from './components/RestaurantAppRedux/AjouterOrders.jsx';
import AfficherListOrders from './components/RestaurantAppRedux/AfficherListOrders.jsx';
import Invoice from './components/RestaurantAppRedux/Invoice.jsx';
export default function App () {
    return(
        <div>
      <Router>
        <ul className='navbar bg-success'>
          <li className='nav-item'><Link className='nav-link text-light' to={'/addMenu'}>Add New Menu</Link></li>
          <li className='nav-item'><Link className='nav-link text-light' to={'/ListMenu'}>List Menu</Link></li>
          <li className='nav-item'><Link className='nav-link text-light' to={'/ListClient'}>List Client</Link></li>
          <li className='nav-item'><Link className='nav-link text-light' to={'/AddNewClient'}>Add New Client</Link></li>
          <li className='nav-item'><Link className='nav-link text-light' to={'/ListOrders'}>List Orders</Link></li>
          <li className='nav-item'><Link className='nav-link text-light' to={'/AddNewOrders'}>Add New Orders</Link></li>
          <li className='nav-item'><Link className='nav-link text-light' to={'/Invoice'}>Invoice</Link></li>
          <li className='nav-item'><Link className='nav-link text-light' to={'./Panier'}>Panier</Link></li>
        </ul>
        <Routes>
          <Route path='/addMenu' element={<Ajoutermenu/>}/>
          <Route path='/ListMenu' element={<AfficherListMenu/>}/>
          <Route path='/ListClient' element={<AfficherListClient/>}/>
          <Route path='/AddNewClient' element={<Addclient/>}/>
          <Route path='/ListOrders' element={<AfficherListOrders/>}/>
          <Route path='/AddNewOrders' element={<AjouterNewOrders/>}/>
          <Route path='/Invoice' element={<Invoice/>}/>
          <Route path='/panier' element={<Panier/>}/>
        </Routes>
      </Router>
  </div>
    )
}