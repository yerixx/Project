import styled, { keyframes } from "styled-components";
import { Title80 } from "../../styles/fontStyle";

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
  min-height: 100vh;
  padding-bottom: 50px;
`;

export const ModalContent = styled.article<{ isClosing: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 100vh;
  margin: 50px auto 0;
  padding: 60px 70px;
  border-radius: 40px 40px 0 0;
  background: ${({ theme }) => theme.subColor};
  animation: ${(props) => (props.isClosing ? slideDown : slideUp)} 0.4s ease-out;
`;

export const Title = styled.article`
  ${Title80}
  width:100%;
  height: fit-content;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.mainColor};
`;

export const Tags = styled.article`
  width: 100%;
  display: flex;
  gap: 10px;
  padding-bottom: 26px;
  border-bottom: 1px solid #000;
`;

export const Tag = styled.div`
  width: fit-content;
  height: 30px;
  line-height: 32px;
  padding: 0 10px;
  background: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.subColor};
  border-radius: 40px;
`;

export const WorkContainer = styled.article`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin-top: 20px;
  padding-right: 10px;
`;

export const Desc = styled.article`
  width: 100%;
  padding: 20px 0 40px;
`;

export const WorkContont = styled.article`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  border-radius: 40px;
  background: ${({ theme }) => theme.grayColor};
  div {
    width: 100%;
    height: 700px;
    overflow: hidden;
    margin-bottom: 30px;
    img {
      border-radius: 40px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
