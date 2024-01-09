import React from "react";
import { useSelector } from "react-redux";
export default function Panier(){
    const menu = useSelector((state)=>state.Menu)
    const client = useSelector((state)=>state.client)
    const order = useSelector((state)=>state.orders)
    return (
        <div>
            <h1 className="container">Panier :</h1>
            {
                
            }
        </div>
    )
}