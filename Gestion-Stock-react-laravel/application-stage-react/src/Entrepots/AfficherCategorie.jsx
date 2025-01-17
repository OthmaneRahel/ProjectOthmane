import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Dropdown, Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function AfficherListCategorie(){
    const [dataCategorie , setdataCategorie] = useState([{}]);
    const [entrepotSel , setentrepotSel ] = useState('')
    const [index , setindex] = useState(0);
    const [conteur , setconteneur] = useState(1);
    const [newCategorie , setnewCategorie]=useState({image:'',code_cat:'',Nom_categorie:'',Description:''})
    const Navigate = useNavigate();
    const [message, setmessage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
        setCategorieAModifier(null);
    };
    const handleShowModal = () => setShowModal(true);
    const [categorieAModifier, setCategorieAModifier] = useState(null);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/AffCategorie').then((res)=>{
            setdataCategorie(res.data)
        })
    },[])
    console.log(newCategorie)
    console.log(categorieAModifier)
    const handlePrevPage = () => {
        setindex(prevIndex => prevIndex - 5);
        setconteneur(prevConteur => prevConteur - 1);
    };
    
    const getvalue = (event) => {
        if (event.target.name === 'image') {
            setnewCategorie((prev) => ({
                ...prev,
                image: event.target.files[0]
            }));
        } else {
            setnewCategorie((prev) => ({
                ...prev,
                [event.target.name]: event.target.value
            }));
        }
    };

    const handleNextPage = () => {
        setindex(prevIndex => prevIndex + 5);
        setconteneur(prevConteur => prevConteur + 1);
    };
    const SupprimerEntrepot = (id) =>{
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
                axios.delete('http://127.0.0.1:8000/api/Supprimer-categorie/'+id).then((res)=>{
                    if(res.status === 200){
                        const listEnt = dataCategorie.filter((i)=>i.idCat !== id);
                        setdataCategorie(listEnt);
                    }
                })
            }
        })
    }
    const Ajouter = () =>{
        const formData = new FormData();
        formData.append('image', newCategorie.image);
        formData.append('code_cat', newCategorie.code_cat);
        formData.append('Nom_categorie', newCategorie.Nom_categorie);
        formData.append('Description', newCategorie.Description);
        axios.post('http://127.0.0.1:8000/api/Ajouter-categorie',formData).then((res)=>{
            if(res.status === 201){
                Navigate('/Categories')
                setmessage('Votre catégorie a été bien ajoutée')
                handleCloseModal();
            }
        })
    }

    const modifierCategorie = (categorie) => {
        setCategorieAModifier(categorie);
        setnewCategorie({
            image: null,
            code_cat: categorie.code_cat,
            Nom_categorie: categorie.Nom_categorie,
            Description: categorie.Description,
            Categorie_parent: categorie.Categorie_parent,
        });
        handleShowModal();
    };

    const modifierCategorieDepense = () => {
        axios.put(`http://127.0.0.1:8000/api/Modifier-categorie/${categorieAModifier.idCat}`, newCategorie)
            .then((res) => {
                if (res.status == 200) {
                    Navigate('/Categories');
                    setmessage('Votre Entrepot a été modifiée');
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
                    <input type="text" className="form-control" placeholder="Search catégorie   " onChange={(e)=>setentrepotSel(e.target.value)} />
                </div>
    <div className="col-1">
    <Dropdown>
      <Dropdown.Toggle variant="dark">
        <i class="bi bi-list"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleShowModal}>
            <i class="bi bi-building-add" style={{paddingRight:'13px'}}></i>  Ajouter categorie
        </Dropdown.Item>
        <hr className="m-3" style={{margin:'auto'}}/>
        <Dropdown.Item href="#/action-2"> <i class="bi bi-building-x" style={{paddingRight:'13px'}}></i> Supprimer Categories </Dropdown.Item>
        {/* <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
        <Modal.Title>{categorieAModifier ? "Modifier catégorie" : "Ajouter catégorie"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form encType="multipart/form-data">
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Code de catégorie" name="code_cat" onChange={getvalue} Value={categorieAModifier ? categorieAModifier.code_cat : newCategorie.code_cat}/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Nom de catégorie" name="Nom_categorie" onChange={getvalue} Value={ categorieAModifier ? categorieAModifier.Nom_categorie : newCategorie.Nom_categorie }/>
                </div>                
            </div><br />
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Description catégorie" name="Description" onChange={getvalue} Value={categorieAModifier ? categorieAModifier.Description : newCategorie.Description }/>
                </div>
            </div><br />
            <br />
            <div className="row">
                <div className="col">
                    <label htmlFor="">Catégorie parent :</label><br />
                    <br />
                    <select name="Categorie_parent" className="form-select mb-4" onChange={getvalue} value={categorieAModifier ? categorieAModifier.Categorie_parent : newCategorie.Categorie_parent}>
                        <option value="">Veuillez selectionner la catégorie parent </option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="">Image catégorie :</label><br />
                    <br />
                    <input type="file" className="form-control" name="image" onChange={getvalue} />
                </div>
            </div>
            <br />
            {
                newCategorie.type == 'Secondaire' ?

                    <select name="entrepot_parent" className="form-select mb-5" onClick={getvalue}>
                        <option value="">Veuillez selectionner l'entrepot parent</option>
                        {
                            
                            dataCategorie.map((i)=>{
                                return <>
                                    {
                                    i.type === 'Principale' ?
                                        <option value={i.idE}>{i.nom}</option>
                                    :
                                    ''
                                    }
                                </>
                            })
                        }
                    </select>
                :
                ''
            }
            <Modal.Footer>
                <Button variant="primary" onClick={categorieAModifier ? modifierCategorieDepense : Ajouter}>
                    <i class="bi bi-database-add" style={{paddingRight:'13px'}}></i> {categorieAModifier ? "Modifier catégorie depense" : "Ajouter catégorie depense"}
                </Button>
            </Modal.Footer>
        </form>
        </Modal.Body>
    </Modal>
    </div>
</div>
            {message == null ? null : <div className="alert alert-success" role="alert">
                <strong>{message}</strong>
            </div>}
            <table className="table table-striped" width={'100%'} style={{overflow:'auto',height:'100%'}} >
                <thead className="text-black border-3 border-dark bg-primary">
                    <tr>
                        <th style={{width:'1%'}}><input type="checkbox" className="form-check-input" style={{fontSize:'25px'}}/></th>
                        <th className="border-3">Image</th>
                        <th className="border-3">Code de catégorie</th>
                        <th className="border-3">Nom de catégorie</th>
                        <th className="border-3">Description</th>
                        <th className="border-3">Catégorie parent</th>  
                        <th style={{width:'11%'}} className="border-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { dataCategorie.length > 0 ?
                        dataCategorie.filter((e)=>{
                            return entrepotSel.toLowerCase() === '' ? e : e.Nom_categorie.toLowerCase().includes(entrepotSel)
                        }).slice(index , index + 5).map((entrepot) => (
                            <tr>
                                <td style={{width:'1%'}} className="border-2 border-dark"><input type="checkbox" className="form-check-input" style={{fontSize:'25px'}}/></td>
                                <td className="border-2 border-dark" width={'10%'}>
                                    <img width={'100%'} src={`http://127.0.0.1:8000/storage/${entrepot.image}`} alt="photo" />
                                    {console.log(entrepot.entrepot_map)}
                                </td>
                                <td className="border-2 border-dark">{entrepot.code_cat}</td>
                                <td className="border-2 border-dark">{entrepot.Nom_categorie}</td>
                                <td className="border-2 border-dark">{entrepot.Description}</td>
                                <td className="border-2 border-dark">{entrepot.Categorie_parent}</td>
                                <td className="border-2 border-dark">
                                    <button className="btn btn-danger me-2 mb-2" onClick={()=>SupprimerEntrepot(entrepot.idCat)}><i className="bi bi-trash3-fill"></i></button>
                                    <button className="btn btn-primary me-2 mb-2" onClick={()=>modifierCategorie(entrepot)}><i className="bi bi-pen"></i></button>
                                </td>
                            </tr>
                        ))
                    :
                        <tr>
                            <td colSpan='8' className="bg-gray-100 text-center"> <strong>Aucun Categorie A afficher</strong></td>
                        </tr>
                    }
                </tbody>
            </table>
            {conteur > 1 ?  <button onClick={handlePrevPage} className="btn btn-primary"> <i class="bi bi-chevron-double-left"></i> Prev page</button> : <button id="q" onClick={handlePrevPage} className="btn btn-primary" disabled> <i class="bi bi-chevron-double-left"></i> Prev page</button> }{' '} <b>{conteur}</b> {' '}
            <button onClick={handleNextPage} className="btn btn-primary">  Next page <i class="bi bi-chevron-double-right"></i> </button>
        </div>
    );
}