import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./actions";
import { useNavigate } from "react-router-dom";
export default function LoginUsers(){
    const loginUser = useSelector((state)=>state.login)
    const use = useSelector((state)=>state.userC)
    const Dispatch = useDispatch()
    const [newUser , setnewUser]=useState({
        email : '' , password : '' 
    })
    const navigate = useNavigate();
    const LOGIN = () =>{
        Dispatch(login(newUser))
        setnewUser({
            email : '' , password : '' 
        })
    }
    const getValue = (event) =>{
        setnewUser((prevU)=>({
            ...prevU,
            [event.target.name]:event.target.value
        }))
    }
    if(loginUser){
        return navigate('/Acceuil')
    }
    console.log(loginUser)
    console.log(newUser)
    console.log(use)
    return(
        <div>
            <form action="" id="items" className="container border p-5">
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control" name="email" onChange={getValue} /><br />
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" onChange={getValue} /><br />
                <input className="btn btn-lg btn-warning" type="button" value="Se connecter" onClick={LOGIN}/>
            </form>
        </div>
    )
}