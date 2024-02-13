const a = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < a.length; i++) {
	console.log(a[i]);
	if (a[i] === 10) {
		break;
	}
}

const arr = [1, 5, 4, 10, 0, 3];
const resArr = arr.indexOf(4);
console.log(resArr);

const arrey = [1, 3, 5, 10, 20];
let space = arrey.join(' ');
console.log (space);

const nestedArray = [];
let row = 3; //кол-во строчек
let column = 3; // кол-во столбцов в массиве
let meaning = 1 // цифра которую я буду добовлять в массив
for (let i = 0; i < row; i++) {
	const row_2 = [] //создал строчку
	for (let i_2 = 0; i_2 < column; i_2++) {
		row_2.push(meaning);
	}
	nestedArray.push(row_2)
}
console.log(nestedArray);

const arreyPush = [1, 1, 1];
// console.log(arreyPush.push(2, 2, 2)); здесь мы изменяем длинну массива и в консоль выводится только 6
arreyPush.push(2, 2, 2);
console.log(arreyPush);

const arrSort = [9, 8, 7, 'a', 6, 5];
// arrSort.sort ();
// arrSort.splice(5);
// console.log(arrSort);
console.log(arrSort.sort (),arrSort.splice(5)) // Решил сократить написание, так будет корректно? 

Game()
function Game() {
	const arrGame = [9, 8, 7, 6, 5];
	let p = prompt('Попробуй угадать число в невидимом массиве');
	if (arrGame.includes(p)) {
		alert('Угадал');
	} else {
		alert ('Не угадал');
	}
}

const abcdef = 'abcdef';
const res = abcdef.split('').reverse().join('');
console.log(res);

const arrey2 = [[1, 2, 3], [4, 5,6]];
const flatA = arrey2.flat();
console.log(flatA);

const Whole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < Whole.length - 1; index++) {
	const a = Whole[index];
	const b = Whole[index + 1];
  const sum = a + b;
  console.log(sum);
}

const Number = [1, 2, 3, 4,]
function square(Number) {
	const square = Number.map(n => n ** 2)
	return square
}
const resul = square(Number);
console.log(resul);


function Word(arrey) {
	const Wordlen = arrey.map(len => len.length);
	 return Wordlen
}
const arreyLen = ['слово', '', 'слог', 'длинное предложение', 'буква']
const len = Word(arreyLen);
console.log(len);


function filterPositive(array) {
	const negativ = array.filter(n => n < 0);
  return negativ;
}

console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]

