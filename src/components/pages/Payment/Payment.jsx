import React, { useContext ,useState} from 'react'
import Layout from '../../layout/Layout'
import classes from './payment.module.css'
import { DataContext } from '../../DataProvider/DataProvider'
import ProductCard from '../../product/ProductCard';
import {  useStripe, useElements ,CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../currencyFormat/CurrencyFormat';
import { axiosInstance } from '../../../Api/axios';
import { ClipLoader } from 'react-spinners'
import { db } from '../../../utility/firebase';
import { useNavigate,useLocation} from 'react-router-dom';
import { Type } from '../../../utility/action.type';
function Payment() {
  const [{basket,user},dispatch]=useContext(DataContext);
  const[cardError,setCardError]=useState(null);
  const[processing,setProcessing]=useState(false);
  // console.log(user)
      const totalItem=basket?.reduce((amount,item)=>{
        return item.amount+amount
    },0)
    const total=basket.reduce((amount,item)=>{
 return item.price*item.amount +amount
},0)
    const stripe = useStripe();
  const elements = useElements();
  const navigate =useNavigate();
  const handleError =(e)=>{
console.log(e)
e?.error?.message ? setCardError(e?.error?.message):setCardError("")
  }
  const handlePayment=async(e)=>{
e.preventDefault();
try{
  setProcessing(true)
  const response=await axiosInstance({
    method:"POST",
    url:`/payment/create?total=${total*100}`,
  });
  // console.log(response.data)
  const clientSecret=response.data?.clientSecret;
  const {paymentIntent}=await stripe.confirmCardPayment(
    clientSecret,
    {
payment_method:{
  card:elements.getElement(CardElement)

}

    }
  )
  await db
  .collection("users")
  .doc(user.uid)
  .collection("orders")
  .doc(paymentIntent.id)
  .set({
    basket:basket,
    amount:paymentIntent.amount,
    created:paymentIntent.created,
  });
  dispatch({type: Type.EMPTY_BASKET})
  setProcessing(false);
navigate("/orders",{state:{msg:"you have placed new order"}})

}catch(error) {
  console.error("Payment request failed:", error);
    setProcessing(false);

}
  }
  return (
    <Layout>
      {/* header */}
    <div className={classes.paymentHeader}>CheckOut {totalItem} items</div>
    {/* payment method */}

    <section className={classes.payment}>
      {/* address */}
      <div className={classes.flex}>
        <h3>Delivery Address</h3>
        <div>
          <div>{user?.email}</div>
          <div>123 React Lane</div>
          <div>Chicago,IL</div>
        </div>
      </div>
      <hr/>
      {/* products */}
      <div className={classes.flex}>
        <h3>Review items and delivery</h3>
        <div>
        {
          basket?.map((item)=><ProductCard products={item} flex={true}/>)
        }
        </div>
      </div>
      <hr />
      {/* card form */}
      <div className={classes.flex}>
        <h3>Payment Method</h3>
        <div className={classes.payment_card_container}>
<div className={classes.paymentDetail}>
<form onSubmit={handlePayment}>
  {cardError&&<small>{cardError}</small>}
  <CardElement onChange={handleError}/>
  <div className={classes.payment__price}>
  <div>
    <span id='total' style={{display:'flex', gap:"10px"}}><p>Total Order</p> | <CurrencyFormat amount={total}/></span>
  </div>
<button type='submit' >{processing?(<div className={classes.loading}><ClipLoader size={15}/><p>please wait...</p></div>):"Pay Now"}</button>
  </div>
</form>
</div>
        </div>
      </div>
    </section>
    </Layout>
  )
}


export default Payment