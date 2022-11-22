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


function stringToArray(string){
return string.split(' ')
} //разделить строку на отдельные слова и представить в виде нового массива


function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  for(let i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  return format;
} // массив с числами преобразуем в формат записи телефонного номера


function accum(s) {
  var letters = s.split(''), words = [];

  for(var i = 0; i < letters.length; i++) {
    words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }

  return words.join('-');
} /*accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"*/

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}// вернуть среднюю букву в строке


function findShort(s){
  let arr = s.split(" ").sort((a, b) => a.length - b.length);
  return arr[0].length
}// в строке разных слов найти самое короткое и вернуть его длину
