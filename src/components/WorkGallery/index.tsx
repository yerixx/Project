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
          opacity: handleScrollY > getScrollThreshold() ? "0" : "1",
          background: handleScrollY > getScrollThreshold() ? "#000" : "#fff",
        }}
      />
      <TeamProject
        style={{
          opacity: handleScrollY > getScrollThreshold() ? "1" : "0",
        }}
      />
    </Wrapper>
  );
};

export default WorkGallery;
