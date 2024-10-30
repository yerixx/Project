import MainIntro from "./components/MainIntro/MainIntro";
import WorkGallery from "./components/WorkGallery/WorkGallery";
// import Capabilities from "./components/Capabilities/Capabilities";
// import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";

const WorkGalleryContainer = styled.article`
  margin-top: -18%;
`;

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <MainIntro />
      <WorkGalleryContainer>
        <WorkGallery />
      </WorkGalleryContainer>
      {/* <Capabilities /> */}
      {/* <AboutMe /> */}
    </ThemeProvider>
  );
};

export default App;
