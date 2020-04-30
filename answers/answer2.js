const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

//============= Question =============
/**
    Write a function to check if a word/phrase/sequence is a palindrome using vanilla JS.
    Note: A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run or 4567654
 **/
//============= Answer =============

const isPalindrome = (testString) => {
    if (!testString.isNaN) {
        testString = testString.toString();
    }
    const initialString = testString.replace(/\s/g, '');
    const reverseString = initialString.split('').reverse().join('');

    return initialString === reverseString;
}

//============= For Testing =============
exports.isPalindrome = isPalindrome;
