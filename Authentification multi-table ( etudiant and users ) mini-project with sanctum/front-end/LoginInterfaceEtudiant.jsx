import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import './interfaceLogin.css'
import axios from "axios";
export default function LoginInterfaceEtudiant(){
    const [etudiant , setetudiant]=useState({
        CNE : '',
        password :''
    })
    const [infosFausse , setInfoFausse] =useState('') // hadi dyal ila kan ghalet f lcode o cne dyalo kat3mr automatiquement
    const [errors,seterrors]=useState({})
    const navigate = useNavigate()
    const getValue = (event)=>{
        setetudiant((prevEtudiant)=>({
            ...prevEtudiant,
            [event.target.name]:event.target.value,
        }))
    }
    const [darkMode, setDarkMode] = useState(false);
    const NightMode = () => {
        setDarkMode(!darkMode);
      };
    const Se_Connecter = () =>{
        axios.post('http://127.0.0.1:8000/api/login',{
            CNE : etudiant.CNE,
            password : etudiant.password
        }).then((res)=>{
            if(res.status == 200){
                alert(res.data.message)
                localStorage.setItem('token_etudiant',res.data.token)
                localStorage.setItem('success_connection',res.data.message)
                navigate('/Home-Page')
            }
        }).catch((error)=>{
            console.log(error.response)
            if(error.response.data.message == false){
                setInfoFausse('Le CNE ou le mot de passe saisi est incorrect.');
                const time = setTimeout(()=>{
                    setInfoFausse('')
                },4000)
                return ()=>clearTimeout(time)
            }
            seterrors(error.response.data.errors)
        })
    }
    return <div className={`${darkMode && "dark"}`}>
                <div className="h-screen bg-slate-300">
                    <Fade top>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="bag-img">
                                <img src="imageHomePage.jpeg" className="w-full h-screen object-cover"/>
                            </div>
                            <div className="bg-white m-28 rounded-lg shadow-xl p-5 divlogin dark:bg-gray-900 transition-colors duration-500">
                                <div className="flex justify-between">
                                    <div><h1 className="font-bold text-3xl dark:text-white">Conectez-vous :</h1></div>
                                    <div className="text-2xl">
                                    {
                                        darkMode ? (
                                            <Link>
                                            <i className="fa-solid fa-moon dark:text-gray-200" onClick={NightMode}></i>
                                            </Link>
                                        ) : (
                                            <Link>
                                            <i className="fa-regular fa-moon" onClick={NightMode}></i>
                                            </Link>
                                        )
                                    }
                                </div>
                                </div>
                                <div className="mt-5 dark:text-white">
                                    <label className="mb-5">Votre CNE :</label>
                                    <input type="email" name="CNE" className="border py-2.5 px-2.5 w-full bg-slate-600 bg-opacity-5 rounded-md" id="" onChange={getValue}/>
                                </div>
                                {
                                    errors && errors.CNE ? 
                                        <p className="text-red-600">{errors.CNE}</p>
                                    : ''
                                }
                                <div className="mt-5 dark:text-white">
                                    <label className="mb-5">Votre Password :</label>
                                    <input type="password" name="password" className="border py-2.5 px-2.5 w-full bg-slate-600 bg-opacity-5 rounded-md" id="" onChange={getValue}/>
                                </div>
                                {
                                    errors && errors.password ? 
                                        <p className="text-red-600 font-bold">{errors.password}</p>
                                    : ''
                                }
                                {
                                    infosFausse && (
                                        <p className="text-red-600 mt-5 font-bold">{infosFausse}</p>
                                    )
                                }
                                <div className="mt-5 flex justify-end dark:text-white">
                                    <Link className="underline" to={'/email/forgot-password'}>Forgot Your Password ?</Link>
                                </div>
                                <div className="mt-5 dark:text-white">
                                    <button className="border border-blue-700 w-52 transition ease-in hover:text-white duration-150 hover:bg-blue-700 py-2.5 px-2.5" onClick={Se_Connecter}>Se Connecter</button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
    </div>
}