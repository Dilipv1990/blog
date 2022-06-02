import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ArticleHeader = styled.header<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-top: 3px dashed;
  border-bottom: 3px dashed;

  border-color: ${({ theme }) => theme.borderColor};

  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ color }) => color};

  margin: 40px 0;
`;

export const ArticleContainer = styled.article<{
  background?: boolean;
  rows: number;
  columns: number;
  rowGap: number;
  columnGap: number;
  padding?: string;
}>`
  display: grid;
  background: ${({ background, theme }) =>
    background ? theme.articleBg : "none"};
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  grid-column-gap: ${({ columnGap }) => columnGap}px;
  grid-row-gap: ${({ rowGap }) => rowGap}px;
  justify-items: center;
  align-items: center;
  padding: ${({ padding }) => padding ?? "0"};
  grid-auto-rows: min-content;
`;
