import { useEffect, useState } from "react";

import { personalProjectData } from "../../data/personalProjectData.json";
import { Pagination, Navigation } from "swiper/modules";

import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

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
} from "./PersonalProjectContent.styles";

import ProjectModalView from "../ProjectModal";

interface PersonalProjectContentProps {
  selectedStack: string;
}

const PersonalProjectContent = ({
  selectedStack,
}: PersonalProjectContentProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredData =
    selectedStack === "All"
      ? personalProjectData
      : personalProjectData.filter((data) => data.stack === selectedStack);

  const pairs = [];
  for (let i = 0; i < filteredData.length; i += 2) {
    pairs.push(filteredData.slice(i, i + 2));
  }

  const handlemodal = (id: number | undefined) => {
    setSelectedId(id !== undefined ? id : null);
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  useEffect(() => {
    if (selectedId) {
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.documentElement.style.overflowX = "hidden";
      document.documentElement.style.overflowY = "auto";
    };
  }, [selectedId]);

  return (
    <GalleryWrapper>
      <NavBox>
        <div className="navTitle">Custom</div>
        <div className="navArrows">
          <MdArrowBack className="custom-prev-button" />
          <MdArrowForward className="custom-next-button" />
        </div>
      </NavBox>
      <GalleryBoxes
        className="mySwiper"
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
      >
        {window.innerWidth < 768
          ? filteredData.map((data, index) => (
              <GalleryBox key={index}>
                <div>
                  <GallerySmallBox onClick={() => handlemodal(data.id)}>
                    <img className="gallerySmall" src={data?.mainImg} />
                    <InnerTextBox>
                      <div className="textBox">
                        <p className="title">{data.title}</p>
                        <p className="stact">{data.stack}</p>
                      </div>
                      <div className="desc">{data.desc}</div>
                      <p className="clickbox">자세히보기</p>
                    </InnerTextBox>
                  </GallerySmallBox>
                </div>
              </GalleryBox>
            ))
          : pairs.map((pair, index) => (
              <GalleryBox key={index}>
                <div>
                  <GallerySmallBox onClick={() => handlemodal(pair[0].id)}>
                    <img className="gallerySmall" src={pair[0]?.mainImg} />
                    <InnerTextBox>
                      <div className="textBox">
                        <p className="title">{pair[0].title}</p>
                        <p className="stact">{pair[0].stack}</p>
                      </div>
                      <div className="desc">{pair[0].about.intro}</div>
                      <p className="clickbox">자세히보기</p>
                    </InnerTextBox>
                  </GallerySmallBox>
                </div>
                {pair[1] && (
                  <div>
                    <GalleryLargeBox onClick={() => handlemodal(pair[1].id)}>
                      <img className="galleryLarge" src={pair[1]?.mainImg} />
                      <InnerTextBox>
                        <div className="textBox">
                          <div className="titleBox">
                            <p className="title">{pair[1].title}</p>
                          </div>
                          <p className="stact">{pair[1].stack}</p>
                        </div>
                        <div className="desc">{pair[1].about.intro}</div>
                        <p className="clickbox">자세히보기</p>
                      </InnerTextBox>
                    </GalleryLargeBox>
                  </div>
                )}
              </GalleryBox>
            ))}
      </GalleryBoxes>
      {selectedId && (
        <ProjectModalView onClose={closeModal} projectId={selectedId} />
      )}
    </GalleryWrapper>
  );
};
export default PersonalProjectContent;
