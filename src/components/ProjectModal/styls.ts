import styled, { keyframes } from "styled-components";
import {
  Desc20,
  Paragraph14,
  Paragraph16,
  Paragraph18,
  Title26,
  Title28,
  Title30,
  Title50,
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
  z-index: 555;
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
  padding: 46px;
  border-radius: 40px 40px 0 0;
  background: ${({ theme }) => theme.subColor};
  animation: ${(props) => (props.isClosing ? slideDown : slideUp)} 0.4s ease-out;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 70px 0px;
    border-radius: 20px 20px 0 0;
  }
`;

export const Title = styled.article`
  ${Title70}
  width: 100%;
  height: fit-content;
  padding: 20px 0;
  color: ${({ theme }) => theme.mainColor};
  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const Tags = styled.article`
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 10px 0 20px;
  border-bottom: 1px solid #000;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Tag = styled.div`
  width: fit-content;
  height: 30px;
  line-height: 30px;
  padding: 0 11px;
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
  ${Paragraph14}
  width:100%;
  padding: 20px 0 60px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flow-root;
  }
  ul {
    flex-direction: column;
    display: flex;
    @media (max-width: 768px) {
      padding-bottom: 20px;
    }
    li {
      ${Paragraph14}
      font-family: "Inter", sans-serif;
      font-weight: 300;
    }
    .title {
      ${Paragraph16}
      padding-bottom: 10px;
      text-transform: uppercase;
      @media (max-width: 768px) {
        padding-bottom: 0px;
        font-weight: 500;
      }
    }
  }
`;
export const PdfView = styled.article`
  .react-pdf__Page {
    --scale-factor: 1;
    background-color: inherit;
    position: relative;
    min-width: min-content;
    min-height: min-content;
  }
  .react-pdf__Page__canvas {
    padding-right: 20px;
    margin: 0 auto;

    max-width: 1300px;
    max-height: fit-content;
  }
  .react-pdf__Page__textContent,
  .textLayer,
  .annotationLayer {
    border: 1px solid #f00;
    display: none;
  }
`;
export const WorkContont = styled.article`
  width: 100%;
  border-radius: 40px;
  @media (max-width: 768px) {
    border-radius: 0px;
    border-bottom: none;
  }
`;

export const ContontImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const About = styled.div`
  margin: 40px 0 120px;
  @media (max-width: 768px) {
    padding: 0;
  }
  .aboutTitle {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: start;
    }
    h1 {
      padding: 18px 0;
      padding-right: 30px;
      ${Title50}
      font-weight: 400;
      @media (max-width: 768px) {
        width: 100%;
        font-size: 40px;
        border-bottom: 1px solid #000;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      border-left: 1px solid #000;
      ${Desc20}
      font-weight: 300;
      @media (max-width: 768px) {
        border-left: none;
        padding: 0;
        padding-top: 10px;
      }
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
    @media (max-width: 768px) {
      gap: 40px;
    }
    .aboutText {
      display: flex;
      ${Paragraph18}
      padding-bottom: 60px;
      border-bottom: 1px solid #ddd;
      white-space: break-spaces;
      word-wrap: break-word;
      word-break: break-all;
      @media (max-width: 768px) {
        flex-direction: column;
        padding-bottom: 30px;
      }
      div:nth-of-type(1) {
        display: flex;
        flex: 1;
        gap: 10px;
        ${Title30}
        font-weight: 300px;
        @media (max-width: 768px) {
          font-size: 26px;
        }
      }
      div:nth-of-type(2) {
        display: flex;
        flex: 2;
        ${Paragraph16}
        font-weight: 300px;
        color: #555;
        transition: all 0.5s;
        &:hover {
          color: ${({ theme }) => theme.mainColor};
        }
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

export const ContImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    /* box-shadow: var(--box-shadow); */
    border-radius: 40px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Desc = styled.div`
  margin: 30px 0 60px;
  h2 {
    ${Title30}
    padding: 18px 0;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 26px;
    }
  }
  p {
    ${Paragraph16}
    @media (max-width: 768px) {
      font-size: 14px;
      color: #555;
    }
  }
`;

export const ContentBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 0;
  }
  .leftCont {
    flex: 3;
    width: 100%;
    height: 750px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      width: 100%;
    }
    video {
      width: 100%;
      height: 100%;
      border-radius: 40px;
      object-fit: cover;
      box-shadow: var(--box-shadow);
      @media (max-width: 768px) {
        width: 100%;
        height: 200px;
      }
    }
  }
  .rightCont {
    flex: 1;
    width: 100%;
    height: 750px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      width: 100%;
    }
    video {
      width: 100%;
      height: 100%;
      width: 100%;
      border-radius: 40px;
      object-fit: cover;
      box-shadow: var(--box-shadow);
      @media (max-width: 768px) {
        margin: 0 auto;
        width: 50%;
        height: 100%;
      }
    }
  }
`;

export const Highlights = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #000;
  @media (max-width: 768px) {
    margin-top: 0;
  }
  .highlightsTitle {
    width: fit-content;
    ${Title26}
    padding:4px 16px;
    background: #000;
    color: #fff;
    border-radius: 50px;
    text-transform: uppercase;
  }
  .highlightsCont {
    padding: 60px 0;
    display: flex;
    gap: 40px;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0;
      padding-top: 30px;
    }
    .highlightsLeft {
      flex: 1;
      img {
        width: 100%;
        height: 220px;
        border-radius: 20px;
        box-shadow: var(--box-shadow);
        @media (max-width: 768px) {
          width: 100%;
          height: 100%;
        }
      }
      & > div {
        ${Title26}
        width:90%;
      }
    }
    .highlightsRight {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 14px;
      div:nth-of-type(1) {
        ${Title26}
      }
      div:nth-of-type(2) {
        ${Paragraph16}
        line-height:180%;
        color: #555;
        width: 90%;
        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 150%;
          color: #555;
        }
      }
    }
  }
`;
