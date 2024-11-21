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
import capabilities from "../../data/Capabilities.json";
import { useState } from "react";

import { IoArrowForward } from "react-icons/io5";

interface CapabilitiesProps {
  style?: React.CSSProperties;
}

const Capabilities: React.FC<CapabilitiesProps> = ({ style }) => {
  // 현재 선택된 탭 상태
  const [activeTab, setActiveTab] = useState("FrontEnd");
  const [selectedStack, setSelectedStack] = useState<{
    title: string;
    desc: string;
  } | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSelectedStack(null); // 탭 변경 시 선택된 스택 초기화
  };

  // Stack 클릭 핸들러
  const onStackClick = (stack: any) => {
    setSelectedStack(stack);
  };

  const getCurrentData = () => {
    if (activeTab === "FrontEnd") return capabilities.frontEnd;
    if (activeTab === "DevTools") return capabilities.devTools;
    if (activeTab === "Experience") return capabilities.experience;
    return [];
  };

  const data = getCurrentData();

  const renderContent = () => {
    return data.map((it) => (
      <CapabilitiesStackBox key={it.id} onClick={() => onStackClick(it.stack)}>
        <li className="stackNum">{it.stack.num}</li>
        <li className="stackText">
          <div className="stackTitle">{it.stack.title}</div>
          <div className="stackDesc">{it.stack.desc}</div>
        </li>
      </CapabilitiesStackBox>
    ));
  };

  // CapabilitiesContBox 콘텐츠 렌더링
  const innerRenderContent = () => {
    if (!selectedStack) {
      return (
        <CapabilitiesContBox>
          <h1>
            Click me <IoArrowForward />
          </h1>
          <p>왼쪽 목록을 클릭하여 자세한 내용을 확인하세요.</p>
        </CapabilitiesContBox>
      );
    }
    return (
      <CapabilitiesContBox>
        <h1>{selectedStack.title}</h1>
        <p>{selectedStack.desc}</p>
      </CapabilitiesContBox>
    );
  };

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
              <li
                className={`capabilitiesTab ${
                  activeTab === "FrontEnd" ? "active" : ""
                }`}
                onClick={() => handleTabClick("FrontEnd")}
              >
                {"<FrontEnd />"}
              </li>
              <li
                className={`capabilitiesTab ${
                  activeTab === "DevTools" ? "active" : ""
                }`}
                onClick={() => handleTabClick("DevTools")}
              >
                {"<DevTools />"}
              </li>
              <li
                className={`capabilitiesTab ${
                  activeTab === "Experience" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Experience")}
              >
                {"<Experience />"}
              </li>
            </CapabilitiesTabBox>
            {innerRenderContent()}
          </CapabilitiesLeftBox>
          <CapabilitiesRightBox>{renderContent()}</CapabilitiesRightBox>
        </CapabilitiesWrapper>
      </Inner>
    </Wrapper>
  );
};
export default Capabilities;
