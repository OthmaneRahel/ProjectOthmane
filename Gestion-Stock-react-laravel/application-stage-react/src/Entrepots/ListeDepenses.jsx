    import React, { useEffect, useState } from "react";
    import axios from "axios";
    import Swal from "sweetalert2";
    import { Dropdown, Modal, Button } from 'react-bootstrap';
    import { useNavigate } from "react-router-dom";

    export default function AfficherListDepenses(){
        const [dataEntrepot , setdataEntrepot] = useState([{}]);
        const [entrepotSel , setentrepotSel ] = useState('');
        const [index , setindex] = useState(0);
        const [conteur , setconteneur] = useState(1);
        const Navigate = useNavigate();
        const [newDepense , setnewDepense] = useState({date_depense:'',Ref:'',idCate_dep:'',idE:'',Montant:'',Note:''});
        const [message, setmessage] = useState(null);
        const [DataCategorieDepense , setDataCategorieDepense]=useState([{}]);
        const [DataDepense , setDataDepense]=useState([{}]);
        const [listData , setlisData]=useState([{}])
        const [showModal, setShowModal] = useState(false);
        // const handleCloseModal = () => setShowModal(false);
        const handleCloseModal = () => {
            setShowModal(false);
            setCategorieAModifier(null);
        };
        const handleShowModal = () => setShowModal(true);
        const [categorieAModifier, setCategorieAModifier] = useState(null);
        useEffect(()=>{
            axios.get('http://127.0.0.1:8000/api/AfficherListEntrepots').then((res)=>{
                setdataEntrepot(res.data);
            });
            axios.get('http://127.0.0.1:8000/api/AfficherListDepenses').then((res)=>{
                setDataDepense(res.data);
            });
            axios.get('http://127.0.0.1:8000/api/CategoriesDepenses').then((res)=>{
                setDataCategorieDepense(res.data);
            });
        },[]);

            const getCategorieNomById = (id) => {
                const categorie = DataCategorieDepense.find(categorie => categorie.idCate_dep === id);
                return categorie ? categorie.nom : 'Catégorie inconnue';
            };

        const getvalue = (event) => {
            setnewDepense((prevC) => ({
                ...prevC,
                [event.target.name]: event.target.value
            }));
        };

        const Ajouter = () =>{
            axios.post('http://127.0.0.1:8000/api/Ajouter-depense',newDepense).then((res)=>{
                if(res.status === 201){
                    Navigate('/Depenses');
                    setmessage('Votre dépense a été bien ajouté');
                    handleCloseModal();
                }
            });
        };
        const SupprimerDepense = (id) =>{
            Swal.fire({
                title: "Avez-vous sur ?",
                text: "Avez-vous sur de confirmer votre suppression !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Oui , Supprimer !"
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete('http://127.0.0.1:8000/api/SupprimerDepense/'+id).then((res)=>{
                        if(res.status === 200){
                            const listEnt = DataDepense.filter((i)=>i.idD !== id);
                            setDataDepense(listEnt);
                        }
                    })
                }
            })
        }
        const handlePrevPage = () => {
            setindex(prevIndex => prevIndex - 5);
            setconteneur(prevConteur => prevConteur - 1);
        };
        
        const handleNextPage = () => {
            setindex(prevIndex => prevIndex + 5);
            setconteneur(prevConteur => prevConteur + 1);
        };
        const modifierCategorie = (categorie) => {
            setCategorieAModifier(categorie);
            setnewDepense({
                date_depense: categorie.date_depense,
                Ref: categorie.Ref,
                idCate_dep: categorie.idCate_dep,
                idE: categorie.idE,
                Montant: categorie.Montant,
                Note: categorie.Note
            });
            handleShowModal();
        };
    
        const modifierCategorieDepense = () => {
            axios.put(`http://127.0.0.1:8000/api/Modifier-depense/${categorieAModifier.idD}`,newDepense)
                .then((res) => {
                    if (res.status == 200) {
                        Navigate('/Depenses');
                        setmessage('Votre Depense a été modifiée');
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
                        <input type="text" className="form-control" placeholder="Search Depense" onChange={(e)=>setentrepotSel(e.target.value)} />
                    </div>
                    <div className="col-1">
                        <Dropdown>
                            <Dropdown.Toggle variant="dark">
                                <i className="bi bi-list"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleShowModal}>
                                    <i className="bi bi-building-add" style={{paddingRight:'13px'}}></i>  Ajouter Depense
                                </Dropdown.Item>
                                <hr className="m-3" style={{margin:'auto'}}/>
                                <Dropdown.Item href="#/action-2"> <i className="bi bi-building-x" style={{paddingRight:'13px'}}></i> Supprimer Depenses </Dropdown.Item>
                                {/* <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Modal show={showModal} onHide={handleCloseModal}>
                            <Modal.Header closeButton>
                            <Modal.Title>{categorieAModifier ? "Modifier depense" : "Ajouter depense"}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form encType="multipart/form-data">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="">Date :</label>
                                            <input type="date" className="form-control" name="date_depense" onChange={getvalue} Value={categorieAModifier ? categorieAModifier.date_depense : newDepense.date_depense}/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Reference :</label>
                                            <input type="text" className="form-control" placeholder="Ref" name="Ref" onChange={getvalue} Value={categorieAModifier ? categorieAModifier.Ref : newDepense.Ref}/>
                                        </div>                
                                    </div><br />
                                    <div className="row">
                                        <div className="col">
                                            <select name="idCate_dep" id="" className="form-select" onChange={getvalue} Value={categorieAModifier ? categorieAModifier.idCate_dep : newDepense.idCate_dep}>
                                                <option value="">Veuillez selectionner La categorie de depense</option>
                                                {
                                                    DataCategorieDepense.map((i)=>{
                                                        return <option value={i.idCate_dep}>{i.nom}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div><br />
                                    <div className="col">
                                        <select name="idE" id="" className="form-select" onChange={getvalue} Value={categorieAModifier ? categorieAModifier.idE : newDepense.idE}>
                                            <option value="">Veuillez selectionner L'entrepot</option>
                                            {
                                                dataEntrepot.map((u)=>{
                                                    return <option value={u.idE}>{u.nom}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <br />
                                    <input type="number" name="Montant" placeholder="Montant" className="form-control" onChange={getvalue} Value={categorieAModifier ? categorieAModifier.Montant : newDepense.Montant}/>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="">Note :</label><br />
                                            <textarea cols="20" rows="5" placeholder="Note" className="form-control" name="Note" onChange={getvalue} Value={categorieAModifier ? categorieAModifier.Note : newDepense.Note}></textarea>
                                        </div>
                                    </div>
                                    <br />
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={categorieAModifier ? modifierCategorieDepense : Ajouter}>
                                    <i class="bi bi-database-add" style={{paddingRight:'13px'}}></i> {categorieAModifier ? "Modifier depense" : "Ajouter depense"}
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                {message == null ? null : <div className="alert alert-success" role="alert">
                    <strong>{message}</strong>
                </div>}
                <table className="table table-striped" width={'100%'} style={{overflow:'auto',height:'100%'}}>
                    <thead className="text-black border-3 border-dark bg-primary">
                        <tr>
                            <th style={{width:'1%'}}><input type="checkbox" className="form-check-input" style={{fontSize:'25px'}}/></th>
                            <th className="border-3">Date</th>
                            <th className="border-3">Référence</th>
                            <th className="border-3">Catégorie</th>
                            <th className="border-3">Montant</th>
                            <th className="border-3">Note</th>
                            <th style={{width:'11%'}} className="border-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DataDepense.length > 0 ?
                            DataDepense.filter((e)=>{
                                return entrepotSel.toLowerCase() === '' ? e : e.Ref.toLowerCase().includes(entrepotSel)
                            }).slice(index , index + 5).map((entrepot) => (
                                <tr>
                                    <td style={{width:'1%'}} className="border-2 border-dark"><input type="checkbox" className="form-check-input" style={{fontSize:'25px'}}/></td>
                                    <td className="border-2 border-dark">{entrepot.date_depense}</td>
                                    <td className="border-2 border-dark">{entrepot.Ref}</td>
                                    <td className="border-2 border-dark">{getCategorieNomById(entrepot.idCate_dep)}</td>
                                    <td className="border-2 border-dark">{entrepot.Montant} {entrepot.Montant > 1 ? 'DHS' : 'DH'}</td>
                                    <td className="border-2 border-dark">{entrepot.Note}</td>
                                    <td className="border-2 border-dark">
                                        <button className="btn btn-danger me-2 mb-2" onClick={()=>SupprimerDepense(entrepot.idD)}><i className="bi bi-trash3-fill"></i></button>
                                        <button className="btn btn-primary me-2 mb-2" onClick={()=>modifierCategorie(entrepot)}><i className="bi bi-pen"></i></button>
                                    </td>
                                </tr>
                            ))
                        :
                            <tr>
                                <td colSpan='8' className="bg-gray-100 text-center"> <strong>Aucun Depense A afficher</strong></td>
                            </tr>
                        }
                    </tbody>
                </table>
                {conteur > 1 ?  <button onClick={handlePrevPage} className="btn btn-primary"> <i class="bi bi-chevron-double-left"></i> Prev page</button> : <button id="q" onClick={handlePrevPage} className="btn btn-primary" disabled> <i class="bi bi-chevron-double-left"></i> Prev page</button> }{' '} <b>{conteur}</b> {' '}
                <button onClick={handleNextPage} className="btn btn-primary">  Next page <i class="bi bi-chevron-double-right"></i> </button>
            </div>
        );
    }
