import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Utilisateurs() { 
    const [newUtl, setNewUtl] = useState({ nom: '', tele: '', fonction: '', login: '', password: '', status: 'Active', devise: '', type: '' });
    const [UE , setUE] = useState(0);
    const [UEC , setUEC] = useState([]);
    const [entrepotsPrincipaux, setEntrepotsPrincipaux] = useState([]);
    const [entrepot, setEntrepot] = useState([]);
    const [UTL, setUTL] = useState([]);
    const [UTL_E, setUTL_E] = useState([])
    

    const Checked = async (obj) => {
        if(obj.entrepot_parent == null) {
            const chek_butt = document.getElementById(obj.idE)
            setUEC([...UEC, obj.idE]);

            if (chek_butt.checked === true) {
                console.log(obj.idE); // Afficher l'ID de l'entrepôt de l'objet obj
                const utl = await axios.get('http://127.0.0.1:8000/api/es/' + obj.idE); 
                const idEValues = utl.data.map(item => item.idE); // Récupérer les IDs des entrepôts via Axios
                console.log(idEValues);
        
                const allIds = [obj.idE, ...idEValues]; // Créer un tableau contenant l'ID de l'entrepôt de l'objet obj et les IDs des entrepôts récupérés via Axios
                console.log(allIds);
        
                const Nl = utl.data.length;
                setUEC(allIds); // Mettre à jour le state avec les IDs concaténés
        
                for (let i = 0; i < Nl; i++) {
                    const v = document.getElementById(utl.data[i].idE);
                    v.checked = true;
                }
            } else {
                if (chek_butt.checked === false) {  
                    const utl = await axios.get('http://127.0.0.1:8000/api/es/'+obj.idE);   
                    const Nl = utl.data.length;
                    console.log(Nl);
                    for(let i = 0; i < Nl; i++) {
                        const v = document.getElementById(utl.data[i].idE);
                        v.checked = false;
                        
                    }
                }
            } 
        } else {
            const chek_butt = document.getElementById(obj.idE)
            setUEC([...UEC, obj.idE,obj.entrepot_parent]);
            if (chek_butt.checked === true) {
                const utl = await axios.get('http://127.0.0.1:8000/api/es/'+obj.idE);
                const Nl = utl.data.length;
                console.log(Nl);
                for (let i = 0; i < Nl; i++) {
                    const v = document.getElementById(utl.data[i].idE);
                    v.checked = true;
                    
                }
                const v = document.getElementById(obj.entrepot_parent);
                v.checked = true;
            }
        }
    }

    console.log(UEC);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUtl(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const getvalue = (e) => {
        setUE(e.target.value);
    }

    console.log(newUtl);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/AfficherListEntrepots')
            .then((res) => {
                const entrepots = res.data;
                setEntrepot(entrepots);
                const entrepotsPrincipaux = entrepots.filter(entrepot => entrepot.type === 'Principal');
                setEntrepotsPrincipaux(entrepotsPrincipaux);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/u')
            .then((res) => {
                const utl = res.data;
                setUTL(utl);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/ue')
            .then((res) => {
                const utl = res.data;
                setUTL_E(utl);
            })
            .catch(error => console.log(error));
    }, []);

    const Ajouter = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/u/', newUtl);
    
            if (response.status === 201) {
                const userId = response.data.Utilisateurs.idU;
                setNewUtl({ nom: '', tele: '', fonction: '', login: '', password: '', status: 'Active', devise: '', type: '' });
                alert('Votre Utilisateur a été bien ajouté');
    
                if (newUtl.fonction === 'Client') {
                    for (const idE of UEC) {
                        await axios.post('http://127.0.0.1:8000/api/ue/', { idE, idU: userId });
                    }
                    alert('Utl_entrepot ajouté avec succès');
                } else {
                    await axios.post('http://127.0.0.1:8000/api/ue/', { idE: UE, idU: userId });
                    alert('Utl_entrepot ajouté avec succès');
                }
            }
        } catch (error) {
            if (error.response) {
                // Gestion des erreurs de réponse du serveur
                alert('Erreur lors de l\'ajout : ' + error.response.data.message);
            } else if (error.request) {
                // Gestion des erreurs de requête
                alert('Erreur de requête : ' + error.request);
            } else {
                // Gestion des erreurs inattendues
                alert('Erreur inattendue : ' + error.message);
            }
        }
    };
    
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <label className="form-label">Nom :</label>
                    <input className="form-control" type="text" value={newUtl.nom} name="nom" placeholder="Nom" onChange={handleInputChange} />
                </div>
                <div className="col-4">
                    <label className="form-label">Telephone :</label>
                    <input className="form-control" type="text" value={newUtl.tele} name="tele" placeholder="Telephone" onChange={handleInputChange} />
                </div>
                <div className="col-4">
                    <label className="form-label">Fonction :</label>
                    <select className="form-select" name="fonction" value={newUtl.fonction} onChange={handleInputChange}>
                        <option value="">Choisir une fonction</option>
                        <option value="Responsable">Responsable</option>
                        <option value="Vendeur">Vendeur</option>
                        <option value="Fournisseur">Fournisseur</option>
                        <option value="Client">Client</option>
                    </select>
                </div>
            </div>
            <br/>
            {newUtl.fonction === 'Responsable' && (
                <div className="row">
                    <div className="col-4">
                        <label className="form-label">Login :</label>
                        <input className="form-control" type="text" name="login" placeholder="Login" onChange={handleInputChange} />
                    </div>
                    <div className="col-4">
                        <label className="form-label">Password :</label>
                        <input className="form-control" type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                    </div>
                    <div className="col-4">
                        <label className="form-label">Entrepot :</label>
                        <select className="form-select" name="idE" onChange={getvalue}>
                            <option>Choisir un entrepôt</option>
                            {entrepot.filter(e => {
                                // Vérifier si l'entrepôt n'est associé à aucun responsable
                                return !UTL_E.some(utl => utl.idE === e.idE && UTL.find(user => user.idU === utl.idU && user.fonction === 'Responsable'));
                            }).map((e) => (
                                <option key={e.idE} value={e.idE}>{e.nom}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}

            {newUtl.fonction === 'Vendeur' && (
                <div className="row">
                    <div className="col-4">
                        <label className="form-label">Login :</label>
                        <input className="form-control" type="text" name="login" placeholder="Login" onChange={handleInputChange} />
                    </div>
                    <div className="col-4">
                        <label className="form-label">Password :</label>
                        <input className="form-control" type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                    </div>
                    <div className="col-4">
                        <label className="form-label">Entrepot :</label>
                        <select className="form-select" name="idE" onChange={getvalue}>
                            <option>Choisir un entrepôt</option>
                            {entrepot.map((e) => (
                                <option key={e.idE} value={e.idE}>{e.nom}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}

            {newUtl.fonction === 'Client' && (
                <div className="row">
                    <div className="col-4">
                        <label className="form-label">Login :</label>
                        <input className="form-control" type="text" name="login" placeholder="Login" onChange={handleInputChange} />
                    </div>
                    <div className="col-4">
                        <label className="form-label">Password :</label>
                        <input className="form-control" type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                    </div>
                    <div className="col-4">
                        <label className="form-label">Entrepots :</label>
                        {entrepot.map((e) => (
                            <div className="col">
                                <div className="form-check">
                                    <input type="checkbox" onClick={() => Checked(e)} className="form-check-input" id={e.idE} name="idE" value={e.idE} />
                                    <label className="form-check-label" for="check1">{e.nom}</label>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            )}

            {newUtl.fonction === 'Fournisseur' && (
                <div className="row">
                    <div className="col-4">
                        <label className="form-label">Type :</label>
                        <select className="form-select" onChange={handleInputChange} name="type">
                        <option>Choisir Type</option>
                            <option>Interne</option>
                            <option>Externe</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Devise :</label>
                        {newUtl.type  === 'Interne' ? (
                            <select className="form-select" name="devise" onChange={handleInputChange}>
                                <option>Choisir Devise</option>
                                <option>Dirhams</option>
                            </select>
                        ) : (
                            <select className="form-select" name="devise" onChange={handleInputChange}>
                                <option>Choisir Devise</option>
                                <option>Euro</option>
                                <option>Dolar</option>
                            </select>
                        )}
                    </div>
                    <div className="col-4">
                        <label className="form-label">Entrepot :</label>
                        <select className="form-select" name="idE" onChange={getvalue}>
                            <option>Choisir un entrepôt</option>
                            {newUtl.type === 'Interne' ? (
                                entrepot.map((e) => (
                                    <option key={e.idE} value={e.idE}>{e.nom}</option>
                                ))
                            ) : (
                                entrepotsPrincipaux.map((e) => (
                                    <option key={e.idE} value={e.idE}>{e.nom}</option>
                                ))
                            )}
                        </select>
                    </div>
                </div>
            )}
            <br/>
            <button className="btn btn-success" onClick={Ajouter} >Ajouter Utilisateurs</button>
        </div>
    );
}