import {
  Wrapper,
  Inner,
  CapabilitiesTitleBox,
  SkillTitle,
  Title,
  Desc,
  CapabilitiesWrapper,
  CapabilitiesBox,
  CapabilitiesStackBox,
  TitleBox,
} from "./Capabilities.styles";
import capabilities from "../../../data/Capabilities.json";
import { useState } from "react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface CapabilitiesProps {
  style?: React.CSSProperties;
}

const Capabilities = ({ style }: CapabilitiesProps) => {
  const [activeFrontend, setActiveFrontend] = useState(true);
  const [activeDevTools, setActiveDevTools] = useState(false);
  const [activeExperience, setActiveExperience] = useState(false);

  const handleClickFrontend = () => {
    setActiveFrontend((prev) => !prev);
    setActiveDevTools(false);
    setActiveExperience(false);
  };

  const handleClickDevTools = () => {
    setActiveDevTools((prev) => !prev);
    setActiveFrontend(false);
  };

  const handleClickExperience = () => {
    setActiveExperience((prev) => !prev);
    setActiveFrontend(false);
    setActiveDevTools(false);
  };

  return (
    <Wrapper id="capabilities" style={style}>
      <Inner>
        <CapabilitiesTitleBox className="capability-tag">
          <Title>Skills, Experience, and Growth</Title>
          <Desc>기술, 경험, 그리고 배움의 여정</Desc>
        </CapabilitiesTitleBox>
        <CapabilitiesWrapper id="frontend" className="capability-tag">
          <TitleBox active={activeFrontend}>
            <SkillTitle active={activeFrontend}>Frontend</SkillTitle>
            <div
              onClick={() => handleClickFrontend()}
              className={activeFrontend ? "active" : ""}
            >
              +
            </div>
          </TitleBox>
          <CapabilitiesBox
            className="mySwiper"
            slidesPerView={window.innerWidth > 768 ? 4 : 1}
            centeredSlides={false}
            spaceBetween={30}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {capabilities.frontEnd.map((it) => (
              <CapabilitiesStackBox key={it.id} active={activeFrontend}>
                <li className="stackText">
                  <li className="stackIcon">O</li>
                  <div className="stackTitle">{it.stack.title}</div>
                </li>
                <li className="stackDesc">{it.stack.desc}</li>
              </CapabilitiesStackBox>
            ))}
          </CapabilitiesBox>
        </CapabilitiesWrapper>
        <CapabilitiesWrapper id="devTools" className="capability-tag">
          <TitleBox active={activeDevTools}>
            <SkillTitle active={activeDevTools}>DevTools</SkillTitle>
            <div
              onClick={() => handleClickDevTools()}
              className={activeDevTools ? "active" : ""}
            >
              +
            </div>
          </TitleBox>
          <CapabilitiesBox
            className="mySwiper"
            slidesPerView={window.innerWidth > 768 ? 4 : 1}
            centeredSlides={false}
            spaceBetween={30}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {capabilities.devTools.map((it) => (
              <CapabilitiesStackBox key={it.id} active={activeDevTools}>
                <li className="stackText">
                  <li className="stackIcon">O</li>
                  <div className="stackTitle">{it.stack.title}</div>
                </li>
                <li className="stackDesc">{it.stack.desc}</li>
              </CapabilitiesStackBox>
            ))}
          </CapabilitiesBox>
        </CapabilitiesWrapper>
        <CapabilitiesWrapper id="experience" className="capability-tag">
          <TitleBox active={activeExperience}>
            <SkillTitle active={activeExperience}>Experience</SkillTitle>
            <div
              onClick={() => handleClickExperience()}
              className={activeExperience ? "active" : ""}
            >
              +
            </div>
          </TitleBox>
          <CapabilitiesBox
            className="mySwiper"
            slidesPerView={window.innerWidth > 768 ? 4 : 1}
            centeredSlides={false}
            spaceBetween={30}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {capabilities.experience.map((it) => (
              <CapabilitiesStackBox key={it.id} active={activeExperience}>
                <li className="stackText">
                  <li className="stackIcon">O</li>
                  <div className="stackTitle">{it.stack.title}</div>
                </li>
                <li className="stackDesc">{it.stack.desc}</li>
              </CapabilitiesStackBox>
            ))}
          </CapabilitiesBox>
        </CapabilitiesWrapper>
      </Inner>
    </Wrapper>
  );
};
export default Capabilities;
