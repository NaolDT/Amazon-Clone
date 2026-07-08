import React ,{useEffect,useState,useContext }from 'react'
import Layout from '../../layout/Layout'
import { db } from '../../../utility/firebase'
import { DataContext } from '../../DataProvider/DataProvider'
import classes from './order.module.css'
import { data } from 'react-router-dom'
import ProductCard from '../../product/ProductCard'



function Order() {
  const [{user},dispatch]=useContext(DataContext);
  const [orders,setOrders]=useState([]);
useEffect(() => {
if(user){
  db.collection("users").doc(user.uid).collection("orders").orderBy("created","desc").onSnapshot((snapShot)=>{
    console.log(snapShot)
    setOrders(snapShot.docs.map((doc)=>({
      id:doc.id,
     data : doc.data()
    })))
  })
} 
else{
  setOrders([])
} 

}, [])

  return (
    <Layout>
<section className={classes.container}>
  <div className={classes.order_container}>
    <h2>your orders</h2>
    <div>
      {/* ordered items */}
      {
        orders?.length==0&& <div>You have no order yet</div> 
      }
{
  orders?.map((eachOrder,i)=>{
return(
  <div key={i}>
    <hr/>
    <p>Order ID: {eachOrder?.id}</p>
{
eachOrder?.data?.basket?.map((order)=>{
  return(
  <ProductCard products={order} flex={true} key={order.id}/>)
})
}  
</div>
)
  })
}
    </div>
  </div>
</section>
    </Layout>
  )
}

export default Order