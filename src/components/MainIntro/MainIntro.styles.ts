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
`;

export const Inner = styled.section`
  width: var(--desktop-width-1100);
`;

export const MainTitleBox = styled.article`
  margin-top: 20%;
`;
export const MainTitle = styled.div`
  color: ${({ theme }) => theme.fontColor};
  text-align: center;
  ${MainTitle70};
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;
export const SubTextBox = styled.article`
  margin-top: 26px;
  ${Desc20};
  text-align: center;
`;
export const SubText = styled.p`
  color: ${({ theme }) => theme.grayColor};
  span {
    color: ${({ theme }) => theme.fontColor};
  }
`;
