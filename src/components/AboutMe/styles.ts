import styled from "styled-components";
import {
  Title42,
  Title30,
  Title26,
  Title22,
  Desc20,
  Paragraph18,
  Paragraph16,
} from "../../styles/fontStyle";

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.mainColor};
`;
export const Inner = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px 5%;
  color: ${(props) => props.theme.subColor};
  @media (max-width: 768px) {
    padding: 0px 16px;
  }
`;

export const AboutMeTitle = styled.section`
  ${Title42}
  width: 100%;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    ${Title30}
  }
`;

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    height: 200vh;
  }
`;
export const AboutMeContTop = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutMeTextBox = styled.ul`
  flex: 3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
  .AboutMeText {
    width: 100%;
    overflow-y: hidden;
    background: #333;
    padding: 20px 28px;
    border-radius: 30px;
    .AboutMeTitle {
      ${Title22}
      font-weight: bold;
    }
    .AboutMeDesc {
      height: 100%;
      padding-top: 10px;
      ${Paragraph16}
      line-height: 1.6;
      color: ${(props) => props.theme.grayColor};
      transition: all 0.3s;
      &:hover {
        color: ${(props) => props.theme.subColor};
      }
    }
  }
`;

export const AboutMeCardContainer = styled.div`
  perspective: 1000px;
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
  .aboutMeCard {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    @media (max-width: 768px) {
      /* margin-top: 100px; */
      width: 100%;
      height: auto;
      min-height: 550px;
    }
  }
  .aboutMeCard.flipped {
    transform: rotateY(180deg);
  }
  .aboutMeCardFront,
  .aboutMeCardBack {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  .aboutMeCardFront {
    width: 100%;
    height: 100%;
    background: url("/img/profile.png") center/cover no-repeat;
    border: inherit;
    border-radius: 30px;
    .click {
      position: absolute;
      top: 15%;
      right: 15%;
      padding: 6px 10px;
      color: ${({ theme }) => theme.mainColor};
      background: ${({ theme }) => theme.subColor};
      border-radius: 30px;
      cursor: pointer;
      opacity: 0;
      transition: all 0.3s;
      &:hover {
        scale: 1.1;
      }
    }
    &:hover > .click {
      opacity: 1;
    }
  }

  .aboutMeCardBack {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    color: ${({ theme }) => theme.mainColor};
    background: ${({ theme }) => theme.subColor};
    transform: rotateY(180deg);
    .aboutMeCardBackBox {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 20px;
      gap: 10px;
      .aboutMeName {
        display: flex;
        flex-direction: column;
        gap: 20px;
        ${Title26}
        font-weight:bold;
        .backarrow {
          font-size: 40px;
          cursor: pointer;
          transition: all 0.3s;
          border-radius: 50%;
          &:hover {
            scale: 1.1;
          }
        }
      }
      .aboutMeConnect {
        ${Paragraph18}
        font-weight:300;
      }
      .contactBox {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
        ${Paragraph18}
        .contactIcons {
          display: flex;
          gap: 8px;
          padding-top: 5px;
          overflow: scroll;
          .contactIcon {
            font-size: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.mainColor};
            cursor: pointer;
            transition: all 0.3s;
            position: relative;
            li,
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 60px;
              height: 60px;
            }

            &:hover {
              transform: translateY(-5px);
            }
            &:hover ~ .followHoverMessage {
              opacity: 1;
            }
          }
          .followHoverMessage {
            position: absolute;
            top: 22px;
            left: 2px;
            font-size: 12px;
            color: #999;
            opacity: 0;
            transition: opacity 0.3s;
          }
        }
      }
    }
  }
`;

export const AboutContBottom = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  @media (max-width: 768px) {
    margin-top: 550px;
  }
  .gototop {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(props) => props.theme.subColor};
    color: ${(props) => props.theme.mainColor};
    ${Desc20}
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    }
  }
`;
