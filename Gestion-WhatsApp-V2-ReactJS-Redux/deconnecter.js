import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deconnecter } from './actions';
import { useNavigate } from 'react-router-dom';

function Deconnecter() {
  const log = useSelector((state) => state.userconect);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  if (log) {
    dispatch(deconnecter());
    
  }
  const logg=()=>{
      navigate('/login');
  }

  return <div>
             <p>Vous êtes déconnecté.</p>
             <button onClick={()=>{return logg()}}>aller ver login</button>
        </div>;
}

export default Deconnecter;