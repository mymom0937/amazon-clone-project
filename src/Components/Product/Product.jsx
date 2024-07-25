import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader.jsx";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res)
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        // console.log(error);
        setIsLoading(false);
      });
  }, []);
  // console.log(products);

  return (
    <> 
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard
                product={singleProduct}
                key={singleProduct.id}
                renderAdd={true}
              />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;
