import { useEffect, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./pages/Header/index";
import MainIntro from "./components/MainIntro/index";
import PersonalProject from "./components/PersonalProject/index";
import TeamProject from "./components/TeamProject/index";
import Capabilities from "./components/Capabilities";
import AboutMe from "./components/AboutMe";

import GlobalStyles from "./styles/globalStyles";
import { ContentsWrapper } from "./components/PersonalProject/styles";

gsap.registerPlugin(ScrollTrigger);

const Root: React.FC = () => {
  const [handleScrollY, setHandleScrollY] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setHandleScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // GSAP 애니메이션
    gsap.fromTo(
      ".capability-tag",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#MainProject",
          start: "top bottom",
          end: "center 100%",
          scrub: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".aboutMe-tag",
      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 2,
        stagger: 0.8,
        scrollTrigger: {
          trigger: "#aboutMe",
          start: "top bottom",
          end: "center 100%",
          scrub: 1,
        },
      }
    );
  }, []);

  // const getScrollThreshold = () => {
  //   return window.innerWidth <= 768 ? 600 : 700;
  // };

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainIntro scrollY={handleScrollY} />
      <ContentsWrapper
        style={{
          marginTop: handleScrollY > 80 ? `-67vh` : "-16%",
          width: handleScrollY > 80 ? "100%" : "80%",
        }}
      >
        <PersonalProject />
      </ContentsWrapper>
      <TeamProject />
      <Capabilities />
      <AboutMe />
    </>
  );
};

export default Root;
