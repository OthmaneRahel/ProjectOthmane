import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterMesage } from "./actions";

function Addmessage() {
  const contacts = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState("");

  const addMessage = (id) => {
    dispatch(ajouterMesage(id, { id: Date.now(), message: newMessage }));
    setNewMessage("");
  };
  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <div>
            <label>Tape your Message :</label><br />
            <textarea
              value={newMessage}
              onChange={(event) => setNewMessage(event.target.value)}
              placeholder="Tape your Message ..."
            /><br />
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => addMessage(contact.id)}
            >
              Ajouter Message
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Addmessage;
