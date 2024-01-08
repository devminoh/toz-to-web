import { Alert } from './alert';

  const number = ['0', '00', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const oper = ['÷', 'x', '+', '-'];

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
    const value = e.target.value || e.target.alt || e.target?.firstChild.alt;
    console.log('누른버튼:', value);

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

    if (number.includes(value)) {
      if (calc.length < 10) {
        setCalc(prev => (prev === '0' ? value : prev + value));
        setScreen(prev => prev + value);
        setClear('C');
      } else {
        Alert('error', '숫자는 10자리까지만 입력가능합니다.', color);
      }
      return;
    } else if (oper.includes(value)) {
      // // 현재까지의 계산식에서 괄호를 찾아 삽입
      // const lastExpressionMatch = screen.match(/[^+*/-]+$/);
      // const lastExpression = lastExpressionMatch ? lastExpressionMatch[0] : '';
      // console.log(lastExpression);
      // // 현재 입력된 연산자가 * 또는 / 이면서 이전 연산자가 + 또는 - 인 경우 괄호 삽입
      // if (['x', '÷'].includes(value) && ['+', '-'].includes(operation)) {
      //   setScreen(prev => prev + `(${lastExpression})${value}`);
      // } else {
      //   setScreen(prev => prev + value);
      // }
      setScreen(prev => prev + value);
      const result = calculator(operation, prevCalc, parseFloat(calc));
      console.log(result);

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
        const result = calculator(operation, prevCalc, parseFloat(calc));
        if (currentPriority <= prevPriority) {
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
          break;
        case 'plusminus':
          const lastNumberMatch = screen.match(/[+-]?\d+(\.\d+)?$/);

          // match 함수의 결과가 null인 경우 처리
          if (lastNumberMatch !== null) {
            const lastNumber = lastNumberMatch[0]; // 현재 표시된 계산식에서 마지막 숫자 추출

            const newLastNumber =
              parseFloat(lastNumber) * -1 > 0
                ? `+${parseFloat(lastNumber) * -1}`
                : `${parseFloat(lastNumber) * -1}`; // 부호 바꾸기

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
          setCalc(prev => (str === '' ? '0' : str));
          setScreen(prev => String(prev).slice(0, -1));
          break;

        case 'dot':
          if (!calc.includes('.')) {
            setCalc(prev => prev + '.');
            setScreen(prev => prev + '.');
          }
          break;

        case 'equal':
          // 괄호가 있는지 확인
          const hasParenthesis = /\([^)]*\)/.test(screen);

          if (hasParenthesis) {
            // 괄호가 있으면 괄호 안의 계산을 먼저 수행
            const resultWithParenthesis = calculator(
              operation,
              prevCalc,
              parseFloat(calc),
            );
            setPrevCalc(resultWithParenthesis);
            setCalc('0');
          } else {
            // 괄호가 없으면 기존의 로직을 따라 수행
            const result = calculator(operation, prevCalc, parseFloat(calc));
            setPrevCalc(parseFloat(calc));
            setCalc('0');
            if (result !== Infinity) {
              setCalc(String(result.toFixed(10).replace(/\.?0+$/, ''))); //부동소수점계산
              setScreen('');
            } else {
              Alert('error', '0으로 나눌 수 없습니다.', color);
            }
          }


          // const result = calculator(operation, prevCalc, parseFloat(calc));
          // setPrevCalc(null);

          setOperation('');
          break;
      }
    }
  };
