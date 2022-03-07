// initial Value

let totalAttemps = 5;
let attemps = 0;
let totalwon = 0;
let totalLost = 0;


// select element

const form = document.querySelector('form');
const guessingInput = form.querySelector('#guessingInput');
const checkBtn = form.querySelector('#checkBtn');
const remainingTxt = document.querySelector('.remainingText');
const resultTxt = document.querySelector('.ResultText');
const lostWonTxt = document.querySelector('.lostWonTxt');

form.addEventListener('submit', function(e){
    e.preventDefault()

    attemps++;
    if(attemps === 5){
        guessingInput.disabled = true;
        checkBtn.disabled = true;
    }

    if(checkBtn.disabled){
        checkBtn.style.color = 'black';
        checkBtn.style.backgroundColor = 'lightgray';
        checkBtn.style.cursor = 'not-allowed';
    }

    // console.log(guessingInput.value);
    let guesInput = Number(guessingInput.value) ;

    getRandomNumber(5);
    checkResult(guesInput);

    lostWonTxt.innerHTML = `You won: ${totalwon} <br>
    You Lost: ${totalLost}
    `

    
    
})

function checkResult(value){
    // console.log(randNum);
    if(value === randNum){
        resultTxt.innerHTML = `You have won`;
        totalwon++;
    }else{
        resultTxt.innerHTML = `You have lost. The number was ${randNum}.`
        totalLost++;
    }

    guessingInput.value = ''
    
}

function getRandomNumber (limit){
    
    return randNum = Math.floor(Math.random()*limit)+1;
}