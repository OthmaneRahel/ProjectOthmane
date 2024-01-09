export const addmenu = (menu)=>({
    type : 'ADD_MENU',
    payload : menu
})
export const addclient = (client)=>({
    type : 'ADD_CLIENT',
    payload : client,
})
export const addorders = (orders)=>({
    type : 'ADD_ORDERS',
    payload : orders
})
export const deleteclient = (idclient)=>({
    type : 'DELETE_CLIENT',
    payload : idclient
})
export const updateclient = (id,updatevalclient)=>({
    type : 'UPDATE_CLIENT',
    payload : {id,updatevalclient}
})
export const addtopanier = (element)=>({
    type : 'ADD_PANIER',
    payload : element
})