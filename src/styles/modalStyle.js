import styled from 'styled-components';

export const customModal = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "360px",
    height: "180px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
  },
};

export const Title = styled.h1`
  font-family: Noto Sans CJK KR;
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Theme = styled.img`
  width: 70px;
  height: 70px;
  padding: 10px;
  margin-right: 5px;
  overflow: hidden;
  border: 1.5px solid rgba(238, 238, 238, 1);
  border-radius: 10px;
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1.5px solid rgba(0, 0, 0, 1);
    outline: none;
  }
  ${({ isSelected }) => isSelected && 'border: 1.5px solid rgba(0, 0, 0, 1);'}
`;