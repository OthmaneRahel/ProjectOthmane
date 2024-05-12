export const addpost=(posts)=>({
  type:"ADD_POST",
  payload:posts
})

export const addami=(ami)=>({
  type:"ADD_AMI",
  payload:ami
})

export const augmenter=(like)=>({
  type:"AGM_LIKE",
  payload:like
})
export const dislike = (dlike) =>({
  type : "DISLIKE" ,
  payload : dlike
})
export const supprimerPost =(idC)=>({
  type : "DELETE_POST",
  payload : idC
})
export const modifierPost = (id ,newValPost) =>({
  type : 'UPDATE_POST',
  payload :{ id , newValPost}
})
export const addComment =(idpost,comment)=>({
  type:"add_comment",
  payload:{idpost,comment}
})
export const deleteCommentaire = (idP , idC) =>({
  type : 'DELETE_COMMENTAIRE',
  payload : {idP,idC}
})

 