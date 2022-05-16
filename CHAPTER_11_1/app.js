//dates and times


const before = new Date('February 1 2019 7:30:59');
const now = new Date();
console.log(now);

console.log(before.getTime());
const zero = new Date('January 1 1970 12:00:59');
console.log(zero.getTime());



const diff = now.getTime() - zero.getTime();

console.log(Math.round(((((diff/1000/60)/60)/24)/30)/12));
