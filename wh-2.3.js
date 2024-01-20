let password = 'Original password'; 
let requested = prompt("Введите пароль");

if (requested === 'Original password') {
alert ('Пароль введен верно');
} else {
	alert ('Пароль введен неправильно');
}

let c = 22;
if (c>0 && c<10) {
	alert('Верно')
} else {
	alert ('Неверно')
}


let d = 34, e = 593;
if (d||e > 100) {
	alert ('Верно')
} else {
	alert ('Неверно')
}


let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert (parseInt(a) + parseInt(b));
// parseInt это функция преобзразования строки или числа, понял. 
