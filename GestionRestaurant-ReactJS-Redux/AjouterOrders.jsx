import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addorders } from "./actions";
export default function AjouterNewOrders(){
    const Dispatch = useDispatch();
    const orders = useSelector((state)=>state.orders);
    const client = useSelector((state)=>state.client);
    const menu = useSelector((state)=>state.Menu);
    const [newoders , setneworders]=useState({idorder:1,clientname:'',Menuitem:'',quantity:0,totalPrice : 0,IsDelivered : ''})
    const addorder = () =>{
        Dispatch(addorders(newoders))
        setneworders(()=>({
            idorder:newoders.idorder + 1,
            clientname:'',
            Menuitem:'',
            quantity:0,
            totalPrice : 0,
            IsDelivered : ''
        }))

    }
    const getvalue = (event)=>{
        setneworders((prevo)=>({
            ...prevo,
            [event.target.name]:event.target.value
        }))
    }
    console.log(orders)
    return(
        <div id="div" class="container p-5 m-5 border bg-white mx-auto my-5">
            <table>
                <tr>
                    <td className="form-label">Client name :</td>
                    <select className="form-select" name="clientname" onChange={getvalue}  value={newoders.clientname}>
                        <option>Veuillez selectionnez le client </option>
                        {
                            client.map((i)=>{
                                return <option>{i.clientName}</option>
                            })
                        }
                    </select>
                </tr>
                <br/>
                <tr>
                    <td className="form-label">item Menu :</td>
                    <select className="form-select" name="Menuitem" onChange={getvalue}  value={newoders.Menuitem}>
                        <option>Veuillez selectionnez le item Menu Name </option>
                        {
                            menu.map((i)=>{
                                return <option>{i.itemName}</option>
                            })
                        }
                    </select>
                </tr><br/>
                <tr>
                    <td>Quantity :</td>
                    <td><input type="text" value={newoders.quantity} className="form-control" name="quantity" onChange={getvalue}/></td>
                </tr><br/>
                <tr>
                    <td>Total Price :</td>
                    <td><input type="number"  value={newoders.totalPrice} className="form-control" name="totalPrice" onChange={getvalue}/></td>
                </tr><br/>
                <tr>
                    <td>Is Delivered :</td>
                    <td><input type="radio" value={"Yes"} name="IsDelivered" onChange={getvalue} />{' '}Yes{' '}
                    <input type="radio" value={"No"} name="IsDelivered" onChange={getvalue}/>{' '}No
                    </td>
                </tr><br/>
                <tr>
                    <td></td>
                    <td><input type="button" className="btn btn-success" value={"Add Order"} onClick={addorder}/></td>
                </tr>
            </table>
        </div>
    )
}