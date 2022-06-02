import React from "react";
import Article from "../../components/article/article.component";
import Label from "../../components/label";
import {
  Author,
  Item,
  ItemImg,
  ItemText,
  TextContainer,
} from "./Article8.component.styles";

const Article8 = () => (
  <Article
    columnGap={0}
    rowGap={44}
    columns={3}
    rows={2}
    headerColor="var(--orange)"
    headerText="1 row: 4 reviews"
  >
    <Item>
      <ItemImg src="/images/article8_1.jpeg" />
      <TextContainer>
        <Label>keto kebabs</Label>
        <ItemText>Meals on wheels best food trucks in the UAE</ItemText>
        <Author>U. R. Oliver</Author>
      </TextContainer>
    </Item>
    <Item>
      <ItemImg src="/images/article8_2.jpeg" />
      <TextContainer>
        <Label>italian deserts</Label>
        <ItemText>Meals on wheels best food trucks in the UAE</ItemText>
        <Author>U. R. Oliver</Author>
      </TextContainer>
    </Item>
    <Item>
      <ItemImg src="/images/article8_3.jpeg" />
      <TextContainer>
        <Label>japanese flavors</Label>
        <ItemText>Meals on wheels best food trucks in the UAE</ItemText>
        <Author>U. R. Oliver</Author>
      </TextContainer>
    </Item>
    <Item>
      <ItemImg src="/images/article8_4.jpeg" />
      <TextContainer>
        <Label>vegan meals</Label>
        <ItemText>Meals on wheels best food trucks in the UAE</ItemText>
        <Author>U. R. Oliver</Author>
      </TextContainer>
    </Item>
    <Item>
      <ItemImg src="/images/article8_5.jpeg" />
      <TextContainer>
        <Label>french pasta</Label>
        <ItemText>Meals on wheels best food trucks in the UAE</ItemText>
        <Author>U. R. Oliver</Author>
      </TextContainer>
    </Item>
    <Item>
      <ItemImg src="/images/article8_6.jpeg" />
      <TextContainer>
        <Label>korean bbq</Label>
        <ItemText>Meals on wheels best food trucks in the UAE</ItemText>
        <Author>U. R. Oliver</Author>
      </TextContainer>
    </Item>
  </Article>
);

export default Article8;
