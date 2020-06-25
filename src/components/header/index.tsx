import React from "react"
import { HeaderStyles } from "./styles"
import PersonIcon from "../../assets/images/icons/personIcon.svg"
import GithubIcon from "../../assets/images/icons/githubIcon.svg"
import LinkedinIcon from "../../assets/images/icons/linkedinIcon.svg"
import WppIcon from "../../assets/images/icons/whatsappIcon.svg"
import MailIcon from "../../assets/images/icons/mailIcon.svg"
import PicSizeLogo from "../../assets/images/picsizeLogo.png"

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <div className="contactHeader">
        <div className="containerContact">
          <div className="wrapperAuthor">
            <img src={PersonIcon} alt="Author" className="iconContact" />
            <p className="font-white">Davi M. Cecílio</p>
          </div>

          <div className="wrapperContact">
            <ul className="listMedia">
              <li>
                <a
                  href="https://github.com/DaviCecilio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GithubIcon} alt="Author" className="iconContact" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/davicecilio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={LinkedinIcon}
                    alt="Author"
                    className="iconContact"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5531993301290&text=Ol%C3%A1!%20Gostei%20do%20seu%20desempenho%20no%20teste"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={WppIcon} alt="Author" className="iconContact" />
                </a>
              </li>

              <li>
                <a
                  href="mailto:davim.cecilio@gmail.com?subject=Test-PicSize"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={MailIcon} alt="Author" className="iconContact" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="logoHeader">
        <img src={PicSizeLogo} alt="Logo - Picsize"/>
        <h1 className="titleLogo">Teste técnico</h1>
      </div>
    </HeaderStyles>
  )
}

export default Header
