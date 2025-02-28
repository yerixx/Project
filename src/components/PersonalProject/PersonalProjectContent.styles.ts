import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Desc20,
  Paragraph14,
  Paragraph16,
  Paragraph18,
  Title22,
} from "../../styles/fontStyle";

export const GalleryWrapper = styled.section``;
export const NavBox = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5% 0 1%;
  .navTitle {
    ${Title22}
    @media (max-width: 768px) {
      ${Desc20}
    }
  }
  .navArrows {
    align-items: center;
    display: flex;
    gap: 10px;
    scale: 1.1;
    cursor: pointer;
    .custom-prev-button {
      top: 20px;
      color: #000;
    }
    .custom-next-button {
      top: 20px;
      color: #000;
    }
  }
`;
export const GalleryBoxes = styled(Swiper)`
  width: 100%;
  height: 100%;
`;
export const GalleryBox = styled(SwiperSlide)`
  display: flex;
  width: 100%;
  height: fit-content;
  gap: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GallerySmallBox = styled.article`
  width: 40vw;
  @media (max-width: 768px) {
    width: 100%;
  }
  .gallerySmall {
    width: 100%;
    height: 40vh;
    border-radius: 20px;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`;
export const GalleryLargeBox = styled.article`
  width: 48vw;
  @media (max-width: 768px) {
    width: 100%;
  }
  .galleryLarge {
    width: 50vw;
    height: 50vh;
    border-radius: 20px;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`;
export const InnerTextBox = styled.div`
  width: 100%;
  padding: 0 6px;

  .textBox {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .titleBox {
      display: flex;
      gap: 10px;
      .title {
        ${Paragraph18}
        font-weight:bold;
        @media (max-width: 768px) {
          ${Desc20}
        }
      }
      .stact {
        ${Paragraph14}
        color: ${(props) => props.theme.grayColor};
        @media (max-width: 768px) {
          ${Paragraph14}
        }
      }
    }
  }
  .desc {
    ${Paragraph16}
    color: ${(props) => props.theme.grayColor};
    white-space: normal;
    letter-spacing: -1.5px;
    line-height: 1.5;

    @media (max-width: 768px) {
      ${Paragraph16}
    }
  }
  .clickbox {
    width: fit-content;
    padding: 4px 14px;
    font-size: 12px;
    border: 1px solid #999;
    color: #999;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 12px;
    transition: all 0.3s;
    margin-top: 20px;
    &:hover {
      background: #000;
      color: #fff;
    }
    @media (max-width: 768px) {
      display: block;
      width: 100%;
      padding: 8px 14px;
      border-radius: 16px;
    }
  }
`;
