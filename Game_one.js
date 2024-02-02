function GameOne() {
	let monthNumber = prompt('Напишите любой номер месяца');
	
switch (monthNumber) {
	case '12':
	case '1':
	case '2':
	alert('Значит, вам нравится зима :)');
	break;
	case '3':
	case '4':
	case '5':	
	alert('Значит, вам нравится весна :)');
	break;
	case '6':
	case '7':
	case '8':
		alert('Значит, вам нравится лето :)');
	break;
	case '9':
	case '10':
	case '11':
		alert('Значит, вам нравится осень :)');
	break;
	default:
		alert('Вы ввели неверное значение');
	break;
}
}