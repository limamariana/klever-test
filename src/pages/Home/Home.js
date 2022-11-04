import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";

import {
  TokenAndBalanceText,
  Text,
  TokensText,
  InformationContainer,
  TextTokenAndBalance,
  DataContainer,
  Icon,
} from "./styles";
import { AppContent, AppContext } from "../../resources/context/AppContext";
import { useLocalStorage } from "../../resources/services/localStorage";

function HomePage() {
  const { getToken } = useLocalStorage();

  const infoList = [];
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      infoList.push(getToken(key));
    }
  }
  const appContext = useContext(AppContext);

  const formatToCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    })
      .format(amount)
      .replace("$", "");
  };

  return (
    <>
      <TokenAndBalanceText>
        <TokensText>Tokens</TokensText>
        <Text>Balance</Text>
      </TokenAndBalanceText>
      <InformationContainer>
        {infoList.map((item) => (
          <DataContainer>
            <TextTokenAndBalance>
              <Icon>
                <FaEdit
                  color="#ffffff"
                  fontSize={"20px"}
                  onClick={() => {
                    if (appContext) {
                      appContext.changeAppContent(AppContent.EDIT, item);
                    }
                  }}
                />
              </Icon>
              {item.tokenName}
            </TextTokenAndBalance>

            <TextTokenAndBalance>
              {formatToCurrency(item.balance)}
            </TextTokenAndBalance>
          </DataContainer>
        ))}
      </InformationContainer>
    </>
  );
}

export default HomePage;
