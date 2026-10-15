const resultHTML = document.querySelector('#result')
const inputHTML = document.querySelector('#input')
const buttonsHTML = document.querySelectorAll('button')

for (let i = 0; i < buttonsHTML.length; i++) {
    buttonsHTML[i].addEventListener('click', calculate)
}

function calculate() {
    let buttontext = this.innerText
    if (buttontext == 'AC') {
        inputHTML.textContent = ''
        resultHTML.textContent = ''
    }else if (buttontext == "del") {
        inputHTML.textContent = inputHTML.textContent.substring(0, inputHTML.textContent.length-1)
    }else if (buttontext == '=') {
        let result = eval(inputHTML.innerText)
        resultHTML.textContent=result
    }else {
        inputHTML.innerText += buttontext
    }
}