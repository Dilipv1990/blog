import styled from "styled-components";

export const Article1Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 62px 0 56px 0;
  max-width: 216px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Article1Img = styled.img`
  height: 186px;
  width: 186px;
  border-radius: 50%;
`;

export const Article1Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
`;

export const Article2Row1 = styled.div`
  grid-column: 1/4;
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
`;
