const ComputerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice 
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
 userChoice = e.target.id
 userChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
 getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5 + 1)
    
    if (randomNumber === 1) {
        computerChoice = '🪨'
    }
    if (randomNumber === 2) {
        computerChoice = '📃'
    }
    if (randomNumber === 3) {
        computerChoice = '✂️'
    }
    if (randomNumber === 4) {
        computerChoice = '🦎'
    }
    if (randomNumber === 5) {
        ComputerChoice = '🖖'
    }
    ComputerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice) {
        result = 'It is a Tie!'
    }
    if (computerChoice === '🪨' && userChoice === '📃') {
        result = 'You Win!'
    }
    if (computerChoice === '🪨' && userChoice === '✂️') {
        result = 'You Lost!'
    }
    if (computerChoice === '🪨' && userChoice === '🦎') {
        result = 'You Lost!'
    }
    if (computerChoice === '🪨' && userChoice === '🖖') {
        result = 'You Win!'
    }
    if (computerChoice === '📃' && userChoice === '🖖') {
        result = 'You Lost!'
    }
    if (computerChoice === '📃' && userChoice === '🦎') {
        result = 'You Win!'
    }
    if (computerChoice === '📃' && userChoice === '🪨') {
        result = 'You Lost!'
    }
    if (computerChoice === '📃' && userChoice === '✂️') {
        result = 'You Win!'
    }
    if (computerChoice === '✂️' && userChoice === '🪨') {
        result = 'You Win!'
    }
    if (computerChoice === '✂️' && userChoice === '📃') {
        result = 'You Lost!'
    }
    if (computerChoice === '✂️' && userChoice === '🦎') {
        result = 'You Lost!'
    }
    if (computerChoice === '✂️' && userChoice === '🖖') {
        result = 'You Lost!'
    }
    if (computerChoice === '🖖' && userChoice === '✂️') {
        result = 'You Lost!'
    }
    if (computerChoice === '🖖' && userChoice === '🪨') {
        result = 'You Lost!'
    }
    if (computerChoice === '🖖' && userChoice === '🦎') {
        result = 'You Win!'
    }
    if (computerChoice === '🖖' && userChoice === '📃') {
        result = 'You Win!'
    }
    if (computerChoice === '🦎' && userChoice === '📃') {
        result = 'You Lost!'
    }
    if (computerChoice === '🦎' && userChoice === '🪨') {
        result = 'You Win!'
    }
    if (computerChoice === '🦎' && userChoice === '✂️') {
        result = 'You Win!'
    }
    if (computerChoice === '🦎' && userChoice === '🖖') {
        result = 'You Lost!'
    }
    resultDisplay.innerHTML = result
}