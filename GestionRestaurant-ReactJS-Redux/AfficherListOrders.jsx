import React from "react";
import { useSelector } from "react-redux";
export default function AfficherListOrders(){
    const orders = useSelector((state)=>state.orders)
    return (
        <div>
            <table className="table table-bordered bg-success">
                <thead>
                    <th>Order Id</th>
                    <th>Client name</th>
                    <th>Menu item</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Is Delivered</th>
                </thead>
                <tbody>
                    {
                        orders.map((order)=>{
                            return <tr>
                                <td>{order.idorder}</td>
                                <td>{order.clientname}</td>
                                <td>{order.Menuitem}</td>
                                <td>{order.quantity}</td>
                                <td>{order.totalPrice} $</td>
                                <td>{order.IsDelivered}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}