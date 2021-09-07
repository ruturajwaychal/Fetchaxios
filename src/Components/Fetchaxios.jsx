import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Fetchaxios.css";

const FetchAxios = () => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((resp) => {
      setProduct(resp.data);
    });
  }, []);

  if (!product) {
    return null;
  }
  return (
    <>
      <div className="container">
        <center>
          <div className="main-div">
            <h3>PRODUCTS</h3>
            {product.map((item) => {
              return (
                <div className="prod">
                  <h3>{item.title}</h3>
                  <p className="category">
                    <span className="cate">Category - </span>
                    {item.category}
                  </p>
                  <img src={item.image} alt="" />
                  <div className="prodInfo">
                    <span className="desc"> Description :</span>{" "}
                    {item.description}
                  </div>
                  <div className="price">
                    <h4>Price : $ {item.price} </h4>
                  </div>
                  <div className="classic"></div>
                </div>
              );
            })}
          </div>
        </center>
      </div>
    </>
  );
};

export default FetchAxios;
