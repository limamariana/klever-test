import styled from "styled-components";

export const TokenAndBalanceText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  height: 30px;
`;

export const Text = styled.h4`
  color: #ffffff;
  font-weight: bold;
`;

export const TokensText = styled(Text)`
  margin-left: 40px;
`;
export const InformationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 45px;
  margin-bottom: 10px;
`;
export const TextTokenAndBalance = styled(Text)`
  font-size: 25px;
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;
