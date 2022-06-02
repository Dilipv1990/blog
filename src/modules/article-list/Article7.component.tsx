import React from "react";
import Article from "../../components/article/article.component";
import Label from "../../components/label";
import {
  Author,
  ImgContainer,
  ImgLabel,
  Item,
  ItemText,
} from "./Article7.component.styles";

const Article7 = () => {
  return (
    <Article
      columnGap={0}
      rowGap={0}
      columns={4}
      rows={1}
      headerColor="var(--green)"
      headerText="1 row: 4 reviews"
      background
    >
      <Item>
        <ImgContainer>
          <img src="/images/article7_1.jpeg" />
          <ImgLabel>&#9733;&nbsp;&nbsp;4.4</ImgLabel>
        </ImgContainer>
        <Label>Eat</Label>
        <ItemText>
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </ItemText>
        <Author>U. R. Oliver</Author>
      </Item>
      <Item>
        <ImgContainer>
          <img src="/images/article7_2.jpeg" />
          <ImgLabel>&#9733;&nbsp;&nbsp;4.4</ImgLabel>
        </ImgContainer>
        <Label>Eat</Label>
        <ItemText>
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </ItemText>
        <Author>U. R. Oliver</Author>
      </Item>
      <Item>
        <ImgContainer>
          <img src="/images/article7_3.jpeg" />
          <ImgLabel>&#9733;&nbsp;&nbsp;4.4</ImgLabel>
        </ImgContainer>
        <Label>Eat</Label>
        <ItemText>
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </ItemText>
        <Author>U. R. Oliver</Author>
      </Item>
      <Item>
        <ImgContainer>
          <img src="/images/article7_4.jpeg" />
          <ImgLabel>&#9733;&nbsp;&nbsp;4.4</ImgLabel>
        </ImgContainer>
        <Label>Eat</Label>
        <ItemText>
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </ItemText>
        <Author>U. R. Oliver</Author>
      </Item>
    </Article>
  );
};

export default Article7;
