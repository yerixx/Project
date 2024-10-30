import { css } from "styled-components";
import styled from "styled-components";

export const Title60 = css`
  font-family: "Encode Sans SC", sans-serif;
  font-size: 65px;
  line-height: 1.45;

  text-transform: uppercase;
`;
export const Desc14 = css`
  font-size: 14px;
  line-height: 1.7;
`;

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.mainColor};
`;
export const Inner = styled.section`
  width: var(--desktop-width);
  /* border: 1px solid #f00; */
`;
