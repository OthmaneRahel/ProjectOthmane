import { useEffect,useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from "./nav";
// import './ajouter.css'


export default function Ajouter(){
const [dataArticle,setDataArticle]=useState([{}]);
const [montantA , setMontantA] = useState('');

useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/article').then((res) => {
      setDataArticle(res.data);
    });
  }, []);

    const[articles,setArticles]=useState({
        code_article:'',designation:'',description:'',type:'',contrat:'',pu:'',devise:'',qte:'',montant:''
    });


    useEffect(()=>{
      setMontantA(articles.pu*articles.qte)
      setArticles((prev) => ({
        ...prev,montant:montantA
    }));
    },[articles.montant])


    const[message,setMessage]=useState();
    const getValue = (e) => {
      const { name, value } = e.target;
      if (name === "pu" || name === "qte") {
        
        setArticles((prevArticles) => ({
          ...prevArticles,
          [name]: value,
          montant: articles.pu * articles.qte,
        }));
        setUtilisateurs((prevUtilisateurs) => ({
          ...prevUtilisateurs,
          [name]: value,
          
        }));
      } else {
        
        setUtilisateurs((prevUtilisateurs) => ({
          ...prevUtilisateurs,
          [name]: value,
        }));
      }
    };

    const[utilisateurs,setUtilisateurs]=useState({
        nom:'',prenom:'',dir:'',modele:'',date_livraison:'',vetuste:'',commentaire:'',date_expiration:'',idA:''
    
    });console.log(utilisateurs);

    
    

      //envoyer les données aux serveurs backend
      const AjjA=()=>{
            axios.post("http://127.0.0.1:8000/api/ajouterArticle",articles).then((res)=>{
            if(res.status==201)
            {
                setMessage("bien ajouter")
            }
            else
            {
                setMessage("Erreur du BackEnd")
            }

        });}
      
const AjjU=()=>{
        axios.post("http://127.0.0.1:8000/api/ajouterUtilisateur",utilisateurs).then((res)=>{
            if(res.status==201)
            {
                setMessage("bien ajouter")
            }
            else
            {
              setMessage("Erreur du BackEnd")
            }
            });
    }
        
    return <>
    <div className="row">
      <div className="col-6">
      <div>
    <legend className="container">
        <div className="nav">
            {/* <Nav/> */}
            <a className="btn" href='lister.js'>Afficher  liste articles</a>
        </div>
    <table>
    <tr>
        <td><input type="text" placeholder="Code article" name="code_article" onChange={getValue} /></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Designation" name="designation" onChange={getValue} /></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Description" name="description"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Type" name="type"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Contrat" name="contrat"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><input type="number" placeholder="Prix unitaire" name="pu"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Devise" name="devise"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><input type="number" placeholder="Quantité" name="qte"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><input type="number" placeholder="Montant" name="montant" readonly onChange={getValue} value={articles.montant}/></td>
      </tr>
         
      <tr>
        <td><input className="btn bg-warning" type="button" onClick={AjjA}  value="Ajouter article" /></td>
      </tr>
    </table></legend>
   <span > {message}</span>
    </div>
       
      </div>
      <div className="col-6">
      <div>
    <legend className="container">
        <div className="nav">
            {/* <Nav/> */}
            <a className="btn" href='afficher.js'>Afficher  liste articles</a>
        </div>
    <table>
         
      
      <tr>
        <td><input type="text" placeholder="User" name="nom"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Prénom" name="prenom"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Dir." name="dir"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Modèle" name="modele"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><input type="date" placeholder="Date livraison" name="date_livraison"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Vétusté" name="vetuste"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><input type="date" placeholder="Expiration" name="date_expiration"  onChange={getValue}/></td>
      </tr>
      <tr>
        
        <td><input type="text" placeholder="Commentaire" name="commentaire"  onChange={getValue}/></td>
      </tr>
      <tr>
        <td><select className="form-select" name='idA' onChange={getValue}>
            <option>Selectionner article</option>
            {
                dataArticle.map((e)=>{
                    return <option value={e.idA}>
                        {
                            e.code_article
                        }
                    </option>
                }
            ) 
            }
            </select></td>
      </tr>
      <tr>
        <td><input className="btn bg-warning" type="button" onClick={AjjU}  value="Ajouter utilisateur" /></td>
      </tr>
    </table></legend>
   <span > {message}</span>
    </div>
   
       

      </div>
      
    </div>
    </>}