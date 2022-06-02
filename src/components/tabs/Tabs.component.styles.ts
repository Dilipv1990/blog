import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;
  margin-bottom: 30px;
  border-bottom: 3px dashed ${({ theme }) => theme.borderColor};
  padding-bottom: 30px;
`;

export const TabText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  text-transform: uppercase;
`;
