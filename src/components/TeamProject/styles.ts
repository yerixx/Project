import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Title60,
  Title42,
  Title30,
  Desc20,
  Paragraph14,
  Paragraph16,
  Title22,
} from "../../styles/fontStyle";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  transition: all 1s;

  @media (max-width: 768px) {
    margin: 10% 0px;
  }
`;

export const Inner = styled.section`
  width: 90%;
  height: 100vh;
  .swiper-pagination {
    bottom: var(--swiper-pagination-bottom, 20px);
    @media (max-width: 768px) {
      bottom: var(--swiper-pagination-bottom, 20px);
    }
  }
  .swiper-pagination-bullet-active {
    background: #000;
  }
`;
export const SwiperBox = styled(Swiper)``;
export const TeamProjectTitleBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: fit-content;
  color: ${(props) => props.theme.subColor};
  margin-bottom: 40px;
  opacity: 0;
  @media (max-width: 768px) {
    padding: 0 10px;
    margin-bottom: 0px;
  }
`;
export const TeamProjectTitle = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.article`
  ${Title42}
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;
export const Desc = styled.article`
  color: ${(props) => props.theme.grayColor};
`;
export const TeamProjectWrapper = styled.section`
  display: flex;
  height: 100%;
  gap: 60px;
  opacity: 0;
`;
export const TeamProjectBox = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;

  background: ${({ theme }) => theme.subColor};
  border-radius: 40px;
  padding: 45px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    min-height: 690px;
    max-height: 930px;
    margin-top: 20px;
    padding: 10px 14px 40px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.2);
    color: ${(props) => props.theme.subColor};
    overflow: hidden;
    z-index: 1;
  }
`;

export const TeamContainer = styled.section`
  width: 100%;
  overflow-y: hidden;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
`;

export const TopContent = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;
export const InnerTitle = styled.article`
  ${Title60}
  font-weight:bold;
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .icon {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
    ${Title30}
    font-weight:normal;
  }
`;
export const LinkBtnBox = styled.article`
  display: flex;
  flex: 1;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: end;
  @media (max-width: 768px) {
    justify-content: start;
  }
`;
export const LinkBtn = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: fit-content;
  }
`;
export const Links = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #333;
  background: #fff;
  border: 1px solid #d2d2d2;
  border-radius: 50%;
  ${Desc20}
  @media (max-width: 768px) {
    border: 1px solid #d2d2d2;
  }
`;
export const LinkText = styled.article`
  ${Paragraph14}
  display: flex;
  align-items: center;
  width: fit-content;
  height: 40px;
  padding: 12px 20px;
  border-radius: 20px;
  text-align: center;
  color: ${({ theme }) => theme.subColor};
  background: ${({ theme }) => theme.mainColor};
  @media (max-width: 768px) {
    color: ${({ theme }) => theme.mainColor};
    background: ${({ theme }) => theme.subColor};
  }
`;

export const BottomContent = styled.section`
  display: flex;
  gap: 30px;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;
export const BottomLeft = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const InnerDesc = styled.article`
  ${Paragraph16}
  color:#333;
  line-height: 1.6;
  white-space: break-spaces;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    ${Paragraph16}
    height:210px;
    max-height: 400px;
    color: ${({ theme }) => theme.subColor};
    padding: 0;
    overflow: scroll;
    transition: all 0.3s;
    &.active {
      max-height: 0px;
      display: block;
    }
  }
`;
export const SubTitle = styled.b`
  ${Title22}
  font-weight: 500;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  white-space: break-spaces;

  @media (max-width: 768px) {
    ${Title30}
    margin-top: 20px;
    font-weight: normal;
    .icon {
      font-size: 24px;
      transition: transform 0.3s ease-in-out;
    }

    .icon.rotated {
      transform: rotate(45deg);
    }
  }
`;
export const SubDesc = styled.article`
  ${Paragraph16}
  color:#333;
  line-height: 1.6;
  white-space: break-spaces;
  @media (max-width: 768px) {
    ${Paragraph16}
    color: ${({ theme }) => theme.subColor};
    max-height: 0;
    padding: 0;
    overflow: hidden;
    transition: all 0.3s;
    &.subActive {
      max-height: 400px;
      display: block;
    }
  }
`;

export const BottomRight = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1.4;
`;

export const InnerImgView = styled(Swiper)`
  /* aspect-ratio: 1.52/1; */
  width: 100%;
  height: 73%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    height: fit-content;
  }
`;
export const InnerImgBox = styled.article`
  width: 100%;
  height: 100%;
`;
export const InnerImg = styled(SwiperSlide)`
  width: 100%;
  height: 60vh;
  min-height: 58vh;
  max-height: 67vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top;
  }
  @media (max-width: 768px) {
    border-radius: 0px;
    width: 100%;
    height: 200px;
    min-height: auto;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0px;
      object-fit: cover;
    }
  }
`;
export const NavArrows = styled.article`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 95%;
  color: #000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  z-index: 1;
  .img-prev-button,
  .img-next-button {
    width: 30px;
    height: 30px;
    padding: 4px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      scale: 1.1;
    }
  }

  @media (max-width: 768px) {
  }
`;
export const TeamProjectTabBox = styled.ul`
  display: flex;
  gap: 6px;
  padding-top: 6px;
  @media (max-width: 768px) {
    padding-top: 14px;
  }
`;
export const Tab = styled.li`
  ${Paragraph14}
  width: fit-content;
  height: fit-content;
  padding: 4px 12px;
  color: #777;
  background: ${({ theme }) => theme.lightGrayColor};
  border-radius: 8px;
  @media (max-width: 768px) {
    ${Paragraph14}
    background: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.subColor};
  }
`;
