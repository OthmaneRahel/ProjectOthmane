import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addami } from "./actions";
function AddAmi(){
    const Amis = useSelector((state) => state.amis)
    const [amis , setAmis]=useState({idAmi :Date.now(),NomAmis : ""})
    const Dispatch = useDispatch()
    const AddAmis = () =>{
        Dispatch(addami(amis))
        setAmis({
            idAmi : Date.now(),
            NomAmis : ""
        })
    }
    console.log(Amis)
    return(
        <div>
            <label className="form-label">Ajouter votre Amis</label><br/>
            <input type="text" value={amis.NomAmis} onChange={(event)=>setAmis({...amis,NomAmis : event.target.value})} placeholder="Ajouter Amis ..." className="form-control"/><br/>
            <button className="btn btn-primary" type="button" onClick={AddAmis}>Add Amis</button>
        </div>
    )
}
export default AddAmi;