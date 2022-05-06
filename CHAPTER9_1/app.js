const prices = [10, 30, 15, 25, 50, 40, 5];
const salePrices = prices.map(price => {
    return price / 2;
});
console.log(salePrices);

const items = [
    { name: 'gold start', price: 20 },
    { name: 'mushrooms', price: 20 },
    { name: 'green shells', price: 10 },
    { name: 'ninja', price: 15 },
    { name: 'banana skin', price: 50 },
    { name: 'red shells', price: 70 }

]

let dicountRuleItems = items.map(item => {
    return item.price >= 30 ? { name: item.name, price: item.price / 2 } : item;
});
console.log(dicountRuleItems);