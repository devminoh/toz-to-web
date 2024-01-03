import * as style from './styles/mainStyle';
import ausopenLogo from './image/ausopen-logo.svg'
import usopenLogo from './image/usopen-logo.svg';
import GlobalStyles from "./styles/globalStyles";
import menu from './image/ic-menu.png';
import ball from './image/ball.svg';
import ausCap from './image/cap/ausopen-cap.svg';
import ausTrophy from './image/Trophy/ausTrophy.svg';
import ausBand from './image/band/ausopen-band.svg'

function App() {
  // const logoUrl = ausopenLogo;
  const theme = ['aus', 'us', 'wimbledon', 'roland'];

  return (
    <style.AppContainer theme="us">
      <GlobalStyles />
      <style.MainContainer>
        <style.LogoImg src={ausopenLogo} alt="logo" />
        <style.Cal></style.Cal>
        <style.ButtonContainer>
          <style.ACButton path={ball}>
            <span>AC</span>
          </style.ACButton>
          <style.CalButton value="+/-">+/-</style.CalButton>
          <style.CalButton value="%">%</style.CalButton>
          <style.CalButton value="←">
            <span className="del">←</span>
          </style.CalButton>
          <style.Button className="menu">
            <span>
              <img src={menu} alt="menu" />
            </span>
          </style.Button>
          <style.Button value={7}>7</style.Button>
          <style.Button value={8}>8</style.Button>
          <style.Button className="nine" value={9}>
            <style.NineButton path={ausCap}></style.NineButton>
            <span>9</span>
          </style.Button>
          <style.CalButton value="/">/</style.CalButton>
          <style.CalButton className="cal">=</style.CalButton>
          <style.Button value={4}>4</style.Button>
          <style.Button value={5}>5</style.Button>
          <style.Button value={6}>6</style.Button>
          <style.CalButton value="x">x</style.CalButton>
          <style.Button className="one" path={ausTrophy} value={1}>
            <span>1</span>
          </style.Button>
          <style.Button value={2}>2</style.Button>
          <style.Button value={3}>3</style.Button>
          <style.CalButton value="-">-</style.CalButton>
          <style.ZeroButton value={0}>0</style.ZeroButton>
          <style.ZeroButton className='doubleZero'  value="00">
            <style.DoubleZeroButton path={ausBand}></style.DoubleZeroButton>
            <span>00</span>
          </style.ZeroButton>
          <style.Button value=".">.</style.Button>
          <style.CalButton value="+">+</style.CalButton>
        </style.ButtonContainer>
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
