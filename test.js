const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

const { expense, type, amount } = require('./answers/answer1');
const { isStringPresentsInArray } = require("./answers/answer3");
const { isPalindrome } = require('./answers/answer2');
const { costOfSpecificProduct } = require("./answers/answer4");
const { costOfProductForQtyGreaterThan } = require("./answers/answer4");
const { team, team2} = require("./answers/answer5");

describe('Answer 1', () => {
    it('Checks if object parameters are accessible', () => {
        expect(expense.type).to.equal(type);
        expect(expense.amount).to.equal(amount);
    });
});

describe('Answer 2', () => {
    it('Checks if function can recognise palindrome correctly', () => {
        const example1 = 'madam';
        const example2 = 'nurses run';
        const example3 = 4567654;
        const example4 = 'word';
        const example6 = 'simple string';
        const example7 = 44332;

        expect(isPalindrome(example1)).to.equal(true);
        expect(isPalindrome(example2)).to.equal(true);
        expect(isPalindrome(example3)).to.equal(true);
        expect(isPalindrome(example4)).to.equal(false);
        expect(isPalindrome(example6)).to.equal(false);
        expect(isPalindrome(example7)).to.equal(false);

    });
});

describe('Answer 3', () => {
    it('Checks if fruit checking function works correctly', () => {
        const fruits = ['Apple', 'Apricot', 'Avocado', 'banana', 'Blackberry', 'Blueberry', 'Boysenberry', 'Crab apples', 'Currant', 'Cherry', 'Cherimoya', 'Chico fruit', 'Coconut', 'Cranberry', 'Custard apple', 'Date', 'dragonfruit', 'durian', 'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'grape', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'jujube', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Blood orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Prune', 'Pineapple', 'Pluot', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Rambutan', 'Redcurrant', 'Salal berry', 'Salak', 'Salmonberry', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Ugli fruit', 'Yuzu'];
        const example1 = 'apple';
        const example2 = 'artichoke';
        const example3 = 'banana';
        const example5 = 'car';
        const example6 = 'BlUeBeRry';

        const cars = ['Ferrari', 'lamborghini', 'Chevrolet', 'Opel', 'Renault', 'Toyota']
        const example7 = 'Ferrari';
        const example8 = 'Lamborghini';
        const example9 = 'ferrari';
        const example10 = 'Nissan';

        expect(isStringPresentsInArray(example1, fruits)).to.equal(true);
        expect(isStringPresentsInArray(example2, fruits)).to.equal(false);
        expect(isStringPresentsInArray(example3, fruits)).to.equal(true);
        expect(isStringPresentsInArray(example5, fruits)).to.equal(false);
        expect(isStringPresentsInArray(example6, fruits)).to.equal(true);

        expect(isStringPresentsInArray(example7, cars)).to.equal(true);
        expect(isStringPresentsInArray(example8, cars)).to.equal(true);
        expect(isStringPresentsInArray(example9, cars)).to.equal(true);
        expect(isStringPresentsInArray(example10, cars)).to.equal(false);
    });
});

describe('Answer 4', () => {
    it('Checks if total costs returns correctly', () => {
        const productCart1 = [
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
        ]
        const productCart2 = [
            { productName:'cheese',qty:10, price:2 },
            { productName:'bread',qty:50, price:3 },
            { productName:'chicken',qty:100, price:5 },
            { productName:'potato',qty:100, price:7 },
            { productName:'apple juice',qty:20, price:3 }
        ]
        const qty1 = 1000;
        const qty2 = 0;
        const qty3 = 100;
        const qty4 = 20;
        const qty5 = 50;
        const qty6 = 9;

        expect(costOfProductForQtyGreaterThan(qty1, productCart1)).to.equal(0);
        expect(costOfProductForQtyGreaterThan(qty2, productCart1)).to.equal(887000);
        expect(costOfProductForQtyGreaterThan(qty3, productCart1)).to.equal(610000);
        expect(costOfProductForQtyGreaterThan(qty3, productCart1)).to.equal(610000);

        expect(costOfProductForQtyGreaterThan(qty4, productCart2)).to.equal(1350);
        expect(costOfProductForQtyGreaterThan(qty5, productCart2)).to.equal(1200);
        expect(costOfProductForQtyGreaterThan(qty6, productCart2)).to.equal(1430);
    });

    it('Checks if cost of specific product returns correctly', function () {
        const productCart1 = [
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
        ]
        const productCart2 = [
            { productName:'cheese',qty:10, price:2 },
            { productName:'bread',qty:50, price:3 },
            { productName:'chicken',qty:100, price:5 },
            { productName:'potato',qty:100, price:7 },
            { productName:'apple juice',qty:20, price:3 }
        ]
        const productName1 = 'ipad';
        const productName2 = 'macbook air';
        const productName3 = 'car';
        const productName4 = 'cheese';
        const productName5 = 'apple juice';
        const productName6 = 'ginger';

        expect(costOfSpecificProduct(productName1, productCart1)).to.equal(7000);
        expect(costOfSpecificProduct(productName2, productCart1)).to.equal(100000);
        expect(costOfSpecificProduct(productName3, productCart1)).to.equal(undefined);

        expect(costOfSpecificProduct(productName4, productCart2)).to.equal(20);
        expect(costOfSpecificProduct(productName5, productCart2)).to.equal(60);
        expect(costOfSpecificProduct(productName6, productCart2)).to.equal(undefined);
    });
});

describe('Answer 5', () => {
    it('Checks if arrow function works and returns correct data', () => {
        expect(team.teamSummary()).to.eql([
            "Superman is on team Justice league",
            "Batman is on team Justice league",
            "Wonder Woman is on team Justice league"
        ]);
    });
    it('Checks if anonymous function with bound context works and returns correct data', () => {
        expect(team2.teamSummary()).to.eql([
            "Superman is on team Justice league",
            "Batman is on team Justice league",
            "Wonder Woman is on team Justice league"
        ]);
    });
});