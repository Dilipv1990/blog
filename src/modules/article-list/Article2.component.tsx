import Article from "../../components/article/article.component";
import Label from "../../components/label";
import { Article2Row1 } from "./Article1.component.styles";
import {
  Article2Header,
  Article2Text,
  Author,
  Article2Item,
  Article2Row2Text,
} from "./Article2.component.styles";
import React from "react";

const Article2 = () => (
  <Article
    columnGap={0}
    rowGap={50}
    columns={3}
    rows={0}
    headerColor="var(--pink)"
    headerText="2 rows: 1 x 3"
  >
    <Article2Row1>
      <img src="/images/article2_1.jpeg" />
      <div>
        <Label>Travel</Label>
        <Article2Header>
          Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
          programming for all
        </Article2Header>
        <Article2Text>
          Exhin imlave asfear asfasas afsfeaarsa asfasfasf asfasfa ten cultable
          doice inverum
        </Article2Text>
        <Author>Cvita Doleschall</Author>
      </div>
    </Article2Row1>
    <Article2Item>
      <img src="/images/article2_2.jpeg" />
      <div>
        <Label>Culture</Label>
        <Article2Row2Text>
          Meals on wheels best food trucks in the UAE
        </Article2Row2Text>
        <Author>U. R. Oliver</Author>
      </div>
    </Article2Item>
    <Article2Item>
      <img src="/images/article2_3.jpeg" />
      <div>
        <Label>Culture</Label>
        <Article2Row2Text>
          Meals on wheels best food trucks in the UAE
        </Article2Row2Text>
        <Author>U. R. Oliver</Author>
      </div>
    </Article2Item>
    <Article2Item>
      <img src="/images/article2_4.jpeg" />
      <div>
        <Label>Culture</Label>
        <Article2Row2Text>
          Meals on wheels best food trucks in the UAE
        </Article2Row2Text>
        <Author>U. R. Oliver</Author>
      </div>
    </Article2Item>
  </Article>
);

export default Article2;
