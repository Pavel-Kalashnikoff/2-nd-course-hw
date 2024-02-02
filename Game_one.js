function GameOne() {
	let monthNumber = prompt("Напишите любой номер месяца");
	if (monthNumber === 12 || 1 || 2) {
		alert ('Значит, вам нравится зима :)');
	} else if (monthNumber === 3 || 4 || 5) {
		alert ('Значит, вам нравится весна :)');
	} else if (monthNumber === 6 || 7 || 8) {
		alert ('Значит, вам нравится лето :)');
	} else if (monthNumber === 9 || 10 || 11) {
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