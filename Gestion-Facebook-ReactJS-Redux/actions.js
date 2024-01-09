export const AddToPost = (post) =>({
    type : 'ADD_POST',
    payload : post
})
export const UpdatePost = (id,newValueUpdate) =>({
    type :"UPDATE_POST",
    payload : {id , newValueUpdate}
})
export const DeletePost = (id) =>({
    type : "DELETE_POST",
    payload : id
})