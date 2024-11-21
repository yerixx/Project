import styled from "styled-components";
import {
  Desc20,
  Paragraph16,
  Paragraph18,
  Title22,
  Title26,
  Title70,
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
  padding: 50px 100px;
  color: ${(props) => props.theme.subColor};
`;

export const AboutMeTitle = styled.section`
  ${Title70}
  width: 100%;
  margin-bottom: 30px;
`;

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const AboutMeContTop = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const AboutMeTextBox = styled.ul`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .AboutMeText {
    width: 100%;
    background: #333;
    padding: 30px;
    border-radius: 30px;
    .AboutMeTitle {
      ${Title22}
      font-weight: bold;
    }
    .AboutMeDesc {
      padding-top: 20px;
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
  perspective: 1000px; /* 3D 효과를 위한 원근감 */
  width: 30%;
  height: 100%;
  position: relative;

  /* 카드 */
  .aboutMeCard {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d; /* 3D 회전 */
    transition: transform 0.6s; /* 회전 애니메이션 속도 */
  }
  /* 카드가 회전될 때 */
  .aboutMeCard.flipped {
    transform: rotateY(180deg);
  }

  /* 카드 앞면 */
  .aboutMeCardFront,
  .aboutMeCardBack {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden; /* 뒷면이 보이지 않도록 */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  /* 앞면 스타일 */
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

  /* 뒷면 스타일 */
  .aboutMeCardBack {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    color: ${({ theme }) => theme.mainColor};
    background: ${({ theme }) => theme.subColor};
    transform: rotateY(180deg); /* 뒷면을 180도 회전 */
    .aboutMeCardBackBox {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 10%;
      gap: 40px;
      .aboutMeName {
        display: flex;
        flex-direction: column;
        gap: 20px;
        ${Title26}
        font-weight:bold;
        margin-bottom: -20px;
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
        display: flex;
        flex-direction: column;
        gap: 20px;
        ${Paragraph18}
        /* .followHoverMessage {
          font-size: 14px;
          padding-left: 10px;
          color: #999;
          opacity: 0;
          transition: opacity 0.3s;
        } */
        .contactIcons {
          position: relative;
          display: flex;
          gap: 20px;
          .followHoverMessage {
            position: absolute;
            top: -79%;
            left: 24%;
            font-size: 14px;
            padding-left: 10px;
            color: #999;
            opacity: 0;
            transition: opacity 0.3s;
          }
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
            & > div,
            & > a {
              padding-top: 6px;
            }
            &:hover {
              transform: translateY(-5px);
            }
            &:hover ~ .followHoverMessage {
              opacity: 1;
            }
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
