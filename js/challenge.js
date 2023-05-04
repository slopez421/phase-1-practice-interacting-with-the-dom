
// grab all of the buttons and assign them to variables
const counterDisplay = document.getElementById("counter");
const counterIncrease = document.getElementById("plus");
const counterDecrease =  document.getElementById("minus");
const pause = document.getElementById("pause");
const heart = document.getElementById("heart");
const submit = document.getElementById("submit")
const buttons = [counterIncrease, counterDecrease, heart, submit]


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
    let a = document.getElementById(currentCount)
// assign the currentCount to another variable, otherwise we'll
//end up changing the innerText directly  

    if(a) {
        let text = a.innerText;
        let textArray = text.split(" ");
        // Number() converts a string or value directly to a number type
        //here, we're taking the inner text of currentCount and converting it into a number type instead of a string
        let number = Number(textArray.slice(-2,-1));
        //so we can add it + 1 every time it is liked
        a.innerHTML = `${currentCount} has been liked ${number + 1} times`;
    } else {
        let a = document.createElement('li');
        a.setAttribute("id", currentCount)
        likes.appendChild(a);
        a.innerHTML = `${currentCount} has been liked 1 time`;
    }


})

submit.addEventListener('click', (e) => {
    //prevents from the automatic refresh
    e.preventDefault();
    // grab the comment list section
    let comment = document.getElementById("list");
    //create a p tag for each comment that will get put throught the comment-input
    let p = document.createElement("p");
    // append each p to the list / comment section
    comment.appendChild(p);
    // should re-name comments, come back late
    // the input bar is now assigned to comments
    let comments = document.getElementById("comment-input");
    // but to get the actual text of the comment bar instead of the <input>, we need to use comments.value
    // and assign it to the p element that gets appended to the DOM
    p.innerText = `${comments.value}`;
})

// failed first attempt
// function countingUp(){
//     cntr.addEventListener('DOMContentLoaded', () => {
//         count++;
//         update()
//     })   
// }

// function update(){
//     cntr.innerHTML = count
// }
