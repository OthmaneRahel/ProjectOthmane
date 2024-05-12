import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addcontact } from './actions';
import { useNavigate } from 'react-router-dom';
function AddCont() {
    const navigate = useNavigate();
    const contacts = useSelector((state) => state.contact);
    const dispatch = useDispatch();
    const [newContact, setNewContact] = useState({ id: Date.now(), nom: "", telephone: "" , chats :[]});
    const [message, setMessage] = useState("");
    const AjouterContact = () => {
        dispatch(addcontact(newContact));
        setNewContact((prevC) => ({
            id: Date.now(),
            nom : "",
            telephone : "",
        }));
        navigate("/contacts");
    }
    console.log(newContact.chats);
    
    console.log(contacts);
    return (
        <div>
            <div className="card">
                <div className="card-header">Ajouter un contact</div>
                <div className="card-body">
                    <table>
                        <tr>
                            <td className='form-label'>Nom du contact :</td>
                            <td><input className='form-control' type='text' value={newContact.nom} onChange={(e) => setNewContact({ ...newContact, nom: e.target.value })} /></td>
                        </tr>
                        <tr>
                            <td className='form-label'>Numéro de téléphone :</td>
                            <td><input className='form-control' type='text' value={newContact.telephone} onChange={(e) => setNewContact({ ...newContact, telephone: e.target.value })} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type='button' className='btn btn-md btn-success' onClick={AjouterContact} value="Ajouter un contact" /></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AddCont;
