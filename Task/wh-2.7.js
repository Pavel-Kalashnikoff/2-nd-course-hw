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
function search() {
	let searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];
	let searchCat = ['Кошка', 'Комар'];

	return searchStart.filter(word => searchCat.includes(word));
}

const res = search();
console.log(res);
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


//Задание №5 
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