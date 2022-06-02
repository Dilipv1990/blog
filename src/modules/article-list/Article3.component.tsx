import Article from "../../components/article/article.component";
import Label from "../../components/label";
import {
  Article3Item,
  Article3Text,
  Article3TextContainer,
  Author,
} from "./Article3.component.styles";
import React from "react";

const Article3 = () => (
  <Article
    columnGap={0}
    rowGap={0}
    columns={4}
    rows={0}
    headerColor="var(--green)"
    headerText="1 row: 4 with bg"
    background
  >
    <Article3Item>
      <img src="/images/article3_1.jpeg" />
      <Article3TextContainer>
        <Label>Omar Mukhtar</Label>
        <Article3Text>
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </Article3Text>
        <Author>U. R. Oliver</Author>
      </Article3TextContainer>
    </Article3Item>
    <Article3Item>
      <img src="/images/article3_2.jpeg" />
      <Article3TextContainer>
        <Label>Lil Larry</Label>
        <Article3Text>
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </Article3Text>
        <Author>U. R. Oliver</Author>
      </Article3TextContainer>
    </Article3Item>
    <Article3Item>
      <img src="/images/article3_3.jpeg" />
      <Article3TextContainer>
        <Label>Lubna Hamdan</Label>
        <Article3Text>
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </Article3Text>
        <Author>U. R. Oliver</Author>
      </Article3TextContainer>
    </Article3Item>
    <Article3Item>
      <img src="/images/article3_4.jpeg" />
      <Article3TextContainer>
        <Label>Shawn Jhon</Label>
        <Article3Text>
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </Article3Text>
        <Author>U. R. Oliver</Author>
      </Article3TextContainer>
    </Article3Item>
  </Article>
);

export default Article3;
