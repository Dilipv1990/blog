import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 24px 65px;
`;

export const HamburgerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  position: absolute;
  left: 0;
  padding: 48px 0;
`;

export const HamburgerText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
`;

export const ThemeSwitcher = styled.button`
  border: 0;
  padding: 0;
  margin: 0 0 0 6px;
  background: transparent;
  transform: rotateY(180deg);

  svg path {
    fill: ${({ theme }) => theme.textColor};
  }
`;

export const HeadLine = styled.h1`
  font-size: 65px;
  color: var(--green);
  text-transform: uppercase;
  padding: 0;
  margin: 0;
`;
