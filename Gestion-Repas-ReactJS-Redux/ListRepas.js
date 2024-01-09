import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRepas, deleteComment } from './actions';


const ListeRepas = () => {
    const listeRepas = useSelector((state) => state.listeRepas)
    const dispatch = useDispatch();
    const supprimerRepas = (idrepas) => {
        dispatch(deleteRepas(idrepas));
    };
    const supprimerComment=(idrepas,auteur)=>{
        dispatch(deleteComment(idrepas,auteur))
    };
    return (
        <div>
        <center>
        <h2>Liste des repas</h2>
        <div>
        {listeRepas.map((repas)=>(
                <div key={repas.id}>
                    <b>{repas.id}</b><br/>
                    <b>{repas.nom}</b>
                    <b>{repas.pris}</b>
                    <div class="bg-dark text-white mt-3 p-3">
                    {repas.commentaires.map((c)=>{
                        return (<li>
                        <b>{c.auteur}</b><br/>
                        <span>
                        {c.texte}
                        <br/>
                        Note sur le repas : <b>{c.note}</b>
                        </span>
                        <br/><input type="button" onClick={()=>supprimerComment(repas.id,c.auteur)} value="Supprimer" class="btn btn-danger"/>
                        <hr/></li>)
                    })}
                    </div>
                    <button class="btn btn-danger" onClick={() => supprimerRepas(repas.id)}>Supprimer</button>
                </div>
        ))}
        </div>
        </center>
        </div>
    );
};

export default ListeRepas;
