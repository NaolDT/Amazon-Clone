import React,{useState,useEffect} from 'react'
import Layout from '../../layout/Layout'
import classes from './results.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../../Api/endPoint'
import ProductCard from '../../product/ProductCard'
import Product from '../../product/Product'

function Results() {
    const {categoryName}=useParams();

    const [results,setResults]=useState([]);
    useEffect(() => {
    
  axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res)=>{
setResults(res.data)
  })  
    
     
    }, [])
    
    
  
  return (
    
    <Layout>
<section>
  <h1 style={{padding:"30px"}}>Results</h1>
<p style={{padding:"30px"}}> Category/ {categoryName}</p>
<hr/>
<div className={classes.product_container}>
  {
  results.map((product) => (
    <ProductCard key={product.id} products={product}         addCart={true}
/>
  ))
  }
</div>
    </section>
      </Layout>
    
  )
}

export default Results