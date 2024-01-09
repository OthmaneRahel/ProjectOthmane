import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteclient , updateclient } from "./actions";
import { useNavigate } from "react-router-dom";
export default function AfficherListClient(){
    const client = useSelector((state)=>state.client)
    const Dispatch = useDispatch()
    const Navigate = useNavigate()
    const [search , setsearch]=useState('')
    console.log(search)
    const deleteClient = (id)=>{
        Dispatch(deleteclient(id))
    }
    const updateClient = (id,updatevalclient)=>{
        Dispatch(updateclient(id,updatevalclient))
    }
    return(
        <div>
            <input type="text" className="form-control" placeholder="Rechercher un client..." onChange={(e)=>setsearch(e.target.value)}/><br/>
            <table className="table table-bordered">
                <thead className="table table-bordered bg-success">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        client.filter((item)=>{
                            return search.toLowerCase()=== '' ? item : item.clientName.toLowerCase().includes(search)
                        }).map((i)=>{
                            return <tr>
                                <td>{i.id}</td>
                                <td>{i.clientName}</td>
                                <td>{i.clientEmail}</td>
                                <td>{i.clientPhone}</td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={()=>deleteClient(i.id)}>Delete client</button>{' '}
                                    <button type="button" className="btn btn-success" onClick={()=>updateClient({...i,clientName : 'hello'})}> update client</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}