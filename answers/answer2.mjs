//============= Question =============
/**
    Write a function to check if a word/phrase/sequence is a palindrome using vanilla JS.
    Note: A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run or 4567654
 **/
//============= Answer =============

export const isPalindrome = (testString) => {
    let modifiedTestString = '';
    if (!testString.isNaN) {
        modifiedTestString = testString.toString();
    }
    modifiedTestString = modifiedTestString.replace(/\s/g, '');
    return modifiedTestString === modifiedTestString.split('').reverse().join('');
}
