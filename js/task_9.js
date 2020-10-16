// sort и map
// Получи массив имен (поле name) людей,
//  отсортированных в зависимости от количества
//   их друзей (поле friends)

// Избегаем мутации исходного массива: 
// .к. метод sort изменяет (мутирует)
//  исходный массив, то следует сделать 
//  копию массива и сортировать уже копию,
//   а не исходный массив.

// Копирование массива:

// const arr = [1, 3, 5];

// // 1
// const first = [...arr];

// // 2
// const second = arr.slice();

// // 3
// const third = arr.concat();
// Используй деструктурирующее присваивание для параметра функции ({name})`



const getNamesSortedByFriendsCount = (users) => [...users]
	.sort(
  (a, b) => a.friends.length - b.friends.length
)
	.map(
      ({name}) => name
 );

// const getNamesSortedByFriendsCount = (users) => [...users].sort((friendA, friendB) => friendA.rank - friendB.rank)
// .map(({name}) => name);


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
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner','Goldie Gentry'],
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
      friends: ['Jacklyn Lucas', 'Linda Chapman', 'Briana Decker'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    }     
  ];




console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]




