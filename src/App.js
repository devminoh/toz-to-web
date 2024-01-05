import React, { useState } from 'react';
import * as style from './styles/mainStyle';

//이미지
import ausopenLogo from './image/logo/ausopen-logo.svg'
import usopenLogo from './image/logo/usopen-logo.svg';
import GlobalStyles from "./styles/globalStyles";

//component
import Screen from './components/Screen';
import Button from './components/Button';

function App() {
  // theme
  const [theme, setTheme] = useState('aus');
  // const theme = ['aus', 'us', 'wimbledon', 'roland'];

  //calc
  const [screen, setScreen] = useState('');
  const [calc, setCalc] = useState('0');
  const [prevCalc, setPrevCalc] = useState(0);
  const [operation, setOperation] = useState('');
  console.log('calc :', calc, 'prev :', prevCalc, 'op :', operation);

  return (
    <style.AppContainer colorTheme={theme}>
      <GlobalStyles />
      <style.MainContainer colorTheme={theme}>
        <style.LogoImg src={ausopenLogo} alt="logo" />
        <Screen calc={calc} screen={screen} theme={theme} />
        <Button
          calc={calc}
          setCalc={setCalc}
          operation={operation}
          setOperation={setOperation}
          prevCalc={prevCalc}
          setPrevCalc={setPrevCalc}
          screen={screen}
          setScreen={setScreen}
          theme={theme}
          setTheme={setTheme}
        />
      </style.MainContainer>
      <style.Line className="firstLine" />
      <style.Line className="secondLine" />
      <style.Line className="thirdLine" />
      <style.Line className="fourthLine" />
      <style.Line className="fifthLine" />
      <style.RowLine className="firstLine" />
      <style.RowLine className="secondLine" />
      <style.RowLine className="thirdLine" />
    </style.AppContainer>
  );
}

export default App;
