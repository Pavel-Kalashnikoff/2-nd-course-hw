let a = 10;
alert(a);
a = 20;
alert(a);
let year = 2007;
alert(year);

let nameCreatorJS = 'Brendan Eich';
alert(nameCreatorJS);

let b = 10, c = 2;
alert(b+c);
alert(b-c);
alert(b*c);
alert(b/c);

let numberToThePower = 2**5;
let result = numberToThePower;
alert(result)

let a_1 = 9;
let b_1 = 2;
alert(a_1/b_1);

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num ++;
num = num --;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

let user  = {
	name: "Pavel", 
	age: 30,
	isAdmin: true 
}
user.cityOfResidence = "Тверь";

user.age = 23;

delete cityOfResidence;

let info = prompt('Какую информацию вы хотите узнать о пользователе?');

alert(user[info]);

let nameUser = prompt("Напишите ваше имя");

alert("Привет, " + nameUser + "!");