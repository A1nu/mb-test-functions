const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

const { expense, type, amount } = require('./answers/answer1');
const { isFruitPresent } = require("./answers/answer3");
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
        const example1 = 'apple';
        const example2 = 'artichoke';
        const example3 = 'banana';
        const example5 = 'car';
        const example6 = 'BlUeBeRry';

        expect(isFruitPresent(example1)).to.equal(true);
        expect(isFruitPresent(example2)).to.equal(false);
        expect(isFruitPresent(example3)).to.equal(true);
        expect(isFruitPresent(example5)).to.equal(false);
        expect(isFruitPresent(example6)).to.equal(true);
    });
});

describe('Answer 4', () => {
    it('Checks if total costs returns correctly', () => {
        const qty1 = 1000;
        const qty2 = 0;
        const qty3 = 100;

        expect(costOfProductForQtyGreaterThan(qty1)).to.equal(0);
        expect(costOfProductForQtyGreaterThan(qty2)).to.equal(887000);
        expect(costOfProductForQtyGreaterThan(qty3)).to.equal(610000);
    });

    it('Checks if cost of specific product returns correctly', function () {
        const productName1 = 'ipad';
        const productName2 = 'macbook air';
        const productName3 = 'car';

        expect(costOfSpecificProduct(productName1)).to.equal(7000);
        expect(costOfSpecificProduct(productName2)).to.equal(100000);
        expect(costOfSpecificProduct(productName3)).to.equal(undefined);
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