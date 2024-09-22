import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";

export default function LoginInterface({panier}) {
  const [token , settoken]=useState(null)
  const [errorsinpt , seterrorinpt]=useState({})
  const location = useLocation()
  const [datauser , setdatauser]=useState(location.state)
  const [hh,sethh]=useState(localStorage.getItem('messageSession') || null)
  const navigate = useNavigate()
  const [MessageToResetPassword,setMessageToResetPassword]=useState(localStorage.getItem('messageResetPassword') || null)
  useEffect(()=>{
    const wa9t = setTimeout(() => {
      setMessageToResetPassword(localStorage.removeItem('messageResetPassword'))
    }, 7000);
    return ()=>clearTimeout(wa9t);
  },[])
  const [log , setlog] =  useState({
    email : '',
    password : ''
  })
  const getvalue = (e) =>{
    setlog((prevLog)=>({
      ...prevLog,
      [e.target.name]:e.target.value
    }))
  }
  console.log(datauser)
  const Login = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: datauser && datauser.user.email != null ? datauser.user.email : log.email,
        password: log.password,
      });
      if (response.data.success === 0) {
        localStorage.setItem('message', response.data.message);
      } else {
        settoken(response.data.token);
        alert(response.data.success);
        alert(response.data.message);
        localStorage.setItem('token-user', response.data.token)
        localStorage.setItem('response',JSON.stringify(response.data))
        navigate('/')
      }
    } catch (error) {
        if (error.response.data.success === 0) {
          alert(error.response.data.message);
          alert(error.response.data.success);
          localStorage.setItem('message', error.response.data.message);
        }
        seterrorinpt(error.response.data.errors);
    }
  };
  const [dataMsg , setDataMsg] =useState(false)
    useEffect(() => {
      if(datauser){
          const showTimer = setTimeout(() => {
            setDataMsg(true);
            const hideTimer = setTimeout(() => {
              setDataMsg(false);
            }, 3000);
            return () => clearTimeout(hideTimer);
          }, 500);
          return () => clearTimeout(showTimer);
      }

    }, []);
  return (
    <>
      <Navbar p={panier}/>
      {
        MessageToResetPassword != null ? 
          <Fade top>
              <div className="bg-green-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-5 mr-10 ml-10 rounded-md">
                <div className="flex">
                  <div className="py-1">
                    <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Notification</p>
                    <p className="text-sm">{MessageToResetPassword}</p>
                  </div>
                </div>
              </div>
          </Fade>
        :
        null
      }
        <div className="flex flex-col justify-center pt-8 mt-16 bg-white shadow-2xl mx-auto w-11/12 sm:w-3/4 md:w-2/3 md:p-10 lg:w-1/2 xl:w-1/3 lg:p-5 rounded-lg">
          <div className="mb-8 w-full px-4 sm:px-0">
            <label htmlFor="email" className="block pr-5 pb-5 font-medium text-xl text-gray-700">
              Email :
            </label>
            <input
              type="email"
              name="email"
              className="rounded-full w-full px-7 py-2 outline-none focus:ring-2 focus:ring-gray-800 font-medium bg-gray-100 border-2 border-blue-400 focus:border-none transform hover:scale-105"
              placeholder="Votre email"
              id="email"
              onChange={getvalue}
              value={datauser && datauser.user.email ? datauser.user.email : log.email}
            />
          </div>
          <div className="mb-5 w-full px-4 sm:px-0">
            <label htmlFor="password" className="block pr-5 pb-5 font-medium text-xl text-gray-700">
              Password :
            </label>
            <input
              type="password"
              name="password"
              className="rounded-full w-full px-7 py-2 outline-none focus:ring-2 focus:ring-gray-800 font-medium bg-gray-100 border-2 border-blue-400 focus:border-none transform hover:scale-105" 
              placeholder="Votre mot de passe"
              id="password"
              onChange={getvalue}
            />
          </div>
          <div className="flex justify-end pr-5">
            <Link className="underline" to={'/Reset-Password'}>Forgot Your Password ?</Link>
          </div>
          <div className="mb-5 w-full px-4 sm:px-0">
              <button className="border border-blue-400 px-2 py-2 hover:bg-blue-400 hover:text-white transform hover:scale-110 focus:ring-blue-300 focus:ring-2 transition ease-in-out duration-200" onClick={Login}>Se Connecter</button>
          </div>
          {
            dataMsg && dataMsg != null ?
              <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <Fade top>
              <div className="bg-white p-8 rounded shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Message</h2>
                <p className="mb-4">{datauser && datauser.message}</p>
              </div>
              </Fade>
            </div>
            :
            ''
          }
        </div>
    </>
  );
}
