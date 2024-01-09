import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addcontact , supprimerContact , modifierContact } from './actions';
import { BrowserRouter as Router, Routes, Route, Link , useNavigate } from 'react-router-dom';
function AfficherConctact() {
  const conct = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToAddContact = () => {
    navigate('/afficher');
  };
  const NavigateToAddMessage = () =>{
    navigate('/Addmessage');
  }
  const NavigateToChats = () =>{
    navigate('/chats');
  }
  const DelContact = (idC) => {
    dispatch(supprimerContact(idC))
  }
  const UpdateContact = (id , newValContact) => {
    dispatch(modifierContact(id , newValContact))
  }
  return (
    <div >
      <div>
        {conct && conct.map((con , i) => (
          <ul>
            <div  className='border bg-color secondary'>
                <u><b>Contact numero : {i + 1}</b><br/><br/></u>
                <b id=''>Nom contact : {con.nom}</b><br/>
                <b id=''>Numero de telephone : {con.telephone}</b>
                <button type='button' className='btn btn-outline-danger' onClick={()=>DelContact(con.id)}>Supprimer</button>{" "}
                <button type='button' className='btn btn-outline-warning' onClick={NavigateToAddMessage}>Send Message</button>{" "}
                <button type='button' className='btn btn-outline-success' onClick={NavigateToChats}>Check Message</button>{" "}
            </div><br/>
          </ul>
        ))}
      </div>
      <div className='d-grid'>
        <button type='button' onClick={navigateToAddContact} className='btn btn-primary btn-block'>Add contact</button> 
      </div>
      
    </div>
  );
}
export default AfficherConctact;

  