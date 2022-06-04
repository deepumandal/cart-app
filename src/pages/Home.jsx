import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './all.module.css'

const Home = () => {

  const [images, setimages] = useState([{}])

  useEffect(() => {
    fetch('http://localhost:8080/homepage')
    .then((r)=>r.json())
    .then((d)=>{setimages(d.images)
    }
    )
  }, [])
  
  console.log(images[0])
  // const database = useContext(database)
// console.log(database)
//problem comming here

let data = []

console.log()




  return (
<div className={style.container}>
  <div className={style.setposition}>

<div className={style.grid}>

{images.map((e,i)=>{
  return <Link to={`product/${JSON.stringify(e.img)}`} key={e.i}> <img src={e.img} alt="" /> </Link>

})}

</div>




</div>
</div>
    
  )
}

export default Home