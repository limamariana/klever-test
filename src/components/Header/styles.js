import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 670px;
`;
export const HeaderDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  widht: 100%;
  height: 222px;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ImgTitleContainer = styled.div`
  display: flex;
  width: 300px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleComponent = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: #ffffff;
  width: 234px;
  height: 57px;
`;

export const Button = styled.button`
  color: #ffffff;
  background-color: #aa33b5;
  font-size: 12px;
  font-weight: bold;
  font-family: Montserrat;
  padding: 10px 20px;
  width: 120px;
  border-radius: 8px;
  align-text: center;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;
