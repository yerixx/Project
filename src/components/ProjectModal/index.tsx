import { useState } from "react";
import { personalProjectData } from "../../data/personalProjectData.json";
import { teamProjectData } from "../../data/teamProjectData.json";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

import ModalButton from "../ModalButton/index";

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
  ContentBottom,
  Highlights,
  PdfView,
} from "./styls";

import { WorkModalProps } from "../../styles/common";

const ProjectModal = ({ onClose, projectId }: WorkModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const allProjectData = [...personalProjectData, ...teamProjectData];
  const projectData = allProjectData.find((data) => data.id === projectId);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!projectData) return null;

  //pdf
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <ModalWrapper isClosing={isClosing}>
      <ModalContainer>
        <ModalButton
          onClose={handleClose}
          projectData={projectData}
          projectId={projectId}
        />
        <ModalContent isClosing={isClosing}>
          <WorkContainer>
            <Title>{projectData.title}</Title>
            <Tags>
              <Tag>{projectData.projectDetails?.teamOrIndividual}</Tag>
              <Tag>{projectData.projectDetails?.projectType}</Tag>
              <Tag>{projectData.projectDetails?.responsive}</Tag>
            </Tags>
            <OverviewBox>
              <ul>
                <li className="title">Frontend</li>
                <li>{projectData.frontend?.framework}</li>
                <li>{projectData.frontend?.html}</li>
                <li>{projectData.frontend?.javascript}</li>
                <li>{projectData.frontend?.styling}</li>
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
            {projectData.projectDetails.teamOrIndividual === "Team" ? (
              <PdfView>
                <Document
                  file={projectData.modalMainImg}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  {Array.from({ length: numPages }, (_, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                  ))}
                </Document>
              </PdfView>
            ) : (
              <WorkContont>
                <ContontImg>
                  {projectData.modalMainImg?.endsWith(".mp4") ? (
                    <video autoPlay muted loop src={projectData.modalMainImg} />
                  ) : (
                    <img
                      src={projectData.modalMainImg}
                      alt={projectData.title}
                    />
                  )}
                </ContontImg>
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
                      <div>{projectData.about.intro}</div>
                    </div>
                    <div className="aboutText">
                      <div>
                        <b>(02)</b>KeyFeatures
                      </div>
                      <div>{projectData.about.keyFeatures}</div>
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
                  {projectData.keyTechs?.keyTechA?.mp4 ? (
                    <video
                      src={projectData.keyTechs.keyTechA.mp4}
                      loop
                      muted
                      autoPlay
                    />
                  ) : null}
                </ContImg>
                <Desc>
                  <h2>{projectData.keyTechs?.keyTechA?.title}</h2>
                  <p>{projectData.keyTechs?.keyTechA?.desc}</p>
                </Desc>
                <ContentBottom>
                  <div className="leftCont">
                    {projectData.keyTechs?.keyTechB?.mp4 ? (
                      <video
                        src={projectData.keyTechs.keyTechB.mp4}
                        loop
                        muted
                        autoPlay
                      />
                    ) : null}
                    <Desc>
                      <h2>{projectData.keyTechs?.keyTechB?.title}</h2>
                      <p>{projectData.keyTechs?.keyTechB.desc}</p>
                    </Desc>
                  </div>
                  <div className="rightCont">
                    {projectData.keyTechs?.keyTechC?.mp4 ? (
                      <video
                        src={projectData.keyTechs.keyTechC.mp4}
                        loop
                        muted
                        autoPlay
                      />
                    ) : null}
                    <Desc>
                      <h2>{projectData.keyTechs?.keyTechC.title}</h2>
                      <p>{projectData.keyTechs?.keyTechC.desc}</p>
                    </Desc>
                  </div>
                </ContentBottom>
              </WorkContont>
            )}
            <Highlights>
              <div className="highlightsTitle">Highlights</div>
              <div className="highlightsCont">
                <div className="highlightsLeft">
                  <img
                    src={projectData.highlights?.img}
                    alt={projectData.title}
                  />
                </div>
                <div className="highlightsRight">
                  <div>{projectData.title}</div>
                  <div>{projectData.desc}</div>
                </div>
              </div>
            </Highlights>
          </WorkContainer>
        </ModalContent>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default ProjectModal;
