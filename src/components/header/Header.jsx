import React from 'react';
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css';
import LowerHeader from './LowerHeader';
function Header(){
return(
    <>
    <section>
        <div className={classes.header_container}>
            <div className={classes.logo_container}>
                <a href="#">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon logo"/>
                </a>
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
            <FaSearch /> 
        </div>
<div className={classes.order_container}>
   
        <a href="" className={classes.language}>  
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/250px-Flag_of_the_United_States_%28Pantone%29.svg.png" alt="american flag"/>
        <select>
            <option value="">En</option>
        </select>
        </a>   
    
    <a href=''>
        
   
        <p>Sign in</p>
        <span>Account & Lists</span>
        
    </a>
<a  href="">
    <p>returns</p>
    <span>& Orders</span>
</a>
<a href="" className={classes.cart}>
<BiCart size={35} />
    <span>0</span>
</a>
</div>
 
 </div>
    </section>
    <LowerHeader/>
    </>
);
}
export default Header;
