import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBarEtudiant() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate()
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const NightMode = () => {
    setDarkMode(!darkMode);
  };
  const token = localStorage.getItem('token_etudiant')
  const [user,setuser]=useState([]);
  useEffect(()=>{
    if(token){
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
  const logout = () =>{
      axios.post('http://127.0.0.1:8000/api/logout-etudiant',{
        headers :{
          'Authorization' : `Bearer ${token}`
        }
      }).then((res)=>{
        if(res.status == 200){
          localStorage.removeItem('token_etudiant')
          alert(res.data.message)
          navigate('/Home-Page')
        }
      })
  }
  localStorage.setItem('dark',darkMode)
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <nav className="bg-white shadow-2xl dark:bg-gray-900 py-3 transition-colors duration-500">
        <ul className="flex justify-between items-center w-full px-10">
          <Link to={'/Home-Page'}>
            <img src="/logoimage.png" className="w-20" />
          </Link>
          <div className="hidden md:flex space-x-10 justify-center w-full">
            {
              token && (
                <>
                  <li>
                    <Link className="dark:text-gray-300 hover:dark:text-gray-100" to={'/Home-Page'}>Acceuil</Link>
                  </li>
                  <li>
                    <Link className="dark:text-gray-300 hover:dark:text-gray-100">Voir Les emplois</Link>
                  </li>
                  <li>
                    <Link className="dark:text-gray-300 hover:dark:text-gray-100">Absences Formateurs</Link>
                  </li>
                  <li>
                    <Link className="dark:text-gray-300 hover:dark:text-gray-100">Votre Notes</Link>
                  </li>
                  <li>
                    <Link className="dark:text-gray-300 hover:dark:text-gray-100">Ajouter Une Demande</Link>
                  </li>
                </>
              )
            }
          </div>
          <div className="flex space-x-9 mx-2">
            {
              token == null  ? (
                <li>
                  <Link className="dark:text-gray-300 hover:dark:text-gray-100" to={'/s\'identifier'}>S'identifier</Link>
                </li>
              ) : (
                  <Link className="flex space-x-1 font-bold relative z-30">
                    <span className="dark:text-gray-300">Bienvenue</span>
                    <span className="dark:text-gray-300">{user.nom}</span>
                    <span className="dark:text-gray-300">{user.prenom}</span>
                    <div className="pl-2">
                      <button onClick={toggleMenu}>
                        <i className="fa-solid fa-chevron-down dark:text-gray-300 hover:dark:text-gray-100"></i>
                      </button>
                      {openMenu && (
                        <div className="absolute right-0 mt-2 p-3 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 z-50">
                          <Link to={'/profile'} className="block text-black hover:bg-gray-200 text-center dark:text-white dark:hover:bg-gray-700 p-2 rounded" >Profil</Link>
                          <button className="block text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 p-2 rounded w-full" onClick={logout}>Logout</button>
                        </div>
                      )}
                    </div>
                  </Link>
                
              )
            }
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
          {
            token && (
              <div className="md:hidden">
                {
                  open === false ? (
                    <button onClick={toggle} className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium h-14 w-14 dark:text-gray-200">
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  ) : (
                    <button onClick={toggle} className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium h-14 w-14 dark:text-gray-200">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  )
                }
              </div>
            )
          }
        </ul>
        {
          open && (
            <div className={`md:hidden bg-white flex flex-col space-y-6 items-center dark:bg-gray-900 pb-5 transition transform ${open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
              <Link className="dark:text-gray-300 hover:dark:text-gray-100 pt-6 links" to={'/Home-Page'}>Acceuil</Link>
              <Link className="dark:text-gray-300 hover:dark:text-gray-100 links">Voir Les emplois</Link>
              <Link className="dark:text-gray-300 hover:dark:text-gray-100 links">Absences Formateurs</Link>
              <Link className="dark:text-gray-300 hover:dark:text-gray-100 links">Votre Notes</Link>
              <Link className="dark:text-gray-300 hover:dark:text-gray-100 links">Ajouter Une Demande</Link>
            </div>
          )
        }
      </nav>
    </div>
  );
}