import { useState, useEffect } from "react";
import Button from "./ModalButton";
import {
  ModalWrapper,
  ModalContainer,
  ModalContent,
  Title,
  Tags,
  Tag,
  Desc,
  WorkContainer,
  WorkContont,
} from "./WorkModal.styls";

interface CloseButton {
  onClose: () => void;
}

const WorkModal = ({ onClose }: CloseButton) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // 애니메이션 시간만큼 대기
  };

  return (
    <ModalWrapper isClosing={isClosing}>
      <ModalContainer>
        <Button onClose={handleClose} />
        <ModalContent isClosing={isClosing}>
          <WorkContainer>
            <Title>Facebook</Title>
            <Tags>
              <Tag>Team</Tag>
              <Tag>반응형</Tag>
              <Tag>클론코딩</Tag>
            </Tags>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium veritatis at maxime mollitia? Tempora distinctio
              quidem temporibus rerum itaque praesentium harum accusantium ad,
              nesciunt, fugit omnis. Maxime minima numquam consequuntur. Officia
              ab odit minus aliquid iusto obcaecati consectetur exercitationem
              pariatur voluptas ullam mollitia voluptatibus iste quaerat, sint
              similique fugiat autem rerum deleniti dicta voluptate quas,
              laudantium hic optio. Doloremque, quaerat.
            </Desc>
            <WorkContont>
              <div>
                <img src="/img/img.png" />
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                architecto soluta adipisci eaque iste autem amet accusantium
                nemo quibusdam incidunt asperiores, non odit ad a. Neque porro
                quam deleniti iusto.
              </div>
            </WorkContont>
          </WorkContainer>
        </ModalContent>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default WorkModal;
