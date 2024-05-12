export  const ajtVygU = (unique) =>({
    type : 'ADD_UNIQUE',
    payload : unique
})
export const ViderTab = () =>({
    type : 'VID_TAB',
})
export  const  AddHaj= (unique) =>({
    type : 'ADD_HAJ',
    payload : unique
})
export const ViderTabHaj = () =>({
    type : 'VID_TAB_HAJ',
})


//thunk axios :
    //Ajouter demande :
        export const AddD = (demande) =>({
            type : 'ADD_DEMANDE',
            payload : demande
        })
        export const AddError = (error) =>({
            type: 'ERROR_ADD',
            payload : error,
        })
    //Afficher Voyages :
        export const Afficher_Voyage = (voyage) =>({
            type : 'DISPLAY_VOYAGE',
            payload:voyage
        })
        export const Afficher_Voyage_error = (error) =>({
            type : 'DISPLAY_VOYAGE_EPROR',
            payload:error
        })
    //Afficher les Vols :
        export const Afficher_Vol = (vol) =>({
            type : 'DISPLAY_VOL',
            payload:vol
        })
        export const Afficher_Vol_error = (error) =>({
            type : 'DISPLAY_VOL_EPROR',
            payload:error
        })
    //Afficher Haj :
    export const Afficher_Haj = (haj) =>({
        type : 'DISPLAY_HAJ',
        payload:haj
    })
    export const Afficher_Haj_error = (error) =>({
        type : 'DISPLAY_HAJ_ERROR',
        payload:error
    })
        