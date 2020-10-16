// reduce, filter, sort
// Получи массив всех умений
//  всех пользователей (поле skills),
//   при этом не должно быть повторяющихся
//    умений и они должны быть отсортированы
//     в алфавитном порядке.

// Слияние массивов:

// const odd = [1, 3, 5];
// const even = [2, 4, 6];

// // 1
// [...odd, ...even];
// //  [1, 3, 5, 2, 4, 6]

// // 2
// odd.concat(even)
// //  [1, 3, 5, 2, 4, 6]







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

//   const getSortedUniqueSkills = (skills) => [...skills]
//   .sort(
//   (a, b) => a.skills[0] > b.skills[0]
//   )
  // .map(
  //   ({name}) => name
  // );
  
  const getSortedUniqueSkills = function(users) {
      return users.reduce(
                (skills, user) => {
                    return skills.concat(user.skills);
                }, []
      )
      .sort()
    //   .filter(function(skills, index) {
    //       return users.indexOf(skills) === skills
    //   }
    //   )
    // .filter((skill, index) => users.indexOf(skill) === index
        
    //     )
        // .reduce(
        //     (unique, skill) => unique.indexOf(skill) === -1 ? unique : [...unique, users]
        
        // )
        .reduce(
            (acc, {skills}) => {
                return acc.includes(...skills) ? acc : [...acc, ...skills ]}, []
                .sort()
        
        )
  }
      
      
      
      
//       .filter(function(item, index) {
          
//           return users.indexOf(item) === index
      
    
//   }

  
//   const allSkills = [
//       users
//       .reduce(
//         (skills, user) => {
//             return skills.concat(user.skills);
//         }, []
//       )
//       .reduce(
//         (uniqueSkills, skill) => {
//             if(uniqueSkills.indexOf(skill) === -1){
//                 uniqueSkills = [...uniqueSkills, skill];
//             }
//             return uniqueSkills;
//         }, []
//       )
//     //  .filter(function(skill) {
//     //     return user.indexOf(skills) == skills;
//     // })

    
//     //   .filter((user, index, arr) => arr.indexOf(user) === index)
//     .sort()
//     //     {
//     //         if(a.firstname < b.firstname) { return -1; }
//     // if(a.firstname > b.firstname) { return 1; }
//     // return 0;
//     //     }
//      // )
//   ]

//   console.log(allSkills);

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */






