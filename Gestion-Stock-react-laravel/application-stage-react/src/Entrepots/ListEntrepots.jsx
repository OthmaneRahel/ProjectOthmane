import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Dropdown, Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function AfficherListEntrepots(){
    const [listDataEntrepots , setListDataEntrepots] = useState([{}]);
    const [entrepotSel , setentrepotSel ] = useState('')
    const [index , setindex] = useState(0);
    const [conteur , setconteneur] = useState(1);
    const [newEntrepot , setnewEntrepot]=useState({code:'',nom:'',adresse:'',type:'',entrepot_parent:''})
    const [newDep , seetDep]=useState({Ref:'',Montant:'',Note:'',categorie:''})
    const [newOffre , setnewOffre]=useState({NomCoffre:'',solde:'',detailSolde:'',idE:'',Nom_de_la_part:'',type_Solde_coffre:'',date_echeance:'',Montant_total:''})
    const [listDep , setDep] = useState([{}])
    const Navigate = useNavigate();
    const [message, setmessage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [tabCoffre , settabCoffre] = useState([]);
    const [nomC ,  setnomC] =useState('Co');
    const [listDepSec ,setlistDepSec] = useState([{}])
    const [isDisabled , setdisabled]= useState(false)
    const [showDepense,setShowDepense]= useState([])
    const [ListD , setListD] = useState([])
    useEffect(() => {
        if (newEntrepot.type === 'Secondaire' && newEntrepot.entrepot_parent) {
            axios.get(`http://127.0.0.1:8000/api/affDep/${newEntrepot.entrepot_parent}`)
                .then((res) => {
                    setlistDepSec(res.data);
                    setdisabled(true)
                })
                .catch((error) => {
                    console.error('Une erreur s\'est produite lors de la récupération des dépenses de l\'entrepôt parent :', error);
                });
        }
    }, [newEntrepot.entrepot_parent]);
    const ajouterdepSecondaire = (cat) =>{
        setListD([...ListD ,cat])
    }
    const ajtCfr = () => {
        if (newOffre.type_Solde_coffre === 'Espece') {
            settabCoffre([...tabCoffre ,newOffre])
            setnewOffre((prev) => ({
                ...prev,
                detailSolde: '',
                type_Solde_coffre: ''
            }));
        } else {
            settabCoffre([...tabCoffre ,newOffre])
            setnewOffre((prev) => ({
                ...prev,
                NomCoffre: `Co ${newEntrepot.nom}`,
                type_Solde_coffre: '',
                detailSolde: '',
                date_echeance: '',
                Montant_total: '',
                Nom_de_la_part: ''
            }));
        }
    };
    console.log(tabCoffre)
    useEffect(() => {
        setnomC(`CO ${newEntrepot.nom}`);
        setnewOffre((prev) => ({
            ...prev,
            NomCoffre: `CO ${newEntrepot.nom}`
        }));
    }, [newEntrepot.nom]);
    const handleCloseModal = () => {
        setShowModal(false);
        setCategorieAModifier(null);
    };
    const ajt_dpns=()=>{
       setShowDepense([...showDepense,newDep])
       seetDep({date_depense:'',Ref:'',nom:'',Montant:'',Note:'',categorie:''})
    }
    const handleShowModal = () => setShowModal(true);
    const [categorieAModifier, setCategorieAModifier] = useState(null);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/AfficherListEntrepots').then((res)=>{
            setListDataEntrepots(res.data)
        })
    },[])
    // console.log(newEntrepot)
    const handlePrevPage = () => {
        setindex(prevIndex => prevIndex - 5);
        setconteneur(prevConteur => prevConteur - 1);
    };
    
    const getvalue = (event) => {
        if (event.target.name === 'entrepot_map') {
            setnewEntrepot((prev) => ({
                ...prev,
                entrepot_map: event.target.files[0]
            }));
        } else {
            setnewEntrepot((prev) => ({
                ...prev,
                [event.target.name]: event.target.value
            }));
        }
    };

    const getvalueD = (event) => {
            seetDep((prev) => ({
                ...prev,
                [event.target.name]: event.target.value
            }));
    };
    const getvalueR = (event) => {
        setnewOffre((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
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
                axios.delete('http://127.0.0.1:8000/api/AfficherListEntrepots/'+id).then((res)=>{
                    if(res.status === 200){
                        const listEnt = listDataEntrepots.filter((i)=>i.idE !== id);
                        setListDataEntrepots(listEnt);
                    }
                })
            }
        })
    }

    const Ajouter = async () => {
        if(newEntrepot.type == 'Principale'){
            try {
                const formData = new FormData();
                formData.append('code', newEntrepot.code);
                formData.append('nom', newEntrepot.nom);
                formData.append('adresse', newEntrepot.adresse);
                formData.append('type', newEntrepot.type);
                const ss = await axios.post('http://127.0.0.1:8000/api/Ajouter-Entrepot', formData);
                if (ss.status === 201) {
                    const a = showDepense.length
                    for(let i=0 ; i<a ; i++){
                        await axios.post('http://127.0.0.1:8000/api/Ajouter-depense/'+ss.data.prod.idE,showDepense[i])
                    }
                    const b = tabCoffre.length
                    for(let i=0 ; i<b ; i++){
                        await axios.post('http://127.0.0.1:8000/api/Ajouter-coffre/'+ss.data.prod.idE,tabCoffre[i])
                    }
                    Navigate('/Entrepots');
                    setmessage('Votre Entrepot a été bien ajoutée');
                    handleCloseModal();
                }
            } catch (error) {
                console.error('Erreur lors de l\'ajout d\'entrepôt :', error);
            }
        }else{
                const formData = new FormData();
                formData.append('code', newEntrepot.code);
                formData.append('nom', newEntrepot.nom);
                formData.append('adresse', newEntrepot.adresse);
                formData.append('type', newEntrepot.type);
                formData.append('entrepot_parent', newEntrepot.entrepot_parent);
                const ss = await axios.post('http://127.0.0.1:8000/api/Ajouter-Entrepot/',formData);
                if (ss.status === 201) {
                    const a = ListD.length
                    for(let i=0 ; i<a ; i++){
                        await axios.post('http://127.0.0.1:8000/api/Ajouter-depense/'+ss.data.prod.idE,ListD[i])
                    }
                    const b = tabCoffre.length
                    for(let i=0 ; i<b ; i++){
                        await axios.post('http://127.0.0.1:8000/api/Ajouter-coffre/'+ss.data.prod.idE,tabCoffre[i])
                    }
                    Navigate('/Entrepots');
                    setmessage('Votre Entrepot a été bien ajoutée');
                    handleCloseModal();
                }
        }
    };
    console.log(newOffre)
    const supprimer = (id) =>{
        const supp = showDepense.filter((e)=>e.Ref != id);
        setShowDepense(supp)
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-7"></div>
                <div className="col-3 mb-3">
                    <input type="text" className="form-control" placeholder="Search entrepot" onChange={(e)=>setentrepotSel(e.target.value)} />
                </div>
    <div className="col-1">
    <Dropdown>
      <Dropdown.Toggle variant="dark">
        <i class="bi bi-list"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleShowModal}>
            <i class="bi bi-building-add" style={{paddingRight:'13px'}}></i>  Ajouter entrepot
        </Dropdown.Item>
        <hr className="m-3" style={{margin:'auto'}}/>
        <Dropdown.Item href="#/action-2"> <i class="bi bi-building-x" style={{paddingRight:'13px'}}></i> Supprimer Entrepots </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
        <Modal.Title>{categorieAModifier ? "Modifier entrepot" : "Ajouter entrepot"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form encType="multipart/form-data">
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Code" name="code" onChange={getvalue} />
                </div><br />
                <br />
                <div className="col">
                    <input type="text" className="form-control" placeholder="Nom" name="nom" onChange={getvalue} />
                </div>                
            </div>
            <textarea cols="10" rows="3" placeholder="Adresse" className="form-control" name="adresse" onChange={getvalue} ></textarea>
            <br />
            <div className="row">
                <div className="col">
                    <label htmlFor="">Entrepot Type :</label><br />
                    <br />
                    <select name="type" id="" className="form-select mb-4" onChange={getvalue} >
                        <option value="">Veuillez selectionner le type</option>
                        <option value="Principale">Principale</option>
                        <option value="Secondaire">Secondaire</option>
                    </select>
                </div>
            </div>
            <br />
            {
                newEntrepot.type == 'Principale' &&
                    <>
                        <div className="row">
                                        <div className="col">
                                            <label htmlFor="">Date :</label>
                                            <input type="date" className="form-control" name="date_depense" onChange={getvalueD} value={newDep.date_depense}/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Reference :</label>
                                            <input type="text" className="form-control" placeholder="Ref" name="Ref" onChange={getvalueD} value={newDep.Ref}/>
                                        </div>                
                                    </div><br />
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" name="categorie" id="" className="form-control" onChange={getvalueD} value={newDep.categorie}/>
                                        </div>
                                    </div><br />
                                    <br />
                                    <input type="number" name="Montant" placeholder="Montant" className="form-control" onChange={getvalueD} value={newDep.Montant}/>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="">Note :</label><br />
                                            <textarea cols="20" rows="5" placeholder="Note" className="form-control" name="Note" onChange={getvalueD} value={newDep.Note}></textarea>
                                        </div>
                                    </div><br />
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn btn-primary" type="button" onClick={ajt_dpns}>Ajouter depense</button>
                                        </div>
                                    </div>
                                    <br />
                                    {
                                        showDepense.length > 0 ?
                                        <table className="table table-striped">
                                                        <thead>
                                                            <th>date depense</th>
                                                            <th>Ref depense</th>
                                                            <th>Categorie depense</th>
                                                            <th>Actions</th>
                                                        </thead>
                                                        <tbody>
                                                            {showDepense.map((i)=>{
                                                                return <tr>
                                                                    <td>{i.date_depense}</td>
                                                                    <td>{i.Ref}</td>
                                                                    <td>{i.categorie}</td>
                                                                    <td>
                                                                        <button className="btn btn-danger" type="button" onClick={()=>supprimer(i.Ref)}>x</button>
                                                                    </td>
                                                                </tr>
                                                            })}
                                                        </tbody>
                                        </table>
                                        :
                                        <tr>
                                            <td colSpan={4}>Aucune depense A afficher</td>
                                        </tr>
                                        
                                    }
                    <h5 className="text-center pt-5">Ajouter Coffre</h5>
                    <div className="row">
                        <div className="col">
                            <input type="text" name="NomCoffre" className="form-control" placeholder="Nom coffre" value={newOffre.NomCoffre} onChange={getvalueR}/>
                        </div>
                        <div className="col">
                            <input type="number" name="solde" className="form-control" placeholder="Solde" onChange={getvalueR} value={newOffre.solde} />
                        </div>
                    </div><br />
                    <div className="row">
                        
                            {
                                newOffre.solde != '' ?
                                    <>
                                        <div className="col">
                                            <input type="text" name="detailSolde" className="form-control" placeholder="detailSolde" value={newOffre.detailSolde} onChange={getvalueR}/>
                                        </div>
                                        <div className="col">
                                            <select name="type_Solde_coffre" className="form-select" onChange={getvalueR} value={newOffre.type_Solde_coffre}>
                                                <option value="">Veuillez entrer le type</option>
                                                <option value="Espece">Espece</option>
                                                <option value="Cheque">Cheque</option>
                                                <option value="Effet">Effet</option>
                                            </select>
                                        </div><br />    
                                        <br />
                                        <div className="row">
                                            {
                                                newOffre.type_Solde_coffre === 'Cheque' || newOffre.type_Solde_coffre === 'Effet' ?
                                                    <>
                                                        <div className="col">
                                                            <label htmlFor="">Date Echeance :</label>
                                                            <input type="date" name="date_echeance" className="form-control" value={newOffre.date_echeance} placeholder="date_echeance" onChange={getvalueR}/>
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="">Montant Total :</label>
                                                            <input type="number" name="Montant_total" className="form-control" value={newOffre.Montant_total} placeholder="Montant Total" onChange={getvalueR}/>
                                                        </div><br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <div className="pb-5">
                                                            <input type="text" name="Nom_de_la_part" className="form-control" placeholder="Nom de la part" value={newOffre.Nom_de_la_part} onChange={getvalueR}/>
                                                        </div>
                                                    </>
                                                :
                                                ''
                                            }
                                        </div>                                
                                    </>
                                : ''
                            }
                        </div>
                        <button onClick={ajtCfr} type="button" className="btn btn-primary">Ajouter</button>
                    </>
            }
            {
                newEntrepot.type == 'Secondaire' ?

                    <><select name="entrepot_parent" className="form-select mb-5" onChange={getvalue}>
                        <option value="">Veuillez selectionner l'entrepot parent</option>
                        {
                            
                            listDataEntrepots.map((i)=>{
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
                    <h4>Liste depense Entrepot parent</h4>
                        {
                        isDisabled == true ?
                            listDepSec.map((r)=>{
                                return <>
                                    <input className="pl-5" onClick={()=>ajouterdepSecondaire(r)} type="checkbox" name="categorie" value={newDep.categorie} onChange={getvalueD}/> {r.categorie} <br /> 
                                </>
                            })
                        : null
                        }
                    <h5 className="text-center pt-5">Ajouter Coffre</h5>
                    <div className="row">
                        <div className="col">
                            <input type="text" name="NomCoffre" className="form-control" placeholder="Nom coffre" value={newOffre.NomCoffre} onChange={getvalueR}/>
                        </div>
                        <div className="col">
                            <input type="number" name="solde" className="form-control" placeholder="Solde" value={newOffre.solde} onChange={getvalueR}/>
                        </div>
                    </div><br />
                    <div className="row">
                        
                            {
                                newOffre.solde != '' ?
                                    <>
                                        <div className="col">
                                            <input type="text" name="detailSolde" className="form-control" value={newOffre.detailSolde} placeholder="detailSolde" onChange={getvalueR}/>
                                        </div>
                                        <div className="col">
                                            <select name="type_Solde_coffre" className="form-select" value={newOffre.type_Solde_coffre} onChange={getvalueR}>
                                                <option value="">Veuillez entrer le type</option>
                                                <option value="Espece">Espece</option>
                                                <option value="Cheque">Cheque</option>
                                                <option value="Effet">Effet</option>
                                            </select>
                                        </div><br />    
                                        <br />
                                        <div className="row">
                                            {
                                                newOffre.type_Solde_coffre === 'Cheque' || newOffre.type_Solde_coffre === 'Effet' ?
                                                    <>
                                                        <div className="col">
                                                            <label htmlFor="">Date Echeance :</label>
                                                            <input type="date" name="date_echeance" className="form-control" value={newOffre.date_echeance} placeholder="date_echeance" onChange={getvalueR}/>
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="">Montant Total :</label>
                                                            <input type="number" name="Montant_total" className="form-control" value={newOffre.Montant_total} placeholder="Montant Total" onChange={getvalueR}/>
                                                        </div><br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <div className="pb-5">
                                                            <input type="text" name="Nom_de_la_part" className="form-control" value={newOffre.Nom_de_la_part} placeholder="Nom de la part" onChange={getvalueR}/>
                                                        </div>
                                                    </>
                                                :
                                                ''
                                            }
                                        </div>                                
                                    </>
                                : ''
                            }
                        </div>
                        <button onClick={ajtCfr} type="button" className="btn btn-primary">Ajouter</button>
                    </>
                :
                ''    
            }
            <Modal.Footer>
                <Button variant="primary" onClick={Ajouter}>
                    <i class="bi bi-database-add" style={{paddingRight:'13px'}}></i> {categorieAModifier ? "Modifier Entrepot" : "Ajouter Entrepot"}
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
            <table className="table table-striped" width={'100%'} style={{overflow:'auto',height:'100%'}} encType="multipart/form-data">
                <thead className="text-black border-3 border-dark bg-primary">
                    <tr>
                        <th style={{width:'1%'}}><input type="checkbox" className="form-check-input" style={{fontSize:'25px'}}/></th>
                        <th className="border-3">Code</th>
                        <th className="border-3">Nom</th>
                        <th className="border-3">Adresse</th>
                        <th style={{width:'11%'}} className="border-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { listDataEntrepots.length > 0 ?
                        listDataEntrepots.filter((e)=>{
                            return entrepotSel.toLowerCase() === '' ? e : e.nom.toLowerCase().includes(entrepotSel)
                        }).slice(index , index + 5).map((entrepot) => (
                            <tr>
                                <td style={{width:'1%'}} className="border-2 border-dark"><input type="checkbox" className="form-check-input" style={{fontSize:'25px'}}/></td>
                                <td className="border-2 border-dark">{entrepot.code}</td>
                                <td className="border-2 border-dark">{entrepot.nom}</td>
                                <td className="border-2 border-dark">{entrepot.adresse}</td>
                                <td className="border-2 border-dark">
                                    <button className="btn btn-danger me-2 mb-2" onClick={()=>SupprimerEntrepot(entrepot.idE)}><i className="bi bi-trash3-fill"></i></button>
                                </td>
                            </tr>
                        ))
                    :
                        <tr>
                            <td colSpan='8' className="bg-gray-100 text-center"> <strong>Aucun Entrepot A afficher</strong></td>
                        </tr>
                    }
                </tbody>
            </table>
            {conteur > 1 ?  <button onClick={handlePrevPage} className="btn btn-primary"> <i class="bi bi-chevron-double-left"></i> Prev page</button> : <button id="q" onClick={handlePrevPage} className="btn btn-primary" disabled> <i class="bi bi-chevron-double-left"></i> Prev page</button> }{' '} <b>{conteur}</b> {' '}
            <button onClick={handleNextPage} className="btn btn-primary">  Next page <i class="bi bi-chevron-double-right"></i> </button>
        </div>
    );
}
