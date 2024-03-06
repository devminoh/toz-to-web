import { Alert, Alert2 } from './alert';
import { stackCalc, postfixScreen } from './fixScreen';

  const number = ['0', '00', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const oper = ['÷', 'x', '+', '-'];
  let lastOper = '';
  let lastNum = [];

  export const clickCalc = (
    e,
    {
      calc,
      setCalc,
      operation,
      setOperation,
      prevCalc,
      setPrevCalc,
      screen,
      setScreen,
      theme,
      setClear,
    },
  ) => {
    const value =
      e.target.value || e.target.alt || e.target.attributes.value.value;
    // console.log('누른버튼:', value);
    const color =
      theme === 'aus'
        ? 'rgba(25, 145, 208, 1)'
        : theme === 'us'
          ? 'rgba(0, 40, 140, 1)'
          : theme === 'wimbledon'
            ? 'rgba(0, 148, 79, 1)'
            : 'rgba(5, 72, 47, 1)';

    const calculator = (operation, prevCalc, calc) => {
      const nowSum = parseFloat(calc);

      switch (operation) {
        case '+':
          return prevCalc + nowSum;
        case '-':
          return prevCalc - nowSum;
        case '÷':
          if (calc === 0) {
            return Infinity; // 나누기 0의 경우 Infinity 반환
          }
          return prevCalc / nowSum;
        case 'x':
          return prevCalc * nowSum;
        default:
          return nowSum;
      }
    };

    const lastScreen = screen[screen.length - 1];

    if (number.includes(value)) {
      if(oper.includes(lastScreen)){
        setCalc('0');
      }
      if (calc.length < 10) {
        if(value === '00' || value === '0'){
          if(screen === ''){
            setCalc('0');
            setScreen('0');
          }else if(lastScreen === '0' && calc === '0'){
            setCalc('0');
            setScreen(prev => prev);
          }else if(oper.includes(lastScreen)){
            setCalc('0');
            setScreen(prev => prev +'0');
          }else {
            setCalc(prev => prev + value);
            setScreen(prev => prev + value);
          }
        }
        else if (calc === '0' && (lastScreen === '0' || screen === '')) {
          if (value !== '0') {
            setCalc(value);
            setScreen(prev => prev.slice(0, -1) + value);
          }
        }
        else {
          setCalc(prev =>
            prev === '0' || lastScreen === '' ? value : prev + value,
          );
          setScreen(prev =>
            prev === '0' || lastScreen === '' ? value : prev + value,
          );
        }
        setClear('C');
        if (operation === '=') {
          setCalc(value === '00' ? '0' : value);
          lastNum = [];
        }
      } else {
        Alert2('error', '숫자는 10자리까지만 입력가능합니다.', color);
      }
      return;
    } else if (oper.includes(value)) {
      if(screen === '' && operation !== '='){
        Alert2('error', '완성되지 않은 수식입니다.');
        setScreen('')
      }
      // 이전에 누른 버튼이 연산자가 아니거나 현재누른 버튼과 다를때만 계산
      else if (!oper.includes(lastScreen) || lastScreen !== value) {
        //계산 이후로 연산자누르면 연속해서 계산
        if (screen === '' && operation === '=') {
          setScreen(prev => String(calc));
        }

        lastOper = value;

        if (lastOper !== '') {
          setPrevCalc(parseFloat(calc));
        }
        // 마지막 연산자만 스크린에 표시되도록
        setScreen(prev => {
          const char = prev.length - 1;
          return oper.includes(prev[char]) && prev[char] !== value
            ? `${prev.slice(0, char)}${lastOper}`
            : prev + lastOper;
        });

        if (operation && prevCalc !== null) {
          const result = calculator(operation, prevCalc, parseFloat(calc));
          setPrevCalc(result);
          setOperation(value);
        } else {
          setPrevCalc(parseFloat(calc));
          setOperation(value);
        }
        // setCalc('0');
      }
    } else {
      switch (value) {
        default: //Do nothing;
        case 'AC':
          setOperation('');
          setCalc('0');
          setPrevCalc(0);
          setScreen('');
          setClear('AC');
          lastNum = [];
          lastOper = '';
          break;
        case 'plusminus':
          const lastNumberMatch = screen.match(/[+-]?\d+(\.\d+)?$/);

          // match 함수의 결과가 null인 경우 처리
          if (lastNumberMatch !== null) {
            const lastNumber = lastNumberMatch[0]; // 현재 표시된 계산식에서 마지막 숫자 추출

            const newLastNumber =
              parseFloat(lastNumber) * -1 <= 0
                ? `${parseFloat(lastNumber) * -1}`
                : `+${parseFloat(lastNumber) * -1}`; // 부호 바꾸기

            const newScreen = screen.replace(
              /[+-]?\d+(\.\d+)?$/,
              newLastNumber,
            );
            //첫번째 연산자로 끝나는경우
            if (newScreen.match(/[-+*/]$/)) {
              Alert('error', '올바르지 않은 계산식입니다.', color);
              return;
            } else {
              // 연산자없이 숫자만 screen에 있으면 +5가 아니라 5로 표시
              setScreen(prev =>
                newScreen[0] === '+' ? newScreen.slice(1) : newScreen,
              );
            }
          } else {
            // alert('올바른 숫자가 없습니다.');
            Alert2('error', '올바른 숫자가 없습니다.', color);
          }
          setCalc(String(parseFloat(calc) * -1));
          break;

        case 'percent':
          if(screen === ''){
            Alert2('error', '완성되지 않은 수식입니다.')
            setScreen('');
            setCalc('0');
            break;
          }
          const percentValue = String(parseFloat(calc) / 100);
          const valueLen = calc.length;

          setScreen(prev => String(prev).slice(0, -valueLen) + percentValue);
          setCalc(percentValue);
          break;

        case 'delete':
          const str = String(calc).slice(0, -1);
          // console.log(str, calc)
          setCalc(prev => (str === '' ? '0' : str));
          setScreen(prev => String(prev).slice(0, -1));
          break;

        case '.':
          if (!calc.includes('.')) {
            if (screen === '') {
              setCalc(prev => '0.');
              setScreen(prev => '0.');
            } else if (oper.includes(lastScreen)) {
              setCalc(prev => prev + '.');
              setScreen(prev => prev + '0.');
            } else {
              setCalc(prev => prev + '.');
              setScreen(prev => prev + '.');
            }
            setClear('C');
          }
          break;

        case '=':
          if (oper.includes(lastScreen)) {
            Alert2('error', '완성되지 않은 수식입니다.');
            setScreen(screen);
            return;
          }
          const result = stackCalc(postfixScreen(screen));
          setPrevCalc(parseFloat(calc));
          setCalc('0');
          if (result !== 'Infinity') {
            setCalc(result);
            setScreen('');
          } else {
            // /0일경우
            setScreen(screen);
          }
          // equal이후로 연속계산하기
          // if (lastOper !== '' && operation === '=') {
          //   lastNum.push(prevCalc);
          //   const lastResult = calculator(
          //     lastOper,
          //     parseFloat(calc),
          //     lastNum[0],
          //   )
          //     .toFixed(10)
          //     .replace(/\.?0+$/, '');
          //   setCalc(lastResult);
          //   setScreen('');
          // }
          setOperation(value);
          break;
      }
    }
  };
