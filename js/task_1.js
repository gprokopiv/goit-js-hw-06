// map
// Получи массив имен всех пользователей (свойство name)
// используя деструктурирующее присваивание для параметра //
//функции ({name}) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива 
//которые не изменяют (не мутируют) исходный массив. 
//.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Деструктурирующее присваивание для параметра функции
// PS Деструктурирующее присваивание (ДП):
//const getUsersWithGender = function(array, gender){
  //     const filteredArray = array.filter(item => item.gender === gender);

  //     const transformedArray = filteredArray.map(function(item){
  //         return item.name;
  //     });

  //     return transformedArray;
 // };


//const names = users.map(user =>({name}));

// console.log(playerName);



//console.log(getUsersWithGender);

const getUserNames = array => array.map(({name}) => name);
// const getUserNames = function(array){
// const newArray = array.map(name => array.name)
//     return newArray;
// };
// console.log(getUserNames);
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
  const getUsersWithGender = users.map(users => users.name);
   console.log(getUsersWithGender);


  // const names = users.map(user => user.name);
  
  // console.log(names); 
//
// Объект как параметр без ДП
// const object = {num : 2}
// function getNum (obj) { return obj.num; }
// console.log(getNum(object)) // 2
// ДП
// const object = {num : 2}
//  const num  =  object.num;
// const { num } = object;
// console.log(num) // 2
// Объект как параметр c ДП
// const object = {num : 2}
// //function getNum (obj) { return obj.num; }
// function getNum ({num}) { return num; }
// console.log(getNum(object)) // 2

// [
//     "Moore Hensley",
//     "Sharlene Bush",
//     "Ross Vazquez",
//     "Elma Head",
//     "Carey Barr",
//     "Blackburn Dotson",
//     "Sheree Anthony",
//   ] 