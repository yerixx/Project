import WorkGalleryContainer from "./PersonalProject/PersonalProjectContainer";
import TeamProject from "./TeamProject/TeamProject";
import AboutMe from "./AboutMe/AboutMe";
import Capabilities from "./Capabilities/Capabilities";

const index = ({ handleScrollY }: { handleScrollY: number }) => {
  return (
    <>
      <WorkGalleryContainer
        style={{
          opacity: handleScrollY > 700 ? "0" : "1",
          background: handleScrollY > 700 ? "#000" : "#fff",
        }}
      />
      <TeamProject
        style={{
          // background: handleScrollY > 700 ? "#000" : "#fff",
          opacity: handleScrollY > 700 ? "1" : "0",
        }}
      />
      <Capabilities />
      <AboutMe />
    </>
  );
};

export default index;
