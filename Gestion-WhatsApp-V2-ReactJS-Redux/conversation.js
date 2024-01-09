import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {dlike, like,suprmsg ,envoyermsg} from './actions';
//import { Navigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';


function Conversation(){
    const log=useSelector((tach)=>tach.conversation);
    const iddd=useSelector((tach)=>tach.idconversation);
    const user=useSelector((tach)=>tach.userconect);
    const user1=useSelector((tach)=>tach.user);
    const dispatch=useDispatch();
    //const navigate = useNavigate();
    const [id,setId]=useState(useSelector((state)=>state.idmsg));
    const [message,setMessage]=useState({id:id,text:'',like:0,deslike:0})
    
       
     const Ajoutermsg=()=>{
        dispatch(envoyermsg(message))
        setId(id+1)
        setMessage({id:id+1,text:'',like:0,deslike:0})
     } 
     const Supmsg=(xx)=>{
        dispatch(suprmsg(xx))
     }
     const Like=(par)=>{
        dispatch(like(par))
     }
     const DLike=(par)=>{
        dispatch(dlike(par))
     }
   
   

    

    return(
        <div>
            {console.log(user1)}
            
            {console.log(user)}
            {console.log(log)}
            {console.log(iddd)}
            <div>
                <p>conersation</p>
                {log.map((conv)=>
                (<div><p>{conv.text} 
                <button onClick={()=>{return Supmsg(conv.id)}}>suprimer</button>
                <button onClick={()=>{return Like(conv.id)}}>like{conv.like}</button>
                <button onClick={()=>{return DLike(conv.id)}}>deslike{conv.deslike}</button>
                </p></div>)
            )}
            </div>
            
            <input type='text' placeholder='envoyer un message' value={message.text} onChange={(e)=>{setMessage({...message,text:e.target.value})}}/>
            <button onClick={()=>{Ajoutermsg()}}>envoyer</button>
            
            
        </div>
    )



}
export default Conversation;