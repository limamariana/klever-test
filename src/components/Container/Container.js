import React from "react";
import { ContainerComponent } from "./styles";

function ComponentContainer(props) {
  return <ContainerComponent>{props.children}</ContainerComponent>;
}

export default ComponentContainer;
