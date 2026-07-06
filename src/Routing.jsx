import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/pages/landing/Landing'
import Auth from './components/pages/Auth/Auth'
import Payment from './components/pages/Payment/Payment'
import Order from './components/pages/Order/Order'
import Cart from './components/pages/Cart/Cart'
import Results from './components/pages/Results/Results'
import ProductDetail from './components/pages/ProductDetail/ProductDetail'

function Routing() {
  return (
    
        <Routes>
<Route path="/" element={<Landing/>}/>
<Route path='/auth' element={<Auth/>}/>
<Route path='/payment' element={<Payment/>}/>
<Route path='/order' element={<Order/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/category/:categoryName' element={<Results/>}/>
<Route path='/products/:productId' element={<ProductDetail/>}/>
        </Routes>
    
  )
}

export default Routing
