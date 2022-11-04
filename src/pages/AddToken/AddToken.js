import React, { useState, useContext } from "react";
import {
  TitleButtonContainer,
  AddTextComponent,
  Button,
  FormContainer,
  Label,
  Input,
  SaveButtonContainer,
  ButtonSave,
} from "./styles";
import { useLocalStorage } from "../../resources/services/localStorage";
import { createToken } from "../../resources/services/token";
import { AppContent, AppContext } from "../../resources/context/AppContext";

function AddTokenPage() {
  const appContext = useContext(AppContext);
  const [tokenName, setTokenName] = useState("");
  const [balance, setBalance] = useState("");
  const { addOrUpdateToken } = useLocalStorage();

  const saveToken = () => {
    const isnum = /^\d+$/.test(balance);
    if (!isnum) {
      alert("Por favor, usar apenas dígitos no campo balance.");
      return;
    }
    const token = createToken(tokenName, balance);

    const success = addOrUpdateToken(token);
    if (!success) {
      alert("Nome de token já utilizado!");
    } else {
      alert("Token salvo com sucesso!");
      appContext.changeAppContent(AppContent.VIEW);
    }
  };

  return (
    <>
      <TitleButtonContainer>
        <AddTextComponent>Add Token</AddTextComponent>
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
            value={tokenName}
            onChange={(event) => {
              setTokenName(event.target.value);
            }}
          ></Input>
        </Label>
        <Label>
          Balance
          <Input
            type="text"
            required={true}
            value={balance}
            onChange={(event) => {
              setBalance(event.target.value);
            }}
          ></Input>
        </Label>
      </FormContainer>

      <SaveButtonContainer>
        <ButtonSave
          height="50px"
          disabled={!tokenName || !balance}
          onClick={() => saveToken()}
        >
          Save
        </ButtonSave>
      </SaveButtonContainer>
    </>
  );
}

export default AddTokenPage;
