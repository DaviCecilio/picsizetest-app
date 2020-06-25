import React from "react"
import { FooterStyle } from "./styles"
import LogoPersonal from "../../assets/images/logoWhite.png"

const Footer: React.FC  = () => (
  <FooterStyle>
    <img
      src={LogoPersonal}
      alt="Logo - Davi Cecílio"
      className="logoPersonal"
    />
    <p className="font-white">
      A finalidade deste é para testar as capacidades técnicas.
    </p>
  </FooterStyle>
)

export default Footer
