import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainIntro from "./components/MainIntro/MainIntro";
import WorkGallery from "./components/WorkGallery/WorkGallery";
import Capabilities from "./components/Capabilities/Capabilities";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import GlobalStyles from "./styles/globalStyles";
import { WorkGalleryContainer } from "./components/WorkGallery/WorkGallery.styles";

gsap.registerPlugin(ScrollTrigger);

const Root: React.FC = () => {
  const [handleScrollY, setHandleScrollY] = useState<number>(0);
  // 스크롤 위치 추적
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
    // GSAP 애니메이션 설정
    gsap.fromTo(
      ".capability-tag", // 타겟 클래스
      {
        y: 100, // 아래에서 위로 시작
        opacity: 0, // 처음에는 보이지 않게 설정
      },
      {
        y: 0, // 원래 위치로 이동
        opacity: 1, // 완전히 보이도록 설정
        delay: 0.5, // 0.5초 지연 후 시작
        duration: 2, // 애니메이션 지속시간
        stagger: 0.3, // 각 태그가 0.3초 간격으로 등장
        scrollTrigger: {
          trigger: "#capabilities", // 타겟 컴포넌트
          start: "top bottom", // 화면 중앙에 도달할 때 시작
          end: "center 100%", // 컴포넌트의 하단이 화면 하단에 도달할 때 종료
          scrub: 1, // 스크롤에 맞춰 애니메이션 부드럽게 진행
          // markers: true, // 디버깅을 위한 마커 표시 (선택 사항)
        },
      }
    );
  }, []); // 빈 배열을 주어 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainIntro scrollY={handleScrollY} />
      <WorkGalleryContainer
        style={{
          marginTop: handleScrollY > 80 ? `-67vh` : "-16%",
          width: handleScrollY > 80 ? "100%" : "80%",
          background: handleScrollY > 700 ? "#fff" : "#000",
        }}
      >
        <WorkGallery />
        <Capabilities
          style={{
            background: handleScrollY > 700 ? "#000" : "#fff",
          }}
        />
        <AboutMe />
      </WorkGalleryContainer>
    </>
  );
};

export default Root;
