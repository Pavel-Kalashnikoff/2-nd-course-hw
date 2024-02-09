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
	let squar = Math.pow(number, 2);
	console.log ("Квадрат числа", number, "это", squar);
}
squarNumber(6);

function squarN(Parameter) {
return Math.pow (Parameter, 2);
}
console.log (squarN(4));


Questionnaire()
function Questionnaire() {
	let age = parseInt(prompt("Здравствуйте, сколько вам лет?"));
		if (age < 0) {
		alert("Вы ввели неверное значение");
	} else if (age >= 0 && age <= 12) {
		alert("Привет, друг!");
	}
	else if (age >= 13) {
		alert("Добро пожаловать!");
	}
}


function Examination(a, b) {
	if (isNaN(a) || isNaN(b)) {
		return 'Одно или оба значения не являются числом';
	} else {
		return a * b;
	}
}
console.log (Examination (5, 10));
console.log (Examination ('a', 10));

function Number() {
	let n = prompt("Введите любое число");
	if (isNaN(n)) {
		return 'Переданный параметр не является числом';
	} else {
	let result = Math.pow(n, 3);
	return `${n} в кубе равняется ${result}`;
	}
	}

console.log (Number())

let circle1 = {
	r: 4,
	getArea: function() {
		return Math.PI * this.r ** 2;
	},
	getPerimeter: function() {
		return 2 * Math.PI * this.r;
}
};

let circle2 = {
	r: 4,
	getArea: function() {
		return Math.PI * this.r ** 2;
	},
	getPerimeter: function() {
		return 2 * Math.PI * this.r;
	}
};
console.log (circle1.getArea());
console.log (circle1.getPerimeter());

console.log (circle2.getArea());
console.log (circle2.getPerimeter());