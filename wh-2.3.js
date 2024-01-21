let password = 'Original password'; 
let requested = prompt("Введите пароль");

if (requested === 'Original password') {
alert ('Пароль введен верно');
} else {
	alert ('Пароль введен неправильно');
}

let c = 22;
if (c>0 && c<10) {
	alert('Верно');
} else {
	alert ('Неверно');
}


let d = 34, e = 593;
if (d||e > 100) {
	alert ('Верно');
} else {
	alert ('Неверно');
}


let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert (parseInt(a) + parseInt(b));
// parseInt это функция преобзразования строки или числа, понял. 

let monthNumber = prompt('Напишите номер любого месяца в году');

switch (monthNumber) {
	case '12' && '1' && '2':
		console.log('Этот месяц отностится к зимнему сезону');
		break;
		case '3' && '4' && '5':
			console.log('Этот месяц отностится к весеннему сезону');
			break;
			case '6' && '7' && '8':
			console.log('Этот месяц отностится к летнему сезону');
			break;
			case '9' && '10' && '11':
			console.log('Этот месяц отностится к осеннему сезону');
			break;
	default:
		console.log ('Данные введены неверно')
		break;
}