'use strict';


function calculateDogAge(myDogoieAge) {
    if (myDogoieAge === 1 || myDogoieAge <= 70) {
    console.log(`My doggie is ${myDogoieAge * 7} years old in dog years!`);

  } else console.log('Its not good number');
}

calculateDogAge(1);
calculateDogAge(14);

// or Like This Way

function calculateMyDogAge(myDogAge) {
    
    const theDogAge = myDogAge * 7;

    console.log(`My doggie is ${theDogAge} years old in dog years!`);
}

for (let i = 0; i < 5; i++) {
  console.log(calculateMyDogAge(Math.floor(Math.random()*5) +1 ));
}
