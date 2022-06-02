import styled from "styled-components";

export const Author = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

export const Article4Item = styled.div`
  height: 600px;
  width: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/article4.jpeg");
  position: relative;
`;

export const Article4Label = styled.p`
  position: absolute;
  top: 26px;
  left: 0;

  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textBg};
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;

  text-transform: uppercase;
  padding: 6px 14px;
  width: fit-content;
`;

export const Article4TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  max-width: 768px;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 44px;

  color: var(--white);
`;

export const Article4Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
`;

export const Article4Text = styled.p`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 127%;
  margin: 28px 0 14px 0;
`;
