import React from 'react';
import * as style from '../styles/screenStyle';

const Screen = ({ calc, screen, theme }) => {
  const calcNum = calc
    .substring(0, 10)
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  return (
    <style.Screen colorTheme={theme}>
      <style.Now len={screen.lenth} colorTheme={theme}>
        {screen}
      </style.Now>
      <style.Number>{calcNum}</style.Number>
    </style.Screen>
  );
};

export default Screen;