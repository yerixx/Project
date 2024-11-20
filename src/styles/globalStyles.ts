import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    /* font-family: 'Noto Sans KR', sans-serif; */
    font-family: "Inter", sans-serif;
    /* font-family: "Neue Haas Grotesk",sans-serif; */
    background: ${(props) => props.theme.mainColor};
    transition: all 1s;
  }
  :root {
   /* Border Radius */
    --border-radius-08: 8px;
    --border-radius-30: 30px;
    /* box-shadow */
    --box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
     /* width size */
    --desktop-width-1400: 1400px;
    --desktop-width-1100: 1100px;
    --mobile-width: 360px;
}
`;

export default globalStyles;
