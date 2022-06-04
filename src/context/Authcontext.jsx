import React, { useContext } from 'react'
 
export const Authcontext = useContext()

export const Authprovider = ({children}) =>{

    return <Authcontext.Provider> {children} </Authcontext.Provider>
}