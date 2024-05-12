const initialState = {
    // voyages : [
    //     {
    //         id : 1 , 
    //         imageVille : 'dubai.jpg',
    //         nomVille : 'Dubai',
    //         prixVoyage : '7990',
    //         date_depart : '20/02/2024',
    //         date_arrive : '28/02/2024',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_Voyage_Prix_inclus : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                         '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                         '- Transferts aéroport/hôtel/aéroport',
    //         ],
    //         description_V_Pas_inclut :['-Frais de visa : 1280 Dhs/personne (assurance incluse)',
    //                 '- Autres prestations non mentionné',
    //                 '- Pack des Excurions : (City tour+ticket burj khalifa+diner croisiere) : 1770 dh/personne',
                            
    //         ],              
    //         RevervationDispo:[
    //             {
    //                 idR:'A1',
    //                 AgenceVyg:'airMaroc1.png',
    //                 Date_Debut_Vyg : '01-01-2024',
    //                 Date_Fin_Vyg:'10-01-2024',
    //                 FormuleDescr:'Hôtel 4**** : régime Petit déjeuner (Package) 8 jours/7 nuits + VolA/R+ Transfert Aeroport',
    //                 prixVyg:'8990'
    //             },
    //             {
    //                 idR : 'A2',
    //                 AgenceVyg:'airMaroc1.png',
    //                 Date_Debut_Vyg : '01-01-2024',
    //                 Date_Fin_Vyg:'10-01-2024',
    //                 FormuleDescr:'Hôtel 4**** : régime Petit déjeuner (Package) 8 jours/7 nuits + VolA/R+ Transfert Aeroport',
    //                 prixVyg:'8990'
    //             },
    //             {
    //                 idR:'A3',
    //                 AgenceVyg:'airMaroc1.png',
    //                 Date_Debut_Vyg : '01-01-2024',
    //                 Date_Fin_Vyg:'10-01-2024',
    //                 FormuleDescr:'Hôtel 4**** : régime Petit déjeuner (Package) 8 jours/7 nuits + VolA/R+ Transfert Aeroport',
    //                 prixVyg:'8990'
    //             },
    //             {
    //                 idR:'A4',
    //                 AgenceVyg:'airMaroc1.png',
    //                 Date_Debut_Vyg : '01-01-2024',
    //                 Date_Fin_Vyg:'10-01-2024',
    //                 FormuleDescr:'Hôtel 4**** : régime Petit déjeuner (Package) 8 jours/7 nuits + VolA/R+ Transfert Aeroport',
    //                 prixVyg:'8990'
    //             },
    //             {
    //                 idR:'A5',
    //                 AgenceVyg:'airMaroc1.png',
    //                 Date_Debut_Vyg : '01-01-2024',
    //                 Date_Fin_Vyg:'10-01-2024',
    //                 FormuleDescr:'Hôtel 4**** : régime Petit déjeuner (Package) 8 jours/7 nuits + VolA/R+ Transfert Aeroport',
    //                 prixVyg:'8990'
    //             },
    //         ]
            
    //     },{
    //         id : 2 , 
    //         imageVille : 'malaisie.jpeg',
    //         nomVille : 'Malaisie',
    //         prixVoyage : '11900',
    //         date_depart : '28-02-2024',
    //         date_arrive : '15-03-2024',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'- Vols Aller - Retour Casablanca - Kualalumpur avec EMIRATES ou Qatar Airways / - 10 nuits hôtel metro hotel bukit bintang 3* ou similaire en petit déjeuner / - Transferts: Aéroport - Hôtel - Aéropor',
    //         description_Voyage_Prix_inclus : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                         '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                         '- Transferts aéroport/hôtel/aéroport',
    //         ],
    //         description_V_Pas_inclut :['-Frais de visa : 1280 Dhs/personne (assurance incluse)',
    //                 '- Autres prestations non mentionné',
    //                 '- Pack des Excurions : (City tour+ticket burj khalifa+diner croisiere) : 1770 dh/personne',
                            
    //         ],
    //         RevervationDispo:[
    //             {
    //                 idR:'A1444',
    //                 AgenceVyg:'Emarat.png',
    //                 Date_Debut_Vyg:'24-02-2024',
    //                 Date_Fin_Vyg:' 07-03-2024',
    //                 FormuleDescr:'Hôtel 3* : régime Petit déjeuner (Package) 13 jours/12 nuits + VolA/R+ Transfert Aeroport',
    //                 prixVyg:'14500'
    //             },{
    //                 idR:'A12',
    //                 AgenceVyg:'Emarat.png',
    //                 Date_Debut_Vyg:'24-02-2024',
    //                 Date_Fin_Vyg:' 07-03-2024',
    //                 FormuleDescr:'Hôtel 3* : régime Petit déjeuner (Package) 13 jours/12 nuits + VolA/R+ Transfert Aeroport',
    //                 prixVyg:'14500'
    //             },{
    //                 AgenceVyg:'Emarat.png',
    //                 Date_Debut_Vyg:'24-02-2024',
    //                 Date_Fin_Vyg:' 07-03-2024',
    //                 FormuleDescr:'Hôtel 3* : régime Petit déjeuner (Package) 13 jours/12 nuits + VolA/R+ Transfert Aeroport',
    //                 prixVyg:'14500'
    //             },{
    //                 AgenceVyg:'Emarat.png',
    //                 Date_Debut_Vyg:'24-02-2024',
    //                 Date_Fin_Vyg:' 07-03-2024',
    //                 FormuleDescr:'Hôtel 3* : régime Petit déjeuner (Package) 13 jours/12 nuits + VolA/R+ Transfert Aeroport',
    //                 prixVyg:'14500'
    //             },{
    //                 AgenceVyg:'Emarat.png',
    //                 Date_Debut_Vyg:'24-02-2024',
    //                 Date_Fin_Vyg:' 07-03-2024',
    //                 FormuleDescr:'Hôtel 3* : régime Petit déjeuner (Package) 13 jours/12 nuits + VolA/R+ Transfert Aeroport',
    //                 prixVyg:'14500'
    //             }
    //         ]
    //     },
    //     {
    //         id : 3 , 
    //         imageVille : 'turkish.jpg',
    //         nomVille : 'Turkish',
    //         prixVoyage : '6999',
    //         date_depart : '03-03-2024',
    //         date_arrive : '15-03-2024',
    //         description_V :'',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },
    //     {
    //         id : 4 , 
    //         imageVille : 'canada.jpg',
    //         nomVille : 'Canada',
    //         prixVoyage : '9999',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },
    //     {
    //         id : 5 , 
    //         imageVille : 'france.jpg',
    //         nomVille : 'France',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },{
    //         id : 6 , 
    //         imageVille : 'china.jpg',
    //         nomVille : 'China',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },{
    //         id : 7 , 
    //         imageVille : 'holanda.jpg',
    //         nomVille : 'hollande',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },{
    //         id : 8 , 
    //         imageVille : 'america.jpg',
    //         nomVille : 'America',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },{
    //         id : 9 , 
    //         imageVille : 'Espagna.jpg',
    //         nomVille : 'Espagne',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
            
    //     },{
    //         id : 10 , 
    //         imageVille : 'Thailande.jpg',
    //         nomVille : 'Thailand',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },{
    //         id : 11 , 
    //         imageVille : 'Tunis.jpg',
    //         nomVille : 'Tunisie',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },{
    //         id : 12 , 
    //         imageVille : 'Portugal.jpg',
    //         nomVille : 'Portugal',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },{
    //         id : 13 , 
    //         imageVille : 'oman.jpg',
    //         nomVille : 'Oman',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },
    //     {
    //         id : 14 , 
    //         imageVille : 'moscou.jpg',
    //         nomVille : 'Moscou',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },{
    //         id : 15 , 
    //         imageVille : 'london.jpg',
    //         nomVille : 'London',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },
    //     {
    //         id : 16 , 
    //         imageVille : 'italy.jpg',
    //         nomVille : 'Italia',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V :'',
    //         RevervationDispo:[
    //             {
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },
    //     {
    //         id : 17 , 
    //         imageVille : 'india.jpg',
    //         nomVille : 'India',
    //         prixVoyage : '',
    //         date_depart : '',
    //         date_arrive : '',
    //         description_Voyage_Prix_inclus : ['- Vol Aller/Retour Casablanca/Dubai avec la RAM ou Emirates',
    //                             '- 7 nuits en Hôtel 4* avec petit déjeuner',
    //                             '- Transferts aéroport/hôtel/aéroport',
    //                         ],
    //         description_V_Pas_inclut :['-Frais de visa : 1280 Dhs/personne (assurance incluse)',
    //         '- Autres prestations non mentionné',
    //         '- Pack des Excurions : (City tour+ticket burj khalifa+diner croisiere) : 1770 dh/personne',
                                
    //         ],
    //         RevervationDispo:[
    //             {
    //                 idR:'q1',
    //                 AgenceVyg:'',
    //                 Date_Debut_Vyg : '',
    //                 Date_Fin_Vyg:'',
    //                 FormuleDescr:'',
    //                 prixVyg:''
    //             }
    //         ]
    //     },
    // ],
    voyages:[],
    // Haj : [
    //     {
    //         id : 1 , 
    //         imageVille : 'haj1.jpg',
    //         nomVille : 'عمرة شعبان',
    //         prixVoyage : '14 990 ',
    //         time: "من 15 فبراير إلى 04 مارس 2024"
    //     },{
    //         id : 2 , 
    //         imageVille : 'haj3.jpg',
    //         nomVille : 'عمرة رمضان',
    //         prixVoyage : ' 18 900 ',
    //         time:"من 11 مارس إلى 24 ابريل 2024"
    //     },
    //     {
    //         id : 3 , 
    //         imageVille : 'haj2.jpg',
    //         nomVille : 'دبي عمرة',
    //         prixVoyage : '17 900',
    //         time:"لمدة 12 أيام / 11 ليالي"
    //     },
    //     {
    //         id : 4 , 
    //         imageVille : 'haj4.jpg',
    //         nomVille : 'اسطنبول عمرة',
    //         prixVoyage : '24 400',
    //         time:"لمدة 12 أيام / 11 ليالي"
    //     },
    // ],
    Haj:[],
    contact : [],
    vols:[],
    clients:[],
    error : false
}
const ReducerVoyage = (state = initialState , action)=>{
    switch (action.type){
        case 'ADD_HAJ':
            return {
                ...state,
                hajUnq : [...state.hajUnq , action.payload]
            }
        case 'ADD_DEMANDE':
            return {
                ...state,
                contact : [...state.contact , action.payload]
            }
        case 'ADD_CLIENT':
            return {
                ...state,
                clients : [...state.clients , action.payload]
            }
        case 'DISPLAY_VOYAGE_EPROR':
        case 'DISPLAY_VOL_EPROR':
        case 'DISPLAY_HAJ_ERROR':
        case 'ERROR_ADD':
            return {
                ...state,
                error : action.payload
            }
        case 'DISPLAY_VOYAGE':
            return {
                ...state,
                voyages: action.payload,
            }
        case 'DISPLAY_VOL':
            return {
                ...state,
                vols: action.payload,
            }
        case 'DISPLAY_HAJ':
            return {
                ...state,
                Haj: action.payload,
            }
        default :
            return state
    }
    
}
export default ReducerVoyage;