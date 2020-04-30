const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

//============= Question =============
/**
  let productCart = [
    { productname:'iphone-x',qty:10, price:1000 },
    { productname:'macbook pro',qty:200, price:2000},
    { productname:'iwatch',qty:100, price:550 },
    { productname:'macbook air',qty:100, price:1000},
    { productname:'iphone 8',qty:300, price:700 },
    { productname:'iphone 7',qty:100, price:550 },
    { productname:'ipad Retina',qty:20, price:1000},
    { productname:'ipad', qty:10, price:700 },
    { productname:'Magic Mouse',qty:50, price:300},
    { productname:'Magic Trackpad',qty:75, price:200}
]

i) Find the total cost of all products with quantity > n using vanilla JS (ES6)
like , CostOfProductForQtyGreaterThan(n) e.g., CostOfProductForQtyGreaterThan(100)
ii) Write a function that can take a product name and return the total cost. e.g. -
CostOfProduct('ipad') should output 7000
 **/

//============= Answer =============

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
]

const costOfProductForQtyGreaterThan = (amount) => {
    let totalCost = 0;
    productCart.forEach(element => {
        if (element.qty > amount) {
            totalCost = totalCost + element.price * element.qty
        }
    })
    return totalCost;
}

const costOfSpecificProduct = (itemName) => {
    const specificItem = productCart.find(
        product => product.productName.toLowerCase() === itemName.toLowerCase()
    );
    return specificItem ? specificItem.price * specificItem.qty : void 0
}

//============= For Testing =============
exports.productCart = productCart;
exports.costOfProductForQtyGreaterThan = costOfProductForQtyGreaterThan;
exports.costOfSpecificProduct = costOfSpecificProduct;
