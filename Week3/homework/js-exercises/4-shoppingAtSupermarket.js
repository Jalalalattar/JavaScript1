"use strict";

const shoppingList = ['Banana', 'Milk'];

const addToShoppingCart = function(grocerItem) {

  shoppingList.push(grocerItem);
  if (shoppingList.length > 3) {
    shoppingList.shift();
  }
  return `You bought ${shoppingList}!`;
}
const newShoppingList = ["Apple", "Orange", "Honey"];
for (let i = 0; i < 3; i++) {
  console.log(addToShoppingCart(newShoppingList[i]));
}
