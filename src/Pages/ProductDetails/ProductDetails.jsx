import React, { useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./ProductDetails.module.css";
import { productUrl } from "../../Api/endPoints.js";
import ProductCard from "../../Components/Product/ProductCard.jsx";
import Loader from "../../Components/Loader/Loader.jsx";

function ProductDetails() {
  const [product, setProduct] = useState({});
  // Loading Functionality Part Start
  const [isLoading, setIsLoading] = useState(false);
  // Loading Functionality Part Start
  const { productId } = useParams();
  console.log(productId)
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        // console.log(res)
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetails;
