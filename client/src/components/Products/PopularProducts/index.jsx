import React from "react";

/* Data */
import { productData } from "./Data";
import {
  ImageContainer,
  ProductContainer,
  FirstLine,
  SecondLine,
} from "./style";

import { PrimaryButton } from "../../Buttons";

const PopularProducts = () => {
  return (
    <>
      <ProductContainer>
        <ImageContainer>
          <img src={productData.image} alt="Product" />
        </ImageContainer>
        <div>
          <FirstLine>
            <h1>{productData.name}</h1>
            <p>{productData.description}</p>
          </FirstLine>
          <SecondLine>
            <ul>
              <p>₱{productData.price}</p>
              <img src={productData.rate} alt="rate" />
            </ul>

            <ul>
              <PrimaryButton>Add to Cart</PrimaryButton>
            </ul>
          </SecondLine>
        </div>
      </ProductContainer>
    </>
  );
};

export default PopularProducts;
