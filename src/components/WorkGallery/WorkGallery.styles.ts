import styled from "styled-components";
import { Title50, Paragraph18, Title40 } from "../../styles/fontStyle";

export const WorkGalleryContainer = styled.article`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  z-index: 2;
  background: #fff;
  transition: all 1s cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 5% 0;
  border-radius: 40px 40px 0 0;
  background: ${(props) => props.theme.subColor};
`;
export const Inner = styled.section`
  width: 90%;
`;
export const WorkGalleryTitleBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

export const WorkGalleryTitle = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const Title = styled.article`
  ${Title50}
  font-weight: bold;
`;
export const Year = styled.article`
  ${Title40}
`;

export const WorkTabBox = styled.section`
  margin-top: 2%;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #999;
`;

export const WorkTabs = styled.article`
  ${Paragraph18}
  display: flex;
  align-items: center;
  height: 20px;
  gap: 10px;
  cursor: pointer;
  .workTab {
    padding: 4px 20px;
    border-radius: 50px;
    transition: all 0.3s;
    color: ${(props) => props.theme.grayColor};
    border: 1px solid #fff;
    &:hover {
      border-radius: 50px;
      color: ${(props) => props.theme.mainColor};
      border: 1px solid #000;
    }
  }
  .on {
    padding: 4px 20px;
    border-radius: 50px;
    color: ${(props) => props.theme.subColor};
    background: ${(props) => props.theme.mainColor};
    border: 1px solid #000;
    &:hover {
      color: ${(props) => props.theme.subColor};
    }
  }
`;
