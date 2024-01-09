const inialstate = {
    recette : [{
        id : Date.now(),
        nom : 'Lasangnes Maison',
        ingredients :[
            {
                nom : 'Pates A Lasagnes',
                quantite : '250g',
            },
            {
                nom : 'Viande hachee',
                quantite : '500g',
            }
        ]
    },
]
}
const ReducerCC = (state = inialstate , action)=>{
    switch (action.type){
        case 'ADD_INGREDIENT':
            return {
                ...state,
                recette: state.recette.map((r) => {
                    if (r.id == action.payload.id) {
                        r.ingredients.push(action.payload.ingredient)
                    }
                    return r;
                })
            };
        case 'add_reccette':
            return {
                ...state,
                recette :[...state.recette , action.payload]
            }
        case 'modifier_rec':
            return {
                ...state,
                recette : state.recette.map((i)=>{
                    if(i.id == action.payload.id){
                        return {
                            ...state,
                            nom : action.payload.nom
                        }
                    }
                    return i
                })
            }
            case 'SUPPRIMER_INGREDIENT':
                return {
                    ...state,
                    recette: state.recette.map((r) => ({
                        ...r,
                        ingredients: r.ingredients.filter((i) => i.nom !== action.payload.nom)
                    }))
                };
                case 'SUPPRIMER_RECETTE':
                    return {
                        ...state,
                        recette : state.recette.filter((i)=>i.id != action.payload)
                    }
                
        default :
            return state
    }
}
export default ReducerCC;