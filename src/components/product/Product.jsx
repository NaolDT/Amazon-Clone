import React, { useState,useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './product.module.css'
function Product() {
    const [products, setProduct] = useState([])
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
setProduct(res.data)
    }).catch((err)=>{
        console.log(err)
    })
    
    //   return () => {
        
    //   }
    }, [])
    
  return (
<section className={classes.product_container}>
{
    products.map((singleProduct)=>{

return <ProductCard products={singleProduct} key={singleProduct.id}   addCart={true}/>
    })
}
</section>  
)
}

export default Product