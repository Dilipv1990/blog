import React from "react";
import Article from "../../components/article/article.component";
import {
  Article6Img,
  DarkLabel,
  DarkSubText,
  DarkText,
  ImgContainer,
  ImgLabel,
  LightLabel,
  LightSubText,
  LightText,
  TextItem,
} from "./Article6.component.styles";
import ArticleImg from "../../../public/images/article6.svg";

const Article6 = () => {
  return (
    <Article
      columnGap={0}
      rowGap={0}
      columns={3}
      rows={1}
      headerColor="var(--pink)"
      headerText="1 row: 2 stories with bg"
      background
    >
      <TextItem>
        <DarkLabel>Half full</DarkLabel>
        <DarkText>
          Louvre Abu Dhabi marks 4th anniversary with world class exhibition
          Louvre Abu Dhabi marks 4th
        </DarkText>
        <DarkSubText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          odio vel.
        </DarkSubText>
      </TextItem>
      <ImgContainer>
        <ArticleImg />
        <ImgLabel>One story, two perspectives</ImgLabel>
      </ImgContainer>
      <TextItem>
        <LightLabel>Half full</LightLabel>
        <LightText>
          Louvre Abu Dhabi marks 4th anniversary with world class exhibition
          Louvre Abu Dhabi marks 4th
        </LightText>
        <LightSubText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          odio vel.
        </LightSubText>
      </TextItem>
    </Article>
  );
};

export default Article6;
