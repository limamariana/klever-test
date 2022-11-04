import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { AppContent, AppContext } from "../../resources/context/AppContext";
import {
  HeaderDetailsContainer,
  MenuContainer,
  ImgTitleContainer,
  TitleComponent,
  Button,
  HeaderContainer,
} from "./styles";
import shootingStar from "../../assets/shooting-star.svg";

function Header() {
  const appContext = useContext(AppContext);
  return (
    <HeaderContainer>
      <HeaderDetailsContainer>
        <img
          src={logo}
          alt="Logomarca da Klever"
          width="255px"
          height="60px"
        ></img>
      </HeaderDetailsContainer>
      <MenuContainer>
        <ImgTitleContainer>
          <img src={shootingStar} width="58px" height="57px" color="#d8e63a" />
          <TitleComponent>Wish Wallet</TitleComponent>
        </ImgTitleContainer>
        {appContext.displayedAppContent === AppContent.VIEW && (
          <Button
            height="50px"
            onClick={() => {
              if (appContext) {
                appContext.changeAppContent(AppContent.ADD);
              }
            }}
          >
            Add Token
          </Button>
        )}
      </MenuContainer>
    </HeaderContainer>
  );
}

export default Header;
