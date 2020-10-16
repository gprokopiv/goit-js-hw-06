

// const numbers = [1,2,3,4,5,];

// numbers.forEach(function (number, index, array ){
//     console.log(number);
// });




// const numbers = [1,2,3,4,5,];
// const doubleNums = numbers.map(function(number) {
//     // console.log(number);
//     return number * 2;
// });

// console.log(doubleNums);

// const players = [
//     {id: 'player-1', name: 'mango', timePlayed: 310, points: 43, online: true},
//     {id: 'player-2', name: 'bingo', timePlayed: 390, points: 44, online: false},
//     {id: 'player-3', name: 'allo', timePlayed: 410, points: 54, online: true},

// ];
// const playerName = players.map (player => {
//     console.log(player);
//     return player.name;
// });

// console.log(playerName);

// const playerIds = players.map (players => players.id);

// console.log(playerIds);

// const updatedPlayers = players.map (player => {
//     console.log(player);
//     return {...player,
//         points: player.points * 1.1 
//     };

// });

// const updatedPlayers = players.map (player => ({
//      ...player,
//         points: player.points * 1.1 
    

// }));

// console.log(updatedPlayers);

// const playerIdToUpdate = 'player-3';
// const updatedPlayers = players.map (player => {
//     console.log(player.id);
//     if (playerIdToUpdate === player.id){
//         console.log('here you are');
//     return 'here is a new object';
//     }
//     return players;
// });



// const updatedPlayers = players.map (player => {
//     return playerIdToUpdate === player.id 
//      ? {...player, timePlayed: player.timePlayed + 100,        }
//      : players;
// });

// console.log(updatedPlayers

// const numbers = [5, 35, 76];
// const filteredNumbers = numbers.filter(number => {
//     return number > 24;
// })

// console.log(filteredNumbers);

// const onlinePlayers = players.filter(player => player.online);
// console.log(onlinePlayers);


// const offlinePlayers = players.filter(player => !player.online);
// console.log(offlinePlayers);

// const hardscorePleyers = players.filter (player => player.timePlayed > 310);
// console.log(hardscorePleyers);




const numbers = [5, 35, 76, 55, 9, 767];
// const filteredNumbers = numbers.find(number => number > 24
// )

// console.log(filteredNumbers);
// const playerNameToFind = 'bingo'
// const playerWithName = players.find(player=>player.name === playerNameToFind);

// console.log(playerWithName);


// const playerIdToFind = 'player-2';
// const playerWithId = players.find(player=>player.id === playerIdToFind);
// console.log(playerIdToFind);

// const findPlayerById = (allPlayer, playerId) => {
//     return allPlayer.find(player => player.id === playerId);
// }
// console.log(findPlayerById(players, 'player-1'));



// const isAllOnline = players.every(player => player.online);
// console.log(isAllOnline);

// const isAnyOnline = players.some(player => player.online);
// console.log(isAnyOnline);




// const total = numbers.reduce ((acc, number) => {
//     console.log('acc', acc);
//     console.log('number', number);

// });

// console.log(total);

// const total = numbers.reduce((acc, number)=> acc + number, 0);
// console.log(total);
// 
//  const salary = {
//      poly:566,
//      ajax: 655,
//      tango:222,
//  }

// const totalSalary = Object.values(salary).reduce((total, value) => {
// return total + value }
// ); 0 
// console.log(totalSalary)


// const totalTimePlayed = players.reduce ((totalTime, players) => {return totalTime + players.timePlayed}, 0,);
// const totalTimePlayed = players.reduce ((totalTime, players) => totalTime + players.timePlayed, 0,);
// const totalTimePlayed = players.reduce (
//     (totalTime, {timePlayed}) => totalTime + timePlayed,
//      0,
//      );

//  console.log(totalTimePlayed)


// const cart = [
//     {label: 'apples', price: 100, quantity: 2},
//     {label: 'pear', price: 200, quantity: 3},
//     {label: 'grapes', price: 344, quantity: 1},

// ]
// const totalAmount = cart.reduce((total, {price, quantity}) => total + price * quantity,
// 0,
// );
//  console.log(totalAmount);

const tweets = [
    {id: '000', likes: 5, tags: ['js', 'nodes']},
    {id: '001', likes: 4, tags: ['jj', 'nodes']},

];
// const allTags = tweets.reduce (
//     (tags, tweets) => {
//         tags.push(...tweets.tags );
//         return tags;
//     }, []
// );

// console.log(allTags);
//const tags = tweets.map(t => t.tags).flat();
const tags = tweets.flatMap(t => t.tags).flat();
console.log(tags);


// const tagsStats = allTags.reduce ((acc, tag) => {
//     if (acc[tag]) {
//         acc [tag] +1 
//     return acc;
//     } acc [tag] = 1;
//     return acc;
          

//     }, {}
// );


// const tagsStats = allTags.reduce ((acc, tag) => {
//     return {
//         ...acc,
//          [tag]: acc[tag] ? acc[tag] + 1 :1,  
//         };

//     }, {}
// );

//  console.log(tagsStats);

numbers.sort ((curEl, nextEl) => {
    return nextEl - curEl;
});
console.log(numbers);

const letters = ['a', 'd', 'H'];


letters.sort();
console.log(letters);

const descSortedNumbers = [...numbers].sort((a,b)=> b-a);
const asccSortedNumbers = [...numbers].sort((a,b)=> a-b);
console.log(descSortedNumbers);
console.log(asccSortedNumbers);



const players = [
    {id: 'player-1', name: 'mango', timePlayed: 310, points: 43, online: true, rank: 765},
    {id: 'player-2', name: 'bingo', timePlayed: 390, points: 44, online: false, rank: 775},
    {id: 'player-3', name: 'allo', timePlayed: 410, points: 54, online: true, rank: 456},

];
const onlineSorted = players
.filter(player => player.online)  
.sort((playerA, playerB) => playerA.rank - playerB.rank);
//console.log(onlineSorted);


const sortedByBestPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
);
//console.log(sortedByBestPlayers);

const sortedByWorstPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
);
//console.log(sortedByWorstPlayers);

// const byName = [...players].sort((a,b) => {
//     const result = a.name[0] > b.name[0];
    
//     if (result) {
//         return 1;
//     };
//     if (!result) {
//         return -1;
//     }
// });



const byName = [...players].sort((a,b) => {
    const result = a.name[0] > b.name[0];
    
    if (result) {
        return 1;
    } else {
        return -1;
    }
});

//console.log(byName);


//console.log('abc'.charCodeAt(2));






const sorted = numbers
.filter (numbers => numbers > 2)
.flatMap (numbers => numbers * 3)
.sort ((a, b )=> a -b);

//console.log(numbers );

console.log(_.range(1,6,2));    
console.log(_.union([1,2,3], [2,3,4,5]));    
console.log(_.isEmpty(sorted));    
console.log(_.get(numbers));    
console.log(_.sortBy(numbers));    


