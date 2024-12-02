let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let decBtn = document.getElementById("decrement-btn")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}



function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function decrement() {
    count-= 1
    countEl.textContent = count
    
}

function erase() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent ="Previous entries: "
    
    
}
