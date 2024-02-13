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

