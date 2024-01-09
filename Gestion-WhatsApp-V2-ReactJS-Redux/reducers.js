const watsap = {
  user: [
    {
      id: 1,
      name: "mohamed",
      password: "123",
      contact: [],
    },
    {
      id: 2,
      name: "mohamed",
      password: "12223",
      contact: [{id:1,name:'hamid',numero:"212121",message:[{id: 1,text: "1",likes: 0,delikes: 0}]}],
    },
  ],
  login: false,
  userconect:'',
  conversation:false,
  idconversation:false,
  idmsg:0
  };

const Newproject = (state = watsap, action) => {
  switch (action.type) {
    case "LOGIN":
      const userToLogin = state.user.find((user) =>user.name === action.payload.name && user.password === action.payload.password
      );
      if (userToLogin) {
        return {
          ...state,
          login: {id:userToLogin.id, name: userToLogin.name, password: userToLogin.password },
          userconect:userToLogin
        };
      } else {
        return {
          ...state,
          login: false,
        };
      }
        
      case "ADD_CONTACT":
       
        return {
          ...state,
          user: state.user.map((i) => {
            if (i.id === state.userconect.id) {
              return { ...i, contact:[...i.contact,action.payload]  };
            } else {
              return i; 
            }
          }),
          userconect:{...state.userconect,contact:[...state.userconect.contact,action.payload]}
          
              
          
        };
        case "DECONNECTER":
          return {
            ...state,
            userconect:'',
            login:false
          }

        case "CONVERSATION":
           const messages=state.userconect.contact.find((x)=>x.id===action.payload)
            return {
              
              ...state,
              idconversation:action.payload,
              conversation:messages.message
            };

        case "MSG":
          return{
            ...state,
            conversation:[...state.conversation,action.payload],
            //idconversation:action.payload
            // userconect:state.userconect.contact.map((i)=>{
            //   if(i.id===state.idconversation){
            //     return {...state.userconect,}
            //   }

              
           userconect:{...state.userconect,contact:state.userconect.contact.map((i)=>{
            if(i.id===state.idconversation){
              return{...i,message:[...i.message,action.payload]}
            }
            return i
           })},
           idmsg:state.idmsg+1,
           user:state.user.map((i)=>{
            if(i.id===state.login.id){
              return{...i,contact:i.contact.map((a)=>{
                  if(a.id===state.idconversation){
                    return {...a,message:[...a.message,action.payload]}
                  }
                  return a
              })}
            }
            return i
           })
          }

          case "supmsg":
            return{
              ...state,
              // user:state.user.map((i)=>{
              //   return{...i,contact:i.contact.map((x)=>{
              //     if(i.id===state.userconect.id){
              //       if(x.id===state.idconversation){
              //         return{...x,message:x.message.filter((v)=>v.id!==action.payload)}
              //       }
              //       return x
              //     }
              //     return i
              //   })}
              // })
              user:state.user.map((i)=>{
                if(i.id===state.login.id){
                  return{...i,contact:i.contact.map((a)=>{
                      if(a.id===state.idconversation){
                        return {...a,message:a.message.filter((v)=>v.id!==action.payload)}
                      }
                      return a
                  })}
                }
                return i
               }),

               userconect:{...state.userconect,contact:state.userconect.contact.map((i)=>{
                if(i.id===state.idconversation){
                  return{...i,message:i.message.filter((x)=>x.id!==action.payload)}
                }
                return i
               })},
               conversation:state.conversation.filter((x)=>x.id!==action.payload)
            }

    case "like":
      return {
        ...state,
        conversation:state.conversation.map((i)=>{
            if(i.id===action.payload){
              return{...i,like:i.like+1}
            }
            return i
        })
      }

      case "dlike":
        return {
          ...state,
          conversation:state.conversation.map((i)=>{
              if(i.id===action.payload){
                return{...i,deslike:i.deslike+1}
              }
              return i
          })
        }
    default:
      return state;
  }
};

export default Newproject;
