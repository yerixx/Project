import {
  Wrapper,
  Inner,
  AboutMeTitle,
  AboutMeLeftBox,
  AboutMeContBox,
  AboutMeRightBox,
  AboutMeTextBoxes,
  AboutMeTextBox,
} from "./AboutMe.styles";

const AboutMe = () => {
  return (
    <Wrapper>
      <Inner>
        <AboutMeLeftBox>
          <AboutMeTitle>About Me</AboutMeTitle>
          <AboutMeTextBoxes>
            <AboutMeTextBox>
              <li className="AboutMeText">
                <div className="AboutMeTitle">첫인상을 주는 프론트엔드</div>
                <div className="AboutMeDesc">
                  HTML5, Javascript, Typescript, React를 활용한 웹 개발 경험이
                  있으며, 사용자에게 먼저 보여지는 프론트엔드에 흥미를 느껴
                  프론트엔드에 집중하고 있습니다.
                </div>
              </li>
            </AboutMeTextBox>
            <AboutMeTextBox>
              <li className="AboutMeText">
                <div className="AboutMeTitle">성장에 대한 즐거움</div>
                <div className="AboutMeDesc">
                  새로운 프로젝트를 시작할 때마다, 단순히 이전에 사용하던 기술을
                  활용하는 것이 아닌, 이전 프로젝트에서 아쉬웠던 부분을 개선하고
                  새로운 코드 스타일이나 기술을 적용하는 것에 큰 즐거움을
                  느낍니다. 이는 개발에 있어서의 성장을 위한 동력이 되어주고
                  있습니다.
                </div>
              </li>
            </AboutMeTextBox>
            <AboutMeTextBox>
              <li className="AboutMeText">
                <div className="AboutMeTitle">꺾이지 않는 마음</div>
                <div className="AboutMeDesc">
                  프론트엔드 개발은 대부분 혼자 진행했습니다. 이 과정에서 모든
                  것을 스스로 찾아내고 해결해야 했기 때문에, 때론 기능 구현에
                  며칠이 걸리기도 했습니다. 하지만 이런 과정을 통해 개발에
                  있어서 "해결할 수 없는 문제는 없다"는 확신을 가지게
                  되었습니다. 이로써, 꺾이지 않는 마음으로 어떤 문제든 극복할 수
                  있다는 자신감을 얻게 되었습니다.
                </div>
              </li>
            </AboutMeTextBox>
            <div>© 2024 Yerim. All rights reserved</div>
          </AboutMeTextBoxes>
        </AboutMeLeftBox>

        <AboutMeRightBox></AboutMeRightBox>
      </Inner>
    </Wrapper>
  );
};
export default AboutMe;
