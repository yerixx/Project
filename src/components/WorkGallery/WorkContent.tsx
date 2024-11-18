import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { useEffect, useState } from "react";

import { workdata } from "../../data/workdata.json";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  GalleryWrapper,
  NavBox,
  GalleryBoxes,
  GalleryBox,
  GallerySmallBox,
  GalleryLargeBox,
  InnerTextBox,
} from "./WorkContent.styles";

import WorkModal from "./WorkModal";

interface WorkContentProps {
  selectedStack: string;
}

const WorkContent = ({ selectedStack }: WorkContentProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredData =
    selectedStack === "All"
      ? workdata
      : workdata.filter((data) => data.stack === selectedStack);

  const pairs = [];
  for (let i = 0; i < filteredData.length; i += 2) {
    pairs.push(filteredData.slice(i, i + 2));
  }

  const handlemodal = (id: number) => {
    setSelectedId(id);
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedId]);

  return (
    <GalleryWrapper>
      <NavBox>
        <div className="navTitle">Project</div>
        <div className="navArrows">
          <MdArrowBack className="custom-prev-button" />
          <MdArrowForward className="custom-next-button" />
        </div>
      </NavBox>
      <GalleryBoxes
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        className="mySwiper"
      >
        {pairs.map((pair, index) => (
          <GalleryBox key={index}>
            <div>
              <GallerySmallBox onClick={() => handlemodal(pair[0].id)}>
                <img className="gallerySmall" src={pair[0]?.img} />
                <InnerTextBox>
                  <div className="textBox">
                    <p className="title">{pair[0].title}</p>
                    <p className="stact">{pair[0].stack}</p>
                  </div>
                  <div className="desc">{pair[0].desc}</div>
                </InnerTextBox>
              </GallerySmallBox>
            </div>
            {pair[1] && (
              <div>
                <GalleryLargeBox onClick={() => handlemodal(pair[1].id)}>
                  <img className="galleryLarge" src={pair[1]?.img} />
                  <InnerTextBox>
                    <div className="textBox">
                      <p className="title">{pair[1].title}</p>
                      <p className="stact">{pair[1].stack}</p>
                    </div>
                    <div className="desc">{pair[1].desc}</div>
                  </InnerTextBox>
                </GalleryLargeBox>
              </div>
            )}
          </GalleryBox>
        ))}
      </GalleryBoxes>
      {selectedId && <WorkModal onClose={closeModal} projectId={selectedId} />}
      {/* {<WorkModal onClose={closeModal} />} */}
    </GalleryWrapper>
  );
};
export default WorkContent;
