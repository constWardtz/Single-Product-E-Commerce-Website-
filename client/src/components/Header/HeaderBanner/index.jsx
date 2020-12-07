import React from "react";
import Banner from "../../../assets/images/MainBanner.jpg";

import { BannerContainer } from "./style";

const HeaderBanner = () => {
  return (
    <>
      <BannerContainer>
        <img src={Banner} alt="Banner" />
      </BannerContainer>
    </>
  );
};

export default HeaderBanner;
