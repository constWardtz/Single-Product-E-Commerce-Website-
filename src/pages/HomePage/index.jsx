import React from "react";

import { Navbar, HeaderBanner } from "../../components";

import { HomePageContainer } from "../style";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Navbar />
      <HeaderBanner />
    </HomePageContainer>
  );
};

export default HomePage;
