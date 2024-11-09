import styled from "styled-components";

import { Title60, Title50, Title26 } from "../../styles/fontStyle";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 7%;
`;
export const Inner = styled.section`
  width: 90%;
  height: 100vh;
`;

export const CapabilitiesTitleBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: fit-content;
  color: ${(props) => props.theme.subColor};
  margin-bottom: 40px;
`;
export const CapabilitiesTitle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.article`
  ${Title50}
  margin-bottom: 16px;
`;
export const Desc = styled.article`
  color: ${(props) => props.theme.grayColor};
`;
export const CapabilitiesWrapper = styled.section`
  display: flex;
  gap: 60px;
`;
export const CapabilitiesLeftBox = styled.section`
  position: relative;
  width: 45vw;
`;
export const CapabilitiesTabBox = styled.ul`
  display: flex;
  justify-content: end;
  width: 100%;
  cursor: pointer;
  .capabilitiesTab {
    width: 160px;
    height: 100px;
    text-align: center;
    line-height: 50px;
    border-radius: 30px 30px 0 0;
    color: ${(props) => props.theme.subColor};
    background: ${(props) => props.theme.grayColor};
  }
  .active {
    color: ${(props) => props.theme.mainColor};
    background: ${(props) => props.theme.subColor};
  }
`;
export const CapabilitiesContBox = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 50vh;
  border-radius: 40px;
  padding: 60px 40px;
  background: ${(props) => props.theme.subColor};
  h1 {
    padding: 16px 0 22px;
    ${Title60}
    font-weight: 500;
  }
  p {
    font-size: 16.5px;
    letter-spacing: -1px;
    font-weight: 400;
    line-height: 1.8;
  }
`;

export const CapabilitiesRightBox = styled.ul`
  display: flex;
  flex-direction: column;
  /* border: 1px solid #f00; */
  margin-top: 50px;
  width: 50vw;
  height: 50vh;
  gap: 50px;
  overflow-y: scroll;
  color: ${(props) => props.theme.subColor};
`;
export const CapabilitiesStackBox = styled.ul`
  display: flex;
  gap: 20px;
  color: #d2d2d2;
  .stackNum {
    height: 35px;
    font-size: 16px;
    line-height: 35px;
    padding: 0 14px;
    border-radius: 50px;
    border: 1px solid #d2d2d2;
  }
  .stackText {
    .stackTitle {
      padding-bottom: 10px;
      ${Title26}
      border-bottom:1px solid #d2d2d2;
    }
    .stackDesc {
      padding: 20px 0;
    }
  }
`;
