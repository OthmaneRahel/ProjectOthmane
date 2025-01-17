import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Dropdown, Modal, Button, Form } from 'react-bootstrap';


export default function AfficherResponsable() {
    const [ListDataResponsable, setListDataResponsable] = useState([]);
    const [Responsable, setResponsable] = useState('');
    const [index, setIndex] = useState(0);
    const [entrepot, setEntrepot] = useState([]);
    const [newResponsable, setNewResponsable] = useState({ nom: '', tele: '', login: '', password: '', idE: '', status: '' });
    const [conteneur, setConteneur] = useState(1);
    const [message, setMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [ResponsableModifier, setResponsableModifier] = useState(null);
    const [selectedIds, setSelectedIds] = useState([]);



    const getEntrepotNomById = (id) => {
        const Entrepot = entrepot.find(Entrepot => Entrepot.idE=== id);
        return Entrepot ? Entrepot.nom : 'Entrepot inconnue';
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setResponsableModifier(null);
    };

    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/r').then((res) => {
            setListDataResponsable(res.data);
        });
    }, []);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/AfficherListEntrepots')
            .then((res) => {
                setEntrepot(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const getvalue = (event) => {
        setNewResponsable((prevResponsable) => ({
            ...prevResponsable,
            [event.target.name]: event.target.value
        }));
    };

    const fetchData = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/r');
        setListDataResponsable(response.data);
    };

    const handlePrevPage = () => {
        setIndex(prevIndex => prevIndex - 5);
        setConteneur(prevConteur => prevConteur - 1);
    };

    const handleNextPage = () => {
        setIndex(prevIndex => prevIndex + 5);
        setConteneur(prevConteur => prevConteur + 1);
    };

    const handleCheckboxChange = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };
    
    // Supprimez les Responsables sélectionnés lorsque le bouton de suppression est cliqué
    const SupprimerSelectionnes = () => {
        Swal.fire({
            title: "Êtes-vous sûr ?",
            text: "Êtes-vous sûr de confirmer votre suppression !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, Supprimer !"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://127.0.0.1:8000/api/supprimerResponsable/${selectedIds.join(',')}`)
                .then((res) => {
                    if (res.status === 200) {
                        const updatedList = ListDataResponsable.filter((Responsable) => !selectedIds.includes(Responsable.idR));
                        setListDataResponsable(updatedList);
                        setSelectedIds([]);
                        fetchData();
                    }
                });
            }
        });
    };
    
    // Modifiez la fonction de suppression précédente pour qu'elle utilise la suppression sélective
    const Supprimerc = (id) => {
        handleCheckboxChange(id);
    };


    const Ajouter = () => {
        axios.post('http://127.0.0.1:8000/api/r/', newResponsable).then((res) => {
            if (res.status === 201) {
                //
                setNewResponsable({ nom: '', tele: '', login: '', password: '', idE: '', status: '' });
                setMessage('Votre Responsable a été bien ajouté');
                handleCloseModal();
                fetchData();
            } else {
                alert("Erreur d'ajout");
            }
        });
    };

    const modifierC = (c) => {
        setResponsableModifier(c);
        setNewResponsable({ 
            nom: newResponsable.nom,
            tele: newResponsable.tele,
            login: newResponsable.login,
            password: newResponsable.password,
            idE: newResponsable.idE,
            status:newResponsable.status,
         }); // Assurez-vous de remplir les champs du formulaire avec les informations du Responsable
        handleShowModal();

    };
console.log('noveaux :',newResponsable)
console.log('modifier :',ResponsableModifier)
    const modifierResponsable = () => {
        axios.put(`http://127.0.0.1:8000/api/r/` + ResponsableModifier.idR, newResponsable)
            .then((res) => {
                if (res.status === 200) {
                    //
                    setResponsableModifier(null);
                    setMessage('Votre Responsable a été modifié avec succès');
                    setNewResponsable({ nom: '', tele: '', login: '', password: '', idE: '', status: '' });
                    handleCloseModal();
                    fetchData();
                } else {
                    alert("Erreur lors de la modification du Responsable");
                }
            })
    };
