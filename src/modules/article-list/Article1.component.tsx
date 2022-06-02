import Article from "../../components/article/article.component";
import React from "react";
import {
  Article1Img,
  Article1Item,
  Article1Text,
} from "./Article1.component.styles";
import Label from "../../components/label";

const Article1 = () => (
  <Article
    columnGap={0}
    rowGap={0}
    columns={5}
    rows={1}
    headerColor="var(--yellow)"
    headerText="1 row: 5 circles with bg"
    background
    padding="0 112px"
  >
    <Article1Item>
      <Article1Img src="/images/profile1.jpeg" />
      <Label>Vladimir Putin</Label>
      <Article1Text>Meals on wheels best in the UAE</Article1Text>
    </Article1Item>
    <Article1Item>
      <Article1Img src="/images/profile2.jpeg" />
      <Label>Vladimir Putin</Label>
      <Article1Text>Meals on wheels best in the UAE</Article1Text>
    </Article1Item>
    <Article1Item>
      <Article1Img src="/images/profile3.jpeg" />
      <Label>Vladimir Putin</Label>
      <Article1Text>Meals on wheels best in the UAE</Article1Text>
    </Article1Item>
    <Article1Item>
      <Article1Img src="/images/profile4.jpeg" />
      <Label>Vladimir Putin</Label>
      <Article1Text>Meals on wheels best in the UAE</Article1Text>
    </Article1Item>
    <Article1Item>
      <Article1Img src="/images/profile5.jpeg" />
      <Label>Vladimir Putin</Label>
      <Article1Text>Meals on wheels best in the UAE</Article1Text>
    </Article1Item>
  </Article>
);

export default Article1;
