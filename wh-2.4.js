let hi = 0;
while (hi < 2) {
	console.log("Привет!");
	hi++;
}

for (let i = 1; i <= 5; i++) {
	console.log (i);
}

for (let i_2 = 7; i_2 <= 22; i_2++) {
	console.log (i_2);
}

const obj = {
	Коля: "200",
	Вася: "300",
	Петя: "400",
}

for (let salary in obj) {
	alert(`${salary} - зарплата ${obj[salary]} долларов.`)
}

let n = 1000;
let num = 0;
while (n >=50) {
	n = n / 2;
	num++;
}
console.log("количество итераций:", num);