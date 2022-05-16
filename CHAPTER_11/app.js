//dates and times

const now = new Date();
console.log(now);

console.log('getFullYear', now.getFullYear());
console.log('getDate', now.getDate());
console.log('getMonth', now.getMonth());
console.log('getDay', now.getDay());


console.log('getHours', now.getHours());
console.log('getMinutes', now.getMinutes());
console.log('getSeconds', now.getSeconds());


//timestaps


console.log('timestamp', now.getTime());

//date Strings

console.log('toDateString', now.toDateString());
console.log('toTimeString', now.toTimeString());

console.log('toLocaleTimeString', now.toLocaleTimeString());