import React, { useEffect, useState } from 'react';
import NavBarEtudiant from './navbar';
import axios from 'axios';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
export default function InterfaceProfile(){
    const token = localStorage.getItem('token_etudiant')
    const [user,setuser]=useState([]);
    //const [darkMode, setDarkMode] = useState(false);
    // const NightMode = () => {
    //     setDarkMode(!darkMode);
    // };
    // const [darkMode , setDarkMode] = useState(false)
    // useEffect(()=>{
    //     const dM = localStorage.getItem('darKM');
    //     alert(typeof(dM))
    //     if(dM === 'true'){
    //         alert('1')
    //         setDarkMode(dM)
    //     }
        
    // },[])
    // useEffect(()=>{
    //     alert(darkMode)
    // },[darkMode])
    const navigate = useNavigate()
    const [khanouzadyalScarface,setkhanouzadyalScarface]=useState(localStorage.getItem('dark'))
    console.log(khanouzadyalScarface)
    useEffect(()=>{
        const hh = () =>{
            setkhanouzadyalScarface(localStorage.getItem('dark'))
        }
        window.addEventListener('storage',hh)
        return ()=>{window.removeEventListener('storage',hh)}
    },[])
    useEffect(()=>{
        if(token != null){
        const time = setTimeout(() => {
            localStorage.removeItem('token_etudiant') // had setTimeOut kat7ayed token men mora 120 minutes ( kikon token f laravel expired ) khas nmes7oh f front-end
            alert('Session Expiré')
            navigate('/Home-Page')
        },3600000);
        axios.get('http://127.0.0.1:8000/api/user-name-etudiant',{
            headers :{
            'Authorization' : `Bearer ${token}`
            }
        }).then((res)=>{
            setuser(res.data.user)
        })
        return ()=>clearTimeout(time)
        }
    },[])
    return <div className=''>
        <div className='bg-gray-500 bg-opacity-50 h-screen'>
            <NavBarEtudiant/>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1'>
                    <div className='bg-white m-5 rounded-md p-5 dark:bg-black'>
                        <div className='flex justify-center items-center flex-col'>
                            {/* <img src={`http://127.0.0.1:8000/storage/${user.image}`} alt=" Etudiant" className='rounded-full object-cover h-60 w-60' /> */}
                            <img src='imageHomePage.jpeg' alt=" Etudiant" className='rounded-full object-cover h-60 w-60' />
                            <input type="file" name='image' className="mt-5 text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-purple-600 file:to-blue-600 file:text-white hover:file:from-purple-700 hover:file:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"/>
                        </div>
                    </div>
                    <div className='bg-white m-5 rounded-md p-5 dark:bg-black'>
                        <div>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <p>Votre Nom :</p>
                                    <b>{user.nom}</b> 
                                </div>
                                <div>
                                    <p>Votre Prenom :</p>
                                    <b>{user.prenom}</b> 
                                </div>
                                <div className='mt-5'>
                                    <p>Votre Sexe :</p>
                                    <b>{user.sexe}</b> 
                                </div>
                                <div className='mt-5'>
                                    <p>Votre Date de Naissance :</p>
                                    <b>{user.date_naissance}</b> 
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p>Votre CNE :</p>
                                <b>{user.CNE}</b> 
                            </div>
                            <div className='mt-5 w-full'>
                                <p>Votre Groupe :</p>
                                <b>{user.id_group}</b> 
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    </div>
    
}