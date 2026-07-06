import React from 'react'
import classes from './category.module.css'
import { Link } from 'react-router-dom'
function CategoryCard({data}) {
    const {title,imgLink}=data;
  return (
    
    <div className={classes.category}>
        <Link  to={`/category/${data.name}`}>
            <span>
                <h2>{title}</h2>
            </span>
            <img src={imgLink} alt="categories"/>
            <p>shop now</p>
        </Link>
    </div>
  )
}

export default CategoryCard