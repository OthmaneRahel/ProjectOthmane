import React, { useState } from "react";
import Navbar from "./navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignUpInterface({panier}){
    const [newUser , setnewUser] =useState({
      image:'',
      name:'',
      adresse:'',
      phone:'',
      email:'',
      password:''
    })
    const navigate = useNavigate()
    const [errors , seterrors] = useState({})
    const getvalue = (event)=>{
      if(event.target.name === 'image'){
        setnewUser((prevUser)=>({
          ...prevUser,
          image:event.target.files[0]
        }))
      }else{
        setnewUser((prevUser)=>({
          ...prevUser,
          [event.target.name]:event.target.value
        }))
      }
    }
    const AddUser = async() =>{
      const newuser = new FormData()
      newuser.append('image',newUser.image)
      newuser.append('name',newUser.name)
      newuser.append('adresse',newUser.adresse)
      newuser.append('phone',newUser.phone)
      newuser.append('email',newUser.email)
      newuser.append('password',newUser.password)
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/Ajouter-user',newuser)
        if(response.status == 201){
          navigate('/login',{state:response.data})
        }
      }catch(error){
        console.log(error.response.data)
        seterrors(error.response.data.errors)
        alert('errors')
      }
    }
    console.log(newUser)
    return <>
        <Navbar p={panier}/>
        <form action="" encType="multipart/form-data">
          <div className="flex flex-col justify-center items-center pt-8 mt-16 bg-white shadow-2xl mx-auto w-11/12 sm:w-3/4 md:w-2/3 md:p-10 lg:w-1/2 xl:w-1/3 lg:p-5 rounded-lg">
            <div className="mb-8 w-full px-4 sm:px-0">
              <label htmlFor="email" className="block pr-5 pb-5 font-medium text-xl text-gray-700">
                Votre Image : 
              </label>
              <input
                type="file"
                name="image"
                className="rounded-full w-full px-7 py-2 outline-none focus:ring-2 focus:ring-gray-800 font-medium bg-gray-100 border-2 border-blue-400 focus:border-none transform hover:scale-105"
                onChange={getvalue}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="mb-8 w-full px-4 sm:px-0">
                    <label htmlFor="email" className="block pr-5 pb-5 font-medium text-xl text-gray-700">
                        Nom Complet :
                    </label>
                    <input
                    type="text"
                    name="name"
                    className="rounded-full w-full px-7 py-2 outline-none focus:ring-2 focus:ring-gray-800 font-medium bg-gray-100 border-2 border-blue-400 focus:border-none transform hover:scale-105"
                    placeholder="Votre nom complet"
                    onChange={getvalue}
                    />
                </div>
                <div className="mb-8 w-full px-4 sm:px-0">
                    <label htmlFor="email" className="block pr-5 pb-5 font-medium text-xl text-gray-700">
                        Telephone :
                    </label>
                    <input
                    type="tel"
                    name="phone"
                    className="rounded-full w-full px-7 py-2 outline-none focus:ring-2 focus:ring-gray-800 font-medium bg-gray-100 border-2 border-blue-400 focus:border-none transform hover:scale-105"
                    placeholder="Votre numero de telephone"
                    onChange={getvalue}
                    />
                </div>
            </div>
            <div className="mb-5 w-full px-4 sm:px-0">
              <label htmlFor="password" className="block pr-5 pb-5 font-medium text-xl text-gray-700">
                Adresse :
              </label>
              <input
                type="text"
                name="adresse"
                className="rounded-full w-full px-7 py-2 outline-none focus:ring-2 focus:ring-gray-800 font-medium bg-gray-100 border-2 border-blue-400 focus:border-none transform hover:scale-105" 
                placeholder="Votre Adresse"
                id="password"
                onChange={getvalue}
              />
            </div>
            <div className="mb-5 w-full px-4 sm:px-0">
              <label htmlFor="Email" className="block pr-5 pb-5 font-medium text-xl text-gray-700">
                Email :
              </label>
              <input
                type="email"
                name="email"
                className="rounded-full w-full px-7 py-2 outline-none focus:ring-2 focus:ring-gray-800 font-medium bg-gray-100 border-2 border-blue-400 focus:border-none transform hover:scale-105" 
                placeholder="Votre Email"
                id="password"
                onChange={getvalue}
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
            <div className="mb-5 w-full px-4 sm:px-0">
                <button type="button" className="border border-blue-400 px-2 py-2 hover:bg-blue-400 hover:text-white transform hover:scale-110 focus:ring-blue-300 focus:ring-2 transition ease-in-out duration-200" onClick={AddUser}>S'inscrire</button>
            </div>
          </div>
        </form>
        
    </>
    
}