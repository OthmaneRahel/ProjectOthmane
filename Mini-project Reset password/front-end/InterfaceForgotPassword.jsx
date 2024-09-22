import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
export default function InterfaceForgotPassword() {
    const [CNE,setCNE]=useState("")
    console.log(CNE)
    const [errorsCNE_validation , setErrorsCNE_validation]=useState({})
    const RenvoyerPassword = () =>{
        axios.post('http://127.0.0.1:8000/api/forgot-password',{CNE:CNE}).then((response)=>{
            if(response.status == 200){
                alert(response.data.success)
            }
        }).catch((error)=>{
            console.log(error)
            if(error.response.data.success == false){
                alert(error.response.data.message)
            }
            setErrorsCNE_validation(error.response.data.errors)
        })
    }
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-screen flex items-center justify-center">
            <div className="bg-white p-8 shadow-2xl rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Mot de passe oublié</h2>
                <label htmlFor="email" className="block text-gray-600 font-medium mb-2 text-center">Entrez votre adresse email :</label>
                <input id="email" type="email" name="CNE" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 ease-in-out mb-4" placeholder="exemple@domain.com" onChange={(event)=>{setCNE(event.target.value)}}/>
                {
                    errorsCNE_validation &&  (
                        <p className="text-red-600 text-lg mb-5 font-medium">{errorsCNE_validation.CNE}</p>
                    )
                }
                <button type="button" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 ease-in-out font-medium focus:ring-4" onClick={RenvoyerPassword}>Envoyer</button>
            </div>
        </div>
        <Footer/>
        </div>
        
    );
}
