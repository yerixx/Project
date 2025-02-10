import {
  Wrapper,
  Inner,
  CapabilitiesTitleBox,
  SkillTitle,
  Title,
  Desc,
  CapabilitiesWrapper,
  StackBoxes,
  StackIcon,
  TitleBox,
} from "./styles";
import capabilities from "../../data/capabilities.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import IconComponent from "../../utils/IconComponent";
import { iconGroups } from "../../utils/icons";

interface CapabilitiesProps {
  style?: React.CSSProperties;
}

const Capabilities = ({ style }: CapabilitiesProps) => {
  return (
    <Wrapper id="capabilities" style={style}>
      <Inner>
        <CapabilitiesTitleBox className="capability-tag">
          <Title>Skills, Experience, and Growth</Title>
          <Desc>기술, 경험, 그리고 배움의 여정</Desc>
        </CapabilitiesTitleBox>

        <Swiper
          className="capabilitiesSwiper"
          slidesPerView={1.5}
          centeredSlides={false}
          spaceBetween={50}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
          }}
        >
          <SwiperSlide>
            <CapabilitiesWrapper id="frontend" className="capability-tag">
              <TitleBox>
                <SkillTitle>Front-end</SkillTitle>
              </TitleBox>
              <StackBoxes>
                {capabilities.frontEnd.map((it) => (
                  <StackIcon key={it.id}>
                    <li className="stackIcon">
                      <IconComponent
                        iconName={it.stack.icon as keyof typeof iconGroups}
                      />
                      <div className="stackTitle">{it.stack.title}</div>
                    </li>
                  </StackIcon>
                ))}
              </StackBoxes>
            </CapabilitiesWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CapabilitiesWrapper id="devTools" className="capability-tag">
              <TitleBox>
                <SkillTitle>DevTools</SkillTitle>
              </TitleBox>
              <StackBoxes>
                {capabilities.devTools.map((it) => (
                  <StackIcon key={it.id}>
                    <li className="stackIcon">
                      <IconComponent
                        iconName={it.stack.icon as keyof typeof iconGroups}
                      />
                      <div className="stackTitle">{it.stack.title}</div>
                    </li>
                  </StackIcon>
                ))}
              </StackBoxes>
            </CapabilitiesWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CapabilitiesWrapper id="design" className="capability-tag">
              <TitleBox>
                <SkillTitle>Design</SkillTitle>
              </TitleBox>
              <StackBoxes>
                {capabilities.design.map((it) => (
                  <StackIcon key={it.id}>
                    <li className="stackIcon">
                      <IconComponent
                        iconName={it.stack.icon as keyof typeof iconGroups}
                      />
                      <div className="stackTitle">{it.stack.title}</div>
                    </li>
                  </StackIcon>
                ))}
              </StackBoxes>
            </CapabilitiesWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CapabilitiesWrapper id="experience" className="capability-tag">
              <TitleBox>
                <SkillTitle>Experience</SkillTitle>
              </TitleBox>
              <StackBoxes>
                {capabilities.experience.map((it) => (
                  <StackIcon key={it.id}>
                    <li className="stackIcon">
                      <IconComponent
                        iconName={it.stack.icon as keyof typeof iconGroups}
                      />
                      <div className="stackTitle">{it.stack.title}</div>
                    </li>
                  </StackIcon>
                ))}
              </StackBoxes>
            </CapabilitiesWrapper>
          </SwiperSlide>
        </Swiper>
      </Inner>
    </Wrapper>
  );
};
export default Capabilities;
