
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

livesLeft = 5;

askRange();

function randomInRange(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1) + min));
};


function askRange(){

    rl.question('Guess a max number:', function (maxAnswer){
        let max = (Number(maxAnswer));

        rl.question('Guess a min number:', function (minAnswer){
            let min = (Number(minAnswer));
            console.log(`I am thinking of a number between ${min} and ${max}...`)

            secretNumber = randomInRange(min, max);
            console.log(secretNumber);
            askGuess();
        })
    })
};




function checkGuess(num){

    if (num > secretNumber){
        console.log('Too High ' + livesLeft + ' lives left');
        return false;
        
    }

    else if (num < secretNumber){
        console.log('Too Low ' + livesLeft + ' lives left');
        return false;
    }

    else if (num === secretNumber){
        console.log('Correct!')
            return true;
    }
}



function askGuess(){
    rl.question('Guess the lucky number:', function (numInput){
        let number = Number(numInput);
        let guess = checkGuess(number);
        
        if (guess === true){
            rl.close();
        }
        else if (livesLeft === 0) {
            console.log('You Lost!')
            rl.close();
        }
        else {
            livesLeft--;
            askGuess();
        }
    });
    
    
    
};

