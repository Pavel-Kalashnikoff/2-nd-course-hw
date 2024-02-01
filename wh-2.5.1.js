function minNumber(a, b) {
  return Math.min(a, b);
}
console.log(minNumber(8, 4));
console.log(minNumber(9, 2));

function even (nubmer) {
	if (nubmer % 2 === 0) {
		return 'Четное число';
	} else {
		return 'Нечетное число';
	} 
}
console.log (even (8));
console.log (even (7));


function squarNumber(number) {
	let squar = number * number;
	console.log ("Квадрат числа", number, "это", squar);
}

// function squar(number) {
// 	let result = number ** 2;
// 	return result
// }

// console.log (squar(5));
// console.log (squar(9));