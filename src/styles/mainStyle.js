import styled from 'styled-components';
// import ball from '../../public/images/ball.png'
import NotoSansBold from '../fonts/NotoSansKR-Bold.woff'

export const AppContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(127, 188, 233, 1);
  ${props=> {
    return (props.theme = "aus"
      ? "background-color: rgba(127, 188, 233, 1)"
      : (props.theme = "us"
          ? "background-color: rgba(162, 208, 162, 1)"
          : (props.theme = "wimbledon"
              ? "background-color: rgba(117, 63, 189, 1)"
              : "background-color: rgba(232, 105, 56, 1)")));
  }}
;
`;

export const Line = styled.div`
  position: absolute;
  width: 9.6px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.16);

  &.firstLine {
    left: 5%;
  }
  &.secondLine {
    left: 35%;
  }
  &.thirdLine {
    left: 50%;
  }
  &.fourthLine {
    left: 65%;
  }
  &.fifthLine {
    left: 95%;
  }
`;

export const RowLine = styled.div`
  position: absolute;
  height: 13.33px;
  width: 1440px;
  background: rgba(255, 255, 255, 0.16);

  &.firstLine {
    top: 10%;
  }
  &.secondLine {
    top: 50%;
  }
  &.thirdLine {
    top: 90%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 573px;
  /* border: 1px solid red; */
  background: rgba(127, 188, 233, 1);
  z-index: 1;
`;

export const LogoImg = styled.image`
  height: 55px;
  width: 55px;
  border: 1px solid black;
`

export const Cal = styled.div`
  width: 330px;
  height: 137px;
  border-radius: 24px;
  border: 1.5px solid #000000;
  margin: 20px 0;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.25) inset;
  filter: drop-shadow(2px 2px 1px 0px rgba(255, 255, 255, 0.3));
  // box-shadow: -2px -2px 2px 0px rgba(255, 255, 255, 0.14);
`; 

//buttons
export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
`;

export const Button = styled.button`
  width: 58px;
  height: 58px;
  border: 1.5px solid rgba(0, 0, 0, 1);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 4px 6px 8px 0px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;

  @font-face {
    font-family: "Noto Sans";
    src: local("Noto Sans") url(${NotoSansBold}) format("woff");
  }
  font-size: 25px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.05em;
  text-align: center;
  font-family: Noto Sans;
  -webkit-text-stroke: 1.5px #000000;
  color: #ffffff;

  &:nth-child(10) {
    grid-column: 5/6;
    grid-row: 2/6;
    height: 247px;
    border-top-left-radius: 29px;
    border-top-right-radius: 29px;
    border-bottom-left-radius: 29px;
    border-bottom-right-radius: 29px;
  }
`;

export const ACButton = styled(Button)`
  background-image: url("public/images/ball.png");
`;
export const CalButton = styled(Button)``;
export const ZeroButton = styled(Button)``;



