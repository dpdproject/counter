// counter monitor

let screenBox = document.createElement("div");

let number = document.createElement('p');
let number_text = document.createTextNode('0');

document.getElementById("counterBox").appendChild(screenBox);
screenBox.appendChild(number);
number.appendChild(number_text);

screenBox.setAttribute ('class', 'screen');
number.setAttribute('class', 'number');

// buttons

let buttonContainer = document.createElement("div")

let minusButton = document.createElement("button")
let plusButton = document.createElement("button")
let resetButton = document.createElement("button")

document.getElementById("counterBox").appendChild(buttonContainer);
buttonContainer.appendChild(minusButton)
buttonContainer.appendChild(plusButton)
buttonContainer.appendChild(resetButton)

buttonContainer.setAttribute('class', 'buttonContainer')
resetButton.setAttribute ('class', 'resetButton')

    // minus button

    let minusText = document.createTextNode('-');
    minusButton.appendChild(minusText);

    // plus button

    let plusText = document.createTextNode('+');
    plusButton.appendChild(plusText);

    // reset button

    let resetText = document.createTextNode('Reset');
    resetButton.appendChild(resetText);

// functions

let i = 0


minusButton.addEventListener ('click', ()=> {
    i--
    number.innerHTML = i
})

plusButton.addEventListener ('click', ()=> {
    i++
    number.innerHTML = i
})

resetButton.addEventListener ('click', ()=> {
    i=0
    number.innerHTML = i
})