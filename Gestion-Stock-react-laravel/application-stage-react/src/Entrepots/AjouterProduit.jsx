import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AjouterProduct(){
    const [dataCategorie , setdataCategorie]= useState([{}])
    const [dataEntrepot , setdataEntrepot] = useState([{}])
    const [dataMarque , setdataMarque] = useState([{}])
    const Navigate = useNavigate()
    const [newProduit, setNewProduit] = useState({
        image: '',
        code: '',
        unite: '',
        caisse: '',
        tare: '',
        poids: '',
        Nombre_palette: '',
        Fourchette_de: '',
        Fourchette_a: '',
        prix: '',
        Alerte_Quantité: '',
        idMarque:'',
        qte:'',
        idCat:'',
        idE:''
    });
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/AfficherListMarque').then((res)=>{
            setdataMarque(res.data);
        });
        axios.get('http://127.0.0.1:8000/api/AffCategorie').then((res)=>{
            setdataCategorie(res.data);
        });
        axios.get('http://127.0.0.1:8000/api/AfficherListEntrepots').then((res)=>{
            setdataEntrepot(res.data)
        })
    },[])
    const getvalue = (event) => {
        if (event.target.name === 'image') {
            setNewProduit((prev) => ({
                ...prev,
                image: event.target.files[0]
            }));
        } else {
            setNewProduit((prev) => ({
                ...prev,
                [event.target.name]: event.target.value
            }));
        }
    };
    const Ajouter = () => {
        const formData = new FormData();
        formData.append('nom', newProduit.nom);
        formData.append('code', newProduit.code);
        formData.append('unite', newProduit.unite);
        formData.append('caisse', newProduit.caisse);
        formData.append('tare', newProduit.tare);
        formData.append('poids', newProduit.poids);
        formData.append('Nombre_palette', newProduit.Nombre_palette);
        formData.append('Fourchette_de', newProduit.Fourchette_de);
        formData.append('Fourchette_a', newProduit.Fourchette_a);
        formData.append('prix', newProduit.prix);
        formData.append('Alerte_Quantité', newProduit.Alerte_Quantité);
        formData.append('idMarque', newProduit.idMarque);
        formData.append('idCat', newProduit.idCat);
        formData.append('qte', newProduit.qte);
        formData.append('idE', newProduit.idE);
        formData.append('image', newProduit.image);
        axios.post('http://127.0.0.1:8000/api/ajouter-produit',formData).then((res)=>{
            if(res.status === 201){
                Navigate('/Products')
                // setmessage('Votre Entrepot a été bien ajoutée')
            }
        })
    };
    console.log(newProduit)
    return <>
        <form encType="multipart/form-data">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col lg-6">
                        <label>Image Produit :</label>
                        <input type="file" className="form-control" name="image" onChange={getvalue}/>
                    </div>
                    <div className="col lg-6">
                        <label>Nom Produit :</label>
                        <input type="text" className="form-control" id="nom" placeholder="Nom produit" name="nom" onChange={getvalue} />
                    </div>
                </div>
                <div className="row">
                    <div className="col lg-6">
                        <label>Code Produit :</label>
                        <input type="text" className="form-control" name="code" onChange={getvalue} placeholder="Code produit"/>
                    </div>
                    <div className="col lg-6">
                        <label>Unité produit :</label>
                        <select name="unite" className="form-select" onChange={getvalue}>
                            <option value="">Selectionnez Unité</option>
                            <option value="Caisse">Caisse</option>
                            <option value="Kg">KG</option>
                            <option value="Palette">Palette</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col lg-6">
                        <label>Caisse produit :</label>
                        <input type="text" className="form-control" placeholder="Caisse produit" name="caisse" onChange={getvalue} />
                    </div>
                    <div className="col lg-6">
                        <label> Poids Produit :</label>
                        <input type="number"  min={0} className="form-control" id="tare" placeholder="poids" name="poids" onChange={getvalue} />
                    </div>
                </div>
                <div className="row">
                    <div className="col lg-6">
                        <label>tare caisse:</label>
                        <input type="number" className="form-control" name="tare" onChange={getvalue} placeholder="Tare Produit"/>
                    </div>
                    <div className="col lg-6">
                        <label >Nombre palette :</label>
                        <input type="number" className="form-control" name="Nombre_palette" onChange={getvalue} placeholder="Nombre palette"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col lg-6">
                        <label>fourchette de :</label>
                        <input type="number" className="form-control" placeholder="Fourchette De" name="Fourchette_de" onChange={getvalue} />
                    </div>
                    <div className="col lg-6">
                        <label>fourchette de :</label>
                        <input type="number" className="form-control"  placeholder="Fourchette A" name="Fourchette_a" onChange={getvalue} />
                    </div>
                </div>
                <div className="row">
                    <div className="col lg-6">
                        <label>alert quantite :</label>
                        <input type="number" className="form-control" name="Alerte_Quantité" onChange={getvalue} placeholder="Alert qte"/>
                    </div>
                    <div className="col lg-6">
                        <label >Marque produit:</label>
                        <select name="idMarque" id="" onChange={getvalue} className="form-select">
                        <option value="">Veuillez selectionner la marque du produit</option>
                            {
                                dataMarque.map((cat)=>{
                                    return <option value={cat.idMarque}>{cat.nomMarque}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col lg-6">
                        <label >Catégorie produit:</label>
                        <select name="idCat" onChange={getvalue} className="form-select">
                        <option value="">Veuillez selectionner la catégorie du produit</option>
                            {
                                dataCategorie.map((cat)=>{
                                    return <option value={cat.idCat}>{cat.Nom_categorie}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="col lg-6">
                        <label >Entrepot produit:</label>
                        <select name="idE" onChange={getvalue} className="form-select">
                        <option value="">Veuillez selectionner l'entrepot du produit</option>
                            {
                                dataEntrepot.map((cat)=>{
                                    return <option value={cat.idE}>{cat.nom}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col lg-6">
                        <label htmlFor="">Prix Produit :</label>
                        <input type="number" name="prix" className="form-control" min={0} onChange={getvalue} />
                        <br />
                    </div>
                    <div className="col lg-6">
                        <label htmlFor="">Qte Produit :</label>
                        <input type="number" name="qte" className="form-control" min={0} onChange={getvalue} />
                        <br />
                    </div>
                </div>
                <button type="button" className="btn btn-success" onClick={Ajouter}>Ajouter Produit</button>
            </div>
        </form>
    </>
}