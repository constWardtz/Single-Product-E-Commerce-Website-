import React from "react";

import { FooterContainer, LineOne, LineTwo } from "./style";

const FooterSection = () => {
  return (
    <FooterContainer>
      <LineOne>
        <ul>
          <li>
            <h1> About JGP</h1>
          </li>
          <li>
            <a href="#">About Jennifer Crochet Works</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
        <ul>
          <li>
            <h1>Social Media</h1>
          </li>
          <li>
            <i className="fa fa-facebook"></i>
            <a href="#">Facebook</a>
          </li>
          <li>
            <i className="fa fa-twitter"></i>
            <a href="#">Twitter</a>
          </li>
          <li>
            <i className="fa fa-instagram"></i>
            <a href="#">Instagram</a>
          </li>
        </ul>
        <ul>
          <li>
            <h1>Help & FAQs</h1>
          </li>
          <li>
            <a href="">Shipping</a>
          </li>
          <li>
            <li>
              <a href="">Billing</a>
            </li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <h1>LOGO</h1>
          </li>
        </ul>
      </LineOne>

      <LineTwo>
        <p>Dasmariñas Cavite Baranngay Sta. Lucia Area 1 Blk 100 Lot 100 </p>
        <p>© {new Date().getFullYear()} Jennifer GP’s Crochet Works</p>
      </LineTwo>
    </FooterContainer>
  );
};

export default FooterSection;
