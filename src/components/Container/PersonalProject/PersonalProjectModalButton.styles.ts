import styled from "styled-components";
import { Desc20 } from "../../../styles/fontStyle";

export const ModalLinkButtonBox = styled.article`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  right: 2%;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    top: -1px;
    right: 0px;
    padding: 0 14px;
    background: #fff;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 768px) {
      flex-direction: row;
      gap: 12px;
    }
  }
`;

export const ModalCloseBtn = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #333;
  border-radius: 50%;
  ${Desc20}
`;
export const ModalLinkBtn = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const ModalLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #333;
  background: #fff;
  border-radius: 50%;
  ${Desc20}
  @media (max-width: 768px) {
    border: 1px solid #d2d2d2;
  }
`;

export const ModalLinkText = styled.article`
  color: #fff;
  font-size: 13px;
  @media (max-width: 768px) {
    display: none;
  }
`;
