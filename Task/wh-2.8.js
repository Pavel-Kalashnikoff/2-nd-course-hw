//Задание № 1 Отсортировать массив по возрастанию возраста и вывести в консоль

const people = [
	{ name: 'Глеб', age: 29 },
	{ name: 'Анна', age: 17 },
	{ name: 'Олег', age: 7 },
	{ name: 'Оксана', age: 47 }
];


console.log(people.sort((a, b) => a.age - b.age)); // использовал два параметра для sort и обратился через них к age 


// Задание № 2 написать функцию которая работает как метод filter

function isPositive(num) {
	return num > 0
	}

	function isMale(el) {
	return el.gender === 'male'
	}

	function filter(arr, ruleFunction) {
	const filterArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (ruleFunction(arr[i])) {
			filterArr.push(arr[i]);
		}
	}
	return filterArr;
	}
	
	console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
	
	const people_1 = [
		 {name: 'Глеб', gender: 'male'},
		 {name: 'Анна', gender: 'female'},
		 {name: 'Олег', gender: 'male'},
		 {name: 'Оксана', gender: 'female'}
	];
	
	console.log(filter(people_1, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


	