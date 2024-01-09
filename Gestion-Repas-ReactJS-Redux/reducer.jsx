const initialState = {
    listeRepas : [
        {
            id: 1,
            nom: 'Repas 1',
            prix: 15.99,
            details: {
              listeIngredients: ['Ingrédient 1', 'Ingrédient 2', 'Ingrédient 3'],
              calories: 500,
              allergenes: ['Noix', 'Gluten'],
              tempsPreparation: 30,
              typeCuisine: 'Italienne',
            },
            commentaires: [
              {
                auteur: 'John Doe',
                texte: 'Très délicieux !',
                note: 4.5,
              },
            ],
            promotions: [
              {
                libelle: 'Réduction de 10%',
                description: 'Valable jusqu\'au 31 décembre.',
                value:-30
              },
            ],
          }
    ]}
const  RepasReducer = (state=initialState,action) => {
    switch(action.type) {
        case 'deleteRepas' : 
        return {...state,
                listeRepas:state.listeRepas.filter((r)=>r.id!=action.payload)};
        case 'deleteComment' : 
        return {...state,
                listeRepas:state.listeRepas.map((r)=>{
                    if(r.id==action.payload.idR) {
                        r.commentaires=r.commentaires.filter(c=>c.auteur!=action.payload.auteur)
                    } return r
                })};
        case 'PlusNote' : 
        return {...state,
                listeRepas:state.listeRepas.map((r)=>{
                    if(r.id==action.payload.idR) {
                        r.commentaires.map((c)=>{
                            if(c.auteur==action.payload.auteur) {
                                c.note=c.note+0.5
                            }
                        })
                    } return r
                })};
        case 'addRepas' : 
            return {...state,
                    listeRepas:[...state.listeRepas,action.payload]};
        case 'addPromo' : 
            return {...state,
                            listeRepas:state.listeRepas.map((r)=>{
                                if(r.id==action.payload.id) {
                                    r.promotions.push(action.payload.promo)
                                } return r
                            })};
        case 'addIngred' : 
        return {...state,
                            listeRepas:state.listeRepas.map((r)=>{
                                if(r.id==action.payload.id) {
                                    r.details.listeIngredients.push(action.payload.i)
                                } return r
                            })};
        case 'addComment' : 
        return {...state,
            listeRepas:state.listeRepas.map((r)=>{
                if(r.id==action.payload.id) {
                    r.commentaires.push(action.payload.comment)
                } return r
            })};
        default : 
            return state
    }
    
}
export default RepasReducer