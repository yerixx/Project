import {
  Wrapper,
  Inner,
  MainTitleBox,
  MainTitle,
  SubTextBox,
  SubText,
} from "./MainIntro.styles";
import { ScrollYProps } from "../../styles/common.d";

const MainIntro = ({ scrollY }: ScrollYProps) => {
  return (
    <Wrapper>
      <Inner>
        <MainTitleBox>
          <MainTitle
            style={{
              transform: `translateX(-${scrollY * 0.5}px)`,
              opacity: 1 - scrollY * 0.005,
              transition: "all 0.3s ease-out",
            }}
          >
            <div>Crafting</div>
            <div>scalable</div>
            <div>intuitive</div>
          </MainTitle>
          <MainTitle
            style={{
              transform: `translateX(${scrollY * 0.5}px)`,
              opacity: 1 - scrollY * 0.005,
              transition: "all 0.3s ease-out",
            }}
          >
            <div>frontend</div> <div>solutions</div>
          </MainTitle>
        </MainTitleBox>
        <SubTextBox style={{ filter: `blur(${scrollY * 0.1}px) ` }}>
          <SubText>
            사용자 <span>경험을 혁신</span>하고, <span>미래를 대비</span>한 확장
            가능한
          </SubText>
          <SubText>
            프론트엔드 솔루션을 만들기 위해 노력하는 <span>개발자 박예림</span>
            입니다.
          </SubText>
        </SubTextBox>
      </Inner>
    </Wrapper>
  );
};

export default MainIntro;
