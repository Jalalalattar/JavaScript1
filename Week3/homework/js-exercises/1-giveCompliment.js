'use strict';

function giveCompliment(myName){
    const complimentList = [
        'great',
        'awesome',
        'bka',
        'mk',
        ' asda',
        'llll',
        'kol',
        ' asda',
        'llll',
        'kol',
    ]
    const compliment = complimentList[Math.floor(Math.random()*complimentList.length)];
    console.log(`U r ${compliment} ${myName}`);
}

giveCompliment('Noer');
giveCompliment('Wilgert');
giveCompliment('Marcian');