import styled from "styled-components";
import { Title60, Desc14 } from "../../styles/common";

export const MainTitleBox = styled.article`
  margin-top: 28%;
`;
export const MainTitle = styled.div`
  color: ${(props) => props.theme.fontColor};
  text-align: center;
  ${Title60};
`;
export const SubTextBox = styled.p`
  margin-top: 20px;
  ${Desc14};
  text-align: center;
`;
export const SubText = styled.p`
  color: ${(props) => props.theme.grayColor};
  span {
    color: ${(props) => props.theme.fontColor};
  }
`;
