import './App.css'
// import Landing from './components/pages/landing/Landing'
import Routing from './Routing'
import {useContext,useEffect} from 'react'
import { DataContext } from './components/DataProvider/DataProvider'
import { Type } from './utility/action.type'
import { auth } from './utility/firebase'
function App() {
  const [{user},dispatch]=useContext(DataContext);
useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
    if (authUser){
      console.log(authUser)
      dispatch({
        type:Type.SET_USER,
        user:authUser,
      })
    }
      else{
         dispatch({
        type:Type.SET_USER,
        user:null,
      })
       }
   })

}, [])

  return (
    <>
   <Routing/>
    </>
    
  )
}

export default App
