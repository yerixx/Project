import AboutMe from "../../components/AboutMe";
import Capabilities from "../../components/Capabilities";
import WorkGallery from "../../components/WorkGallery";

const Contents = ({
  handleScrollY,
  getScrollThreshold,
}: {
  handleScrollY: number;
  getScrollThreshold: () => number;
}) => {
  return (
    <>
      <WorkGallery
        handleScrollY={handleScrollY}
        getScrollThreshold={getScrollThreshold}
      />
      <Capabilities />
      <AboutMe />
    </>
  );
};

export default Contents;
