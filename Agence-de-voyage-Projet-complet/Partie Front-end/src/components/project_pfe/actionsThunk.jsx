import axios from "axios";
import { AddD , AddError , Afficher_Vol, Afficher_Vol_error, Afficher_Voyage, Afficher_Voyage_error , Afficher_Haj , Afficher_Haj_error} from "./actions";
export const AddDemande = (demande) =>{
    return async (dispatch)=>{
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/Ajouter-demande',demande)
            dispatch(AddD(response.data))
        }catch (error){
            dispatch(AddError(error.message))
        } 
    }
}
export const AfficherVoyage = () =>{
    return async (dispatch)=>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/AfficherListVoyages')
            dispatch(Afficher_Voyage(response.data))
        } catch (error) {
            dispatch(Afficher_Voyage_error(error.message))
        }
    }
}

export const AfficherVol = () =>{
    return async (dispatch)=>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/AfficherListVol')
            dispatch(Afficher_Vol(response.data))
        } catch (error) {
            dispatch(Afficher_Vol_error(error.message))
        }
    }
}

export const AfficheHaj = () =>{
    return async (dispatch)=>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/hajomraa')
            dispatch(Afficher_Haj(response.data))
        } catch (error) {
            dispatch(Afficher_Haj_error(error.message))
        }
    }
}