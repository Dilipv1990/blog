import React, { ReactNode } from "react";
import {
  ArticleContainer,
  ArticleHeader,
  Container,
} from "./Article.component.styles";

interface ArticleProps {
  background?: boolean;
  rows: number;
  columns: number;
  rowGap: number;
  columnGap: number;
  headerColor: string;
  headerText: string;
  children: ReactNode;
  padding?: string;
}

const Article = ({
  headerColor,
  children,
  headerText,
  ...props
}: ArticleProps) => (
  <Container>
    <ArticleHeader color={headerColor}>{headerText}</ArticleHeader>
    <ArticleContainer {...props}>{children}</ArticleContainer>
  </Container>
);

export default Article;
