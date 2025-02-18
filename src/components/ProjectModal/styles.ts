import styled, { keyframes } from "styled-components";
import {
  Desc20,
  Paragraph14,
  Paragraph16,
  Paragraph18,
  Title22,
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

export const ModalWrapper = styled.section<{ $isClosing?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  animation: ${(props) => (props.$isClosing ? fadeOut : fadeIn)} 0.3s
    ease-in-out;
  overflow-x: hidden;
`;

export const ModalContainer = styled.section`
  position: relative;
  height: 100vh;
  padding-bottom: 50px;
`;

export const ModalContent = styled.article<{ $isClosing?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 100vh;
  margin: 50px auto 0;
  padding: 60px 70px;
  border-radius: 40px 40px 0 0;
  background: ${({ theme }) => theme.subColor};
  animation: ${(props) => (props.$isClosing ? slideDown : slideUp)} 0.4s
    ease-out;
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

export const OverviewBox = styled.ul`
  ${Paragraph14}
  width:100%;
  padding: 20px 0 60px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flow-root;
    padding: 20px 0;
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
        /* color: #f00; */
        font-weight: bold;
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
    margin: 0 auto;
    max-width: 100%;
    max-height: fit-content;
    @media (max-width: 768px) {
      max-width: 100%;
      padding-right: 0px;
      max-height: fit-content;
    }
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
  height: 76vh;
  margin: 0 auto;
  object-fit: contain;
  /* border: 1px solid rgba(0, 0, 0, 0.2); */
  border-radius: 20px;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
    overflow: hidden;
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
    border: none;
    border-radius: 8px;
  }
`;

export const About = styled.div`
  margin: 40px 0;
  @media (max-width: 768px) {
    padding: 0;
    margin: 40px 0;
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
  border-radius: 20px;
  video,
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: top;
    overflow: hidden;
    /* box-shadow: var(--box-shadow); */
    border-radius: 20px;
    @media (max-width: 768px) {
      border-radius: 8px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

export const Desc = styled.div`
  /* margin: 30px 0 60px; */
  h2 {
    ${Title26}
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
  flex-direction: column;
  justify-content: space-between;
  gap: 80px;
  /* margin-bottom: 15%; */
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 0;
  }
  .leftCont {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
    gap: 30px;
    @media (max-width: 768px) {
      width: 100%;
    }
    video {
      width: 46vw;
      height: 56vh;
      border-radius: 20px;
      object-fit: cover;
      box-shadow: var(--box-shadow);
      @media (max-width: 768px) {
        width: 100%;
        height: 200px;
        border-radius: 8px;
      }
    }
  }
  .rightCont {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 40px;
    @media (max-width: 768px) {
      width: 100%;
      min-height: 100px;
      max-height: 100%;
    }
    video {
      width: 20vw;
      object-fit: contain;
      border-radius: 20px;
      @media (max-width: 768px) {
        margin: 0 auto;
        width: 50%;
        height: 100%;
        border-radius: 8px;
      }
    }
  }
`;

export const DescR = styled.div`
  text-align: end;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 20px;
  h2 {
    ${Title26}
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
export const Highlights = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #000;
  @media (max-width: 768px) {
    margin-top: 0;
    padding: 20px 0;
  }

  .highlightsCont {
    padding: 20px 0;
    display: flex;
    gap: 30px;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0;
      padding-top: 30px;
    }
    .highlightsLeft {
      flex: 1;
      img {
        aspect-ratio: 16 / 9;
        height: 200px;
        border-radius: 20px;
        box-shadow: var(--box-shadow);
        object-fit: cover;
        object-position: top;
        @media (max-width: 768px) {
          width: 100%;
          height: 100%;
          box-shadow: none;
          border-radius: 8px;
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
        ${Title22}
        @media (max-width: 768px) {
          ${Desc20}
        }
      }
      div:nth-of-type(2) {
        ${Paragraph16}
        width: 90%;
        line-height: 180%;
        color: #555;
        @media (max-width: 768px) {
          width: 100%;
          font-size: 14px;
          line-height: 150%;
          color: #555;
        }
      }
    }
  }
`;
