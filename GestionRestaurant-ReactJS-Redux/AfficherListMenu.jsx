import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtopanier } from "./actions";
export default function AfficherListMenu() {
  const Menu = useSelector((state) => state.Menu);
  const Panier = useSelector((state)=>state.panier)
  const [newelementpanier , setpanier]=useState({id:1 , nameElement :''})
  const Dispatch = useDispatch()
  const addp = ()=>{
    Dispatch(addtopanier(newelementpanier))
  }
  return (
    <div >
      <div className="row">
        {Menu.map((i) => (
          <div id='items'className="col-3 border p-5 ">
            <img src={i.imageItem}  className="image-item" /><br/>
            <br/>
            <h1>{i.itemName}</h1>
            <p style={{ opacity: 0.6 }}>{i.itemDescription}</p>
            <b>{i.itemPrice} $</b><br/>
            <br/>
            <button type="button" className="btn btn-dark btn-lg">Buy Now !</button><br/>
            <br />
            <button type="button" className="btn btn-warning btn-lg" onClick={addp} > Ajouter Au panier </button>
          </div>
        ))}
      </div>
    </div>
  );
}
