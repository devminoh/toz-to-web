import { Alert } from './alert';

 const number = ['0', '00', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const oper = ['÷', 'x', '+', '-'];

  const calculator = (operation, prevCalc, calc) => {
    const nowSum = parseFloat(calc);
    switch (operation) {
      case '+':
        return prevCalc + nowSum;
      case '-':
        return prevCalc - nowSum;
      case '÷':
        return prevCalc / nowSum;
      case 'x':
        return prevCalc * nowSum;
      default:
        return nowSum;
    }
  };

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
      theme
    },
  ) => {
    const value = e.target.value || e.target.alt || e.target?.firstChild.alt;
    console.log(value);

    if (number.includes(value)) {
      setCalc(prev => (prev === '0' ? value : prev + value));
      setScreen(prev => prev + value);
      return;
    } else if (oper.includes(value)) {
      setScreen(prev => prev + value);

      if (operation && prevCalc !== null) {
        const currentPriority =
          value === '+' || value === '-'
            ? 1
            : value === 'x' || value === '÷'
              ? 2
              : 0;
        const prevPriority =
          operation === '+' || operation === '-'
            ? 1
            : operation === 'x' || operation === '÷'
              ? 2
              : 0;
        if (currentPriority <= prevPriority) {
          const result = calculator(operation, prevCalc, parseFloat(calc));
          setPrevCalc(result);
          setCalc('0');
        } else {
          setPrevCalc(parseFloat(calc));
          setCalc('0');
        }
        setOperation(value);
      } else {
      setPrevCalc(parseFloat(calc));
      setCalc('0');
      setOperation(value);
      //   // 현재 연산자가 * 또는 / 이면서 이전 연산자가 + 또는 - 인 경우
      //   if (['*', '/'].includes(value) && ['+', '-'].includes(operation)) {
      //     // 이전 연산 결과에 현재까지의 계산을 적용
      //     const result = calculator(operation, prevCalc, parseFloat(calc));
      //     setPrevCalc(result);
      //     setCalc('0');
      //   } else {
      //     // 그 외의 경우는 현재까지의 계산 결과를 이용하여 새로운 연산 시작
      //     setPrevCalc(parseFloat(calc));
      //     setCalc('0');
      //   }
      //   setOperation(value);
      // } else {
      //   setPrevCalc(parseFloat(calc));
      //   setCalc('0');
      //   setOperation(value);
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
          const color =
            theme === 'aus'
              ? 'rgba(25, 145, 208, 1)'
              : theme === 'us'
                ? 'rgba(0, 40, 140, 1)'
                : theme === 'wimbledon'
                  ? 'rgba(0, 148, 79, 1)'
                  : 'rgba(5, 72, 47, 1)';

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
            //첫번째 연산자로 끝나는경우
            if (newScreen.match(/[-+*/]$/)) {
              Alert('error', '올바르지 않은 계산식입니다.', color);
              return;
            } else {
              setScreen(newScreen);
            }
          } else {
            // alert('올바른 숫자가 없습니다.');
            Alert('error', '올바른 숫자가 없습니다.', color);
          }
          setCalc(String(parseFloat(calc) * -1));
          break;

        case 'percent':
          setCalc(String(parseFloat(calc) / 100));
          break;

        case 'delete':
          const str = String(calc).slice(0, -1);
          // setCalc(prev => str);
          setCalc(prev => (str === '' ? '0' : str));
          // setScreen(String(screen).slice(0, -1));
          setScreen(prev => String(prev).slice(0, -1));
          break;

        case 'dot':
          // calc.includes('.') ? setCalc(calc) : setCalc(calc + '.');
          calc.includes('.') ? setCalc(calc) : setCalc(prev => prev + '.');
          setScreen(prev => prev + '.');
          break;

        case 'equal':
          // setCalc(String(calculator(operation, prevCalc, calc)));
          const result = calculator(operation, prevCalc, parseFloat(calc));
          setCalc(String(result));
          setScreen('');
          setOperation('');
          setPrevCalc(null);
          break;
      }
    }
  };
