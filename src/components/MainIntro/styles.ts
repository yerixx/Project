import styled from "styled-components";
import { MainTitle70, Desc20 } from "../../styles/fontStyle";

export const Wrapper = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.mainColor};
  z-index: -1;
  margin-bottom: 9%;

  @media (max-width: 768px) {
    align-items: center;
    overflow-x:hidden;
  }
`;

export const Inner = styled.section`
  width: var(--desktop-width-1100);
`;

export const MainTitleBox = styled.article`
  margin-top: 18%;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;
export const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  color: ${({ theme }) => theme.fontColor};
  text-align: center;
  ${MainTitle70};
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    font-size: 50px;
  }
`;
export const SubTextBox = styled.article`
  margin-top: 26px;
  ${Desc20};
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SubText = styled.p`
  color: ${({ theme }) => theme.grayColor};
  span {
    color: ${({ theme }) => theme.fontColor};
  }
`;
