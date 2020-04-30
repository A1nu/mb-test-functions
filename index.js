const { expense, amount, type } = require('./answers/answer1');
const { isPalindrome } = require('./answers/answer2');
const { isStringPresentsInArray } = require('./answers/answer3');
const { costOfProductForQtyGreaterThan, costOfSpecificProduct } = require('./answers/answer4');
const { team, team2 } = require('./answers/answer5');

console.log('Question 1: object values are accessible.');
console.log(expense.amount);
console.log(expense.type);
console.log(amount);
console.log(type);

console.log('==================================================');

console.log('Question 2: isPalindrome.');
const row = ['madam', 'nurses run'];
const number = 4567654;
row.forEach(
    value => console.log(`${value} is palindrome: ${isPalindrome(value)}`)
);
console.log(`${number} is palindrome: ${isPalindrome(number)}`);

console.log('==================================================');

console.log('Question 3: check if fruit presents in array.');
const fruitsExamples = ['apple', 'artichoke'];
const fruits = ['Apple', 'Apricot', 'Avocado', 'banana', 'Blackberry', 'Blueberry', 'Boysenberry', 'Crab apples', 'Currant', 'Cherry', 'Cherimoya', 'Chico fruit', 'Coconut', 'Cranberry', 'Custard apple', 'Date', 'dragonfruit', 'durian', 'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'grape', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'jujube', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Blood orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Prune', 'Pineapple', 'Pluot', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Rambutan', 'Redcurrant', 'Salal berry', 'Salak', 'Salmonberry', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Ugli fruit', 'Yuzu'];
fruitsExamples.forEach(
    value => console.log(`${value} is presents in array: ${isStringPresentsInArray(value, fruits)}`)
)

console.log('==================================================');

console.log('Question 4: find total cost of products with qty > n.');
const productCart = [
    { productName:'iphone-x',qty:10, price:1000 },
    { productName:'macbook pro',qty:200, price:2000 },
    { productName:'iwatch',qty:100, price:550 },
    { productName:'macbook air',qty:100, price:1000 },
    { productName:'iphone 8',qty:300, price:700 },
    { productName:'iphone 7',qty:100, price:550 },
    { productName:'ipad Retina',qty:20, price:1000 },
    { productName:'ipad', qty:10, price:700 },
    { productName:'Magic Mouse',qty:50, price:300 },
    { productName:'Magic Trackpad',qty:75, price:200 }
];
const qty = 100;
const product = 'ipad';
console.log(`for qty > ${qty} total cost is: ${costOfProductForQtyGreaterThan(qty, productCart)}`);
console.log('Question 4: find total cost for specific product');
console.log(`for ${product} total cost is: ${costOfSpecificProduct(product, productCart)}`);

console.log('==================================================');

console.log('Question 5: get heroes:');
console.log('Option1: ', team.teamSummary());
console.log('Option2: ', team2.teamSummary());

console.log('========================== Thank you for your attention! ==========================');



