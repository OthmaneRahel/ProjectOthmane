export const addcontact = (contact) =>({
    type : "ADD_CONTACT",
    payload : contact
})
export const supprimerContact =(idC)=>({
    type : "DELETE_CONTACT",
    payload : idC
})
export const ajouterMesage = (id , Message)=>({
    type : 'ADD_MESSAGE',
    payload :{id , Message}
})
export const modifierContact = (id , newValContact) =>({
    type : 'UPDATE_CONTACT',
    payload : {id , newValContact}
})