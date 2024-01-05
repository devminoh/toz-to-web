import React, { useState } from 'react';
import * as style from '../styles/mainStyle';
import menu from '../image/ic-menu.png';
import ball from '../image/ball.svg';
import ausCap from '../image/cap/ausopen-cap.svg';
import ausTrophy from '../image/Trophy/ausTrophy.svg';
import ausBand from '../image/band/ausopen-band.svg';
import del from '../image/del.svg'

const Button = ({
  calc,
  setCalc,
  operation,
  setOperation,
  prevCalc,
  setPrevCalc,
  screen,
  setScreen,
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
          setCalc(String(parseFloat(calc) * -1));
          break;
        case 'percent':
          setCalc(String(parseFloat(calc) / 100));
          break;
        case 'delete':
          const str = String(calc).slice(0,-1);
          setCalc((prev)=> str);
          setScreen(String(screen).slice(0,-1));
          break;
        case 'dot':
          calc.includes('.') ? 
            setCalc(calc) : 
            setCalc(calc + '.') 
            setScreen(prev => prev + '.');
          break;
        case 'equal':
          setCalc(String(calculator(operation, prevCalc, calc)));
          break;
      }
    }
  };
  return (
    <style.ButtonContainer>
      <style.ACButton onClick={clickBtn} path={ball} value="AC">
        AC
      </style.ACButton>
      <style.CalButton onClick={clickBtn} value="plusminus">
        +/-
      </style.CalButton>
      <style.CalButton onClick={clickBtn} value="percent">
        %
      </style.CalButton>
      <style.CalButton onClick={clickBtn} value="delete">
        <span>
          <img src={del} alt="delete" />
        </span>
      </style.CalButton>
      <style.Button onClick={clickBtn} className="theme" value="theme">
        <span onClick={clickBtn} value="theme">
          <img onClick={clickBtn} value="theme" src={menu} alt="theme" />
        </span>
      </style.Button>
      <style.Button onClick={clickBtn} value="7">
        7
      </style.Button>
      <style.Button onClick={clickBtn} value="8">
        8
      </style.Button>
      <style.Button onClick={clickBtn} className="nine" value="9">
        <style.NineButton path={ausCap} value="9"></style.NineButton>9
      </style.Button>
      <style.CalButton onClick={clickBtn} value="÷">
        ÷
      </style.CalButton>
      <style.CalButton onClick={clickBtn} className="equal" value="equal">
        =
      </style.CalButton>
      <style.Button onClick={clickBtn} value="4">
        4
      </style.Button>
      <style.Button onClick={clickBtn} value="5">
        5
      </style.Button>
      <style.Button onClick={clickBtn} value="6">
        6
      </style.Button>
      <style.CalButton onClick={clickBtn} value="x">
        x
      </style.CalButton>
      <style.Button
        onClick={clickBtn}
        className="one"
        path={ausTrophy}
        value="1"
      >
        1
      </style.Button>
      <style.Button onClick={clickBtn} value="2">
        2
      </style.Button>
      <style.Button onClick={clickBtn} value="3">
        3
      </style.Button>
      <style.CalButton onClick={clickBtn} value="-">
        -
      </style.CalButton>
      <style.Button onClick={clickBtn} value="0">
        0
      </style.Button>
      <style.Button onClick={clickBtn} className="doubleZero" value="00">
        <style.DoubleZeroButton
          path={ausBand}
          value="00"
        ></style.DoubleZeroButton>
        00
      </style.Button>
      <style.Button onClick={clickBtn} value="dot">
        .
      </style.Button>
      <style.CalButton onClick={clickBtn} value="+">
        +
      </style.CalButton>
    </style.ButtonContainer>
  );
};

export default Button;
