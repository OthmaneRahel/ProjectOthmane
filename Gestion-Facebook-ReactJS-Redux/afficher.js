import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { augmenter , dislike , addComment , deleteCommentaire , supprimerPost , modifierPost } from './actions';
function Afficher() {
  const posts = useSelector((state) => state.posts);
  const amis = useSelector((state) => state.amis);
  const [postIdToEdit, setPostIdToEdit] = useState(null);
  const [commentaire , setCommentaires]=useState({id:Date.now(),textC:""})
  const dispatch = useDispatch();
  const Augmenter = (id) => {
    dispatch(augmenter(id));
  }
  const Dislike = (id) => {
    dispatch(dislike(id));
  }
  const SuppPost = (idPost) =>{
    dispatch(supprimerPost(idPost))
  }
  const updatePost = (id ,newValPost) =>{
    dispatch(modifierPost(id , newValPost))
    
  }
  const SuppCommentaire = (id , idCommmentaire) =>{
    dispatch(deleteCommentaire(id , idCommmentaire))
  }
  const AjouterCommentaire =(idP)=>{
    dispatch(addComment(idP , commentaire))
    setCommentaires({
      id:Date.now(),
      textC:""
    })
  }
  console.log(commentaire)
  return (
    <div className='row'>
      <div class="col-8 p-3">
        {posts.map((post , i) => (
          <ul>
            <div className='border'>
              <b>Post numero : { i + 1}</b><br/>
              <i>{post.titre}</i>
              <button id='q' type='button' className='btn btn-danger' onClick={()=>SuppPost(post.id)}>X</button>{" "}
              <button type='button' className='btn btn-warning' onClick={() => setPostIdToEdit(post.id)} >Modifier Post</button>
            </div><br/>
            <button className='btn btn-outline-success' onClick={() => Augmenter(post.id)}>Like :{post.like}</button>{" "}
            <button className='btn btn-outline-danger' onClick={() => Dislike(post.id)}>DisLike :{post.delike}</button><br/>
            <br/>
            {
            post.commentaires.map((com , a) => {
              return (
                <div className="card">
                  <div className='card-header'>Commentaire numero {a+1}</div>
                  <div className='card-body'>{com.textC}</div>
                  <div className='card-footer'>
                    <button type='button' className='btn btn-outline-danger justify-content-end' onClick={()=>SuppCommentaire(post.id,com.id)}>Supprimer</button>
                  </div>
                </div>
              );
            })
            }
            <br/>
            <label className='label-form'>Ajouter votre commentaire :</label>
            <input type='text' className='form-control' value={commentaire.textC} onChange={(e) => setCommentaires({ ...commentaire, textC: e.target.value })} />
            <input type='button' className='btn btn-outline-primary' value='Ajouter commentaire' onClick={() => AjouterCommentaire(post.id)} />
          </ul>
        ))}
      </div>
      <div class="col-4 p-3 ">
        {
          amis.map((i,index)=> {
            return <div >
              <b>{index + 1}-</b>{i.NomAmis}
              <button id='z' type='button' className='btn btn-outline-danger justify-content-end'>X</button>
              <hr/>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default Afficher;

  