import React from "react";
/* Components */
import { PrimaryButton } from "../../Buttons";

/* Style */
import { HeadingContainer, ButtonContainer } from "./style";

/* Data */
import { popularProducts } from "./Data";

const ProductSectionHeading = ({ heading, showBtn }) => {
  return (
    <>
      <HeadingContainer>
        <div>
          <h1>{heading}</h1>
          <span></span>
        </div>
        <ButtonContainer showBtn={showBtn}>
          <PrimaryButton>{popularProducts.button}</PrimaryButton>
        </ButtonContainer>
      </HeadingContainer>
    </>
  );
};

export default ProductSectionHeading;
