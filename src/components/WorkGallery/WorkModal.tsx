import { useState } from "react";
import { workdata } from "../../data/workdata.json";

import Button from "./ModalButton";
import {
  ModalWrapper,
  ModalContainer,
  ModalContent,
  Title,
  Tags,
  Tag,
  OverviewBox,
  WorkContainer,
  WorkContont,
  ContontImg,
  About,
  ContImg,
  Desc,
  ContentButtom,
  Highlights,
} from "./WorkModal.styls";

import { WorkModalProps } from "../../styles/common";

const WorkModal = ({ onClose, projectId }: WorkModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const projectData = workdata.find((data) => data.id === projectId);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!projectData) return null;

  return (
    <ModalWrapper isClosing={isClosing}>
      <ModalContainer>
        <Button onClose={handleClose} projectData={projectData} />
        <ModalContent isClosing={isClosing}>
          <WorkContainer>
            <Title>{projectData.title}</Title>
            <Tags>
              <Tag>{projectData.projectDetails.teamOrIndividual}</Tag>
              <Tag>{projectData.projectDetails.responsive}</Tag>
              <Tag>{projectData.projectDetails.projectType}</Tag>
            </Tags>
            <OverviewBox>
              <ul>
                <li className="title">Frontend</li>
                <li>{projectData.frontend?.html}</li>
                <li>{projectData.frontend?.styling}</li>
                <li>{projectData.frontend?.javascript}</li>
                <li>{projectData.frontend?.framework}</li>
                <li>{projectData.frontend?.stateManagement}</li>
                <li>{projectData.frontend?.apiIntegration}</li>
              </ul>
              <ul>
                <li className="title">backend</li>
                <li>{projectData.backend?.language}</li>
                <li>{projectData.backend?.framework}</li>
                <li>{projectData.backend?.database}</li>
                <li>{projectData.backend?.authentication}</li>
              </ul>
              <ul>
                <li className="title">devTools</li>
                <li>{projectData.devTools?.buildTool}</li>
                <li>{projectData.devTools?.packageManager}</li>
                <li>{projectData.devTools?.versionControl}</li>
              </ul>
              <ul>
                <li className="title">cloud</li>
                <li>{projectData.cloud?.hosting}</li>
              </ul>
              <ul>
                <li className="title">Score of Work</li>
                <li>UXUI Design</li>
                <li>UX Writing</li>
              </ul>
            </OverviewBox>
            <WorkContont>
              <ContontImg src="/img/oeldart1.png" />
              <About>
                <div className="aboutTitle">
                  <h1>ABOUT</h1>
                  <div>
                    <span>Duration</span>
                    <span>
                      <b>{projectData.about.duration} </b>
                      day
                    </span>
                  </div>
                </div>
                <div className="aboutContent">
                  <div className="aboutText">
                    <div>
                      <b>(01) </b>Intro
                    </div>
                    <div> {projectData.about.intro}</div>
                  </div>
                  <div className="aboutText">
                    <div>
                      <b>(02)</b>KeyFeatures
                    </div>
                    <div> {projectData.about.keyFeatures}</div>
                  </div>
                  <div className="aboutText">
                    <div>
                      <b>(03)</b>Impact
                    </div>
                    <div>{projectData.about.impact}</div>
                  </div>
                </div>
              </About>
              <ContImg>
                <img src="/img/oeldart2.png" />
              </ContImg>
              <Desc>
                <h2>Google Translate API</h2>
                <p>
                  Google Translate API를 통해 다양한 언어로 웹사이트 콘텐츠를
                  번역할 수 있는 기능.
                  <br /> 언어 선택 버튼을 클릭하면 언어 모달이 열리고, 사용자가
                  원하는 언어로 웹사이트를 변경할 수 있습니다.
                </p>
              </Desc>
              <ContentButtom>
                <div className="leftCont">
                  <img src="/img/oeldart3.png" />
                  <Desc>
                    <h2>Slick Slider</h2>
                    <p>
                      Slick Slider 라이브러리를 사용하여 아티스트와 작품 이미지
                      슬라이더 기능을 구현.
                      <br />
                      반응형으로 동작하며, 화면 크기에 따라 슬라이드 항목 수가
                      달라지도록 설정했습니다.
                    </p>
                  </Desc>
                </div>
                <div className="rightCont">
                  <img src="/img/oeldart4.png" />
                  <Desc>
                    <h2>Media Query</h2>
                    <p>
                      CSS 미디어 쿼리를 사용하여 화면 크기에 맞게 사이트
                      레이아웃이 조정되도록 구현 했습니다.
                    </p>
                  </Desc>
                </div>
              </ContentButtom>
              <Highlights>
                <div className="highlightsTitle">Highlights</div>
                <div className="highlightsCont">
                  <div className="highlightsLeft">
                    <img src="/img/oeldart5.png" alt="oeldart" />
                  </div>
                  <div className="highlightsRight">
                    <div>{projectData.title}</div>
                    <div>{projectData.desc}</div>
                  </div>
                </div>
              </Highlights>
            </WorkContont>
          </WorkContainer>
        </ModalContent>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default WorkModal;
