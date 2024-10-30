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
    font-family: 'Noto Sans KR', sans-serif;
  }
  :root {
   /* Border Radius */
    --border-radius-08: 8px;
    --border-radius-30: 30px;
    /* box-shadow */
    --box-shadow-01: 0px 0px 8px rgba(0, 0, 0, 0.1);
    --box-shadow-02: 3px 8px 10px 0px rgba(15, 22, 30, 0.11);
     /* width size */
    --desktop-width: 1100px;
    --mobile-width: 360px;
}
`;

export default globalStyles;
