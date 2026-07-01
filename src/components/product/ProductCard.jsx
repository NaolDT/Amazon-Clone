import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../currencyFormat/CurrencyFormat";
import classes from "./product.module.css";
function ProductCard({ products }) {
  const { title, price, image, rating } = products;

  return (
    <div className={classes.card_container}>
      <a href="">
        <img src={image} alt={title} />
      </a>

      <div>
        <p>{title}</p>

        

        <div className={classes.rating}>
          <Rating
            value={rating.rate}
            precision={0.1}
            readOnly
          />
          <small>{rating.count}</small>
        </div>
      </div>
      <div>
<CurrencyFormat amount={price}/>
      </div>
      <button className={classes.button}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;