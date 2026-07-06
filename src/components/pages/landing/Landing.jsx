import React from 'react'
import CarouselEffect from '../../carousel/CarouselEffect'
import Category from '../../category/Category'
import Product from '../../product/Product'
import Layout from '../../layout/Layout'
function Landing() {
  return (
    <Layout>
    <CarouselEffect/>
    <Category/>
    <Product/>
    </Layout>
  )
}

export default Landing