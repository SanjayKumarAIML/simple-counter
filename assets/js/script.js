let counterValue = 0
const counterDisplay = document.getElementById("counter-number");

const incrementFunction = () => {
    counterValue++
    updateDisplay()
    console.log(`increment logged!`)
}

const decrementFunction = () => {
    counterValue--
    updateDisplay()
    console.log(`decrement logged!`)
}

function updateDisplay(){
    counterDisplay.textContent = counterValue
}