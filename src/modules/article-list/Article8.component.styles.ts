import styled from "styled-components";

export const Author = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ItemImg = styled.img`
  max-width: 116px;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ItemText = styled.p`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 127%;
  margin: 10px 0 16px 0;
`;
