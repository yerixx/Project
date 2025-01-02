import {
  Wrapper,
  Inner,
  MainProjectTitleBox,
  MainProjectTitle,
  Title,
  Desc,
  MainProjectWrapper,
  MainProjectBox,
  MainProjectTabBox,
  Tab,
  InnerTitle,
  InnerDesc,
  InnerText,
  InnerImg,
  InnerContent,
  Trigger,
  Dot,
  InnerContents,
  LinkBtnBox,
  LinkBtn,
  Links,
  LinkText,
  SwiperBox,
  InnerImgView,
} from "./TeamProject.styles";

import { teamProjectData } from "../../../data/teamProjectdata.json";
import { BsLink45Deg } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

import { WorkModalProps } from "../../../styles/common";

import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface MainProjectProps {
  style?: React.CSSProperties;
}

const MainProject: React.FC<MainProjectProps> = (
  { style },
  { projectData }: WorkModalProps
) => {
  return (
    <Wrapper id="MainProject" style={style}>
      <Inner>
        <MainProjectTitleBox className="capability-tag">
          <MainProjectTitle>
            <Title>Pioneering My Path</Title>
          </MainProjectTitle>
          <Desc>도전과 창의로 함께 이끌어낸 의미 있는 경험</Desc>
        </MainProjectTitleBox>
        <SwiperBox
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
          {teamProjectData.map((data) => (
            <MainProjectWrapper className="capability-tag">
              <MainProjectBox key={data.id}>
                <MainProjectTabBox>
                  <Tab>{data.projectDetails.teamOrIndividual}</Tab>
                  <Tab>{data.projectDetails.projectType}</Tab>
                  <Tab>{data.projectDetails.responsive}</Tab>
                </MainProjectTabBox>
                <InnerContents>
                  <InnerContent>
                    <InnerText>
                      <InnerTitle>{data.title}</InnerTitle>
                      <InnerDesc>{data.desc}</InnerDesc>
                    </InnerText>
                    <LinkBtnBox>
                      <LinkBtn>
                        <Links
                          href={projectData?.link.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </Links>
                        <LinkText>GitHub</LinkText>
                      </LinkBtn>
                      <LinkBtn>
                        <Links
                          href={projectData?.link.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsLink45Deg />
                        </Links>
                        <LinkText>Deploy</LinkText>
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
                      prevEl: ".custom-prev-button",
                      nextEl: ".custom-next-button",
                    }}
                  >
                    <InnerImg>
                      <img src={data.imgBox?.imgA} />
                    </InnerImg>
                    <InnerImg>
                      <img src={data.imgBox?.imgA} />
                    </InnerImg>
                    <InnerImg>
                      <img src={data.imgBox?.imgA} />
                    </InnerImg>
                  </InnerImgView>
                </InnerContents>
              </MainProjectBox>
            </MainProjectWrapper>
          ))}
        </SwiperBox>
      </Inner>
    </Wrapper>
  );
};
export default MainProject;
