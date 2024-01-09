export const login = (user) =>({
    type : "LOGIN_USER",
    payload : user
})
export const logout = () =>({
    type : "LOGOUT",
})
export const augmenterQte = (qte) =>({
    type : 'AUGMENTER_QTE',
    payload : qte
})
export const DesxQte = (qte) =>({
    type : 'DEC_QTE',
    payload : qte
})
export const addtopanier = (product) =>({
    type : 'ADD_ELE',
    payload : product
})
export const deleteProduitPanier = (idp) =>({
    type : 'DELETE_PROD',
    payload : idp
})
export const AddProduct  = (product) =>({
    type : 'ADD_PRODUCT',
    payload : product
})