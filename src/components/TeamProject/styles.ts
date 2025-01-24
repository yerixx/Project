import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Title60,
  Title42,
  Desc20,
  Paragraph16,
  Paragraph14,
  Title26,
  Title30,
} from "../../styles/fontStyle";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: all 1s;
  margin-bottom: 15%;
`;

export const Inner = styled.section`
  width: 90%;
  height: 100vh;
  .swiper-pagination {
    bottom: var(--swiper-pagination-bottom, 30px);
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
  }
`;
export const TeamProjectTitle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;
export const Title = styled.article`
  ${Title42}
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;
export const Desc = styled.article`
  color: ${(props) => props.theme.grayColor};
`;
export const TeamProjectWrapper = styled.section`
  display: flex;
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
  padding: 50px;
  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
    height: 100vh;
    border-radius: 0px;
    background: ${({ theme }) => theme.mainColor};
    color: ${(props) => props.theme.subColor};
  }
`;
export const TeamProjectTabBox = styled.ul`
  display: flex;
  gap: 6px;
  cursor: pointer;
`;
export const Tab = styled.li`
  width: fit-content;
  height: fit-content;
  padding: 7px 12px;
  background: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.subColor};
  border-radius: 40px;
  @media (max-width: 768px) {
    ${Paragraph14}
    background: ${({ theme }) => theme.subColor};
    color: ${({ theme }) => theme.mainColor};
  }
`;

export const InnerContents = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const InnerContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const InnerTextBox = styled.article`
  width: 100%;
  height: 100%;
  max-height: 550px;
`;

export const Duration = styled.article`
  ${Paragraph14}
  padding-top:10px;
  @media (max-width: 768px) {
    ${Paragraph16}
  }
`;
export const InnerTitle = styled.article`
  ${Title60}
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin-top: 10px;
    ${Title30}
  }
`;

export const InnerDesc = styled.article`
  ${Paragraph16}
  line-height: 1.7;
  white-space: break-spaces;
  padding: 10px 0 30px;
  @media (max-width: 768px) {
    max-height: 400px;
    padding: 0;
    overflow: hidden;
    transition: all 0.3s;
    &.active {
      max-height: 0px;
      display: block;
    }
  }
`;

export const SubTitle = styled.b`
  ${Title26}
  white-space: break-spaces;
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    ${Title30}
    margin-top: 10px;

    font-weight: normal;
  }
`;

export const SubDesc = styled.article`
  ${Paragraph16}
  line-height: 1.7;
  white-space: break-spaces;
  padding: 10px 0 30px;
  @media (max-width: 768px) {
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

export const LinkBtnBox = styled.article`
  display: flex;
  gap: 10px;
`;

export const LinkBtn = styled.article`
  width: 60px;
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
export const MoreTag = styled.article`
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
  animation: blink-shadow 1.5s infinite;
  @keyframes blink-shadow {
    0%,
    100% {
      box-shadow: 0 0 0 transparent;
      scale: 1;
    }
    50% {
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
      scale: 1.1;
    }
  }
  @media (max-width: 768px) {
    border: 1px solid #d2d2d2;
  }
`;

export const LinkText = styled.article`
  font-size: 13px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const InnerImgView = styled(Swiper)`
  width: 100%;
  height: fit-content;
  margin: auto 0;
  border-radius: 40px;
  @media (max-width: 768px) {
  }
`;
export const InnerImgBox = styled.article`
  border-radius: 40px;
`;
export const InnerImg = styled(SwiperSlide)`
  width: 100%;
  height: 600px;
  border-radius: 40px;
  img {
    width: 100%;
    height: 550px;
    border-radius: 40px;
    object-fit: cover;
    object-position: top;
  }
  @media (max-width: 768px) {
    /* border: 1px solid #f00; */
    border-radius: 0px;
    width: 100%;
    height: 200px;
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
export const Trigger = styled.ul`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
`;
export const Dot = styled.li`
  width: 10px;
  height: 10px;
  background: #333;
  border-radius: 50%;
  @media (max-width: 768px) {
    background: ${({ theme }) => theme.subColor};
  }
`;
