import Article from "../../components/article/article.component";
import {
  Article4Item,
  Article4Label,
  Article4Text,
  Article4TextContainer,
  Article4Title,
  Author,
} from "./Article4.component.styles";
import React from "react";

const Article4 = () => (
  <Article
    columnGap={0}
    rowGap={0}
    columns={1}
    rows={1}
    headerColor="var(--orange)"
    headerText="1 full width article"
  >
    <Article4Item>
      <Article4Label>Long read</Article4Label>
      <Article4TextContainer>
        <Article4Title>Meals on wheels: best in the UAE</Article4Title>
        <Article4Text>
          Louvre Abu Dhabi marks 4th anniversary with world class exhibition
          Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
          programming for all
        </Article4Text>
        <Author>A. R. Oliver</Author>
      </Article4TextContainer>
    </Article4Item>
  </Article>
);

export default Article4;
