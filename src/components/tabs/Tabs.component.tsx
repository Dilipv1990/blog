import { Container, TabText } from "./Tabs.component.styles";
import React from "react";

const Tabs = () => {
  return (
    <Container>
      <TabText>News</TabText>
      <TabText>Opinion</TabText>
      <TabText>Life</TabText>
      <TabText>Business</TabText>
      <TabText>Magzaine</TabText>
      <TabText>Newsletter</TabText>
    </Container>
  );
};

export default Tabs;
