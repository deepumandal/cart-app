import React, { createContext, useEffect, useState } from 'react'

export const Servercontext = createContext()

export const Serverprovider =({children})=>{

const [database, setDatabase] = useState([])

useEffect(() => {
  fetch('http://localhost:8080/homepage')
  .then((r)=>r.json())
  .then((d)=>setDatabase(d))
 
}, [])



    return <Servercontext.Provider value={database} > {children} </Servercontext.Provider>
}