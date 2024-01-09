import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcomment } from "./actions";
export default function addComment(){
    const listeR = useSelector((state)=>state.listeRepas)
    const Dispatch = useDispatch()
    const [newComment , setnewComment] = useState({auteur : '' , text:'' , note : 0})
    const getvalue = (event) =>{
        setnewComment((prevc)=>({
            ...prevc,
            [event.target.name]:event.target.value
        }))
    }
    const addC = () =>{
        Dispatch(addcomment(id , newComment))
    }
    return (
        <div>
            <table>
                <tr>
                    <td>Auteur</td>
                    <td><input type="text" onChange={getvalue} name="auteur"/></td>
                </tr>
                <tr>
                    <td>text</td>
                    <td><input type="text" onChange={getvalue} name="text"/></td>
                </tr>
                <tr>
                    <td>note</td>
                    <td><input type="number" onChange={getvalue} name="note"/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="button" onClick={addC} value={"Ajouter Commentaire"}/></td>
                </tr>
            </table>
        </div>
    )
}