import Label from "../../components/label";
import {
  Author,
  Column,
  Container,
  Item,
  ItemImg,
  ItemMainImg,
  ItemText,
  ItemTextContainer,
  ItemTextMain,
  ItemTitleMain,
} from "./NewsList.component.styles";
import React from "react";

const NewsList = () => {
  return (
    <Container>
      <Column>
        <Item>
          <ItemTextContainer>
            <Label>Travel</Label>
            <ItemTitleMain>
              Louvre Abu Dhabi marks 4th anniversary with world class
              exhibitions, programming for all
            </ItemTitleMain>
            <ItemTextMain>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in odio vel risus dignissim interdum.
            </ItemTextMain>
            <Author>U. R. Oliver</Author>
          </ItemTextContainer>
          <ItemMainImg src="/images/news1.jpeg" />
        </Item>
      </Column>
      <Column>
        <Item>
          <Label>Dine</Label>
          <ItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            in odio vel.
          </ItemText>
          <Author>U. R. Oliver</Author>
        </Item>

        <Item>
          <Label>Dine</Label>
          <ItemText>
            Phasellus in odio vel risus dignissim interdum. Sed vulputate
            pretium lobortis.
          </ItemText>
          <Author>U. R. Oliver</Author>
        </Item>
        <Item>
          <ItemImg src="/images/news2.jpeg" />
          <Label>Open House</Label>
          <ItemText>Meals on wheels best food trucks in the UAE</ItemText>
          <Author>U. R. Oliver</Author>
        </Item>
      </Column>

      <Column>
        <Item>
          <ItemImg src="/images/news3.jpeg" />
          <Label>OPEN HOUSE</Label>
          <ItemText>
            UAE: CBSE Term 1 exams begin tomorrow; important guidelines
            announced
          </ItemText>
          <Author>U. R. Oliver</Author>
        </Item>
        <Item>
          <Label>Dine</Label>
          <ItemText>
            World Expo in Dubai: MP delegation holds discussion over film city
            and institute
          </ItemText>
          <Author>U. R. Oliver</Author>
        </Item>
        <Item>
          <Label>Dine</Label>
          <ItemText>Meals on wheels best food trucks in the UAE</ItemText>
          <Author>U. R. Oliver</Author>
        </Item>
      </Column>
    </Container>
  );
};

export default NewsList;
