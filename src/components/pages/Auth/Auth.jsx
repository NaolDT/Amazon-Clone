import React, { useState,useContext } from 'react'
import classes from './auth.module.css'
import { Link,Navigate, useNavigate,useLocation } from 'react-router-dom'
import { auth } from '../../../utility/firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import { DataContext } from '../../DataProvider/DataProvider'
import { Type } from '../../../utility/action.type'
import { ClipLoader } from 'react-spinners'

function Auth() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [loading,setLoading]=useState({
    signIn:false,
    signUp:false
  })
  const [{user},dispatch]=useContext(DataContext)
  const navStateData=useLocation();
  const navigate=useNavigate();
  // console.log(user)
  const authHandler=async(e)=>{
    e.preventDefault();
    // console.log(e.target.name)
    if(e.target.name==="signIn"){
      setLoading({...loading,signIn:true})
      signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
// console.log(userInfo)
dispatch({
  type:Type.SET_USER,
user:userInfo.user
})
setLoading({...loading,signIn:false})
navigate(navStateData?.state?.redirect || "/")
      }).catch((err)=>{
setError(err.message)  
setLoading({...loading,signIn:false})

})

    }else{
            setLoading({...loading,signUp:true})

      createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
// console.log(userInfo)
dispatch({
  type:Type.SET_USER,
user:userInfo.user
})
            setLoading({...loading,signUp:false})
navigate(navStateData?.state?.redirect || "/");

      }).catch((err)=>{
setError(err.message)   
            setLoading({...loading,signUp:false})

})

    }
  }

  // console.log(email,password)
  return (
  
<section className={classes.login}>
 <Link to={"/"}>
 <img src="data:image/png;base64,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" alt="Amazon logo"/>
 
 </Link>
 <div className={classes.login_container}>
  <h1>Sign-In</h1>
  {navStateData?.state?.msg && <small style={{color:"red",padding:"5px",textAlign:"center", fontWeight:"bold"}}>{navStateData?.state?.msg}</small>}
  <form action="">
    <label htmlFor='email'>E-mail</label>
    <input type="email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <label htmlFor='password'>Password</label>
    <input type="password" id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button type='submit' name='signIn' onClick={authHandler} className={classes.btn} >{loading.signIn ?(<ClipLoader color='black' size={15}/> ):("Sign-In")}</button>
    <p>By signing-in you agree to Amazon fake clone Terms and Conditions of use and sale.Please see our privacy Notice.Our cookie Notice and and our interest-based Aids Notice</p>
  <button type='submit' name='signUp' onClick={authHandler} className={classes.btn2}>{loading.signUp ?(<ClipLoader color='black' size={15}/> ):("Create your Amazon Account")}</button>
  
    {error&& <small style={{color:"red",paddingTop:"6px"}}>{error}</small>}
 
  </form>
 </div>
</section>
  )

}

export default Auth