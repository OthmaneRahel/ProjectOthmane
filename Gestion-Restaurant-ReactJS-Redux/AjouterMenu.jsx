import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { addmenu } from "./actions";
export default function Ajoutermenu(){
    const Menu = useSelector((state)=>state.Menu)
    const Dispatch = useDispatch();
    const [newMenu , setnewMenu]=useState({id : Date.now(),imageItem:'',itemName : '',itemDescription : "",itemPrice : 0})
    const AddMenuItem = () =>{
        Dispatch(addmenu(newMenu))
        setnewMenu({id : Date.now(),imageItem:'',itemName : '',itemDescription : "",itemPrice : 0})
    }
    const GetValue = (event) =>{
        setnewMenu((prevMenu)=>({
            ...prevMenu,
            [event.target.name]:event.target.value
        }))
    }
    console.log(Menu)
    return (
        <div id="div" class="container p-5 m-5 border bg-white mx-auto my-5">
            <table>
                <tr>
                    <td className="form-label">Item image :</td>
                    <td><input className="form-control" type="text" name="imageItem" value={newMenu.imageItem} onChange={GetValue}/></td>
                </tr>
                <br/>
                <tr>
                    <td className="form-label">Item Name :</td>
                    <td><input className="form-control" type="text" name="itemName" onChange={GetValue} value={newMenu.itemName}/></td>
                </tr>
                <br/>
                <tr>
                    <td className="form-label">Item Decription:</td>
                    <td><textarea className="form-control" name="itemDescription"  cols="30" rows="10" onChange={GetValue} value={newMenu.itemDescription}></textarea></td>
                </tr>
                <br/>
                <tr>
                    <td className="form-label">Item Price :</td>
                    <td><input className="form-control" type="number" name="itemPrice" onChange={GetValue} value={newMenu.itemPrice}/></td>
                </tr>
                <br/>
                <tr>
                    <td></td>
                    <td><input type="button" className="btn btn-success" value='Add Menu item' onClick={AddMenuItem}/></td>
                </tr>
            </table>
        </div>
    )
}