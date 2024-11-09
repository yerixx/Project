import MainIntro from "./components/MainIntro/MainIntro";
import WorkGallery from "./components/WorkGallery/WorkGallery";
import Capabilities from "./components/Capabilities/Capabilities";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";

import GlobalStyles from "./styles/globalStyles";
import { useEffect, useState } from "react";
import { WorkGalleryContainer } from "./components/WorkGallery/WorkGallery.styles";

const Root = () => {
  const [handleScrollY, setHandleScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHandleScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainIntro scrollY={handleScrollY} />
      <WorkGalleryContainer
        style={{
          marginTop: handleScrollY > 80 ? `-67vh` : "-16%",
          width: handleScrollY > 80 ? "100%" : "80%",
        }}
      >
        <WorkGallery />
      </WorkGalleryContainer>
      <Capabilities />
      <AboutMe />
    </>
  );
};

export default Root;
