import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const [data, setData] = useState([])
  const {item} =useParams()
  useEffect(() => {
    setData(JSON.parse(item)) 
    console.log( JSON.parse(item))
    
  }, [])
 // console.log(data)


  return (
    <div>


{data.map(e=>{
  return( <div key={e.id}> 
  {e.name} || {e.price}
  </div>)
})}



    </div>
  )
}

export default Product