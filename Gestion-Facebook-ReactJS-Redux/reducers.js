const initState = {
    posts : [],
    amis : []
}
const reducepost = (state = initState , action) => {
    switch(action.type) {
        case 'ADD_POST' :
            return {
                ...state,
                posts:[...state.posts , action.payload]
            }
        case 'ADD_AMI':
            return {
                ...state,
                amis: [...state.amis, action.payload],
            };
    }
}