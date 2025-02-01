import PersonalProject from "../PersonalProject/index";
import TeamProject from "../TeamProject/index";
import { Wrapper } from "./styles";

const WorkGallery = ({
  handleScrollY,
  getScrollThreshold,
}: {
  handleScrollY: number;
  getScrollThreshold: () => number;
}) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default WorkGallery;
