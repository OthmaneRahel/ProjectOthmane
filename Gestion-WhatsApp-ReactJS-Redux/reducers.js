const intiState = {
    contact : [],
}
const ReducerContacts = (state = intiState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          contact: [...state.contact, action.payload],
        };
      case 'DELETE_CONTACT':
        return {
          ...state,
          contact: state.contact.filter((i)=>i.id != action.payload),
        };
      case 'UPDATE_CONTACT':
        return {
          ...state,
          contact: state.contact.map((i)=>
            i.id === action.payload.id ? action.payload.newValContact : i
          ),
          };
      case 'ADD_MESSAGE':
        return {
          ...state,
          contact : state.contact.map((i)=>{
            if(i.id == action.payload.id){
              i.chats = i.chats.push(action.payload.Message)
            }
            return i
          })
        }
    default :
        return (state);
    }
    
}
export default ReducerContacts;