import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./all.module.css";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let outcome = () => {
      fetch("http://localhost:8080/products")
        .then((r) => r.json())
        .then((d) => setData(d));
      console.log(data);
    };
    outcome();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.setposition}>
        <h3>Products category</h3>
      </div>

      {data.map((e) => {
        return (
          <div key={e.id}>
            <Link to={`:${e.id}/${JSON.stringify(e.items)}` }value={e.items}>
              {" "}
              {e.Catogory}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
