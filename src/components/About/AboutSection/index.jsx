import React from "react";

import {
  ImageContainer,
  TextContainer,
  AboutContainer,
  Content,
} from "./style";

import { AboutData } from "./Data";

const AboutSection = () => {
  return (
    <AboutContainer>
      <Content>
        <ImageContainer>
          <img src={AboutData.image} alt="AdminPicture" />
        </ImageContainer>

        <TextContainer>
          <div>
            <h1>{AboutData.name}</h1>
            <div></div>
          </div>
          <div>
            <p>{AboutData.message}</p>
          </div>

          <div>
            <a
              href={AboutData.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href={AboutData.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href={AboutData.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </TextContainer>
      </Content>
    </AboutContainer>
  );
};

export default AboutSection;
