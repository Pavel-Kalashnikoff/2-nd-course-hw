function GameOne() {
	let monthNumber = Number(prompt("Напишите любой номер месяца"));
	if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
		alert ('Значит, вам нравится зима :)');
	} else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
		alert ('Значит, вам нравится весна :)');
	} else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
		alert ('Значит, вам нравится лето :)');
	} else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
		alert ('Значит, вам нравится осень :)');
	} else if (monthNumber >= 13) {
		alert ('Вы ввели неверное значение');
	}
}
// function GameOne() {
// 	let monthNumber = prompt('Напишите любой номер месяца');
// switch (monthNumber) {
// 	case '12':
// 	case '1':
// 	case '2':
// 	alert('Значит, вам нравится зима :)');
// 	break;
// 	case '3':
// 	case '4':
// 	case '5':	
// 	alert('Значит, вам нравится весна :)');
// 	break;
// 	case '6':
// 	case '7':
// 	case '8':
// 		alert('Значит, вам нравится лето :)');
// 	break;
// 	case '9':
// 	case '10':
// 	case '11':
// 		alert('Значит, вам нравится осень :)');
// 	break;
// 	default:
// 		alert('Вы ввели неверное значение');
// 	break;
// }
// }
function GameTwo() {
	const word = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	const wordRandom = word.sort(() => Math.random() - 0.5);
	let oneEl = wordRandom[0];
	let lastEl = wordRandom[6];
	// console.log(oneEl);
	// console.log(lastEl);
	alert(wordRandom.join(', '));
	let one = prompt('Чему равнялся первый элемент массива? ');
	let last = prompt('Чему равнялся последний элемент массива? ');
	if (one.toLowerCase() === oneEl.toLowerCase() && last.toLowerCase() === lastEl.toLowerCase()) {
		alert('Поздравляю, вы успешно угадали оба элемента!');
	} else if ((one.toLowerCase() === oneEl.toLowerCase() && last.toLowerCase() !== lastEl.toLowerCase()) || (one.toLowerCase() !== oneEl.toLowerCase() && last.toLowerCase() === lastEl.toLowerCase()) ) {
		alert('Вы были близки к победе!');
	} else {
		alert('Вы угадали неверно(')
	}
}

