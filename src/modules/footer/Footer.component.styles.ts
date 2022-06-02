import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 46px;
  border-top: 3px dashed ${({ theme }) => theme.borderColor};
  border-bottom: 3px dashed ${({ theme }) => theme.borderColor};
  padding: 62px 0 32px 0;
  margin-top: 44px;
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ColumnTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const ColumnText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
`;

export const Link = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  text-transform: uppercase;
`;

export const EmailContainer = styled.div`
  height: 54px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.btnContainerBg};
  border: ${({ theme }) => theme.btnContainerBorder};
`;

export const EmailText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
`;

export const Btn = styled.button`
  background: ${({ theme }) => theme.btnBg};
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  height: 40px;
  padding: 0 24px;
  cursor: pointer;
`;
