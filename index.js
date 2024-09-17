const numbers = document.querySelectorAll(".number, .operations")
const display = document.getElementsByClassName("divResult")[0]

numbers.forEach(number => {
    number.addEventListener("click", function (event) {
        let input = event.target.innerHTML
        if (input == 'x') {
            input = "*"
        }
        appendToDisplay(input);
    })
})

function appendToDisplay(input) {
    if (display.value == '0') {
        display.value = input;
    } else {
        display.value = display.value + input;
    }

    display.scrollLeft = display.scrollWidth;
}
function calculate() {
    try {
        display.value = parseFloat(eval(display.value).toFixed(4))
        display.scrollLeft = 0;
    } catch {
        display.value = "Error"
    }
}

function AC() {
    display.value = ""
}