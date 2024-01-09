import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addcontact} from './actions';
//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Addcontact(){
    const log=useSelector((state)=>state.userconect);
    const dispatch=useDispatch();
    const [ids,setIds]=useState(1)
    const [info,setInfo]=useState({id:ids,name:"",numero:"",message:[]});
    const navigate = useNavigate();
    
    const Addcontactt=()=>{
         dispatch(addcontact(info));
         setIds(ids+1)
         setInfo({id:ids+1,name:'',numero:"",message:[]});
         
    }
    const retourchat=()=>{
        navigate('/chat');
        
   }
    return(
        <div>
            {console.log(log)}
            <label>Name</label>
            <input type='text' value={info.name} onChange={(e)=>{setInfo({...info,name:e.target.value})}}/><br/>
            <label>numero</label>
            <input type='text' value={info.numero} onChange={(e)=>{setInfo({...info,numero:e.target.value})}}/><br/>
            <button onClick={()=>Addcontactt()}>ADD</button>
            <button onClick={()=>retourchat()}>retour vers le chat</button>
            
        </div>
    )
}
export default Addcontact;