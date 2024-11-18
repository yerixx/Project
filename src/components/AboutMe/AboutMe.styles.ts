import styled from "styled-components";
import { Title26 } from "../../styles/fontStyle";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 7%;
  background: ${(props) => props.theme.subColor};
`;
export const Inner = styled.section`
  display: flex;
  width: 90%;
  height: 80vh;
  gap: 180px;
`;
export const AboutMeLeftBox = styled.section`
  width: 45vw;
  height: 100%;
`;

export const AboutMeTitle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 70px;
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid #000;
`;

export const AboutMeTextBoxes = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 62vh;
`;
export const AboutMeTextBox = styled.ul`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 20px;
  .AboutMeText {
    .AboutMeTitle {
      ${Title26}
      font-weight: bold;
    }
    .AboutMeDesc {
      padding: 20px 0;
    }
  }
`;

export const AboutMeRightBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 80vh;
  border-radius: 40px;
  background: ${(props) => props.theme.grayColor};
`;
export const AboutMeContBox = styled.article``;
