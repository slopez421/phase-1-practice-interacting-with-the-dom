document.addEventListener('DOMContentLoaded', doTimer)
let count = 0;
let counterDisplay = document.getElementById("counter")
let counterIncrease = document.getElementById("plus")
let counterDecrease =  document.getElementById("minus")
let pause = document.getElementById("pause")
let cnt = initializeCounter

function initializeCounter(){
    count++;
    counterDisplay.innerHTML = count
    
}

let timer; 



counterIncrease.addEventListener('click', () => {
        count += 1;
        counterDisplay.innerHTML = count;

    })

counterDecrease.addEventListener('click', () => {
        count -= 1;
        counterDisplay.innerHTML = count;

    })

function doTimer() {
    pause.addEventListener('click', () => {

    if (!timer){
        timer = setInterval(initializeCounter, 1000)
        pause.innerHTML = 'pause';
     } else {
        clearInterval(timer);
        timer = false
        pause.innerHTML = 'resume'
     }
})}



// function countingUp(){
//     cntr.addEventListener('DOMContentLoaded', () => {
//         count++;
//         update()
//     })   
// }

// function update(){
//     cntr.innerHTML = count
// }
