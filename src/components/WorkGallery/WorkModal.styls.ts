import styled, { keyframes } from "styled-components";
import {
  Desc20,
  Paragraph14,
  Paragraph16,
  Paragraph18,
  Title110,
  Title22,
  Title26,
  Title28,
  Title30,
  Title40,
  Title70,
} from "../../styles/fontStyle";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(30px);
    opacity: 0;
  }
`;

export const ModalWrapper = styled.section<{ isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
  animation: ${(props) => (props.isClosing ? fadeOut : fadeIn)} 0.3s ease-in-out;
`;

export const ModalContainer = styled.section`
  position: relative;
  height: 100vh;
  padding-bottom: 50px;
`;

export const ModalContent = styled.article<{ isClosing: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 100vh;
  margin: 80px auto 0;
  padding: 60px 70px;
  border-radius: 40px 40px 0 0;
  background: ${({ theme }) => theme.subColor};
  animation: ${(props) => (props.isClosing ? slideDown : slideUp)} 0.4s ease-out;
`;

export const Title = styled.article`
  ${Title110}
  width: 100%;
  height: fit-content;
  color: ${({ theme }) => theme.mainColor};
`;

export const Tags = styled.article`
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 10px 0 20px;
  border-bottom: 1px solid #000;
`;

export const Tag = styled.div`
  width: fit-content;
  height: 30px;
  line-height: 26px;
  padding: 4px 11px;
  background: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.subColor};
  border-radius: 40px;
`;

export const WorkContainer = styled.article`
  padding: 0 20px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const OverviewBox = styled.article`
  padding: 20px 0 60px;
  display: flex;
  ${Paragraph14}
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    flex-direction: column;
    li {
      ${Paragraph14}

      font-family: "Inter", sans-serif;
      font-weight: 300;
    }
    .title {
      ${Paragraph16}
      padding-bottom: 10px;
      text-transform: uppercase;
    }
  }
`;

export const WorkContont = styled.article`
  width: 100%;
  border-radius: 40px;
  border-bottom: 1px solid #000;
`;

export const ContontImg = styled.img`
  width: 100%;
  height: 650px;
  object-fit: cover;
  border-radius: 40px;
`;

export const About = styled.div`
  margin: 40px 0 120px;
  .aboutTitle {
    display: flex;
    align-items: center;
    h1 {
      padding: 18px 0;
      padding-right: 30px;
      ${Title70}
      font-weight: 400;
    }
    div {
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      border-left: 1px solid #000;
      ${Desc20}
      font-weight: 300;
      span {
        b {
          ${Title28}
        }
      }
    }
  }
  .aboutContent {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    .aboutText {
      display: flex;
      ${Desc20}
      padding-bottom: 60px;
      border-bottom: 1px solid #ddd;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-all;
      div:nth-of-type(1) {
        display: flex;
        flex: 1;
        gap: 10px;
        ${Title30}
        font-weight: 300px;
      }
      div:nth-of-type(2) {
        display: flex;
        flex: 2;
        ${Paragraph18}
        font-weight: 300px;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

export const ContImg = styled.div`
  width: 850px;
  height: 560px;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Desc = styled.div`
  margin: 30px 0 60px;
  h2 {
    padding: 18px 0;
    ${Title40}
    font-weight: 400;
  }
  p {
    ${Paragraph16}
  }
`;

export const ContentButtom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  .leftCont {
    width: 880px;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      height: 600px;
      border-radius: 40px;
      object-fit: cover;
      box-shadow: var(--box-shadow);
    }
  }
  .rightCont {
    width: 300px;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      height: 600px;
      width: 100%;
      border-radius: 40px;
      object-fit: cover;
      box-shadow: var(--box-shadow);
    }
  }
`;

export const Highlights = styled.div`
  width: 100%;
  margin-top: 100px;

  padding: 60px 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #000;
  .highlightsTitle {
    ${Title22}
    text-transform: uppercase;
  }
  .highlightsCont {
    padding: 60px;
    display: flex;
    gap: 40px;
    .highlightsLeft {
      flex: 1;
      img {
        width: 350px;
        height: 200px;
        border-radius: 20px;
        box-shadow: var(--box-shadow);
      }
      & > div {
        ${Title26}/* font-size: 25px; */
      }
    }
    .highlightsRight {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 14px;
      div:nth-of-type(1) {
        ${Desc20}
      }
      div:nth-of-type(2) {
        ${Paragraph16}
      }
    }
  }
`;
