import {
  Wrapper,
  Inner,
  CapabilitiesTitleBox,
  CapabilitiesTitle,
  Title,
  Desc,
  CapabilitiesWrapper,
  CapabilitiesLeftBox,
  CapabilitiesTabBox,
  CapabilitiesContBox,
  CapabilitiesRightBox,
  CapabilitiesStackBox,
} from "./Capabilities.styles";

interface CapabilitiesProps {
  style?: React.CSSProperties; // style 속성 타입 추가
}

const Capabilities: React.FC<CapabilitiesProps> = ({ style }) => {
  return (
    <Wrapper id="capabilities" style={style}>
      <Inner>
        <CapabilitiesTitleBox className="capability-tag">
          <CapabilitiesTitle>
            <Title>Crafting My Path </Title>
            <Title>Skills, Experience, and Growth</Title>
          </CapabilitiesTitle>
          <Desc>기술, 경험, 그리고 배움의 여정</Desc>
        </CapabilitiesTitleBox>
        <CapabilitiesWrapper className="capability-tag">
          <CapabilitiesLeftBox>
            <CapabilitiesTabBox>
              <li className="capabilitiesTab active">{`<Language />`}</li>
              <li className="capabilitiesTab">{`<FrontEnd />`}</li>
              <li className="capabilitiesTab">{`<Experience/>`}</li>
            </CapabilitiesTabBox>
            <CapabilitiesContBox>
              <h1>HTML5</h1>
              <p>
                Atomic한 단위의 컴포넌트 개발을 좋아하며, 재사용성과 확장성을
                고려합니다. 재사용성이 높은 공통 비즈니스 로직의 경우 Hook을
                이용하여 공통 Hooks로 만들어 모듈화 합니다. 컴포넌트의 불필요한
                리렌더링이 발생하지 않도록 개발하려 노력합니다.
              </p>
            </CapabilitiesContBox>
          </CapabilitiesLeftBox>
          <CapabilitiesRightBox>
            <CapabilitiesStackBox>
              <li className="stackNum">001</li>
              <li className="stackText">
                <div className="stackTitle">HTML5</div>
                <div className="stackDesc">
                  Atomic한 단위의 컴포넌트 개발을 좋아하며, 재사용성과 확장성을
                  고려합니다. 재사용성이 높은 공통 비즈니스 로직의 경우 Hook을
                  이용하여 공통 Hooks로 만들어 모듈화 합니다. 컴포넌트의
                  불필요한 리렌더링이 발생하지 않도록 개발하려 노력합니다.
                </div>
              </li>
            </CapabilitiesStackBox>
            <CapabilitiesStackBox>
              <li className="stackNum">002</li>
              <li className="stackText">
                <div className="stackTitle">HTML5</div>
                <div className="stackDesc">
                  Atomic한 단위의 컴포넌트 개발을 좋아하며, 재사용성과 확장성을
                  고려합니다. 재사용성이 높은 공통 비즈니스 로직의 경우 Hook을
                  이용하여 공통 Hooks로 만들어 모듈화 합니다. 컴포넌트의
                  불필요한 리렌더링이 발생하지 않도록 개발하려 노력합니다.
                </div>
              </li>
            </CapabilitiesStackBox>
            <CapabilitiesStackBox>
              <li className="stackNum">003</li>
              <li className="stackText">
                <div className="stackTitle">HTML5</div>
                <div className="stackDesc">
                  Atomic한 단위의 컴포넌트 개발을 좋아하며, 재사용성과 확장성을
                  고려합니다. 재사용성이 높은 공통 비즈니스 로직의 경우 Hook을
                  이용하여 공통 Hooks로 만들어 모듈화 합니다. 컴포넌트의
                  불필요한 리렌더링이 발생하지 않도록 개발하려 노력합니다.
                </div>
              </li>
            </CapabilitiesStackBox>
            <CapabilitiesStackBox>
              <li className="stackNum">004</li>
              <li className="stackText">
                <div className="stackTitle">HTML5</div>
                <div className="stackDesc">
                  Atomic한 단위의 컴포넌트 개발을 좋아하며, 재사용성과 확장성을
                  고려합니다. 재사용성이 높은 공통 비즈니스 로직의 경우 Hook을
                  이용하여 공통 Hooks로 만들어 모듈화 합니다. 컴포넌트의
                  불필요한 리렌더링이 발생하지 않도록 개발하려 노력합니다.
                </div>
              </li>
            </CapabilitiesStackBox>
          </CapabilitiesRightBox>
        </CapabilitiesWrapper>
      </Inner>
    </Wrapper>
  );
};
export default Capabilities;
