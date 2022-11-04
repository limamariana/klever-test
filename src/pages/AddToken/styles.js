import styled from "styled-components";

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

export const TitleButtonContainer = styled.div`
  display: flex;
  width: 430px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddTextComponent = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  margin-left: 70px;
  width: 104px;
  height: 17px;
`;

export const Button = styled.button`
  color: #ffffff;
  background-color: #656565;
  font-size: 12px;
  font-weight: bold;
  font-family: Montserrat;
  padding: 10px 20px;
  width: 100px;
  border: none;
  border-radius: 8px;
  align-text: center;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 20px;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid;
  padding: 10px 15px;
  margin: 8px 0;
  font-size: 14px;
  border-radius: 4px;
  width: 160%;
`;

export const SaveButtonContainer = styled.div`
  display: flex;
  width: 430px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonSave = styled.button`
  color: #ffffff;
  background-color: #aa33b5;
  font-size: 12px;
  font-weight: bold;
  font-family: Montserrat;
  padding: 10px 20px;
  width: 100px;
  border: none;
  border-radius: 8px;
  align-text: center;
  margin-top: 27px;
  cursor: pointer;

  :disabled {
    background-color: #656565;
    cursor: auto;
  }
`;
