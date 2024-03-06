import styled from 'styled-components';

export const customModal = {
  overlay: {
    backgroundColor: ' rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '1',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '360px',
    height: '400px',
    zIndex: '2',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px 0 0 0'
  },
};

export const TopContainer = styled.div`
  padding: 0 20px;
`;

export const Top = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: Noto Sans CJK KR;
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
`;

export const Content = styled.h3`
  font-family: Noto Sans CJK KR;
  font-size: 13px;
  font-weight: 200;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
`;

export const AutoTheme = styled.div`
  width: 70px;
  height: 70px;
  margin-top: 5px;
  border: 1.5px solid rgba(238, 238, 238, 1);
  border-radius: 10px;
  cursor: pointer;
  background: conic-gradient(
      from 180deg at 50% 50%,
      #e86938 -0.55deg,
      #a2d0a2 90.29deg,
      #77b8e8 179.39deg,
      #753fbd 269.14deg,
      #e86938 359.45deg,
      #a2d0a2 450.29deg
    ),
    linear-gradient(0deg, #eeeeee, #eeeeee);
`;

export const Period = styled.div`
  background-color: rgba(238, 238, 238, 1);
  border-radius: 55px;
  height: fit-content;
  padding: 5px 15px;
  font-size: 13px;
  cursor: pointer;
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

  ${({ isSelected }) =>
    isSelected &&
    `
      background-color: rgba(0, 0, 0, 0.2);
    `}
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  button {
    width: 50%;
    height: 54px;
    top: 638px;
    font-family: Noto Sans CJK KR;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.cancle {
      background: rgba(238, 238, 238, 1);
    }
    &.save {
      color: rgba(255, 255, 255, 1);
      background: rgba(43, 43, 43, 1);
    }
  }
`;


