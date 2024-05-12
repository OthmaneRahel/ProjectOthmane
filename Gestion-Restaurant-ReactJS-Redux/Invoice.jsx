import React  from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Invoice(){
    const client = useSelector((state)=>state.client)
    const menu = useSelector((state)=>state.Menu)
    const orders = useSelector((state)=>state.orders)
    const [clientSelectionne, setclientSelectionne] = useState("");
    const clientSelectionneD = client.find((client) => client.clientName === clientSelectionne);
    let clientOrders = orders.filter((order) => order.clientId === clientSelectionneD.clientId)
    const GetValueInput = (event) => {
        setclientSelectionne(event.target.value);
         clientOrders = clientSelectionne
        ? orders.filter((order) => order.clientId === clientSelectionne.clientId)
        : '';
    };
    return (
        <div>
            <label htmlFor="" >Client Name :</label>
            <select className="form-select" style={{textAlign:"center"}} onChange={GetValueInput}>
                <option value="">Votre client</option>
                {
                    client.map((i)=>{
                        return <option>{i.clientName}</option>
                    })
                }
            </select>
            <div id="div" className="container p-5 m-5 border bg-white mx-auto my-5">
                {clientSelectionneD && (
                    <div>
                        <div>
                            <div className="row">
                                <div className="col-6">
                                    <p><h5>Client Name :</h5> {clientSelectionneD.clientName}</p>
                                    <p><h5>Email:</h5> {clientSelectionneD.clientEmail}</p>
                                    <p><h5>Phone:</h5> {clientSelectionneD.clientPhone}</p>
                                </div>
                                <div className="col-6">
                                <ul>
                                    {clientOrders.map((order) => (
                                        <div className="col">
                                            <div><h5>Id delivered :</h5>{order.IsDelivered}</div>
                                        </div>
                                    
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div >
                                    {clientOrders.map((order) => (
                                            <div className="row">
                                                <div className="col-10">
                                                    <table className="table table-bordered" border={2}>
                                                        <thead className="bg-success text-light">
                                                            <th>Item</th>
                                                            <th>Quantity</th>
                                                            <th>Unit Price</th>
                                                            <th>Total</th>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>{order.Menuitem}</td>
                                                                <td>{order.quantity}</td>
                                                                <td>{order.totalPrice} $</td>
                                                                <td>{order.quantity * order.totalPrice} $</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="col-2">
                                                    <h5>Total : {order.quantity * order.totalPrice} $</h5>
                                                </div>
                                            </div>
                                            
                                            
                                        ))}
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                )}

            </div>
        </div>
            
    )
}