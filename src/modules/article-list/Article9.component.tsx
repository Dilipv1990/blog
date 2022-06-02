import React from "react";
import Article from "../../components/article/article.component";
import Label from "../../components/label";
import {
  Author,
  ImgOverlay,
  Item,
  ItemImg,
  ItemImgContainer,
  ItemText,
  TextContainer,
} from "./Article9.component.styles";

const Article9 = () => (
  <Article
    columnGap={0}
    rowGap={0}
    columns={3}
    rows={1}
    headerColor="var(--pink)"
    headerText="1 row: 3 video"
  >
    <Item>
      <ItemImgContainer>
        <ItemImg src="/images/article9_1.jpeg" />
        <ImgOverlay />
      </ItemImgContainer>
      <TextContainer>
        <Label>Eat</Label>
        <ItemText>
          Meals on wheels: Meals on wheels: best in the UAE best
        </ItemText>
        <Author>U. R. Oliver</Author>
      </TextContainer>
    </Item>
    <Item>
      <ItemImgContainer>
        <ItemImg src="/images/article9_2.jpeg" />
        <ImgOverlay />
      </ItemImgContainer>
      <TextContainer>
        <Label>Eat</Label>
        <ItemText>
          Meals on wheels: Meals on wheels: best in the UAE best
        </ItemText>
        <Author>U. R. Oliver</Author>
      </TextContainer>
    </Item>
    <Item>
      <ItemImgContainer>
        <ItemImg src="/images/article9_3.jpeg" />
        <ImgOverlay />
      </ItemImgContainer>
      <TextContainer>
        <Label>Eat</Label>
        <ItemText>
          Meals on wheels: Meals on wheels: best in the UAE best
        </ItemText>
        <Author>U. R. Oliver</Author>
      </TextContainer>
    </Item>
  </Article>
);

export default Article9;
