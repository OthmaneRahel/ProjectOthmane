const initialState = {
  posts: [],
  amis:[]
};
const prodactPost = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts , action.payload],
      };

    case 'ADD_AMI':
        return {
          ...state,
          amis :[...state.amis , action.payload]
        }

    case 'AGM_LIKE':
          return {
            ...state,
            posts:state.posts.map((i)=>{
              if(i.id===action.payload){
                return{...i, like: i.like + 1 }
              }
              return i
            })
          };
    case 'DISLIKE':
            return {
              ...state,
              posts:state.posts.map((i)=>{
                if(i.id===action.payload){
                  return{...i, delike: i.delike + 1 }
                }
                return i
              })
            };
    case 'DELETE_POST':
            return {
              ...state,
              posts :state.posts.filter((i)=>i.id != action.payload)
              
            }
    case 'UPDATE_POST':
        return {
          posts : state.posts.map((post)=>
            post.id == action.payload.id ? action.payload.newValPost : post
          )
        }
    case 'add_comment':
              return {
                ...state,
                posts:state.posts.map((p)=>{
                  if(p.id==action.payload.idpost){
                     p.commentaires.push(action.payload.comment)
                 }
                  return p;
                 })
              };
    case 'DELETE_COMMENTAIRE':
        return {
          ...state,
          posts:state.posts.map((p)=>{
            if(p.id==action.payload.idP)
            {
              p.commentaires=p.commentaires.filter((com)=>com.id != action.payload.idC)
            }
            return p;  
          })
        }
    default:
      return state;
  }
};

export default prodactPost;