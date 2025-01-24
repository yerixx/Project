import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

interface TitleBoxProps {
  active?: boolean;
}

import {
  Title60,
  Title42,
  Title26,
  Paragraph16,
  Title30,
  Title22,
} from "../../styles/fontStyle";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  transition: all 1s;
  background: ${(props) => props.theme.mainColor};
  margin-bottom: 25%;
  @media (max-width: 768px) {
    margin-top: 20%;
  }
`;
export const Inner = styled.section`
  width: 90%;
  height: 100vh;
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
  }
`;

export const Title = styled.article`
  ${Title42}
  margin: 100px 0 16px;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;
export const Desc = styled.article`
  color: ${(props) => props.theme.grayColor};
`;
export const CapabilitiesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  opacity: 0;
  color: ${(props) => props.theme.subColor};
`;
export const TitleBox = styled.article<TitleBoxProps>`
  display: flex;
  justify-content: space-between;
  ${Title30}
  padding-bottom:30px;
  transition: all 0.3s;
  border-bottom: 1px solid
    ${(props) => (props.active ? props.theme.subColor : "#555")};
  div {
    cursor: pointer;
    transition: all 0.3s;
    color: #555;
  }
  .active {
    transform: rotate(45deg);
    color: ${(props) => props.theme.subColor};
  }
`;
export const SkillTitle = styled.article<TitleBoxProps>`
  ${Title30}
  color:${(props) => (props.active ? props.theme.subColor : "#555")};
`;
export const CapabilitiesContBox = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 50vh;
  border-radius: 40px;
  padding: 60px 40px;
  background: ${(props) => props.theme.subColor};
  @media (max-width: 768px) {
    width: 100%;
  }
  h1 {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 16px 0 22px;
    ${Title60}
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
  p {
    ${Paragraph16}
    font-weight: 400;
    line-height: 1.8;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const CapabilitiesBox = styled(Swiper)`
  width: 100%;
  display: flex;
  margin-bottom: 50px;
  color: ${(props) => props.theme.subColor};
`;
export const CapabilitiesStackBox = styled(SwiperSlide)<TitleBoxProps>`
  ${Title26}
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 20px;
  padding-top: 40px;
  color: #d2d2d2;
  height: ${(props) => (props.active ? "250px" : "0px")};
  transition: all 0.3s;
  .stackText {
    display: flex;
    align-items: center;
    gap: 10px;
    .stackTitle {
      ${Title22}
    }
  }
  .stackDesc {
    ${Paragraph16}
    padding: 20px 0;
    color: #999;
    transition: all 0.5s;

    &:hover {
      color: ${({ theme }) => theme.subColor};
    }
  }
`;
