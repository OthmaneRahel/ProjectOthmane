import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {conversation} from './actions'


function Llogin() {
  const log = useSelector((state) => state.userconect);
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const Addcontact = () => {
    navigate('/contact');
  };
  
  const Conversationn=(id)=>{
    
    navigate('/conversation');
    alert("jjjjjjjjjjjjjjjj")
    dispatch(conversation(id));
}

  return (
    <div>
      {log!=="" ? (
        <table>
          
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>numero</th>
              <th>Last Message</th>
            </tr>
          
          
            {log.contact.map((contact) => (
              <tr  onClick={()=>{Conversationn(contact.id)}}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.numero}</td>
                {contact.message.length!==0?(
                 <td>{contact.message[(contact.message.length)-1].text}</td>
                ):(
                  <td>vide</td>
                )}
                
              </tr>
            ))}
          
          <button onClick={()=>{return Addcontact()}} >Add contact</button>
        </table>
        
      ) : (
        <button onClick={()=>{return Addcontact()}} >Add contact</button>
      )}
    </div>
  );
}

export default Llogin;