import React from "react";
import style from "./all.module.css";
const Login = () => {
  let handlechangeinput =(e)=>{
    const {} = e.target
    
  }
  return (
    <div className={style.container}>
      <div className={style.setposition}>
        <form action="">
          <h1>Login</h1>
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
          <input type="submit" id={style.submit} />
        </form>
      </div>
    </div>
  );
};

export default Login;
