const initialState = {
    Menu : [],
    client :[],
    orders :[],
    panier : []
}
const ReducerMenu= (state = initialState , action)=>{
    switch(action.type){
        case 'ADD_MENU' :
            return {
                ...state,
                Menu : [...state.Menu , action.payload]
            }
        case 'ADD_CLIENT' :
            return {
                ...state,
                client : [...state.client , action.payload]
            }
        case 'ADD_ORDERS':
            return {
                ...state,
                orders : [...state.orders , action.payload]
            }
        case 'DELETE_CLIENT':
            return{
                ...state,
                client : state.client.filter((i)=>i.id != action.payload)
            }
        case 'UPDATE_CLIENT':
            return {
                ...state,
                client : state.client.map((i)=>i.id == action.payload.id ? action.payload.updatevalclient : i)
            }
        case 'ADD_PANIER':
            return{
                ...state,
                panier : [...state.panier , action.payload]
            }
        default :
            return state
    }
}
export default ReducerMenu;