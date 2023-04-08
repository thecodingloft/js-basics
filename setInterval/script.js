const startBtn = document.querySelector('.start-interval');
const stopBtn = document.querySelector('.stop-interval');
const outputSpan = document.querySelector('.show-output');

let counter = 0;
let intervalId;

// EVENT LISTENERS
startBtn.addEventListener('click', () => {
    console.log('starting interval');
    intervalId = setInterval(incrementCounter, 1000);
    console.log('interval id', intervalId)
})

stopBtn.addEventListener('click', () => {
    console.log('stopping Interval')
    clearInterval(intervalId);
})

function incrementCounter() {
    counter ++;
    console.log(counter)
    outputSpan.textContent = counter;
}