import React from "react";
import Banner from "../../assets/images/Banner.jpg";

import { BannerContainer } from "./style";

const HeaderBanner = () => {
  return (
    <>
      <BannerContainer>
        <img src={Banner} />
      </BannerContainer>
    </>
  );
};

export default HeaderBanner;
