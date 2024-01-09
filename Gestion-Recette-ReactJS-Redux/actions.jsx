export const addIng = (id,ingredient) => ({
    type: 'ADD_INGREDIENT',
    payload: { id,ingredient}
});
export const deleteIng = (id) =>({
    type : 'DELETE_INGREDIENT',
    payload : id
})
export const ajouterR = (recette)=>({
    type : 'add_reccette',
    payload : recette
})
export const modifier = (rec)=>({
    type : 'modifier_rec',
    payload : rec
})
export const supprimerIng = (nom) => ({
    type: 'SUPPRIMER_INGREDIENT',
    payload: { nom }
});
export const supprimerRecette = (id) => ({
    type: 'SUPPRIMER_RECETTE',
    payload: id,
})