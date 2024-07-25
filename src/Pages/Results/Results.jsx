import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import LayOut from "../../Components/LayOut/LayOut.jsx";
import axios from 'axios';
import { productUrl } from "../../Api/endPoints.js";
import classes from "./Results.module.css";
import ProductCard from '../../Components/Product/ProductCard.jsx';
import Loader from "../../Components/Loader/Loader.jsx";

function Results() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  // console.log(categoryName)

  useEffect(() => {
      axios.get(`${productUrl}/products/category/${categoryName}`)
        .then((res) => {
          setResults(res.data);
          setIsLoading(false);
        }).catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
},[])
  
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results </h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        {isLoading?(<Loader />) : (<div className={classes.products_container}>
            {results?.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  renderDesc={false}
                  renderAdd={true}
                />
              );
            })}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results
