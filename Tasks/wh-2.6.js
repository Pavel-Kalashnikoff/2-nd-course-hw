let Meaning = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < Meaning.length; i++) {
	if (Meaning[i] === 10) {
		break;
	}	
	console.log(Meaning[i]);
}

let Meaning2 = [1, 5, 4, 10, 0, 3];
console.log(Meaning2.indexOf(4));

let array3 = [1, 3, 5, 10, 20];
console.log(array3.join(' '))



let arr = [];
for (let iArr = 0; iArr < 3; iArr++) {
	arr[iArr] = [] 
	
	for (let j = 0; j < 3; j++) {
		arr[iArr].push(j+1);
	}
}
console.log(arr);
// Решил с помощью поисковика. Не до конца понял логику. Требуется объяснение этой задачи

let two = [1, 1, 1];
two.push(2, 2, 2)
console.log(two);

let arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
// console.log(arr6);
arr6.splice(5);
console.log(arr6);

Game()

function Game () {
	let arrGame = [9, 8, 7, 6, 5];
	let num = prompt("Угадайте и введите цифру:");
	if (arrGame.includes(Number(num))) {
		alert("Йоу, ты угадал цифру!")
	} else {
		alert("Не угадал((")
	}
}

const span = 'abcdef';
const revSpan = span.split('').reverse().join(''); //  Круто, что можно писать сразу несколько методов
console.log(revSpan); 


const matrix = [
	[1, 2, 3],
	[4, 5, 6],
];
const arrMatrix = matrix[0].concat(matrix[1]);
console.log(arrMatrix);


const arbitrary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number = 0; number < arbitrary.length - 1; number++) {
	console.log(number);
	let n1 = arbitrary[number];
	let n2 = number + 1;
	let result = n1 + n2;
	console.log(result);
}
// С первого раза задание не понял. Но вроде как сделать правильно.

function square (array) {
	const sum = whole.map((array) => array * array);
		return sum;
}
const whole = [1, 2, 3, 4, 5];
const result = square(whole);
console.log(result);



function getLengthWords(word) {
	const getWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
	const get = getWords.map((word) => word.length);
	return get;
}
const res = getLengthWords();
console.log(res);


function filterPositive(array) {
	const negativ = array.filter((el) => el < 0);
	return negativ;
}
const n1 = [-1, 0, 5, -10, 56];
const n2 = [-25, 25, 0, -1000, -2];
const r = filterPositive(n1);
const r2 = filterPositive(n2);
console.log(r);
console.log(r2);