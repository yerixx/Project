import { useState } from "react";

import {
  Wrapper,
  Inner,
  WorkGalleryTitleBox,
  WorkGalleryTitle,
  Title,
  Year,
  WorkTabBox,
  WorkTabs,
} from "./styles";
import PersonalProjectContent from "./PersonalProjectContent";
import { personalProjectData } from "../../data/personalProjectData.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface MainProjectProps {
  style?: React.CSSProperties;
}

const PersonalProjectContainer: React.FC<MainProjectProps> = ({
  style,
}: MainProjectProps) => {
  const [selectedStack, setSelectedStack] = useState("All");

  return (
    <Wrapper id="workGallery" style={style}>
      <Inner>
        <WorkGalleryTitleBox>
          <WorkGalleryTitle>
            <Title>Crafting My Path</Title>
            <Year>(2024)</Year>
          </WorkGalleryTitle>
          <div>기술, 경험, 그리고 배움의 여정</div>
        </WorkGalleryTitleBox>
        <WorkTabBox>
          <WorkTabs>
            <div
              className={`workTab ${selectedStack === "All" ? "on" : ""}`}
              onClick={() => setSelectedStack("All")}
            >
              All
            </div>
            {[...new Set(personalProjectData.map((data) => data.stack))].map(
              (stack, index) => (
                <div
                  key={index}
                  className={`workTab ${selectedStack === stack ? "on" : ""}`}
                  onClick={() => setSelectedStack(stack)}
                >
                  {stack.replace(/[()]/g, "")}
                </div>
              )
            )}
          </WorkTabs>
        </WorkTabBox>
        <PersonalProjectContent selectedStack={selectedStack} />
      </Inner>
    </Wrapper>
  );
};
export default PersonalProjectContainer;
