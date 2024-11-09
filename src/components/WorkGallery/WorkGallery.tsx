import { workdata } from "../../data/workdata.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Wrapper,
  Inner,
  WorkGalleryTitleBox,
  WorkGalleryTitle,
  Title,
  Year,
  WorkTabBox,
  WorkTabs,
} from "./WorkGallery.styles";
import WorkContent from "./WorkContent";

import { useState } from "react";

const WorkGallery = () => {
  const [selectedStack, setSelectedStack] = useState("All");

  return (
    <Wrapper>
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
            {[...new Set(workdata.map((data) => data.stack))].map((stack) => (
              <div
                className={`workTab ${selectedStack === stack ? "on" : ""}`}
                onClick={() => setSelectedStack(stack)}
              >
                {stack.replace(/[()]/g, "")}
              </div>
            ))}
          </WorkTabs>
        </WorkTabBox>
        <WorkContent selectedStack={selectedStack} />
      </Inner>
    </Wrapper>
  );
};
export default WorkGallery;
