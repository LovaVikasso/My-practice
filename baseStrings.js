let myName = 'Vika';
let textMyName = `Мое имя ${myName}`; // в строку с обратными кавычками можно вставить переменную

function sum(a, b) {
  return a + b;
}
let textSum = `Сумма: 
 ${sum(5 + 2)}`; // в строку таже можно вставить функцию и писать строку на нескольких строчках

let transfer = `Переност текста \nна новую строку \n\t и табуляция текста, для обратного слеша используем его два раза\\,
\nтакже поступаем и с кавычками и добавляем слеш перед кавычками\"`;

myName.length //метод который вернет количество символов строке
myName[0] //V вывод конкретного сивола по его номеру, начинаем с ноля
myName[-1] //a вывод послледнего символа

myName.toUpperCase() //меняем регистр на верхний
myName.toLowerCase() //меняем регистр на нижний

myName.indexOf(чтоищем, позиция)//возвращает позицию того что ищем если (чтоищем) и возвращает -1 если не нашел
myName.indexOf('Vi') //0
myName.includes('V') // возвращает true если совпадение есть или false усли его нет. также через запятую можем провериить позицию
myName.startsWith('V') //true
myName.endsWith('q') //false

//для поиска важен регистр, поэтому при необходимости используем toLowerCase илиtoUpperCase
myName.slice() //возвращает часть строки
myName.slice(1,2) //i с начала от первой до второй буквы не включительно
myName.slice(-2,-1)//k то же самое с конца
myName.slice(1)//ika

let city = " Montreal  "
city.trim() // "Montreal"

let city = "Montreal";
city = city.replace("e", "é"); // "Montréal"


//найсти самую короткую строку в массиве
function findShort(s){
  let arr = s.split(" ").sort((a, b) => a.length - b.length);
  return arr[0].length
}

 function abbrevName(name){
return name.split(" ").map((part) => part[0].toUpperCase()).join(".")
}   //из имени и фамилии возвращает инициалы с точкой между ними             
