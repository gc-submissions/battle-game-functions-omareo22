"use strict";

// TODO - write your code here.

// const randomDamage = () => {
//     return Math.floor()(Math.random() * 10) + 1;
// };

const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (op1, op2) => {
    const randomNumber = Math.round(Math.random());
    return randomNumber === 0 ? op1 : op2;
};

function attackPlayer (health){
    const newHealth = health - randomDamage();
    return newHealth
};

const logHealth = (player, health) => {
    console.log (`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
    console.log (`${winner} defeats ${loser}`);
};

const isDead = (health) => health <= 0;

function fight (player1, player2, player1Health, player2Health){
    while (true){
        const attacker = chooseOption (player1, player2);
        if (attacker === player1){
            player2Health = attackPlayer (player2Health);
            logHealth (player2, player2Health);
            if (isDead (player2Health)=== true){
                logDeath(player1,player2);
                break;
            }
        } else {
            player1Health = attackPlayer (player1Health);
            console.log (player1Health)
            logHealth (player1, player1Health);
            if (isDead(player1Health)===true){
                logDeath(player2,player1);
                break;
            }
        }
    }
}

fight ('Omar','Mike',100,100)



