import { Alert2 } from "./alert";
const oper = ['+', '-', 'x', '÷'];

export const stackCalc = (fixScreen) => {
  let stack = [];
console.log(fixScreen)
  for (let i = 0; i < fixScreen.length; i++) {
    let token = fixScreen[i];

    if (/\d/.test(token) || token === '.') {
      // 숫자인지 판단
      let num = '';

      // 여러 자릿수의 숫자를 인식
      while (
        i < fixScreen.length &&
        (/\d/.test(fixScreen[i]) || fixScreen[i] === '.')
      ) {
        num += fixScreen[i];
        i++;
      }
      i--; // 한 글자 앞으로 이동
      if (num !== '') {
        stack.push(num)
      }
    } else if (oper.includes(token)) {
      // 연산자인 경우
      let a = Number(stack.pop());
      let b = Number(stack.pop());
      switch (token) {
        case '+':
          console.log(a,b)
          stack.push(b + a);
          break;
        case '-':
          stack.push(b - a);
          break;
        case 'x':
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
  return String(stack[0]);
}



//screen 받아서 연산자와 숫자사이의 공백 넣어주기
function spaceScreen(screen) {
  let formattedScreen = '';
  let currentNumber = '';

  for (let char of screen) {
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
      formattedScreen += char + ' ';
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
      postfix += c;
    }
  }

  while (stack.length > 0) {
    postfix += stack.pop();
  }
  return postfix.trim();
}
