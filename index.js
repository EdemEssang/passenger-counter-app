

// change from innerText to textContent 
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let welcomeEl = document.getElementById("welcome-el")
let myName = "Edem Ukoh"
let greeting = "welcome to the station"



welcomeEl.textContent = greeting + "\n" + myName 




console.log(countEl);

let count = 0
function increment(){
    count  += 1
    countEl.textContent = count
}



function save(){
let countStr = count + " - " 
saveEl.textContent += countStr
countEl.textContent = 0
count = 0
}

