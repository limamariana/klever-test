import React, { useState } from "react";

export const AppContent = {
  VIEW: "view",
  EDIT: "edit",
  ADD: "add",
};
export const AppContext = React.createContext();

export const AppContentProvider = (props) => {
  const [displayedAppContent, setDisplayedAppContent] = useState(
    AppContent.VIEW
  );
  const [currentToken, setCurrentToken] = useState(null);

  const changeAppContent = (appContent, token = null) => {
    setCurrentToken(token);

    setDisplayedAppContent(appContent);
  };

  const contextData = {
    displayedAppContent,
    currentToken,
    changeAppContent,
  };

  return (
    <AppContext.Provider value={contextData}>
      {props.children}
    </AppContext.Provider>
  );
};
