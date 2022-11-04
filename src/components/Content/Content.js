import React from "react";
import { useContext } from "react";
import { AppContent, AppContext } from "../../resources/context/AppContext";
import EditTokenPage from "../../pages/EditToken/EditToken";
import HomePage from "../../pages/Home/Home";
import AddTokenPage from "../../pages/AddToken/AddToken";

export const Content = () => {
  const appContext = useContext(AppContext);

  return (
    <>
      {appContext?.displayedAppContent === AppContent.ADD && <AddTokenPage />}
      {appContext?.displayedAppContent === AppContent.EDIT && <EditTokenPage />}
      {appContext?.displayedAppContent === AppContent.VIEW && <HomePage />}
    </>
  );
};
