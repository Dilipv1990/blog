import Header from "../../components/header";
import { Container } from "./Home.component.styles";
import React from "react";
import Tabs from "../../components/tabs";
import NewsList from "../../modules/news-list";
import ArticleList from "../../modules/article-list";
import Footer from "../../modules/footer";

interface HomeProps {
  switchTheme: () => void;
}

const Home = ({ switchTheme }: HomeProps) => {
  return (
    <Container>
      <Header switchTheme={switchTheme} />
      <Tabs />
      <NewsList />
      <ArticleList />
      <Footer />
    </Container>
  );
};

export default Home;
