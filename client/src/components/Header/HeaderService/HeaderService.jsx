import React from "react";
import { HeaderServiceContainer, TextContainer } from "./style";

const HeaderService = () => {
  return (
    <HeaderServiceContainer>
      <div>
        <i className="fa fa-lock"></i>
        <TextContainer>
          <h1>High secured</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.e</p>
        </TextContainer>
      </div>
      <div>
        <i className="fa fa-clock"></i>
        <TextContainer>
          <h1>Fast delivery</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.e</p>
        </TextContainer>
      </div>
      <div>
        <i className="fa fa-money"></i>
        <TextContainer>
          <h1>Reasonable prices</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.e</p>
        </TextContainer>
      </div>
    </HeaderServiceContainer>
  );
};

export default HeaderService;
