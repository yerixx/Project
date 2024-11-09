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
  width: 40vw;
  .gallerySmall {
    height: 30vh;
    border-radius: 20px;
    background: #999;
  }
`;
export const GalleryLargeBox = styled.article`
  width: 100%;
  height: 100%;
  .galleryLarge {
    height: 50vh;
    background: #999;
    border-radius: 20px;
  }
`;
export const SmallBoxInnerText = styled.div`
  width: 100%;
  .textBox {
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
    }
    .stact {
      font-size: 14px;

      color: ${(props) => props.theme.grayColor};
    }
  }
  .desc {
    font-size: 14px;
    color: ${(props) => props.theme.grayColor};
  }
`;
export const LargeBoxInnerText = styled.div`
  width: 100%;
  .textBox {
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
    }
    .stact {
      font-size: 14px;

      color: ${(props) => props.theme.grayColor};
    }
  }
  .desc {
    font-size: 14px;
    color: ${(props) => props.theme.grayColor};
  }
`;
