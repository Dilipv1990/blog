import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 36px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const Item = styled.article`
  /* display: grid; */
`;

export const ItemTextContainer = styled.div`
  text-align: center;
  padding: 0 120px 0 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemTextMain = styled.p`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 20px;
`;

export const ItemText = styled.p`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  margin: 16px 0;
`;

export const ItemTitleMain = styled.p`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  margin: 15px 0 25px 0;
`;

export const ItemMainImg = styled.img`
  margin-top: 24px;
`;

export const ItemImg = styled.img`
  object-fit: cover;
  margin-bottom: 12px;
`;

export const Author = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;
