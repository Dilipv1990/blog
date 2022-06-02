import styled from "styled-components";

export const Container = styled.p`
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
