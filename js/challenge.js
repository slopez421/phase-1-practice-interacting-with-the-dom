
// grab all of the buttons and assign them to variables
const counterDisplay = document.getElementById("counter");
const counterIncrease = document.getElementById("plus");
const counterDecrease =  document.getElementById("minus");
const pause = document.getElementById("pause");
const heart = document.getElementById("heart");
const buttons = [counterIncrease, counterDecrease, heart]


let count = 0; 
let paused = false;
let timer = setInterval(initializeCounter, 1000)
// initialize counter
function initializeCounter(){
    if (paused === false){
    count++;
    counterDisplay.innerText = `${count}`;
}
}
// plus button to increase the counter by one
counterIncrease.addEventListener('click', () => {
        count += 1;
        counterDisplay.innerText = `${count}`;

    })

// minus button to decrease the counter by one

counterDecrease.addEventListener('click', () => {
        count -= 1;
        counterDisplay.innerText = `${count}`;
    })
// pause button, switch the text if the condition matches 
// disable the buttons except for pause

pause.addEventListener('click', () => {
    if (pause.innerText === 'pause'){
        pause.innerText = 'resume';
        buttons.forEach(function(element){
            element.disabled = true;
        }); 
        paused = !paused;
    } else {
        pause.innerText = 'pause';
        buttons.forEach(function(element) {
            element.disabled = false;
        });
        paused = !paused;
    }
});

heart.addEventListener('click', () => {
    let likes = document.querySelector('.likes');
    let currentCount = counterDisplay.innerText;
    let li = document.createElement("li");

    
    let liText = document.createTextNode(`${currentCount} has been liked `);
    likes.appendChild(li)
    li.append(liText)


})

// function countingUp(){
//     cntr.addEventListener('DOMContentLoaded', () => {
//         count++;
//         update()
//     })   
// }

// function update(){
//     cntr.innerHTML = count
// }
