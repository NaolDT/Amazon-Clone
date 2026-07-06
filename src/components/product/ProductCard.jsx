import React ,{useContext} from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../currencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../utility/action.type";

function ProductCard({ products,flex,desc,addCart }) {
  const { id, title, price, image, rating,description } = products;
const [state,dispatch] = useContext(DataContext)
const add_To_Cart=()=>{
  dispatch({
    type:Type.ADD_TO_BASKET,
    item:{id, title, price, image, rating,description}
  })
}
  return (
    <div className={`${classes.card_container} ${flex ? classes.product_flexed :''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <p>{title}</p>
        {desc&&<div style={{maxWidth:"750px"}}>{description}</div>}

        <div className={classes.rating}>
          <Rating
            value={rating?.rate ?? 0}    
            readOnly
          />
          <small>{rating?.count ?? 0}</small>  
        
      </div>
      <div className={classes.price}>
        <CurrencyFormat amount={price} />
      </div>
      {
      addCart &&<button className={classes.button} onClick={add_To_Cart}>
        Add to cart
      </button>
      }
      
      </div>
    </div>
  );
}

export default ProductCard;