return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-7"></div>
            <div className="col-3 mb-3">
                <input type="text" className="form-control" placeholder="Search Responsable" onChange={(e)=>setResponsable(e.target.value)} />
            </div>
            <div className="col-1">
                <Dropdown>
                    <Dropdown.Toggle variant="dark">
                        <i className="bi bi-list" style={{fontSize:'18px'}}></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleShowModal}>
                            <i className="bi bi-plus-circle" style={{paddingRight:'13px'}} ></i>Ajouter Responsable
                        </Dropdown.Item>
                        <hr className="m-3" style={{margin:'auto'}}/>
                        <Dropdown.Item onClick={SupprimerSelectionnes}>
                            <i className="bi bi-trash-fill" style={{paddingRight:'13px'}}></i> Supprimer Tout Responsable
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
        <Modal.Title>{ResponsableModifier ? "Modifier Responsable" : "Ajouter Responsable"}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div className="row">
            <div className="col">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nom" 
                    name="nom" 
                    onChange={getvalue}
                    Value={ResponsableModifier ? ResponsableModifier.nom : newResponsable.nom}
                />
            </div>
            <div className="col">
                <input 
                    type="number" 
                    className="form-control" 
                    placeholder="Telephone" 
                    name="tele" 
                    onChange={getvalue}
                    Value={ResponsableModifier ? ResponsableModifier.tele : newResponsable.tele}
                />
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Login" 
                    name="login" 
                    onChange={getvalue}
                    Value={ResponsableModifier ? ResponsableModifier.login : newResponsable.login}
                />
            </div>
            <div className="col">
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="password" 
                    name="password" 
                    onChange={getvalue}
                    Value={ResponsableModifier ? ResponsableModifier.password : newResponsable.password}
                />
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col">
                <select name='idE' Value={ResponsableModifier ? ResponsableModifier.idE : newResponsable.idE} onChange={getvalue} className='form-select'>
                    <option key="default" value="">Choisir Entrepot</option>
                    {entrepot.map((e) => (
                        <option key={e.idE} value={e.idE}>{e.nom}</option>
                    ))}
                </select>
            </div>
            <div className="col">
            <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Statut"
                                    onChange={(e) => {
                                        const status = e.target.checked ? 'Active' : 'Désactivé'; // Déterminez si le commutateur est activé ou désactivé
                                        setNewResponsable((prevResponsable) => ({
                                            ...prevResponsable,
                                            status: status // Mettez à jour le statut du fournisseur en fonction de la valeur sélectionnée
                                        }));
                                    }}
                                    checked={newResponsable.status === 'Active'} // Déterminez si le commutateur est activé en fonction du statut actuel du fournisseur
                            />
            </div>
        </div>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="primary" onClick={ResponsableModifier ? modifierResponsable : Ajouter}>
            <i className="bi bi-database-add" style={{paddingRight:'13px'}}></i> {ResponsableModifier ? "Modifier Responsable" : "Ajouter Responsable"}
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
        <th className="border-3">Id Responsable</th>
        <th className="border-3">Nom Responsable</th>
        <th className="border-3">Telephone</th>
        <th className="border-3">Entropet</th>
        <th className="border-3">Status</th>
        <th style={{width:'11%'}} className="border-3">Actions</th>
    </tr>
</thead>
<tbody>
    {ListDataResponsable.length > 0 ?
ListDataResponsable.filter((e) => {
    return Responsable.toLowerCase() === '' ? e : e.nom.toLowerCase().includes(Responsable);
}).slice(index, index + 5).map((c) => (
    <tr key={c.idC}>
        <td style={{ width: '1%' }} className="border-2 border-dark">
        <input 
                    type="checkbox" 
                    className="form-check-input" 
                    style={{ fontSize: '25px' }} 
                    value={c.idR} 
                    onChange={() => handleCheckboxChange(c.idR)}
                    checked={selectedIds.includes(c.idR)}
                />
        </td>
        <td className="border-2 border-dark">{c.idR}</td>
        <td className="border-2 border-dark">{c.nom}</td>
        <td className="border-2 border-dark">{c.tele}</td>
        <td className="border-2 border-dark">{getEntrepotNomById(c.idE)}</td>
        <td className="border-2 border-dark">
                                    {c.status == 'Active' ? 
                                        <b className="text-success" style={{fontSize:'20px'}}>{c.status}</b>
                                        :
                                        <b className="text-danger" style={{fontSize:'20px'}}>{c.status}</b>
                                    }
                                </td>
        <td className="border-2 border-dark">
            <button className="btn btn-danger me-2 mb-2" onClick={() => Supprimerc(c.idR)}>
                <i className="bi bi-trash3-fill"></i>
            </button>
            <button className="btn btn-primary me-2 mb-2" onClick={() => modifierC(c)}>
                <i className="bi bi-pen"></i>
            </button>
        </td>
    </tr>
))
:
<tr>
    <td colSpan='7' className="bg-gray-100 text-center"> <strong>Aucun Responsable A afficher</strong></td>
</tr>
}
</tbody>
</table>
    {conteneur > 1 ?  <button onClick={handlePrevPage} className="btn btn-primary"> <i className="bi bi-chevron-double-left"></i> Prev page</button> : <button id="q" onClick={handlePrevPage} className="btn btn-primary" disabled> <i className="bi bi-chevron-double-left"></i> Prev page</button> }{' '} <b>{conteneur}</b> {' '}
    <button onClick={handleNextPage} className="btn btn-primary">  Next page <i className="bi bi-chevron-double-right"></i> </button>
    </div>
);   
}