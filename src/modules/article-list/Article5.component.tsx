import Article from "../../components/article/article.component";
import Label from "../../components/label";
import {
  Article5Item,
  Article5Text,
  Article5TextContainer,
  Author,
} from "./Article5.component.styles";
import React from "react";

const Article5 = () => (
  <Article
    columnGap={0}
    rowGap={0}
    columns={3}
    rows={1}
    headerColor="var(--yellow)"
    headerText="1 row: 2 x 1 inverted"
  >
    <Article5Item>
      <img src="/images/article5_1.jpeg" />
      <Article5TextContainer>
        <Label>OPEN HOUSE</Label>
        <Article5Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          odio vel.
        </Article5Text>
        <Author>U. R. Oliver</Author>
      </Article5TextContainer>
    </Article5Item>
    <Article5Item>
      <Article5TextContainer>
        <Label>OPEN HOUSE</Label>
        <Article5Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          odio vel.
        </Article5Text>
        <Author>U. R. Oliver</Author>
      </Article5TextContainer>
      <img src="/images/article5_2.jpeg" />
    </Article5Item>
    <Article5Item>
      <img src="/images/article5_3.jpeg" />
      <Article5TextContainer>
        <Label>OPEN HOUSE</Label>
        <Article5Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          odio vel.
        </Article5Text>
        <Author>U. R. Oliver</Author>
      </Article5TextContainer>
    </Article5Item>
  </Article>
);

export default Article5;
