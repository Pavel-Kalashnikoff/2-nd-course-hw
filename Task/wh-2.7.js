let RegUp = 'js'.toUpperCase();
console.log(RegUp);


// Задание №2

// let a = ['Кошка', 'Кит', 'Комар', 'Носорог']; // ['кошка', 'комар']
// let b = 'ко';

// function search() {
// 	let searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог']; // ['кошка', 'комар']
// 	let searchCat = ['Кошка', 'Комар'];
// 	let foundW = [];
// 	searchStart.forEach((word) => {
// 		if (searchCat.includes(word.toLowerCase())) {
// 			foundW.push(word) // Помещаем, так скажем, найденные слова в переменную found
// 		}
// 	});
// 	return foundW;
// }
// const res = search();
// console.log(res);

// let searchStart = [...a, b]; // Здесь была ошибка, я не использовал оператор ..., чтобы объединить массив и строку в один массив
// let searchCat = ['Кошка', 'Комар'];
// // console.log(searchStart);  проверил что выводится в консоль
// searchStart.forEach((word) => {
// 	if (searchCat.includes(word.toLowerCase())) {
// 		console.log(word);
// 	}
// })
function search(arrey, str) { // два параметра принимающих массив сторк и строчку
	return arrey.filter(el => el.toLowerCase().startsWith(str.toLowerCase())) 
}
const res_1 = search(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
const res_2 = search(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); 
const res_3 = search(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); 

console.log(res_1);
console.log(res_2);
console.log(res_3);
// не очень понял, но очень интересно. Необходимо потренироваться с методами




//Задание №3 - Округлите число
// let number = 32.58884
// let a = Math.floor(number);
// console.log(a);
// let b = Math.ceil(number);
// console.log(b);
// let c = Math.round(number);
// console.log(c);
// Решил сделать код более компактно 
let number = 32.58884
let a = Math.floor(number);
let b = Math.ceil(number);
let c = Math.round(number);

console.log(a);
console.log(b);
console.log(c);


// Здание №4 Найти наименьшее и наибольшее число
const arrNumber = [52, 53, 49, 77, 21, 32];
const maxNumber = Math.max(...arrNumber);
console.log (maxNumber);
const minNumber = Math.min(...arrNumber);
console.log (minNumber);


//Задание №5 Рандом
function random(min, max) {
	// let randomNumber = Math.random();
	// console.log(randomNumber); // Проверил.
	// return Math.random() * (max - min) + min
	// Напишу по-другому
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
} 
let result = random(0, 10);
console.log(result);

//Задание №6 функция которая возвращает массив случайных чисел от 0 до определенного числа

function getRandomArrNumber(max) {
	const randomArrNumber = [];
	max = Math.ceil(max);
	for (let i = 0; i < max / 2; i++) { // Цикл для генерации случайных чисел в пределах 3 
		let randomN = Math.floor(Math.random() * max); // Приводим к меньшему число, то которое появляется рандомно и умножается на 7
		randomArrNumber.push(randomN);
	}
	return randomArrNumber;
}
let resultArr = getRandomArrNumber(7);
console.log(resultArr);

// Задание №7 Функция принимает два числа и возвращает рандомное число в диапазоне этих чисел

function TwoNumber(min, max) {
	min = Math.floor(min);
	max = Math.ceil(max);
	return Math.floor(Math.random() * (max - min) + min);
}
let resultTwoNumber = TwoNumber(23, 467);
console.log(resultTwoNumber);
// Задания 5 и 7 похожи, берём два числа на входе и выдаём на выход рандомные числа в этом диапазоне


//Задание 8 вывести время и дату

const currentDate = new Date();
console.log(currentDate);
// Не стал усложнять себе задачу и просто вывел текущую дату и время, как и сказано в задании


// Задание 9 вывести дату с текущего момента через 73 дня

const theCurrentDate = new Date();
const current = theCurrentDate.getDate();  // присваиваем переменной текущую дату
theCurrentDate.setDate(current + 73); // устанавливаем к текущей дате сумму нашей даты и 73 дня, получаем дату через 73 дня

console.log(theCurrentDate);

// Задание 10 
function date(day, month, year) {
	const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
	let newTime = new Date()
	let newDate = new Date(year, month - 1, day);
	let hours = newTime.getHours();
	let minutes = newTime.getMinutes();
	let seconds = newTime.getSeconds();
	let fullDate = newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear()+ "-го - это был(а) " + days[newDate.getDay()];
	let time = hours + ":" + minutes + ":" + seconds;
	return [fullDate, time];
}
let reusltDate = date(25, 7, 2012);

console.log(reusltDate[0]);
console.log(reusltDate[1]);
// Не понимаю, как вывести время? 
// *Спустя нескольк часов* - Ураа, я понял как вывести время.. Господи, это же так логично,
// Мы должны вначале объявить переменную newTime и присвоить ей объявление даты
// А уже потом под переменными времени указываем какое именно исчисление надо присвоить
// Правильно ли я понимаю? 
// вообще можно немного сократить код аналогично написанию "let fullDate" но я пожалуй оставлю как есть, если будет необходимо, исправлю

//  