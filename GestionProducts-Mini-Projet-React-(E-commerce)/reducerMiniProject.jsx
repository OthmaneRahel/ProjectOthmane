const initialState = {
    products :[
        {
            idproduit : 1,
            imageProduit : 'AirPods.jpg',
            NomProduit : 'Airpods 2 pro ',
            prixProduit : '199 DH',
            quantite : 0 ,
        },
        {
            idproduit : 2,
            imageProduit : 'play.jpg',
            NomProduit : 'play Station 5',
            prixProduit : '5999 DH',
            quantite : 0 ,
        },
        {
            idproduit : 3,
            imageProduit : 'iphone.jpeg',
            NomProduit : 'iphone 15 pro max',
            prixProduit : '15699 DH',
            quantite : 0 ,
        },
        {
            idproduit : 4,
            imageProduit : 'macbook.jpeg',
            NomProduit : 'Mac book 2024',
            prixProduit : '7000 DH',
            quantite : 0 ,
        },
        {
            idproduit : 5,
            imageProduit : 'appelewatch.jpg',
            NomProduit : 'Apple watch Series 5 ',
            prixProduit : '8000 DH',
            quantite : 0 ,
        },
        {
            idproduit : 6,
            imageProduit : 'casque.jpg',
            NomProduit : 'Casque JBL',
            prixProduit : '599 DH',
            quantite : 0 ,
        }
    ],
    loginUtilisateur : [
        {
            idUser : 1,
            email : 'rahelothmane@gmail.com',
            password : 'othmane1234'
        },
        {
            idUser : 2,
            email : 'user2@gmail.com',
            password : 'user2'
        },
    ],
    userC : '',
    login : false ,
    Panier :[]
}
const ReducersMiniProjet = (state = initialState , action )=>{
    switch (action.type){
        case 'LOGIN_USER':
            const lg = state.loginUtilisateur.find((ele)=>ele.email === action.payload.email && ele.password === action.payload.password)
            if(lg){
                return {
                    ...state,
                    login : {
                        idUser : lg.idUser,
                        email : lg.email,
                        password : lg.password,
                    },
                    userC : lg
                }
            }else{
                return {
                    ...state,
                    login : false,
                }
            }
        case 'LOGOUT':
            return {
                ...state,
                userC : '',
                login : false
            }
        case 'AUGMENTER_QTE':
            return {
                ...state,
                products :state.products.map((i)=>{
                    if(i.idproduit == action.payload){
                        return {...i , quantite : i.quantite + 1}
                    }
                    return i
                })
            }
        case 'DEC_QTE':
            return {
                ...state,
                products : state.products.map((e)=>{
                    if(e.idproduit == action.payload){
                        return {...e , quantite : e.quantite - 1}
                    }
                    return e
                })
            }
        case 'ADD_ELE':
            return {
                ...state,
                Panier : [...state.Panier , action.payload]
            }
        case 'DELETE_PROD':
            return {
                ...state,
                Panier : state.Panier.filter((i)=>i.idproduit != action.payload)
            }
        case 'ADD_PRODUCT':
            return {
                ...state,
                products : [...state.products , action.payload]
            }
        default :
        return state
    }
}
export default ReducersMiniProjet;