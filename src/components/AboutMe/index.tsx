import { useCallback, useState } from "react";
import {
  Wrapper,
  Inner,
  AboutContainer,
  AboutMeTitle,
  AboutMeContTop,
  AboutMeCardContainer,
  AboutMeTextBox,
  AboutContBottom,
} from "./styles";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { PiNotionLogoFill } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { RiKakaoTalkFill } from "react-icons/ri";
import { IoArrowUp } from "react-icons/io5";

const AboutMe = () => {
  const [isCard, setIsCard] = useState(false);

  const handleCard = useCallback(() => {
    setIsCard((prev) => !prev);
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`복사되었습니다:) 연락기다리겠습니다 감사합니다!`);
      })
      .catch((err) => console.error("복사 실패:", err));
  };

  return (
    <Wrapper id="aboutMe">
      <Inner>
        <AboutMeTitle className="aboutMe-tag">About Me</AboutMeTitle>
        <AboutContainer>
          <AboutMeContTop>
            <AboutMeTextBox className="aboutMe-tag">
              <ul className="AboutMeText">
                <li className="AboutMeTitle">프론트엔드로 전향한 이유</li>
                <li className="AboutMeDesc">
                  새로운 도전과 학습을 통해 스스로를 발전시키는 것을 중요하게
                  생각해 왔습니다. 공간 디자인 직군에 종사하며 프로젝트를
                  진행하는 과정에서 웹 개발, 특히 프론트엔드 직군에 대해 알게
                  되었고, 이를 계기로 내가 진정으로 몰입하고 성취감을 느낄 수
                  있는 직무에 대해 깊이 고민하게 되었습니다. 프론트엔드는 단순히
                  코드를 작성하는 것을 넘어, 체계적인 코드 작성과 재사용 가능한
                  구조 설계를 통해 논리적인 사고를 확장할 수 있는 분야입니다.
                  또한, 즉각적인 피드백을 통해 결과물을 확인하고 개선해 나갈 수
                  있다는 점에서 큰 성취감을 느꼈습니다. 무엇보다 사용자
                  경험(UX)에 직접 기여할 수 있다는 점에서 창의성과 기술을 동시에
                  발휘할 수 있는 직무라고 생각하였고, 이러한 이유로 프론트엔드
                  개발자로 전향하게 되었습니다.
                </li>
              </ul>
              <ul className="AboutMeText">
                <li className="AboutMeTitle">성장에 대한 즐거움</li>
                <li className="AboutMeDesc">
                  새로운 프로젝트를 시작할 때마다 단순히 이전에 사용하던 기술을
                  반복하는 것이 아니라, 이전 프로젝트에서 아쉬웠던 부분을
                  개선하고 새로운 코드 스타일이나 기술을 적용하는 과정에서 큰
                  즐거움을 느낍니다. 이러한 경험들은 단순한 반복 작업이 아닌,
                  매번 발전해 나가는 과정이 되며, 이는 개발자로서 지속적으로
                  성장할 수 있는 원동력이 되고 있습니다.
                </li>
              </ul>
              <ul className="AboutMeText">
                <li className="AboutMeTitle">꺾이지 않는 마음</li>
                <li className="AboutMeDesc">
                  팀 프로젝트와 개인 프로젝트를 진행하면서, 프론트엔드 개발의
                  많은 부분을 혼자 해결해야 하는 상황을 자주 마주했습니다.
                  필요한 것들을 스스로 찾아보고 문제를 해결해야 했기에, 때로는
                  하나의 기능을 구현하는 데 며칠이 걸리기도 했습니다. 하지만
                  이러한 경험을 통해 개발에서는 해결할 수 없는 문제는 없다는
                  확신을 가지게 되었습니다. 끊임없는 시도와 학습 끝에 결국
                  문제를 해결해내면서, 어떤 어려움이 닥쳐도 끝까지 극복할 수
                  있다는 자신감을 갖게 되었습니다.
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
                            href="https://www.notion.so/Web-developer-1304f2189a388047900ef6f0f7242815?pvs=4"
                            target="_blank"
                            rel="noopener"
                          >
                            <PiNotionLogoFill />
                          </a>
                        </li>
                        <li className="contactIcon">
                          <a
                            href="https://open.kakao.com/o/syYn158g"
                            target="_blank"
                            rel="noopener"
                          >
                            <RiKakaoTalkFill />
                          </a>
                        </li>
                        <li className="contactIcon">
                          <a
                            href="https://www.instagram.com/yerixxp/profilecard/?igsh=dHU2dTYwaXlrMHJo"
                            target="_blank"
                            rel="noopener"
                          >
                            <AiFillInstagram />
                          </a>
                        </li>
                        <li className="followHoverMessage">
                          아이콘을 클릭하면 해당 페이지로 이동합니다
                        </li>
                      </ul>
                    </div>
                    <div className="contactBox">
                      <div>Contat Me:</div>
                      <ul className="contactIcons">
                        <li
                          className="contactIcon"
                          onClick={() => handleCopy("01055081689")}
                        >
                          <span>
                            <IoCall />
                          </span>
                        </li>
                        <li
                          className="contactIcon"
                          onClick={() => handleCopy("yerixxz@gmail.com")}
                        >
                          <span>
                            <LuMail />
                          </span>
                        </li>
                        <li className="followHoverMessage">
                          아이콘을 클릭하면 컨텐츠가 복사됩니다.
                        </li>
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
