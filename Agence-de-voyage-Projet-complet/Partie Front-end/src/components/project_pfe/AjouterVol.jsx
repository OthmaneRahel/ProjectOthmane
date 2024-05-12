import React, {useState } from "react";
import axios from "axios";
export default function AjouterVols() {
    const [newVoyage, setnewVoyage] = useState({nomVille:'',image:'',prix:'',date_depart:'',date_arrivee:'',description:''});
    const [newVygDispo, setnewVygDispo] = useState({agenceVyg:'',date_debut:'',date_fin:'',prixV:'',formule:''})
    const [message, setmessage] = useState(null);
    const [ListVoyageDisponible, setListVoyageDisponible] = useState([]);
    console.log(ListVoyageDisponible)
    console.log(newVoyage)
    const ajt_vygDispo = () => {
        setListVoyageDisponible([...ListVoyageDisponible,newVygDispo]);
        setnewVygDispo({ ...newVygDispo,date_debut:'',date_fin:'',prixV:'',formule:''})

    };
    const getValue = (event) => {
        if (event.target.name === 'image') {
            setnewVoyage((prev) => ({
                ...prev,
                image: event.target.files[0]
            }));
        } else{
            setnewVoyage((prev) => ({
                ...prev,
                [event.target.name]: event.target.value
            }));
        }
    }
    const getValueD = (event) => {
        if (event.target.name === 'agenceVyg') {
            setnewVygDispo((prev) => ({
                ...prev,
                agenceVyg: event.target.files[0],
            }));
        } else {
            setnewVygDispo((prev) => ({
                ...prev,
                [event.target.name]: event.target.value
            }));
        }
    }
    const Ajouter = async () => {
        const voyageData = new FormData();
        voyageData.append('nomVille', newVoyage.nomVille);
        voyageData.append('image', newVoyage.image);
        voyageData.append('prix', newVoyage.prix);
        voyageData.append('date_depart', newVoyage.date_depart);
        voyageData.append('date_arrivee', newVoyage.date_arrivee);
        voyageData.append('description', newVoyage.description);
    
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/Ajouter-vol',voyageData);
            if (response.status === 201) {
                const voyageId = response.data.vol.idVol;
                for (let i = 0; i < ListVoyageDisponible.length; i++) {
                    const voyageDispoData = ListVoyageDisponible[i];
                    const formData = new FormData();
                    formData.append('agenceVyg', voyageDispoData.agenceVyg);
                    formData.append('date_debut', voyageDispoData.date_debut);
                    formData.append('date_fin', voyageDispoData.date_fin);
                    formData.append('prixV', voyageDispoData.prixV);
                    formData.append('formule', voyageDispoData.formule);
                    await axios.post(`http://127.0.0.1:8000/api/AjouterVolDispo/${voyageId}`,formData);
                }
                setmessage('Votre Vol a été bien ajouté');
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout du Vol :', error);
        }
    }
    const supprimerVygDispo = (date_D) =>{
        let listVD = ListVoyageDisponible.filter((i)=>i.date_debut != date_D)
        setListVoyageDisponible(listVD)
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 py-5">
                    <form encType="multipart/form-data">
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Nom de la ville" name="nomVille" onChange={getValue}/>
                            </div><br />
                            <br />
                            <div className="col">
                                <input type="file" className="form-control" placeholder="Image" name="image" onChange={getValue} />
                            </div><br />
                            <br />
                        </div>
                        <textarea cols="10" rows="3" placeholder="Description" className="form-control" name="description" onChange={getValue}></textarea>
                        <br />
                            <div>
                                <label htmlFor="">Prix :</label><br />
                                <input type="number" name="prix" className="form-control mb-4" onChange={getValue} />
                            </div>
                        <div>
                            <div className="col">
                                <label htmlFor="">Date de départ :</label><br />
                                <input type="date" name="date_depart" className="form-control mb-4" onChange={getValue} />
                            </div>
                            <div className="col">
                                <label htmlFor="">Date d'arrivée :</label><br />
                                <input type="date" name="date_arrivee" className="form-control mb-4" onChange={getValue} />
                            </div>
                        </div>
                    </form>
                    <form encType="multipart/form-data">
                        <h5>Ajouter Vol disponible :</h5>
                        <div className="row">
                            <div >
                                <input type="file" className="form-control" accept="image/*" name="agenceVyg" onChange={getValueD}/>
                            </div>
                            <div className="col py-3">
                                <input type="date" className="form-control" placeholder="Date de début" name="date_debut" onChange={getValueD} value={newVygDispo.date_debut}/>
                            </div>
                            <div className="col py-3">
                                <input type="date" className="form-control" placeholder="Date de fin" name="date_fin" onChange={getValueD} value={newVygDispo.date_fin}/>
                            </div>
                            <div>
                                <input type="number" className="form-control" placeholder="Prix" name="prixV" onChange={getValueD} value={newVygDispo.prixV}/>
                            </div>
                            <div className="py-4">
                                <input type="text" className="form-control" placeholder="Formule" name="formule" onChange={getValueD} value={newVygDispo.formule}/>
                            </div><br />
                            <div className="col-5">
                                <button type="button" className="btn btn-primary" onClick={ajt_vygDispo}>Ajouter voyage disponible</button>
                            </div><br />
                            <div className="col-7">
                                <button className="btn btn-primary" type="button" onClick={Ajouter}>
                                    <i className="bi bi-database-add" style={{ paddingRight: '13px' }}></i> Ajouter Voyage
                                </button>
                            </div>
                            </div>
                        <br />
                        <table className="table table-striped">
                            <thead className="bg-info">
                                <th>Agence voyage</th>
                                <th>Date de debut</th>
                                <th>Date de fin</th>
                                <th>Prix</th>
                                <th>formule</th>
                                <th className="px-5">Actions</th>
                            </thead>
                            <tbody>
                            {
                            ListVoyageDisponible.length > 0 ?
                                ListVoyageDisponible.map((e)=>{
                                    return <tr>
                                        <td width={'20%'}><img width={'90%'} src={e.agenceVyg.name}/></td>
                                        <td width={'10%'}>{e.date_debut}</td>
                                        <td width={'10%'}>{e.date_fin}</td>
                                        <td>{e.prixV}</td>
                                        <td>{e.formule}</td>
                                        <td>
                                            <button type="button" className="btn btn-danger" onClick={()=>supprimerVygDispo(e.date_debut)}><i class="fa-regular fa-trash-can"></i></button>
                                        </td>
                                    </tr>
                                })
                            : ""
                        }
                            </tbody>
                        </table>
                    </form>
                </div>
                {
                    message == null ? null : 
                    <div className="alert alert-success" role="alert">
                        <strong>{message}</strong>
                    </div>
                }
            </div>
        </div>
    );
}
