"use strict";

const cartForParty =  { beer: 20, cola: 3, chips: 10, cheese: 25, win: 30 };

function calculateTotalPrice(list) {
  let total = 0;
  for (let prop in list) {
    total += list[prop];
  }
  return total;
}
console.log("Your total cost is ", calculateTotalPrice(cartForParty));
