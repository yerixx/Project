import { useEffect, useState } from "react";

import ProjectModalView from "../ProjectModalView/ProjectModalView";
import { teamProjectData } from "../../../data/teamProjectData.json";
import { WorkModalProps } from "../../../styles/common";

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
  InnerTextBox,
  InnerImg,
  InnerContent,
  InnerContents,
  LinkBtnBox,
  LinkBtn,
  Links,
  LinkText,
  SwiperBox,
  InnerImgView,
  MoreTag,
  NavArrows,
  InnerImgBox,
  SubTitle,
  Duration,
} from "./TeamProject.styles";

import { BsLink45Deg } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface TeamProjectProps {
  style?: React.CSSProperties;
}

const TeamProject: React.FC<TeamProjectProps> = (
  { style },
  { projectData }: WorkModalProps
) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const handlemodal = (id: number | undefined) => {
    setSelectedId(id !== undefined ? id : null);
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
    <Wrapper id="TeamProject" style={style}>
      <Inner>
        <TeamProjectTitleBox className="capability-tag">
          <TeamProjectTitle>
            <Title>Pioneering My Path</Title>
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
          {teamProjectData.map((data) => (
            <TeamProjectWrapper className="capability-tag">
              <TeamProjectBox key={data.id}>
                <TeamProjectTabBox>
                  <Tab>{data.projectDetails.teamOrIndividual}</Tab>
                  <Tab>{data.projectDetails.projectType}</Tab>
                  <Tab>{data.projectDetails.responsive}</Tab>
                </TeamProjectTabBox>
                <InnerContents>
                  <InnerContent>
                    <InnerTextBox>
                      <Duration>{data.about.duration}</Duration>
                      <InnerTitle>{data.title}</InnerTitle>
                      <InnerDesc>{data.desc}</InnerDesc>
                      <SubTitle>KeyFeatures</SubTitle>
                      <InnerDesc>{data.about.keyFeatures}</InnerDesc>
                    </InnerTextBox>
                    <LinkBtnBox>
                      <LinkBtn>
                        <Links
                          href={data?.link.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsLink45Deg />
                        </Links>
                        <LinkText>배포 링크</LinkText>
                      </LinkBtn>
                      <LinkBtn>
                        <Links
                          href={data?.link.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </Links>
                        <LinkText>GitHub</LinkText>
                      </LinkBtn>

                      <LinkBtn>
                        <MoreTag onClick={() => handlemodal(data.id)}>
                          <AiOutlineFullscreen />
                        </MoreTag>
                        <LinkText>자세히보기</LinkText>
                      </LinkBtn>
                    </LinkBtnBox>
                  </InnerContent>
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
                </InnerContents>
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
export default TeamProject;
