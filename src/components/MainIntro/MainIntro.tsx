import { Wrapper, Inner } from "../../styles/common";
import {
  MainTitleBox,
  MainTitle,
  SubTextBox,
  SubText,
} from "./MainIntro.styles";

const MainIntro = () => {
  return (
    <Wrapper>
      <Inner>
        <MainTitleBox>
          <MainTitle>Crafting scalable, </MainTitle>
          <MainTitle>intuitive frontend solutions</MainTitle>
        </MainTitleBox>
        <SubTextBox>
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
