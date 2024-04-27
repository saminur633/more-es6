const numbers = [20,25,55,66,77,80,7,6,8,9,2];
const bignum = numbers.filter(n => n>20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(n => n/2 === 0)
console.log(bignum,tiny,even);
