    import React, { useEffect, useState } from "react";
    import axios from "axios";
    import Swal from "sweetalert2";
    import { Dropdown, Modal, Button } from 'react-bootstrap';
    import { useNavigate } from "react-router-dom";

    export default function AfficherListProduit(){
        // const [dataEntrepot , setdataEntrepot] = useState([{}]);
        const [entrepotSel , setentrepotSel ] = useState('');
        const [index , setindex] = useState(0);
        const [conteur , setconteneur] = useState(1);
        const [dataMarque , setdataMarque] = useState([{}])
        const [dataCategorie , setdataCategorie]= useState([{}])
        const Navigate = useNavigate();
        const [dataEntrepot , setdataEntrepot] = useState([{}])
        const [message, setmessage] = useState(null);
        const [listData , setlisData]=useState([{}])
        const [entrepotAl , setentrepotAl] = useState('')
        console.log(entrepotAl)
        useEffect(()=>{
            axios.get('http://127.0.0.1:8000/api/AfficherListProduits').then((res)=>{
                setlisData(res.data);
            });
        },[]);
        const AfficherListProduitsParEntrepot = () => {
            axios.get(`http://127.0.0.1:8000/api/afficher-liste-produits-par-entrepot?idE=${entrepotAl}`)
                .then((res) => {
                    setlisData(res.data);
                })
        };
        useEffect(()=>{
            axios.get('http://127.0.0.1:8000/api/AfficherListEntrepots').then((res)=>{
                setdataEntrepot(res.data)
            })
            axios.get('http://127.0.0.1:8000/api/AfficherListMarque').then((res)=>{
                setdataMarque(res.data);
            });
            axios.get('http://127.0.0.1:8000/api/AffCategorie').then((res)=>{
                setdataCategorie(res.data);
            });
        },[])
        const getMarqueNomById = (id) => {
            const marque = dataMarque.find(marque => marque.idMarque === id);
            return marque ? marque.nomMarque : 'marque inconnue';
        };
        const getCategorieNomById = (id) => {
            const categorie = dataCategorie.find(categorie => categorie.idCat === id);
            return categorie ? categorie.Nom_categorie : 'categorie inconnue';
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
                    axios.delete('http://127.0.0.1:8000/api/afficherproduit/'+id).then((res)=>{
                        if(res.status === 200){
                            const listEnt = listData.filter((i)=>i.idP !== id);
                            setlisData(listEnt);
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
        const AfficherDetailProduit = (listData) =>{
            Navigate('/Detail-produit',{state:{listData : listData}})
        }
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-3 mb-3">
                        <input type="text" className="form-control" placeholder="Search product" onChange={(e)=>setentrepotSel(e.target.value)} />
                    </div>
                    <div className="col-2">
                        <select name="idE" className="form-select" onChange={(event)=>setentrepotAl(event.target.value)}>
                            <option value="">Filter Entrepot</option>
                            {
                                dataEntrepot.map((i)=>{
                                    return <option value={i.idE}>{i.nom}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="col-1">
                        <button onClick={AfficherListProduitsParEntrepot} className="btn btn-success"> <i class="bi bi-search"></i> </button>
                    </div>
                    <div className="col-1">
                        <Dropdown>
                            <Dropdown.Toggle variant="dark">
                                <i className="bi bi-list"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/Ajouter-Produit">
                                <i class="bi bi-app-indicator" style={{paddingRight:'13px'}}></i> Ajouter produit
                                </Dropdown.Item>
                                <hr className="m-3" style={{margin:'auto'}}/>
                                <Dropdown.Item href="#/action-2"> <i className="bi bi-building-x" style={{paddingRight:'13px'}}></i> Supprimer Produits </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                {message == null ? null : <div className="alert alert-success" role="alert">
                    <strong>{message}</strong>
                </div>}
                <table className="table table-striped" width={'100%'} style={{overflow:'auto',height:'100%'}}>
                    <thead className="text-black border-3 border-dark bg-primary">
                        <tr>
                            <th style={{width:'1%'}}><input type="checkbox" className="form-check-input" style={{fontSize:'25px'}}/></th>
                            <th className="border-3">Image</th>
                            <th className="border-3">Code</th>
                            <th className="border-3">Nom</th>
                            <th className="border-3">Marque</th>
                            <th className="border-3">Catégorie</th>
                            <th className="border-3">Quantité</th>
                            <th className="border-3">Unité</th>
                            <th className="border-3">Alerte Quantité</th>
                            <th style={{width:'16%'}} className="border-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData.length > 0 ?
                            listData.filter((e)=>{
                                return entrepotSel.toLowerCase() === '' ? e : e.nom.toLowerCase().includes(entrepotSel)
                            }).slice(index , index + 5).map((entrepot) => (
                                <tr>
                                    <td style={{width:'1%'}} className="border-2 border-dark"><input type="checkbox" className="form-check-input" style={{fontSize:'25px'}}/></td>
                                    <td className="border-2 border-dark" style={{width:'10%'}}><img width={'100%'} src={`http://127.0.0.1:8000/storage/${entrepot.image}`}/></td>
                                    <td className="border-2 border-dark">{entrepot.code}</td>
                                    <td className="border-2 border-dark">{entrepot.nom}</td>
                                    <td className="border-2 border-dark">{getMarqueNomById(entrepot.idMarque)}</td>
                                    <td className="border-2 border-dark">{getCategorieNomById(entrepot.idCat)}</td>
                                    <td className="border-2 border-dark">{entrepot.qte}</td>
                                    <td className="border-2 border-dark">{entrepot.unite}</td>
                                    <td className="border-2 border-dark">{entrepot.Alerte_Quantité}</td>
                                    <td className="border-2 border-dark">
                                        <button className="btn btn-danger me-2 mb-2" onClick={()=>SupprimerDepense(entrepot.idP)}><i className="bi bi-trash3-fill"></i></button>
                                        <button className="btn btn-primary me-2 mb-2" onClick={()=>(entrepot)}><i className="bi bi-pen"></i></button>
                                        <button className="btn btn-primary me-2 mb-2" onClick={()=>AfficherDetailProduit(entrepot)}><i class="bi bi-info"></i></button>
                                    </td>
                                </tr>
                            ))
                        :
                            <tr>
                                <td colSpan='10' className="bg-gray-100 text-center"> <strong>Aucun Produit A afficher</strong></td>
                            </tr>
                        }
                    </tbody>
                </table>
                {conteur > 1 ?  <button onClick={handlePrevPage} className="btn btn-primary"> <i class="bi bi-chevron-double-left"></i> Prev page</button> : <button id="q" onClick={handlePrevPage} className="btn btn-primary" disabled> <i class="bi bi-chevron-double-left"></i> Prev page</button> }{' '} <b>{conteur}</b> {' '}
                <button onClick={handleNextPage} className="btn btn-primary">  Next page <i class="bi bi-chevron-double-right"></i> </button>
            </div>
        );
    }
