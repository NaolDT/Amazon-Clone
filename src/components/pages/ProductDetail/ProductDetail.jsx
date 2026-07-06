import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import classes from './productDetail.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../../Api/endPoint';
import ProductCard from '../../product/ProductCard';
import Loader from '../../loader/Loader';

function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true); 
  const [product, setProduct] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    setIsLoading(true);
    setError(null); 

    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setError("Failed to load product. Please try again.");
        setIsLoading(false);
      });
  }, [productId]); 

  
  if (error) {
    return <Layout><div className={classes.error}>{error}</div></Layout>;
  }

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
       
        <ProductCard key={product?.id} products={product}
        flex={true}
        desc={true}
        addCart={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetail;