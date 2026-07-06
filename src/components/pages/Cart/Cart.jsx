import React, { useContext } from 'react'
import { DataContext } from '../../DataProvider/DataProvider'
import Layout from '../../layout/Layout'
import ProductCard from '../../product/ProductCard'
import CurrencyFormat from '../../currencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import classes from './cart.module.css'
import { Type } from '../../../utility/action.type'
function Cart() {
      const [{basket,user},dispatch] = useContext(DataContext)
const total=basket.reduce((amount,item)=>{
 return item.price*item.amount +amount
},0)
const increment=(item)=>{
dispatch({type:Type.ADD_TO_BASKET,
item:item})
}
const decrement=(id)=>{
  dispatch({type:Type.REMOVE_FROM_BASKET,
  id:id})
}
  return (
    <Layout>
<section className={classes.container}>
  <div className={classes.cart_container}>
    <h2>Hello</h2>
    <h3>Your Shopping Cart</h3>
    <hr/>
    {
      basket?.length==0?(<p>Oops! No item in your cart</p>):(basket?.map((item,i)=>{

return <section className={classes.cart_product}>
  <ProductCard products={item}
flex={true}
desc={true}
  addCart={false}
  key={i}
/>
<div className={classes.cart_button}>
  <button onClick={()=>increment(item)} className={classes.btn}>+</button>
  <span>{item.amount}</span>
  <button onClick={()=>decrement(item.id)} className={classes.btn}>-</button>
</div>
</section>
      }))
    }
  </div>
  {
    basket?.length!==0&&(
      <div className={classes.subtotal}>
        <div>
          <p>Subtotal({basket?.length} items)</p>
          <CurrencyFormat amount={total}/>
        </div>
        <span>
          <input type='checkbox'/>
          <small>This order contains a gift </small>
        </span>
        <Link to="/payments">continue to checkout</Link>
      </div>
    )
  }
</section>
    </Layout>
  )
}

export default Cart