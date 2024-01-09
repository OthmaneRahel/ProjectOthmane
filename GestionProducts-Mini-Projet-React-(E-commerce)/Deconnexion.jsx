import React from "react";
import { logout } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Desconnect (){
    const log = useSelector((state)=>state.userC);
    const Dispatch = useDispatch()
    const navigate = useNavigate()
    const deconnecter = () =>{
        if(log){
            Dispatch(logout())
            navigate('/login')
        }
    }
    return (
        <div>
            <button className="btn btn-primary justify-content-center" onClick={deconnecter}>LogOut</button>
        </div>
    )
}