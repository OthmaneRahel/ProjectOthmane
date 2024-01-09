export const addRepas = (newrepas) => ({
    type: 'ADD_REPAS',
    payload: newrepas,
});

export const  deleteRepas= (id) => ({
type: 'DELETE_REPAS',
payload: id,
});
export const deleteComment=(idrepas,auteur)=>({
    type:"DELETE_COMMENT",
    payload:{idrepas,auteur}
})
export const addcomment = (id , comment)=>({
    type : 'ADD_COMMENT',
    payload : {id , comment}
})