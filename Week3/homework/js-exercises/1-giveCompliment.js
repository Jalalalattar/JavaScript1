'use strict';

function giveCompliment(myName){
    const complimentList = [
        'great',
        'awesome',
        'great',
        'awesome',
        'great',
        'awesome',
        'great',
        'awesome',
        'great',
        'awesome',
    ]
    const compliment = complimentList[Math.floor(Math.random()*complimentList.length)];
    return `U r ${compliment} ${myName}`;
}

giveCompliment('Noer');
giveCompliment('Wilgert');
giveCompliment('Marcian');