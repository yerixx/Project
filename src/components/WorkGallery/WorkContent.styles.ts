import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Title22 } from "../../styles/fontStyle";

export const GalleryWrapper = styled.section``;
export const NavBox = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5% 0 1%;
  .navTitle {
    ${Title22}
  }
  .navArrows {
    cursor: pointer;
    display: flex;
    gap: 10px;
    scale: 1.1;
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
  justify-content: space-between;
  cursor: pointer;
`;
export const GallerySmallBox = styled.article`
  width: 36vw;
  .gallerySmall {
    width: 100%;
    height: 33vh;
    border-radius: 20px;
    object-fit: cover;
  }
`;
export const GalleryLargeBox = styled.article`
  width: 50vw;

  .galleryLarge {
    width: 50vw;
    height: 50vh;
    background: #999;
    border-radius: 20px;
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
    .title {
      font-size: 18px;
    }
    .stact {
      font-size: 14px;
      color: ${(props) => props.theme.grayColor};
    }
  }
  .desc {
    font-size: 14px;
    color: ${(props) => props.theme.grayColor};
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 1.5;
  }
`;
