import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  max-width: 342px;
`;

export const ItemImgContainer = styled.div`
  object-fit: cover;
  position: relative;
`;

export const ImgOverlay = styled.img`
  background: url("/images/video_overlay.png");
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0px;
  height: 0px;
  outline: none;
  padding: 45px;
`;

export const ItemImg = styled.img`
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
  max-width: 248px;
`;

export const ItemText = styled.p`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;

  text-align: center;
`;

export const Author = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;
