
// console.log(output);
const numbers = [2,4,6,8,9];
function getdoubles(numbers){
   
    const output = [];
    for(number of numbers){
    const doubled = number*2;
    output.push(doubled);
    }
    return output;


} 
const makedouble = [2,3,4,5,6,7].map(x => x*2);
console.log(makedouble);

const result = getdoubles(numbers);
// console.log(result);