import React from "react";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
export default function Acceuil(){
    const login = useSelector((state)=>state.login)
    const navigate = useNavigate();
    const navigateToProducts = () =>{
        if(login){
            return navigate('/afficher')
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Connectez-vous Avant !',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/login')
        }
    }
    return (
        <div>
            <img src="acceuil.jpg" style={{width : "100%"}}/>
            <h1 id="text" style={{fontSize : '94px'}}>Prendre Votre <br />
            produit Prefere</h1>
            <button id="tex" type="button" onClick={navigateToProducts} className="btn btn-lg btn-warning"><i class="fa-solid fa-arrow-right"></i> Click here</button>
        </div>
    )
}