import styled from "styled-components";

export const Item = styled.article`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 280px;
  padding: 46px 0 84px 0;
`;

export const ImgContainer = styled.div`
  position: relative;
`;

export const ImgLabel = styled.div`
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textBg};
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;

  text-transform: uppercase;
  padding: 6px 14px;
  width: fit-content;

  position: absolute;
  bottom: 0;
  left: 0;
`;

export const ItemText = styled.p`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
`;

export const Author = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;
