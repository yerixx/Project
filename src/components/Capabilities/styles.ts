import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

interface TitleBoxProps {
  active?: boolean;
}

import { Title42, Paragraph16, Title30, Title26 } from "../../styles/fontStyle";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70vh;
  margin: 5% 0;
  transition: all 1s;
  background: ${(props) => props.theme.mainColor};
  @media (max-width: 768px) {
    margin: 0 0 50%;
  }
`;
export const Inner = styled.section`
  width: 90%;
  height: 100vh;
  .swiper-slide {
    height: 300px;
    justify-content: start;
    @media (max-width: 768px) {
      height: 520px;
    }
  }
`;

export const CapabilitiesTitleBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: fit-content;
  color: ${(props) => props.theme.subColor};
  margin-bottom: 80px;
  opacity: 0;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const Title = styled.article`
  ${Title42}
  /* margin: 100px 0 16px; */
  @media (max-width: 768px) {
    ${Title30}
    margin: 0px 0 10px;
  }
`;
export const Desc = styled.article`
  color: ${(props) => props.theme.grayColor};
`;

export const CapabilitiesWrapper = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px 28px;
  border-radius: 25px;
  background: #333;
  color: ${(props) => props.theme.subColor};
  transition: transform 0.5s ease-in-out;
  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export const TitleBox = styled.article<TitleBoxProps>`
  display: flex;
  justify-content: space-between;
  ${Title30}
  padding-bottom:30px;
  transition: all 0.3s;
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const SkillTitle = styled.article<TitleBoxProps>`
  ${Title30}
  font-weight:bold;
  color: ${(props) => props.theme.subColor};
  @media (max-width: 768px) {
    ${Title26}
  }
`;

export const StackBoxes = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: ${(props) => props.theme.subColor};
`;

export const StackIcon = styled.div<TitleBoxProps>`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #d2d2d2;
  transition: all 0.3s;
  border: 1px solid transparent;
  border-radius: 50px;
  .stackIcon {
    display: flex;
    align-items: center;
    padding: 12px 30px;
    gap: 8px;
    border-radius: 50px;
    opacity: 0.7;
    background: #3f3f3f;
    @media (max-width: 768px) {
      padding: 10px 18px;
    }
    .stackTitle {
      ${Paragraph16}
    }
  }
  &:hover {
    border: 0.8px solid #fff;
    border-radius: 50px;
    color: #fff;
  }
`;
