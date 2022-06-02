import React from "react";
import {
  Btn,
  Column,
  ColumnText,
  ColumnTitle,
  Container,
  EmailContainer,
  EmailText,
  FooterLinks,
  Link,
  Row,
} from "./Footer.component.styles";

const Footer = () => (
  <Container>
    <FooterLinks>
      <Column>
        <ColumnTitle>News</ColumnTitle>
        <ColumnText>Featured News</ColumnText>
        <ColumnText>Latest News</ColumnText>
      </Column>
      <Column>
        <ColumnTitle>Life</ColumnTitle>
        <ColumnText>Latest News</ColumnText>
        <ColumnText>Fashion</ColumnText>
        <ColumnText>Dining</ColumnText>
        <ColumnText>Recipes</ColumnText>
        <ColumnText>Art &amp; Culture</ColumnText>
        <ColumnText>Travel</ColumnText>
        <ColumnText>Motoring</ColumnText>
      </Column>
      <Column>
        <ColumnTitle>business</ColumnTitle>
        <ColumnText>Open House</ColumnText>
        <ColumnText>What does that even mean?</ColumnText>
        <ColumnText>Homegrown</ColumnText>
        <ColumnText>How do I...</ColumnText>
        <ColumnText>Bag off</ColumnText>
        <ColumnText>Where to spend it</ColumnText>
      </Column>
      <Column />
      <Column>
        <ColumnTitle>Subscribe</ColumnTitle>
        <ColumnText>
          Get fresh updates about the fashion, beauty, trends
        </ColumnText>
        <EmailContainer>
          <EmailText>Enter your email below</EmailText>
          <Btn>Submit</Btn>
        </EmailContainer>
      </Column>
    </FooterLinks>
    <Row>
      <Link>Magazine</Link>
      <Link>Contact</Link>
      <Link>About</Link>
      <Link>Press</Link>
      <Link>sitemap</Link>
      <Link>TS + CS</Link>
    </Row>
  </Container>
);

export default Footer;
