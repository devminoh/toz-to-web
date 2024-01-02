import * as style from './styles/mainStyle';
import ausopenLogo from './images/usopen-logo.png';
import GlobalStyles from "./styles/globalStyles";
// import menu from '../public/images/ic-menu.png'

function App() {
  const logoUrl = ausopenLogo;
  const theme = ['aus', 'us', 'wimbledon', 'roland'];

  return (
    <style.AppContainer theme="us">
      <GlobalStyles />
      <style.MainContainer>
        <style.LogoImg src={logoUrl} alt="logo" />
        <style.Cal></style.Cal>
        <style.ButtonContainer>
          <style.ACButton>
            <span>AC</span>
          </style.ACButton>
          <style.Button>+/-</style.Button>
          <style.CalButton value="%">%</style.CalButton>
          <style.CalButton value="del">del</style.CalButton>
          <style.Button>
            <image src="/images/ic-menu.png" alt="menu"></image>
          </style.Button>
          <style.Button value={7}>7</style.Button>
          <style.Button value={8}>8</style.Button>
          <style.Button value={9}>9</style.Button>
          <style.CalButton value="/">/</style.CalButton>
          <style.CalButton>=</style.CalButton>
          <style.Button value={4}>4</style.Button>
          <style.Button value={5}>5</style.Button>
          <style.Button value={6}>6</style.Button>
          <style.CalButton value="x">x</style.CalButton>
          <style.Button value={1}>1</style.Button>
          <style.Button value={2}>2</style.Button>
          <style.Button value={3}>3</style.Button>
          <style.CalButton value="-">-</style.CalButton>
          <style.ZeroButton value={0}>0</style.ZeroButton>
          <style.ZeroButton value={0}>00</style.ZeroButton>
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
