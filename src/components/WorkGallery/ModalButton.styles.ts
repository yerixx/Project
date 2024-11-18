import styled from "styled-components";

export const ModalLinkButtonBox = styled.article`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  right: 2.5%;

  cursor: pointer;
  .modalCloseBtn {
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
    font-size: 20px;
  }
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
  font-size: 20px;
`;

export const ModalLinkText = styled.article`
  color: #fff;
  font-size: 13px;
`;
