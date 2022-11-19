function repeatStr(n, s) {
  return s.repeat(n);
} // повторение Sтсрок N количество раз

function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
} // разделить число на минимальное и максимальное и пробел между ними или
function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function check(a, x) {
  if (a.indexOf(x) !== -1) {
    return true;
  } else {
    return false;
  }
} // поиск в массиве а значение x

const check = (a, x) => a.includes(x); // тоже самое

function century(year) {
  return Math.ceil(year / 100);
} //считаем век по году

function whatday(num) {
  switch (num) {
    case 1:
      return 'Sunday';
    case 2:
      return 'Monday';
    case 3:
      return 'Tuesday';
    case 4:
      return 'Wednesday';
    case 5:
      return 'Thursday';
    case 6:
      return 'Friday';
    case 7:
      return 'Saturday';
    default:
      return 'Wrong, please enter a number between 1 and 7';
  }
} //исходя из чисел пишем день недели

function caseInSwitch(val) {
  let answer = '';
  switch (val) {
    case 1:
      answer = 'alpha';
      break;
    case 2:
      answer = 'beta';
    case 3:
      answer = 'gamma';
    case 4:
      answer = 'delta';
      return answer;
  }

  caseInSwitch(1);
} // пример switch

String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map(function (c) {
      return c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase();
    })
    .join('');
}; // новый метод для перевода строки в противоположный регистр (верхний в нижний и наоборот)

function even_or_odd(number) {
  return number % 2 ? 'Odd' : 'Even';
} // вернуть "Odd" : "Even" при вводе четного или нечетного числа

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum += arr[i];
  }
  return sum;
} // сложить все положительные читсла в массиве, если 0 то вернуть 0

function numberToString(num) {
  return num.toString();
} // преобразование числа в строку

function removeChar(str) {
  return str.substring(1, str.length - 1);
} // удалить первую и последнюю буквы строке

function basicOp(operation, value1, value2) {
  var math = 0;
  switch (operation) {
    case '+':
      math = value1 + value2;
      break;
    case '-':
      math = value1 - value2;
      break;
    case '*':
      math = value1 * value2;
      break;

    case '/':
      math = value1 / value2;
      break;
  }

  return math;
} // дано оператор и два значение. функция делает складывает два значения если оператор +

function noSpace(x) {
  return x.split(' ').join('');
} // удалить пробелы из строки
