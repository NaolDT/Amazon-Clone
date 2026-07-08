import React from 'react'
import { Routes, Route, redirect } from 'react-router-dom'
import Landing from './components/pages/landing/Landing'
import Auth from './components/pages/Auth/Auth'
import Payments from './components/pages/Payment/Payment'
import Orders from './components/pages/Order/Order'
import Cart from './components/pages/Cart/Cart'
import Results from './components/pages/Results/Results'
import ProductDetail from './components/pages/ProductDetail/ProductDetail'
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'
const stripePromise=loadStripe("pk_test_51TqApvQ6T5M95eSKkmzm5C8LyJIEnTAgCuT1Gyf6BeW3fBzpPMrisY0ejcreCvq7awnMamo8L02tqlY3FkKGXDir00pLML7flD")
function Routing() {
  return (
    
        <Routes>
<Route path="/" element={<Landing/>}/>
<Route path='/auth' element={<Auth/>}/>
<Route path='/payments' element={
<ProtectedRoute msg={"you must login to pay " }redirect={"/payments"}>
<Elements stripe={stripePromise} >
    <Payments/>
    </Elements>
    </ProtectedRoute>
  }/>
<Route path='/orders' element={
<ProtectedRoute msg={"you must login to access order " }redirect={"/Orders"}>

    <Orders/>

    </ProtectedRoute>  }/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/category/:categoryName' element={<Results/>}/>
<Route path='/products/:productId' element={<ProductDetail/>}/>
        </Routes>
    
  )
}

export default Routing
