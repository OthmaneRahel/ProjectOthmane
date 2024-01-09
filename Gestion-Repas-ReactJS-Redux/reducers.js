const stateInitial ={
    listeRepas : [
        {
          id: 1,
          nom: 'Repas 1',
          prix: 15.99,
          details: {
            listeIngredients: ['Ingrédient 1', 'Ingrédient 2', 'Ingrédient 3'],
            calories: 500,
            allergenes: ['Noix', 'Gluten'],
            tempsPreparation: 30, // en minutes
            typeCuisine: 'Italienne',
          },
          commentaires: [
            {
              auteur: 'John Doe',
              texte: 'Très délicieux !',
              note: 4.5,
            },
            {
                auteur: 'Jane Doe',
                texte: 'J`adore !',
                note: 5,
            },
          ],
          promotions: [
            {
              libelle: 'Réduction de 10%',
              description: 'Valable jusqu\'au 31 décembre.',
              value:-30
            },
            // Ajoutez d'autres promotions au besoin
          ],
        },{
            id: 2,
            nom: 'Repas 2',
            prix: 15.99,
            details: {
              listeIngredients: ['Ingrédient 2', 'Ingrédient 3'],
              calories: 650,
              allergenes: ['Gluten'],
              tempsPreparation: 30, // en minutes
              typeCuisine: 'Française',
            },
            commentaires: [
              {
                  auteur: 'Jane Doe',
                  texte: 'J`adore !',
                  note: 5,
              },
            ],
            promotions: [
              {
                libelle: 'Réduction de 10%',
                description: 'Valable jusqu\'au 31 décembre.',
                value:-20
              },
              // Ajoutez d'autres promotions au besoin
            ],
          },{
            id: 3,
            nom: 'Repas 3',
            prix: 15.99,
            details: {
              listeIngredients: ['Ingrédient 1', 'Ingrédient 2'],
              calories: 500,
              allergenes: ['Gluten'],
              tempsPreparation: 35, // en minutes
              typeCuisine: 'Italienne',
            },
            commentaires: [
              {
                auteur: 'John Doe',
                  texte: 'C`est cool  !',
                  note: 3,
              },
            ],
            promotions: [
              {
                libelle: 'Réduction de 10%',
                description: 'Valable jusqu\'au 10 Janvier 2024.',
                value:-50
              },
              // Ajoutez d'autres promotions au besoin
            ],
          },
    ]
};
const rootReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case 'ADD_REPAS':
            return { 
                ...state, 
                listeRepas: [...state.listeRepas, action.payload] 
            };
        case 'DELETE_REPAS':
            return { 
                ...state, 
                listeRepas: state.listeRepas.filter((repas) => repas.id !== action.payload) 
            };
        case 'DELETE_COMMENT':
            return {
                ...state,
                listeRepas:state.listeRepas.map((r)=>{
                if(r.id==action.payload.idrepas)
                {
                    r.commentaires=r.commentaires.filter((c)=>c.auteur!=action.payload.auteur)
                }
            return r;  })
        }
        case 'ADD_COMMENT':
          return {
            ...state ,
            listeRepas : state.listeRepas.map((i)=>{
              if(i.id == action.payload.id){
                i.commentaires = i.commentaires.push(action.payload.comment)
              }
              return i;
            })
          }
        default:
            return state;
    }
  };
  
  export default rootReducer;