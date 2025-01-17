import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Dropdown, Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function AfficherListCategorieDepense(){
    const [ListDataCategorieDep, setListDataCategorieDep] = useState([]);
    const [entrepotSel, setentrepotSel] = useState('');
    const [index, setindex] = useState(0);
    const [newCategorieDepense, setnewCategorieDepense] = useState({code_categorie:'', nom:''});
    const [conteneur, setconteneur] = useState(1);
    const [message, setmessage] = useState(null);
    const Navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [categorieAModifier, setCategorieAModifier] = useState(null);
    const handleCloseModal = () => {
        setShowModal(false);
        setCategorieAModifier(null);
    };
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/CategoriesDepenses').then((res) => {
            setListDataCategorieDep(res.data);
        });
    }, []);

    const getvalue = (event) => {
        setnewCategorieDepense((prevC) => ({
            ...prevC,
            [event.target.name]: event.target.value
        }));
    };

    const handlePrevPage = () => {
        setindex(prevIndex => prevIndex - 5);
        setconteneur(prevConteur => prevConteur - 1);
    };

    const handleNextPage = () => {
        setindex(prevIndex => prevIndex + 5);
        setconteneur(prevConteur => prevConteur + 1);
    };

    const SupprimerdepencesCat = (id) => {
        Swal.fire({
            title: "Êtes-vous sûr ?",
            text: "Êtes-vous sûr de confirmer votre suppression !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui , Supprimer !"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://127.0.0.1:8000/api/SupprimerCategoriedepense/' + id).then((res) => {
                    if(res.status === 200){
                        const updatedList = ListDataCategorieDep.filter((category) => category.idCate_dep !== id);
                        setListDataCategorieDep(updatedList);
                    }
                });
            }
        });
    };

    const Ajouter = () => {
        axios.post('http://127.0.0.1:8000/api/AjouterCategoriedepense', newCategorieDepense).then((res) => {
            if(res.status === 201){
                Navigate('/Categories-depences')
                setmessage('Votre catégorie de dépense a été bien ajoutée')
                handleCloseModal();
            } else {
                alert("Erreur d'ajout");
            }
        });
    };

    const modifierCategorie = (categorie) => {
        setCategorieAModifier(categorie);
        handleShowModal();
    };

    const modifierCategorieDepense = () => {
        axios.put(`http://127.0.0.1:8000/api/ModifierCategoriedepense/${categorieAModifier.idCate_dep}`, newCategorieDepense)
            .then((res) => {
                if (res.status == 200) {
                    Navigate('/Categories-depences');
                    setmessage('Votre catégorie de dépense a été modifiée');
                    handleCloseModal();
                } else {
                    alert("Erreur de modification");
                }
            });
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-7"></div>
                <div className="col-3 mb-3">
                    <input type="text" className="form-control" placeholder="Search categorie depense" onChange={(e)=>setentrepotSel(e.target.value)} />
                </div>
                <div className="col-1">
                    <Dropdown>
                        <Dropdown.Toggle variant="dark">
                            <i className="bi bi-list" style={{fontSize:'18px'}}></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleShowModal}>
                                <i className="bi bi-plus-circle" style={{paddingRight:'13px'}} ></i>Ajouter catégorie dépense
                            </Dropdown.Item>
                            <hr className="m-3" style={{margin:'auto'}}/>
                            <Dropdown.Item onClick={SupprimerdepencesCat}>
                                <i className="bi bi-trash-fill" style={{paddingRight:'13px'}}></i> Supprimer les catégories
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{categorieAModifier ? "Modifier catégorie" : "Ajouter catégorie"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <div className="col">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Code categorie" 
                                        name="code_categorie" 
                                        onChange={getvalue}
                                        Value={categorieAModifier ? categorieAModifier.code_categorie : newCategorieDepense.code_categorie}
                                    />
                                </div>
                                <div className="col">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Nom categorie" 
                                        name="nom" 
                                        onChange={getvalue}
                                        Value={categorieAModifier ? categorieAModifier.nom : newCategorieDepense.nom}
                                    />
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={categorieAModifier ? modifierCategorieDepense : Ajouter}>
                                <i class="bi bi-database-add" style={{paddingRight:'13px'}}></i> {categorieAModifier ? "Modifier catégorie depense" : "Ajouter catégorie depense"}
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            {message == null ? null : <div className="alert alert-success" role="alert">
                <strong>{message}</strong>
            </div>}
            <table className="table table-striped" width={'100%'} style={{overflow:'auto'}}>
                <thead className="text-black border-3 border-dark bg-primary">
                    <tr>
                        <th style={{width:'1%'}}><input type="checkbox" className="form-check-input" style={{fontSize:'25px'}}/></th>
                        <th className="border-3">Code Categorie</th>
                        <th className="border-3">Nom categorie</th>
                        <th style={{width:'11%'}} className="border-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ListDataCategorieDep.length > 0 ?
                        ListDataCategorieDep.filter((e)=>{
                            return entrepotSel.toLowerCase() === '' ? e : e.nom.toLowerCase().includes(entrepotSel)
                        }).slice(index , index + 5).map((depencesCat) => (
                            <tr key={depencesCat.idCate_dep}>
                                <td style={{width:'1%'}} className="border-2 border-dark"><input type="checkbox" className="form-check-input" style={{fontSize:'25px'}}/></td>
                                <td className="border-2 border-dark">{depencesCat.code_categorie}</td>
                                <td className="border-2 border-dark">{depencesCat.nom}</td>
                                <td className="border-2 border-dark">
                                    <button className="btn btn-danger me-2 mb-2" onClick={()=>SupprimerdepencesCat(depencesCat.idCate_dep)}><i className="bi bi-trash3-fill"></i></button>
                                    <button className="btn btn-primary me-2 mb-2" onClick={()=>modifierCategorie(depencesCat)}><i className="bi bi-pen"></i></button>
                                </td>
                            </tr>
                        ))
                    :
                        <tr>
                            <td colSpan='6' className="bg-gray-100 text-center"> <strong>Aucun Categories Depense A afficher</strong></td>
                        </tr>
                    }
                </tbody>
            </table>
            {conteneur > 1 ?  <button onClick={handlePrevPage} className="btn btn-primary"> <i className="bi bi-chevron-double-left"></i> Prev page</button> : <button id="q" onClick={handlePrevPage} className="btn btn-primary" disabled> <i className="bi bi-chevron-double-left"></i> Prev page</button> }{' '} <b>{conteneur}</b> {' '}
            <button onClick={handleNextPage} className="btn btn-primary">  Next page <i className="bi bi-chevron-double-right"></i> </button>
        </div>
    );
}