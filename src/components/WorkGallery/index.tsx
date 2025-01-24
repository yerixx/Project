import PersonalProject from "../PersonalProject/index";
import TeamProject from "../TeamProject/index";

const WorkGallery = ({
  handleScrollY,
  getScrollThreshold,
}: {
  handleScrollY: number;
  getScrollThreshold: () => number;
}) => {
  return (
    <>
      <PersonalProject
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
    </>
  );
};

export default WorkGallery;
