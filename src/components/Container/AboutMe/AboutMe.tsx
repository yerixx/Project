import { useState } from "react";
import {
  Wrapper,
  Inner,
  AboutContainer,
  AboutMeTitle,
  AboutMeContTop,
  AboutMeCardContainer,
  AboutMeTextBox,
  AboutContBottom,
} from "./AboutMe.styles";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { PiNotionLogoFill } from "react-icons/pi";
import { SiTistory } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { RiKakaoTalkFill } from "react-icons/ri";
import { IoArrowUp } from "react-icons/io5";

const AboutMe = () => {
  const [isCard, setIsCard] = useState(false);
  // const [isLink, setIsLink] = useState(false);

  const handleCard = () => {
    setIsCard((prev) => !prev);
  };

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper id="aboutMe">
      <Inner>
        <AboutMeTitle className="aboutMe-tag">About Me</AboutMeTitle>
        <AboutContainer>
          <AboutMeContTop>
            <AboutMeTextBox className="aboutMe-tag">
              <ul className="AboutMeText">
                {/* <div className="AboutMeTitle">프론트엔드로 전향한 이유</div> */}
                <li className="AboutMeTitle">프론트엔드로 전향한 이유</li>
                <li className="AboutMeDesc">
                  저는 항상 새로운 도전과 학습을 통해 스스로를 발전시키는 것을
                  중요하게 생각해 왔습니다. 내가 진정으로 몰입하고 성취감을 느낄
                  수 있는 직무에 대해 깊이 고민하게 되었습니다. 단순히 코드를
                  작성하는 것 이상의 의미가 있는 직무였습니다. 코드를 체계적으로
                  작성하고, 재활용 가능한 구조로 정리하며, 즉각적으로 결과물을
                  확인할 수 있는 점에서 큰 성취감을 느꼈습니다. 더 나아가 사용자
                  경험(UX)에 직접 기여하는 작업이라는 점에서 창의성과 기술을
                  동시에 발휘할 수 있는 영역임을 알게 되었습니다.
                </li>
              </ul>
              <ul className="AboutMeText">
                <li className="AboutMeTitle">성장에 대한 즐거움</li>
                <li className="AboutMeDesc">
                  새로운 프로젝트를 시작할 때마다, 단순히 이전에 사용하던 기술을
                  활용하는 것이 아닌, 이전 프로젝트에서 아쉬웠던 부분을 개선하고
                  새로운 코드 스타일이나 기술을 적용하는 것에 큰 즐거움을
                  느낍니다. 이는 개발에 있어서의 성장을 위한 동력이 되어주고
                  있습니다.
                </li>
              </ul>
              <ul className="AboutMeText">
                <li className="AboutMeTitle">꺾이지 않는 마음</li>
                <li className="AboutMeDesc">
                  프론트엔드 개발은 대부분 혼자 진행했습니다. 이 과정에서 모든
                  것을 스스로 찾아내고 해결해야 했기 때문에, 때론 기능 구현에
                  며칠이 걸리기도 했습니다. 하지만 이런 과정을 통해 개발에
                  있어서 "해결할 수 없는 문제는 없다"는 확신을 가지게
                  되었습니다. 이로써, 꺾이지 않는 마음으로 어떤 문제든 극복할 수
                  있다는 자신감을 얻게 되었습니다.
                </li>
              </ul>
            </AboutMeTextBox>
            <AboutMeCardContainer>
              <div className={`aboutMeCard ${isCard ? "flipped" : ""}`}>
                <div className="aboutMeCardFront">
                  <div className="click" onClick={handleCard}>
                    Click me!
                  </div>
                </div>
                <div className="aboutMeCardBack">
                  <div className="aboutMeCardBackBox">
                    <div className="aboutMeName">
                      <div onClick={handleCard}>
                        <IoIosArrowDropleftCircle className="backarrow" />
                      </div>
                      <div>Park Yerim</div>
                    </div>
                    <div className="aboutMeConnect">
                      <div>010 5508 1689</div>
                      <div>yerixxz@gmail.com</div>
                    </div>
                    <div className="contactBox">
                      <div>Follow Me:</div>
                      <ul className="contactIcons">
                        <li className="contactIcon">
                          <a
                            href="https://github.com/yerixx"
                            target="_blank"
                            rel="noopener"
                          >
                            <IoLogoGithub />
                          </a>
                        </li>
                        <li className="contactIcon">
                          <a
                            href="https://naver.com"
                            target="_blank"
                            rel="noopener"
                          >
                            <AiFillInstagram />
                          </a>
                        </li>
                        <li className="contactIcon">
                          <a
                            href="https://naver.com"
                            target="_blank"
                            rel="noopener"
                          >
                            <PiNotionLogoFill />
                          </a>
                        </li>
                        <li className="contactIcon">
                          <a
                            href="https://naver.com"
                            target="_blank"
                            rel="noopener"
                          >
                            <SiTistory />
                          </a>
                        </li>
                        <div className="followHoverMessage">
                          아이콘을 클릭하면 해당 페이지로 이동합니다
                        </div>
                      </ul>
                    </div>
                    <div className="contactBox">
                      <div>Contat Me:</div>
                      <ul className="contactIcons">
                        <li className="contactIcon">
                          <div>
                            <IoCall />
                          </div>
                        </li>
                        <li className="contactIcon">
                          <div>
                            <LuMail />
                          </div>
                        </li>
                        <li className="contactIcon">
                          <div>
                            <RiKakaoTalkFill />
                          </div>
                        </li>
                        <div className="followHoverMessage">
                          아이콘을 클릭하면 컨텐츠가 복사됩니다.
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AboutMeCardContainer>
          </AboutMeContTop>
          <AboutContBottom>
            <div className="aboutMe-tag">© 2024 Yerim. All rights reserved</div>
            <div className="gototop" onClick={handleGoToTop}>
              <IoArrowUp />
            </div>
          </AboutContBottom>
        </AboutContainer>
      </Inner>
    </Wrapper>
  );
};
export default AboutMe;
