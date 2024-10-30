import { Wrapper, Inner } from "../../styles/common";
import { WorkGalleryBox, WorkTitle } from "./WorkGallery.styles";

const WorkGallery = () => {
  return (
    <Wrapper>
      <Inner>
        <WorkGalleryBox>
          <WorkTitle>Work Gallery</WorkTitle>
        </WorkGalleryBox>
      </Inner>
    </Wrapper>
  );
};

export default WorkGallery;
