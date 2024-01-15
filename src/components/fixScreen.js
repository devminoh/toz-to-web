import { Alert2 } from "./alert";
const oper = ['+', '-', 'x', '÷'];

export const stackCalc = (fixScreen) => {
  let stack = [];

  for (let i = 0; i < fixScreen.length; i++) {
    let token = fixScreen[i];

    if (
      /\d/.test(token) ||
      token === '.' ||
      (token === '-' && (i === 0 || fixScreen[i - 1] === ' '))
    ) {
      // 숫자인지 판단
      let num = '';

      // 음수판단
      let isNegative = false;
      // 음수 기호가 있는 경우
      if (token === '-' && (i === 0 || fixScreen[i - 1] === ' ')) {
        isNegative = true;
        i++; // 다음 문자로 이동
      }

      // 여러 자릿수의 숫자를 인식
      while (
        i < fixScreen.length &&
        (/\d/.test(fixScreen[i]) || fixScreen[i] === '.')
      ) {
        num += fixScreen[i];
        i++;
      }
      i--; // 한 글자 앞으로 이동

      // 음수일 경우 스택에 음수로 푸시
      if (num !== '') {
        // console.log(num, isNegative)
        stack.push(isNegative ? -Number(num) : Number(num));
      }
    } else if (oper.includes(token)) {
      // console.log(stack)
      // 연산자인 경우
      let a = Number(stack.pop());
      let b = Number(stack.pop());
      switch (token) {
        case '+':
          stack.push(b + a);
          break;
        case '-':
          stack.push(b - a);
          break;
        case 'x':
          // console.log(a, b);
          stack.push(b * a);
          break;
        case '÷':
          if (a === 0) {
            Alert2('error', '0으로 나눌 수 없습니다.');
            return 'Infinity';
          }
          stack.push(b / a);
          break;
        default:
      }
    }
  }
  //부동소수점 계산
  return String(stack[0].toFixed(10).replace(/\.?0+$/, ''));
}

//screen 받아서 연산자와 숫자사이의 공백 넣어주기
function spaceScreen(screen) {
  let formattedScreen = '';
  let currentNumber = '';

  for (let i = 0; i < screen.length; i++) {
    let char = screen[i];
    if (/\d/.test(char) || char === '.') {
      // 숫자 또는 소수점인 경우 현재 숫자에 추가
      currentNumber += char;
    } else if (oper.includes(char)) {
      // 연산자인 경우
      if (currentNumber !== '') {
        // 현재 숫자가 있다면 추가
        formattedScreen += currentNumber + ' ';
        currentNumber = ''; // 현재 숫자 초기화
      }
      // 부호인 경우 확인
      char === '-' && (i === 0 || oper.includes(screen[i - 1]))
        // ? formattedScreen += char
        ? formattedScreen += `n` // 음수일경우 n라고 표현해서 넣어줌
        : formattedScreen += char + ' ';
    } else {
      // 연산자도 숫자도 아닌 경우 (공백 등)
      if (currentNumber !== '') {
        // 현재 숫자가 있다면 추가
        formattedScreen += currentNumber + ' ';
        currentNumber = ''; // 현재 숫자 초기화
      }
      formattedScreen += char;
    }
  }

  if (currentNumber !== '') {
    // 마지막으로 남은 숫자 추가
    formattedScreen += currentNumber;
  }

  return formattedScreen.trim(); // 양 끝의 공백 제거
}


export const postfixScreen = (screen) => {
  screen = spaceScreen(screen);

  let postfix = '';
  let stack = [];

  const getPriority = operator => {
    if (operator === 'x' || operator === '÷') {
      return 2;
    } else if (operator === '+' || operator === '-') {
      return 1;
    }
    return 0; // 우선순위가 없는 경우
  };

  for (let i = 0; i < screen.length; i++) {
    let c = screen[i];

    if (oper.includes(c)) {
      while (
        stack.length > 0 &&
        getPriority(c) <= getPriority(stack[stack.length - 1])
      ) {
        postfix += ' ' + stack.pop() + ' ';
      }
      stack.push(c);
    } else {
      c === 'n' ? postfix += '-' : postfix += c
    }
  }

  while (stack.length > 0) {
    postfix += stack.pop();
  }
  return postfix.trim();
}
