import React, { useState } from 'react';
import * as style from '../styles/mainStyle';
import CustomModal from './Modal';
import { clickCalc } from './calculator';

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
  setTheme
}) => {
  const [clear, setClear] = useState('AC');
  const clickBtn = e => {
    clickCalc(e, {
      calc,
      setCalc,
      operation,
      setOperation,
      prevCalc,
      setPrevCalc,
      screen,
      setScreen,
      theme,
      setClear
    });
  };

  //테마모달
  const [modalOpen, setModalOpen] = useState(false);
  const clickModal = () => {
    setModalOpen(!modalOpen);
  };

  const cap =
    theme === 'aus'
      ? ausCap
      : theme === 'us'
        ? usCap
        : theme === 'wimbledon'
          ? wimCap
          : rolCap;
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
    { name: '+/-', value: 'plusminus' },
    { name: '%', value: 'percent' },
  ];

  return (
    <style.ButtonContainer>
      <style.ACButton onClick={clickBtn} path={ball} value="AC">
        {clear}
      </style.ACButton>
      {buttons.map(el => (
        <style.CalButton
          onClick={clickBtn}
          colortheme={theme}
          value={el.value}
          key={el.name}
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
      </style.Button>
      {[7, 8].map(el => (
        <style.Button onClick={clickBtn} value={el} key={el}>
          {el}
        </style.Button>
      ))}
      <style.Button onClick={clickBtn} className="nine" value="9">
        <style.NineButton path={cap} value="9" />9
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
      {[4, 5, 6].map(el => (
        <style.Button onClick={clickBtn} value={el} key={el}>
          {el}
        </style.Button>
      ))}
      <style.CalButton onClick={clickBtn} colortheme={theme} value="x">
        x
      </style.CalButton>
      <style.Button onClick={clickBtn} className="one" path={Trophy} value="1">
        1
      </style.Button>
      {[2, 3, '-', 0].map(el =>
        el === '-' ? (
          <style.CalButton onClick={clickBtn} colortheme={theme} value="-" key={'minus'}>
            -
          </style.CalButton>
        ) : (
          <style.Button onClick={clickBtn} value={el} key={el}>
            {el}
          </style.Button>
        ),
      )}
      <style.Button onClick={clickBtn} className="doubleZero" value="00">
        <style.DoubleZeroButton path={band} value="00" />
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
