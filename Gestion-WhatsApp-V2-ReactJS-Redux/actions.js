export const login=(log)=>({
    type:"LOGIN",
    payload:log
})

export const addcontact=(contact)=>({
    type:"ADD_CONTACT",
    payload:contact
})

export const deconnecter=()=>({
    type:"DECONNECTER",
    
})

export const conversation=(id)=>({
    type:"CONVERSATION",
    payload:id
    
})

export const envoyermsg=(msg)=>({
    type:"MSG",
    payload:msg
    
})
export const suprmsg=(id)=>({
    type:"supmsg",
    payload:id
}) 

export const like=(id)=>({
    type:"like",
    payload:id
})

export const dlike=(id)=>({
    type:"dlike",
    payload:id
})