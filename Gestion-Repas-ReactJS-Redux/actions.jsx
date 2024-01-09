export const supprimerRepas = (id) => ({
    type: 'deleteRepas',
    payload : id
});
export const supprimerComment = (auteur,idR) => ({
    type: 'deleteComment',
    payload : {auteur,idR}
});
export const incrementNote = (auteur,idR) => ({
    type: 'PlusNote',
    payload : {auteur,idR}
});
export const ajouterRepas = (repas) => ({
    type: 'addRepas',
    payload : repas
});
export const ajouterPromo = (id,promo) => ({
    type: 'addPromo',
    payload : {id,promo}
});
export const ajouterIngredient = (id,i) => ({
    type: 'addIngred',
    payload : {id,i}
});
export const ajouterComment = (id,comment) => ({
    type : 'addComment',
    payload : {id,comment}
})

