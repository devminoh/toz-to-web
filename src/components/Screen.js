import React, { useEffect } from 'react';
import * as style from '../styles/screenStyle';

const Screen = ({ calc, screen }) => {
  const calcNum = calc
    .substring(0, 10)
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  return (
    <style.Screen>
      <style.Now len={screen.lenth}>{screen}</style.Now>
      <style.Number>{calcNum}</style.Number>
    </style.Screen>
  );
};

export default Screen;