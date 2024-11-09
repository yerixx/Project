import {
  ModalLinkButtonBox,
  ModalLink,
  ModalLinkBtn,
  ModalLinkText,
} from "./ModalButton.styles";

import { IoCloseOutline } from "react-icons/io5";
import { BsLink45Deg } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

interface CloseButton {
  onClose: () => void;
}

const ModalButton = ({ onClose }: CloseButton) => {
  return (
    <ModalLinkButtonBox>
      <div className="modalCloseBtn" onClick={onClose}>
        <IoCloseOutline />
      </div>
      <ModalLinkBtn>
        <ModalLink
          href="https://www.naver.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLink45Deg />
        </ModalLink>
        <ModalLinkText>배포 링크</ModalLinkText>
      </ModalLinkBtn>
      <ModalLinkBtn>
        <ModalLink
          href="https://www.naver.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </ModalLink>
        <ModalLinkText>GitHub</ModalLinkText>
      </ModalLinkBtn>
    </ModalLinkButtonBox>
  );
};

export default ModalButton;
