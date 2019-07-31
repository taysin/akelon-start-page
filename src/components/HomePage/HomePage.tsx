import React from "react";
import AppBar from "../AppBar";
import { useStore } from "./hooks";
import { Container } from "@material-ui/core";
import PageAssembler from "../PageAssembler";

export default () => {
  const store = useStore();

  return (
    <>
      <AppBar />
      <Container fixed>
        <PageAssembler store={store} />
      </Container>
    </>
  );
};
