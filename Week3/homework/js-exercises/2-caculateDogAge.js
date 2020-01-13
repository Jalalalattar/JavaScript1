'use strict';


function calculateDogAge(myDogoieAge) {
    if (myDogoieAge === 1 || myDogoieAge <= 70) {
    return `My doggie is ${myDogoieAge * 7} years old in dog years!`;

  } else return 'Its not good number';
}

console.log(calculateDogAge(1));
console.log(calculateDogAge(4));

// or Like This Way

function calculateMyDogAge(myDogAge) {
    
    const theDogAge = myDogAge * 7;
    return `My doggie is ${theDogAge} years old in dog years!`;
}

for (let i = 0; i < 5; i++) {
 console.log(calculateMyDogAge(Math.floor(Math.random()*5) +1 ));
}


