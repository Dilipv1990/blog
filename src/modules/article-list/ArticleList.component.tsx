import React from "react";
import { Container } from "./ArticleList.component.styles";
import Article1 from "./Article1.component";
import Article2 from "./Article2.component";
import Article3 from "./Article3.component";
import Article4 from "./Article4.component";
import Article5 from "./Article5.component";
import Article6 from "./Article6.component";
import Article7 from "./Article7.component";
import Article8 from "./Article8.component";
import Article9 from "./Article9.component";

const ArticleList = () => {
  return (
    <Container>
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <Article5 />
      <Article6 />
      <Article7 />
      <Article8 />
      <Article9 />
    </Container>
  );
};

export default ArticleList;
