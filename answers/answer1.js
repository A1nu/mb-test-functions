//============= Question =============
/**
var expense = {
    type : 'Business',
    amount: '$50'
}
// Statements
var type = expense.type;
var amount = expense. amount;
Write the above using ES6 conventions
 **/


//============= Answer =============

const expense = {
    type : 'Business',
    amount: '$50'
}

const { type, amount } = expense;


//============= For Testing =============
exports.expense = expense;
exports.type = type;
exports.amount = amount;
