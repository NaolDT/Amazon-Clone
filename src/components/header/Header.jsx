import React, { useContext } from 'react';
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css';
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../utility/firebase';
function Header(){
    const [{basket,user},dispatch] = useContext(DataContext)
    const totalItem=basket?.reduce((amount,item)=>{
        return item.amount+amount
    },0)
return(
    <>
    <section className={classes.fixed}>
        <div className={classes.header_container}>
            <div className={classes.logo_container}>
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon logo"/>
                </Link>
<div className={classes.delivery}>          
  <span> 
<SlLocationPin /> 
            </span>
            <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
            </div>
            </div>
        </div>
        <div className={classes.search}>
            <select name="" id="">
                <option value="all">All</option>     
            </select>
            <input type="text" placeholder='Search Product' />
            <FaSearch size={38}/> 
        </div>
<div className={classes.order_container}>
   
        <Link to="" className={classes.language}>  
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/250px-Flag_of_the_United_States_%28Pantone%29.svg.png" alt="american flag"/>
        <select>
            <option value="">En</option>
        </select>
        </Link>   
    
    <Link to={!user &&"/auth"} className={classes.signin}>
        
   {user?(
 <>
    <p>Hello,{user?.email?.split("@")[0]}</p>
    <span onClick={()=>auth.signOut()}>Sign Out</span>
    </>
    )
    :(  <><p>Hello,Sign in</p></>)}

        {/* <span>Account & Lists</span> */}
        
    </Link>
<Link to="/orders">
    <p>returns</p>
    <span>& Orders</span>
</Link>
<Link to="/cart" className={classes.cart}>
<BiCart size={35} />
    <span>{totalItem}</span>
</Link>
</div>
 
 </div>
    </section>
    <LowerHeader/>
    </>
);
}
export default Header;
