import React, { useState, useEffect } from "react";
import "./card.css";
import { BrowserRouter as Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";

function Card() {
  const url = "http://localhost:7890/show";
  const [product, setProduuct] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduuct(response.data);
    });
  }, [url]);

  if (product) {
    return product.map((productin) => (
        <div id="box">
          <div>
            <img id="image" src={productin.image} alt="" />
          </div>

          <h5>{productin.name}</h5>
          <h5> &#8377; {productin.price}</h5>
        </div>
    ));
  } else {
    return <h1>no data</h1>;
  }
}

export default Card;

//   <li key={productin.id}>{productin.name}</li>
