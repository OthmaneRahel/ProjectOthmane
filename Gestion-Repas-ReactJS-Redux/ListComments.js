import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteComment, incrementNoteComment } from './actions';
const ListeCommentaires = () => {
    const dispatch = useDispatch();
    const listeRepas = useSelector((state) => state.listeRepas);
    const [selectedRepasId, setSelectedRepasId] = useState();
    const repas = listeRepas.find((r) => r.id === parseInt(selectedRepasId));
    return (
        <div>
            <h2>Liste des commentaires pour le repas sélectionné</h2>
            <label htmlFor="repasSelect">Sélectionnez un repas: </label>
            <select id="repasSelect" onChange={(e) => setSelectedRepasId(e.target.value)}>
                <option value="">Sélectionnez un repas</option>
                {listeRepas.map((r) => (
                    <option key={r.id} value={r.id}>
                        {r.nom}
                    </option>
                ))}
            </select>
            {selectedRepasId && repas ? (
                <div className='bg-warning p-5'>
                    {repas.commentaires.map((c) => (
                        <div className='bg-secondary my-3'>
                            Commentaire sur le repas <b>{repas.nom}</b> by <b>{c.auteur}</b>
                            <br />
                            {c.texte}
                            <br />
                            Note: {c.note}
                            <br />
                        </div>
                    ))}
                </div>
            ) : (
                <div>Veuillez sélectionner un repas pour afficher les commentaires</div>
            )}
            <Link to="/comments/add">Add Comment</Link>
        </div>
    );
};

export default ListeCommentaires;
