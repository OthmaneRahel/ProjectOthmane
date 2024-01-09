import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRepas } from './actions';

const AjouterRepas = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const [messagestyle, setMessageStyle] = useState('');
    const [id, setId] = useState(0);
    const [nom, setNom] = useState('');
    const [prix, setPrix] = useState(0);
    const add = () => {
        
            const repasajoute = {
                id:id,
                nom,
                prix,
            };
            if (repasajoute.id=='' || repasajoute.nom=='' || repasajoute.prix=='') {
                setMessage('Veuillez remplir tous les champs.')
                setMessageStyle("red")
            }
            dispatch(addRepas(repasajoute));
            setMessage("Bien ajouté")
            setMessageStyle("green")
            setId(0);
            setNom('');
            setPrix(0);
    };

    return (
        <div>
            <center>
                <fieldset>
                    <legend>Ajouter un nouveau repas</legend>
                    <table>
                        <tr>
                            <td>Id</td>
                            <td><input type="number" name="id" onChange={(event)=>setId(event.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Nom</td>
                            <td><input type="text" name="nom" onChange={(event)=>setNom(event.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Prix</td>
                            <td><input type="number" name="prix" onChange={(event)=>setPrix(event.target.value)} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button type="button" className="btn btn-success" onClick={add}>Ajouter</button></td>
                        </tr>
                    </table>
                    <span style={{color :messagestyle}}>{message}</span>
                </fieldset>
            </center>
        </div>
    );
};

export default AjouterRepas;
