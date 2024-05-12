import React from "react";
import { useDispatch, useSelector } from "react-redux";
function AfficherMessage(){
    const contacts = useSelector((state)=>state.contact)
    const dispatch = useDispatch()
    console.log(contacts)
    return (
        <div>
            {
                contacts.map((i)=>({
                    
                }))
            }
        </div>
    )
}
export default AfficherMessage