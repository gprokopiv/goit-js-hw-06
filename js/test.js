

// array.method((item, idx, arr) => {
//   // логика которая будет применяться на каждой итерации
// });
// array.forEach(callback[currentValue, index, array])
    

const numbers = [1, 2, 3];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// Функциональный forEach
numbers.forEach(num => console.log(num));

// Указываем параметр idx если нужен доступ к счетчику
numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));


let animals = [
    { name: 'Joey', species: 'cow' },
    { name: 'Natasha', species: 'chicken' },
    { name: 'Ed', species: 'pig' },
    { name: 'Paul', species: 'fish' },
    { name: 'Asal', species: 'cat' }
  ];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
    for (let j = 0; j < animals[i].friends.length; j++) {
      console.log(animals[i].friends[j]);
    }
  }



  const users = [
    { name: 'Mango', isActive: true },
    { name: 'Poly', isActive: false },
    { name: 'Ajax', isActive: true },
  ];
  
  // Для каждого элемента коллекции (user) вернем значение поля name
  const names = users.map(user => user.name);
  
  console.log(names); // ["Mango", "Poly", "Ajax"]

  
  const users = [
    { name: 'Mango', isActive: true },
    { name: 'Poly', isActive: false },
    { name: 'Ajax', isActive: true },
    { name: 'Chelsey', isActive: false },
  ];
  
  // Для каждого элемента коллекции (user) проверим поле isActive.
  // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
  const activeUsers = users.filter(user => user.isActive);
  console.log(activeUsers);
  
  // Для каждого элемента коллекции (user) проверим поле isActive.
  // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
  const inactiveUsers = users.filter(user => !user.isActive);
  console.log(inactiveUsers);

  






  const users = [
    { id: '000', name: 'Mango', isActive: true },
    { id: '001', name: 'Poly', isActive: false },
    { id: '002', name: 'Ajax', isActive: true },
    { id: '003', name: 'Chelsey', isActive: false },
  ];
  
  // Для каждого элемента коллекции (user) проверим поле id.
  // Если оно совпадает с искомым идентификатором, то find прекратит
  // выполнение и вернет текущий элемент (user) как результат выполнения
  const user = users.find(user => user.id === '002');
  console.log(user);
  
  // Создадим функцию которая будет возвращать нам пользователя по id
  const getUserById = (arr, id) => arr.find(x => x.id === id);
  
  console.log(getUserById(users, '001'));
  console.log(getUserById(users, '003'));

  

  const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];
  
  // Пройдем по всем элементам коллекции и прибавим значения свойства likes
  // к аккумулятору, начальное значаение которого укажем 0.
  const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
  
  console.log(likes); // 32
  
  // Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
  // для подсчета лайков из коллекции
  const countLikes = tweets =>
    tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
  
  console.log(countLikes(tweets)); // 32
  













