

// filter, includes и map
// Получи массив имен всех
//  пользователей у которых есть друг
//   с заданным именем.

// Используй деструктурирующее присваивание
//  для параметра функции {friends}и ({name})
//   без пробелов и переносов на новую строку




const getUsersWithFriend = (array, friendName) => array
.filter(({friends})=> friends.includes(friendName)) 
.map(({name}) => name);

   
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


  

  console.log(getUsersWithFriend(users, 'Briana Decker'));
  // [ 'Sharlene Bush', 'Sheree Anthony' ]
  
   console.log(getUsersWithFriend(users, 'Goldie Gentry'));
  // [ 'Elma Head', 'Sheree Anthony' ]

