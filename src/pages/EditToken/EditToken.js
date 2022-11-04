import React, { useState, useContext } from "react";

import {
  TitleButtonContainer,
  AddTextComponent,
  Button,
  FormContainer,
  Label,
  Input,
  SaveAndDeleteButtonContainer,
  ButtonSave,
  ButtonDelete,
} from "./styles";
import { AppContent, AppContext } from "../../resources/context/AppContext";
import { useLocalStorage } from "../../resources/services/localStorage";

function EditTokenPage() {
  const appContext = useContext(AppContext);

  const [tokenName, setTokenName] = useState(appContext.currentToken.tokenName);
  const [balance, setBalance] = useState(appContext.currentToken.balance);
  const { addOrUpdateToken, removeToken } = useLocalStorage();

  const updateInfo = () => {
    const isnum = /^\d+$/.test(balance);
    if (!isnum) {
      alert("Por favor, usar apenas dígitos no campo balance.");
      return;
    }
    const token = appContext.currentToken;
    token.tokenName = tokenName;
    token.balance = balance;
    const success = addOrUpdateToken(token);
    if (!success) {
      alert("Nome de token já utilizado!");
    } else {
      alert("Token alterado com sucesso!");
      appContext.changeAppContent(AppContent.VIEW);
    }
  };

  const deleteToken = () => {
    const question = window.confirm("Deseja excluir o token?");
    if (question === true) {
      removeToken(appContext.currentToken.id);
      appContext.changeAppContent(AppContent.VIEW);
    } else {
      appContext.changeAppContent(AppContent.VIEW);
    }
  };

  return (
    <>
      <TitleButtonContainer>
        <AddTextComponent>Edit Token</AddTextComponent>
        <Button
          height="50px"
          onClick={() => {
            if (appContext) {
              appContext.changeAppContent(AppContent.VIEW);
            }
          }}
        >
          Voltar
        </Button>
      </TitleButtonContainer>

      <FormContainer>
        <Label>
          Token
          <Input
            type="text"
            required={true}
            onChange={(event) => {
              setTokenName(event.target.value);
            }}
            defaultValue={appContext.currentToken.tokenName}
          ></Input>
        </Label>
        <Label>
          Balance
          <Input
            type="text"
            required={true}
            onChange={(event) => {
              setBalance(event.target.value);
            }}
            defaultValue={appContext.currentToken.balance}
          ></Input>
        </Label>
      </FormContainer>

      <SaveAndDeleteButtonContainer>
        <ButtonDelete height="50px" onClick={() => deleteToken()}>
          Remove
        </ButtonDelete>
        <ButtonSave
          height="50px"
          disabled={
            (appContext.currentToken.tokenName === tokenName &&
              appContext.currentToken.balance === balance) ||
            tokenName === "" ||
            balance === ""
          }
          onClick={() => updateInfo()}
        >
          Save
        </ButtonSave>
      </SaveAndDeleteButtonContainer>
    </>
  );
}

export default EditTokenPage;
