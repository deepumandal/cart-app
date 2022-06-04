import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const [data, setData] = useState([])
  const news =useParams()

  useEffect(() => {
if(news['*']){
  setData(news['*'])
}else{
  
   setData(JSON.parse(news.item)) 
   console.log( JSON.parse(news.item))
}
    
  }, [])
  

if(news['*']){

  return   (
    
    <div>  <img src={news[`*`].substring(1)}/>
   </div>
   )
} else {
   return( <div> {data.map(e=>{
    return( <div key={e.id}> 
    {e.name} || {e.price}
    </div>)
  })}
  </div>)
}

  
  
}

export default Product