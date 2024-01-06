import React, { useState } from 'react';
import * as style from '../styles/mainStyle';
import CustomModal from './Modal';

//이미지
import menu from '../image/ic-menu.png';
import del from '../image/del.svg'
import ball from '../image/ball.svg';

import ausCap from '../image/cap/ausCap.svg';
import ausTrophy from '../image/Trophy/ausTrophy.svg';
import ausBand from '../image/band/ausBand.svg';

import usCap from '../image/cap/usCap.svg';
import usTrophy from '../image/Trophy/usTrophy.svg';
import usBand from '../image/band/usBand.svg';

import rolCap from '../image/cap/rolCap.svg';
import rolTrophy from '../image/Trophy/rolTrophy.svg';
import rolBand from '../image/band/rolBand.svg';

import wimCap from '../image/cap/wimCap.svg';
import wimTrophy from '../image/Trophy/wimTrophy.svg';
import wimBand from '../image/band/wimBand.svg';

const Button = ({
  calc,
  setCalc,
  operation,
  setOperation,
  prevCalc,
  setPrevCalc,
  screen,
  setScreen,
  theme,
  setTheme,
}) => {
  const number = ['0', '00', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const oper = ['÷', 'x', '+', '-'];

  const calculator = (operation, prevCalc, calc) => {
    const nowSum = parseFloat(calc);
    if (operation === '+') {
      return prevCalc + nowSum;
    }
    if (operation === '-') {
      return prevCalc - nowSum;
    }

    if (operation === '÷') {
      return prevCalc / nowSum;
    }

    if (operation === 'x') {
      return prevCalc * nowSum;
    }
    return 0;
  };

  const clickBtn = e => {
    const value = e.target.value || e.target.alt || e.target?.firstChild.alt;
    console.log(value);

    if (number.includes(value)) {
      setCalc(calc => String(parseFloat(calc + value)));
      setScreen(prev => prev + value);
      return;
    } else if (oper.includes(value)) {
      setPrevCalc(() => parseFloat(calc));
      setScreen(prev => prev + value);
      setCalc('0');
      switch (value) {
        case '÷':
          setOperation('÷');
          break;
        case 'x':
          setOperation('x');
          break;
        case '+':
          setOperation('+');
          break;
        case '-':
          setOperation('-');
          break;
        default: // Do nothing
      }
    } else {
      switch (value) {
        default: //Do nothing;
        case 'AC':
          setOperation('');
          setCalc('0');
          setPrevCalc(0);
          setScreen('');
          break;
        case 'plusminus':
          const lastNumberMatch = screen.match(/[+-]?\d+(\.\d+)?$/);

          // match 함수의 결과가 null인 경우 처리
          if (lastNumberMatch !== null) {
            const lastNumber = lastNumberMatch[0]; // 현재 표시된 계산식에서 마지막 숫자 추출

            const newLastNumber =
              parseFloat(lastNumber) * -1 > 0
                ? `+${parseFloat(lastNumber) * -1}`
                : `(${parseFloat(lastNumber) * -1}`; // 부호 바꾸기

            const newScreen = screen.replace(
              /[+-]?\d+(\.\d+)?$/,
              newLastNumber,
            );

            if (newScreen.match(/[-+*/]$/)) {
              alert('올바르지 않은 계산식입니다.');
              return;
            } else {
              setScreen(newScreen);
            }
          } else {
            alert('올바른 숫자가 없습니다.');
          }
          
          setCalc(String(parseFloat(calc) * -1));
          break;
        case 'percent':
          setCalc(String(parseFloat(calc) / 100));
          break;
        case 'delete':
          const str = String(calc).slice(0, -1);
          setCalc(prev => str);
          setScreen(String(screen).slice(0, -1));
          break;
        case 'dot':
          calc.includes('.') ? setCalc(calc) : setCalc(calc + '.');
          setScreen(prev => prev + '.');
          break;
        case 'equal':
          setCalc(String(calculator(operation, prevCalc, calc)));
          setScreen('');
          break;
      }
    }
  };

  //테마모달
  const [modalOpen, setModalOpen] = useState(false);
  const clickModal = () => {
    setModalOpen(!modalOpen);
  };
  
  const cap =
    theme === 'aus' ? ausCap : theme === 'us' ? usCap : theme === 'wimbledon' ? wimCap : rolCap;
  const band =
    theme === 'aus'
      ? ausBand
      : theme === 'us'
        ? usBand
        : theme === 'wimbledon'
          ? wimBand
          : rolBand;
  const Trophy =
    theme === 'aus'
      ? ausTrophy
      : theme === 'us'
        ? usTrophy
        : theme === 'wimbledon'
          ? wimTrophy
          : rolTrophy;

  const buttons = [
    {'name': '+/-', 'value': 'plusminus'},
    {'name': '%', 'value': 'percent'}
  ]
  
  return (
    <style.ButtonContainer>
      <style.ACButton onClick={clickBtn} path={ball} value="AC">
        AC
      </style.ACButton>
      {buttons.map(el => (
        <style.CalButton
          onClick={clickBtn}
          colortheme={theme}
          value={el.value}
        >
          {el.name}
        </style.CalButton>
      ))}
      <style.CalButton onClick={clickBtn} colortheme={theme} value="delete">
        <span>
          <img src={del} alt="delete" />
        </span>
      </style.CalButton>
      <style.Button
        onClick={clickModal}
        className="theme"
        value="theme"
        colortheme={theme}
      >
        <span onClick={clickModal} value="theme">
          <img onClick={clickModal} value="theme" src={menu} alt="theme" />
        </span>
        {modalOpen ? (
          <CustomModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setTheme={setTheme}
            theme={theme}
          />
        ) : null}
        {/* <CustomModal modalOpen={modalOpen} setModalOpen={setModalOpen} /> */}
      </style.Button>
      <style.Button onClick={clickBtn} value="7">
        7
      </style.Button>
      <style.Button onClick={clickBtn} value="8">
        8
      </style.Button>
      <style.Button onClick={clickBtn} className="nine" value="9">
        <style.NineButton path={cap} value="9"></style.NineButton>9
      </style.Button>
      <style.CalButton onClick={clickBtn} colortheme={theme} value="÷">
        ÷
      </style.CalButton>
      <style.EqualButton
        onClick={clickBtn}
        colortheme={theme}
        className="equal"
        value="equal"
      >
        =
      </style.EqualButton>
      <style.Button onClick={clickBtn} value="4">
        4
      </style.Button>
      <style.Button onClick={clickBtn} value="5">
        5
      </style.Button>
      <style.Button onClick={clickBtn} value="6">
        6
      </style.Button>
      <style.CalButton onClick={clickBtn} colortheme={theme} value="x">
        x
      </style.CalButton>
      <style.Button onClick={clickBtn} className="one" path={Trophy} value="1">
        1
      </style.Button>
      <style.Button onClick={clickBtn} value="2">
        2
      </style.Button>
      <style.Button onClick={clickBtn} value="3">
        3
      </style.Button>
      <style.CalButton onClick={clickBtn} colortheme={theme} value="-">
        -
      </style.CalButton>
      <style.Button onClick={clickBtn} value="0">
        0
      </style.Button>
      <style.Button onClick={clickBtn} className="doubleZero" value="00">
        <style.DoubleZeroButton path={band} value="00"></style.DoubleZeroButton>
        00
      </style.Button>
      <style.Button onClick={clickBtn} value="dot">
        .
      </style.Button>
      <style.CalButton onClick={clickBtn} colortheme={theme} value="+">
        +
      </style.CalButton>
    </style.ButtonContainer>
  );
};

export default Button;
