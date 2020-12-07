import React from "react";

import {
  Navbar,
  HeaderBanner,
  ProductSectionHeading,
  PopularProducts,
  AboutSection,
  FooterSection,
} from "../../components";

import HeaderService from "../../components/Header/HeaderService/HeaderService";

import {
  HomePageSection,
  ProductPageSection,
  ProductSectionContainer,
  MarginTop,
  FooterSectionContainer,
} from "../style";

const LandingSection = () => {
  return (
    <>
      {/* Home Page Section */}
      <HomePageSection>
        <Navbar />
        <HeaderBanner />
        <HeaderService />
      </HomePageSection>

      <MarginTop margin="5rem" />

      {/* Product Section */}
      <ProductPageSection>
        {/* Popular products */}
        <ProductSectionHeading heading="Popular Products" showBtn={true} />
        <ProductSectionContainer>
          <PopularProducts />
          <PopularProducts />
          <PopularProducts />
          <PopularProducts />
        </ProductSectionContainer>

        <MarginTop />

        {/* Recommended products */}
        <ProductSectionHeading heading="Recommended Products" showBtn={false} />
        <ProductSectionContainer>
          <PopularProducts />
          <PopularProducts />
          <PopularProducts />
          <PopularProducts />
        </ProductSectionContainer>
      </ProductPageSection>

      <MarginTop margin="3rem" />

      {/* About Section */}
      <AboutSection />

      {/* Footer Section */}
      <FooterSectionContainer>
        <FooterSection />
      </FooterSectionContainer>
    </>
  );
};

export default LandingSection;
