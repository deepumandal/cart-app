import React, { useEffect, useState } from "react";
import style from "./all.module.css";
const Signup = () => {
  const [sendid, setsendid] = useState([]);
  let handlechangeinput = (e) => {
    const { name, value } = e.target;
    setsendid( {...sendid,  [name]:value});
  };
  let handlesubmit =(e)=>{
      e.preventDefault()
    //   fetch('http://localhost:8080/userpass',{
    //     method: "POST",
    //         headers: {
    //           "content-type": "application/json",
    //         },
    //     body: JSON.stringify({...[sendid]})
    // })
    //   .then((r)=> r.json())
    //   .then((d)=>console.log(d))
  }
 
  
  return (
    <div className={style.container}>
      <div className={style.setposition}>
        <form action="">
          <h1>Signup</h1>
          <input
            type="text"
            onChange={handlechangeinput}
            name="name"
            placeholder=" Enter your name"
          />
          <input
            type="text"
            onChange={handlechangeinput}
            name="pass"
            placeholder=" Enter your pass"
          />
          <input type="submit" onClick={handlesubmit} id={style.submit} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
