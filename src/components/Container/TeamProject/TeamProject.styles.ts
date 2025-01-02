import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Title60,
  Title42,
  Paragraph18,
  Desc20,
  Paragraph16,
  Title40,
} from "../../../styles/fontStyle";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 100vh; */
  transition: all 1s;
`;
export const Inner = styled.section`
  width: 90%;
  height: 100vh;
`;

export const SwiperBox = styled(Swiper)``;
export const MainProjectTitleBox = styled.section`
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
export const MainProjectTitle = styled.article`
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
export const MainProjectWrapper = styled.section`
  display: flex;
  gap: 60px;
  opacity: 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const MainProjectBox = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  background: ${({ theme }) => theme.subColor};
  border-radius: 40px;
  padding: 40px;
  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;

    height: 90vh;
    border-radius: 0px;

    background: ${({ theme }) => theme.mainColor};
    color: ${(props) => props.theme.subColor};
  }
`;
export const MainProjectTabBox = styled.ul`
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
    background: ${({ theme }) => theme.subColor};
    color: ${({ theme }) => theme.mainColor};
  }
`;

export const InnerContents = styled.section`
  display: flex;
  gap: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const InnerContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InnerText = styled.article``;
export const InnerTitle = styled.article`
  ${Title60}
  padding:20px 0;
  @media (max-width: 768px) {
    ${Title40}
  }
`;
export const InnerDesc = styled.article`
  ${Paragraph16}
  @media (max-width: 768px) {
    ${Paragraph16}
  }
`;

export const LinkBtnBox = styled.article`
  display: flex;
  gap: 16px;
`;

export const LinkBtn = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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
  font-size: 13px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const InnerImgView = styled(Swiper)`
  width: 100%;
  height: 400px;
  border-radius: 40px;
  @media (max-width: 768px) {
    height: 200px;
  }
`;
export const InnerImg = styled(SwiperSlide)`
  width: 100%;
  height: 400px;
  border-radius: 40px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 40px;
  }
  @media (max-width: 768px) {
    height: 200px;
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
