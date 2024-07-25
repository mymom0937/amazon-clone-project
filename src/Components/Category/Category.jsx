import React from 'react'
import { categoryInfos } from "./categoryFullInfo.js";
import CategoryCard from "./CategoryCard.jsx";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>

      {categoryInfos.map((infos) => {
        return <CategoryCard data={infos} />;
      })}
      
    </section>
  );
}

export default Category
