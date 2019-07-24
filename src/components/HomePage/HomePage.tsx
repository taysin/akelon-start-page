import React from "react";
import AppBar from "../AppBar";
import { Typography, Container, } from "@material-ui/core";

export default () => (
  <>
    <AppBar />
    <Container fixed>
      <Typography component="h1">Добро пожаловать!</Typography>
    </Container>
  </>
);
