import styled from "styled-components";

export const TextItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 424px;
  justify-content: flex-end;
`;

export const DarkLabel = styled.p`
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textBg};
  padding: 4px 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 34px;
  width: fit-content;
`;

export const LightLabel = styled.p`
  border: 1px solid ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textColor};
  padding: 4px 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 34px;
  width: fit-content;
`;

export const DarkText = styled.p`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 127%;
  margin-bottom: 24px;
`;

export const DarkSubText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
`;

export const LightText = styled.p`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 127%;
  opacity: 0.2;
  margin-bottom: 24px;
`;

export const LightSubText = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 130%;
  opacity: 0.2;
`;

export const Article6Img = styled.img`
  object-fit: cover;
`;

export const ImgContainer = styled.div`
  position: relative;

  margin: 48px 0 112px 0;
`;

export const ImgLabel = styled.p`
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textBg};
  padding: 4px 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 34px;
  width: fit-content;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;
