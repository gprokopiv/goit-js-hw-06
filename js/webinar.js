

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

const players = [
    {id: 'player-1', name: 'mango', timePlayed: 310, points: 43, online: true},
    {id: 'player-2', name: 'bingo', timePlayed: 390, points: 44, online: false},
    {id: 'player-3', name: 'allo', timePlayed: 410, points: 54, online: true},

];
const playerName = players.map (player => {
    console.log(player);
    return player.name;
});

console.log(playerName);

const playerIds = players.map (players => players.id);

console.log(playerIds);

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




const numbers = [5, 35, 76];
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

const total = numbers.reduce((acc, number)=> {return 100,}0);
console.log(total);

