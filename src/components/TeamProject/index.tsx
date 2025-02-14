import { useEffect, useState } from "react";

import ProjectModalView from "../ProjectModal";
import { teamProjectData } from "../../data/teamProjectData.json";

import {
  Wrapper,
  Inner,
  TeamProjectTitleBox,
  TeamProjectTitle,
  Title,
  Desc,
  TeamProjectWrapper,
  TeamProjectBox,
  TeamProjectTabBox,
  Tab,
  InnerTitle,
  InnerDesc,
  InnerImg,
  LinkBtnBox,
  LinkBtn,
  Links,
  LinkText,
  SwiperBox,
  InnerImgView,
  NavArrows,
  InnerImgBox,
  SubTitle,
  SubDesc,
  TopContent,
  BottomContent,
  TeamContainer,
  BottomLeft,
  BottomRight,
} from "./styles";

import { BsLink45Deg } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoPlus } from "react-icons/go";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface TeamProjectProps {
  style?: React.CSSProperties;
}

const TeamProjectView = ({ style }: TeamProjectProps) => {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [subDescView, setSubDescView] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handlemodal = (id: number | undefined) => {
    setSelectedId(id !== undefined ? id : null);
  };
  const closeModal = () => {
    setSelectedId(null);
  };
  const handleClick = () => {
    setSubDescView((prev) => !prev);
    setIsRotated((prev) => !prev);
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
    <Wrapper id="TeamProject" style={style}>
      <Inner>
        <TeamProjectTitleBox className="capability-tag">
          <TeamProjectTitle>
            <Title>Team Project</Title>
          </TeamProjectTitle>
          <Desc>도전과 창의로 함께 이끌어낸 의미 있는 경험</Desc>
        </TeamProjectTitleBox>
        <SwiperBox
          className="mySwiper"
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          {teamProjectData.map((data, index) => (
            <TeamProjectWrapper key={index} className="capability-tag">
              <TeamProjectBox key={data.id}>
                <TeamContainer>
                  <TopContent>
                    <InnerTitle>{data.title}</InnerTitle>
                    <LinkBtnBox>
                      <LinkBtn>
                        <Links
                          href={data?.link.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsLink45Deg />
                        </Links>
                      </LinkBtn>
                      <LinkBtn>
                        <Links
                          href={data?.link.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </Links>
                      </LinkBtn>
                      <LinkBtn>
                        <LinkText onClick={() => handlemodal(data.id)}>
                          작업상세보기
                        </LinkText>
                      </LinkBtn>
                    </LinkBtnBox>
                  </TopContent>
                  <BottomContent>
                    <BottomLeft>
                      <InnerDesc>{data.desc}</InnerDesc>
                      <SubTitle>
                        KeyFeatures
                        {mobile && (
                          <GoPlus
                            className={`icon ${isRotated ? "rotated" : ""}`}
                            onClick={handleClick}
                          />
                        )}
                      </SubTitle>
                      <SubDesc className={subDescView ? "subActive" : ""}>
                        {data.about.keyFeatures}
                      </SubDesc>
                    </BottomLeft>
                    <BottomRight>
                      <InnerImgView
                        className="mySwiper"
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        spaceBetween={30}
                        modules={[Pagination, Navigation]}
                        navigation={{
                          prevEl: ".img-prev-button",
                          nextEl: ".img-next-button",
                        }}
                      >
                        <InnerImgBox>
                          <InnerImg>
                            <img src={data.imgBox?.imgA} />
                          </InnerImg>
                          <InnerImg>
                            <img src={data.imgBox?.imgB} />
                          </InnerImg>
                          <InnerImg>
                            <img src={data.imgBox?.imgC} />
                          </InnerImg>
                        </InnerImgBox>
                        <NavArrows>
                          <IoIosArrowBack className="img-prev-button" />
                          <IoIosArrowForward className="img-next-button" />
                        </NavArrows>
                      </InnerImgView>
                      <TeamProjectTabBox>
                        <Tab>{data.projectDetails.teamOrIndividual}</Tab>
                        <Tab>{data.projectDetails.responsive}</Tab>
                        <Tab>{data.projectDetails.projectType}</Tab>
                      </TeamProjectTabBox>
                    </BottomRight>
                  </BottomContent>
                </TeamContainer>
              </TeamProjectBox>
            </TeamProjectWrapper>
          ))}
        </SwiperBox>
      </Inner>
      {selectedId && (
        <ProjectModalView onClose={closeModal} projectId={selectedId} />
      )}
    </Wrapper>
  );
};
export default TeamProjectView;
