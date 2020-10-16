// filter, map и создание анонимных объектов
// Получи массив из объектов, которые состоят
//  только из свойств name и email тех пользователей, 
//  которые попадают в возрастную категорию от min до max лет 
//  (значение свойства age).

// Сравнение, пример

// const x = 13;

// // num больше 10 ?
// const larger = num > 10; // true

// // num меньше 100 ?
// const smaller = 100 > num; // true

// // num находитя между 10 и 100 ?
// const between = smaller && larger; // true
// Создание анонимных объектов:

// const arr = Array(3)
//   .fill('')
//   .map((e,i) => ({['index']: i }));
// /* [ { index: 0 }, { index: 1 }, { index: 2 } ] */




const getUsersWithAge = (array, min, max) => array
 .filter(({age}) => age > min && age < max)    
//.map(({name, email}) => ({name, email}))
.map(function({name, email}) {
    return {name, email}
}) 
//.map(({name, email});

const users = [
    {
      id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'famale',
      age: 24,
    },
    {
      id: '150b00fb-dd82-427d-9faf-2879ea87c695',
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    }     
  ];

  console.log(getUsersWithAge(users, 20, 30));









