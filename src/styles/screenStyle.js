import styled from 'styled-components';
import NotoSansBold from '../fonts/NotoSansKR-Bold.woff';

const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`;
export const Screen = styled.div`
  width: 330px;
  height: 137px;
  border-radius: 24px;
  border: 1.5px solid #000000;
  margin: 20px 0;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.25) inset;
  filter: drop-shadow(2px 2px 1px 0px rgba(255, 255, 255, 0.3));
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  padding: 0 10px;

  background-color: ${props =>
    props.colortheme === 'aus'
      ? rgba(127, 188, 233, 1)
      : props.colortheme === 'us'
        ? rgba(134, 167, 228, 1)
        : props.colortheme === 'wimbledon'
          ? rgba(117, 63, 189, 1)
          : rgba(232, 105, 56, 1)};
`;

export const Number = styled.h1`
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
`;

export const Now = styled.div`
  @font-face {
    font-family: 'Noto Sans';
    src: local('Noto Sans') url(${NotoSansBold}) format('woff');
  }
  font-size: 25px;
  font-weight: 700;
  /* line-height: 29px; */
  letter-spacing: 0.05em;
  text-align: center;
  font-family: Noto Sans;
  -webkit-text-stroke: 1.5px #000000;
  color: #ffffff;
  margin: 10px 0;
  width: 310px;
  display: flex;
  justify-content: flex-end;
  word-break: break-all;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(255, 255, 255, 0.16);
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props =>
      props.colortheme === 'aus'
        ? rgba(127, 188, 233, 1)
        : props.colortheme === 'us'
          ? rgba(134, 167, 228, 1)
          : props.colortheme === 'wimbledon'
            ? rgba(117, 63, 189, 1)
            : rgba(232, 105, 56, 1)};
    border-radius: 20px;
  }
`;
