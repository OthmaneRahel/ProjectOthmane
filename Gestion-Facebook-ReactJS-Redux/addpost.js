import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addpost} from './actions';
function Addpost(){
    const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState({ id:Date.now()  , titre: '', like: 0 ,delike:0 , commentaires : []});
  const AAddpost = () => {
    dispatch(addpost(newPost));
    setNewPost((prevS)=>({
        id : Date.now(),
        titre: '',
        like: 0 ,
        delike:0 ,
        commentaires : []
      }));
  };
    return(
        <div>
            {console.log(posts)}
            <h1>ajouter un post</h1>
      <label>titre: </label>
      <input
        type="text"
        className='form-control'
        value={newPost.titre}
        onChange={(e) => setNewPost({ ...newPost, titre: e.target.value })}
      />
      <br />
      <button onClick={AAddpost} className='btn btn-primary'>Ajouter</button>
        </div>
    )
}
export default Addpost;

