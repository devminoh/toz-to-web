import styled from 'styled-components';
import NotoSansBold from '../fonts/NotoSansKR-Bold.woff'

export const AppContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(127, 188, 233, 1);
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

export const LogoImg = styled.img`
  height: 35px;
  /* width: 55px; */
  /* border: 1px solid black; */
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
    font-family: 'Noto Sans';
    src: local('Noto Sans') url(${NotoSansBold}) format('woff');
  }
  font-size: 33px;
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

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.menu {
    background-color: rgba(255, 207, 207, 1);
  }

  &.one {
    background: url(${props => props?.path}) no-repeat;
    background-size: cover;
    border: none;
    border-radius: 0%;
    box-shadow: none;
    justify-content: center;
    display: flex;

    span {
      font-size: 20px;
      padding: 4px;
    }
  }

  &.nine {
    position: relative;
  }

  &.doubleZero {
    position: relative;
  }
`;

export const ACButton = styled(Button)`
  background: url(${props => props?.path}) no-repeat;
  background-size: 135%;
  background-position: center;
  border: none;
  /* border-radius: 0; */
  /* box-shadow: none; */
  /* padding: -30px; */

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const CalButton = styled(Button)`
  background-color: rgba(225, 255, 154, 1);
  span {
    font-size: 35px;
  }

  &.cal {
    background-color: rgba(25, 145, 208, 1);
  }
`;
export const ZeroButton = styled(Button)``;
export const NineButton = styled(Button)`
  position: absolute;
  background: url(${props => props?.path}) no-repeat;
  background-size: 100%;
  left: -12px;
  top: -17px;
  width: 74px;
  border: none;
  box-shadow: none;
`;

export const DoubleZeroButton = styled(Button)`
  position: absolute;
  background: url(${props => props?.path}) no-repeat;
  background-size: 94%;
  left: 0px;
  top: 2px;
  width: 61px;
  border: none;
  box-shadow: none;
  border-radius: 0;
`;



