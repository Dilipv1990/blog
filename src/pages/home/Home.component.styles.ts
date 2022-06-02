import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  padding: 0 54px 54px 54px;

  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textColor};
  border-color: ${({ theme }) => theme.borderColor};
`;
