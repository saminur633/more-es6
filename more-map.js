const numbers = [20,30,40,50,60,70,80];
const half = numbers.map(n => n/2);
const thirds = numbers.map(n => n/3);
console.log(half,thirds);

// string
const friends = ['Saminur', 'Mahia farsum', 'islam'];
const firstlatters = friends.map(friend => friend[1]);
console.log(firstlatters);
const namelength = friends.map(friend => friends.length);
console.log(namelength);