import {
  ModalLinkButtonBox,
  ModalLink,
  ModalLinkBtn,
  ModalLinkText,
  ModalCloseBtn,
} from "../ModalButton/styles";

import { IoCloseOutline } from "react-icons/io5";
import { BsLink45Deg } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

import { WorkModalProps } from "../../styles/common";

const ModalButton = ({ onClose, projectData }: WorkModalProps) => {
  return (
    <ModalLinkButtonBox>
      <ModalCloseBtn onClick={onClose}>
        <IoCloseOutline />
      </ModalCloseBtn>
      <section>
        <ModalLinkBtn>
          <ModalLink
            href={projectData?.link.deploy}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLink45Deg />
          </ModalLink>
          <ModalLinkText>배포 링크</ModalLinkText>
        </ModalLinkBtn>
        <ModalLinkBtn>
          <ModalLink
            href={projectData?.link.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </ModalLink>
          <ModalLinkText>GitHub</ModalLinkText>
        </ModalLinkBtn>
      </section>
    </ModalLinkButtonBox>
  );
};

export default ModalButton;
