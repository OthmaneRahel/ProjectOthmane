import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login} from './actions';
import { useNavigate } from 'react-router-dom';


function Login(){
    const log=useSelector((state)=>state.login);
    const dispatch=useDispatch();
    const [info,setInfo]=useState({name:"",password:""});
    const navigate = useNavigate();
    const LoginApp=()=>{
         dispatch(login(info));
         setInfo({name:'',password:""});
         
    }
    if (log) {
        return navigate('/chat');
      }

     

    return(
        <div>
            
            <label>Name</label>
            <input type='text' value={info.name} onChange={(e)=>{setInfo({...info,name:e.target.value})}}/><br/>
            <label>Password</label>
            <input type='text' value={info.password} onChange={(e)=>{setInfo({...info,password:e.target.value})}}/><br/>
            <button onClick={()=>LoginApp()}>LOGIN</button>
            
            
        </div>
    )



}
export default Login;