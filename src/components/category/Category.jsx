import React from 'react'
import {CategoryImage} from './categoryImageList'
import CategoryCard from './CategoryCard'
import classes from './category.module.css'
function Category() {
  return (
   <section className={classes.categoryContainer}>
    {
        CategoryImage.map((infos)=>(
           <CategoryCard data ={infos}/>
        ))
    }
   </section>
  )
}

export default Category