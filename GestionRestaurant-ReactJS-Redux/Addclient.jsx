import React, { useState } from "react";
import { addclient } from "./actions";
import { useDispatch, useSelector } from "react-redux";
export default function Addclient(){
    const Dispatch = useDispatch();
    const clients = useSelector((state)=>state.client)
    const [newclient , setnewclient]=useState({id:1,clientName : '',clientEmail : '',clientPhone : ''})
    const [message , setmessage]=useState('')
    const GetValueInput = (event)=>{
        setnewclient((Prevclient)=>({
            ...Prevclient,
            [event.target.name]:event.target.value
        }))
    }
    const AddC = () =>{
        if(newclient.clientName != '' && newclient.clientEmail != '' && newclient.clientPhone != ''){
            Dispatch(addclient(newclient))
            setnewclient((prevc)=>({
                ...prevc,
                id:prevc.id + 1,
                clientName : '',
                clientEmail : '',
                clientPhone : ''
            }))
            setmessage("bien ajoute")
        }else{
            setmessage('Veuillez remplir les champs vides')
        }
    }
console.log(message)
    console.log(clients)
    return (
        <div id="div" className="container p-5 m-5 border bg-white mx-auto my-5">
            <table className="table ">
                <tr>
                    <td>Client name :</td>
                    <td><input type="text " className="form-control" value={newclient.clientName} name="clientName" onChange={GetValueInput}/></td>
                </tr><br/>
                <tr>
                    <td>Client Email :</td>
                    <td><input type="text" className="form-control" value={newclient.clientEmail} name="clientEmail" onChange={GetValueInput}/></td>
                </tr><br/>
                <tr>
                    <td>Client Phone :</td>
                    <td><input type="text" className="form-control" value={newclient.clientPhone} name="clientPhone" onChange={GetValueInput}/></td>
                </tr><br/>
                <tr>
                    <td></td>
                    <td><input type="button" className="btn btn-success" value='Add client' onClick={AddC}/></td>
                </tr><br/>
                <tr>
                    <td></td>
                    <td><b>{message}</b></td>
                </tr><br/>
                
            </table>
        </div>
    )
}