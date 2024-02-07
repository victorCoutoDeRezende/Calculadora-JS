import calculate from "./calculate.js"

const input = document.querySelector('input')

export function handleButtonPress(ev){
    const keyValue= ev.currentTarget.dataset.value
    input.value += keyValue
}

export function handleClearButton(){
    const resultInput = document.getElementById('result')
    input.value = ''
    resultInput.value = ''
    resultInput.classList.remove('error')
    input.focus()
}

export function handleTyping(event){
    event.preventDefault()
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

    if(allowedKeys.includes(event.key)){
        input.value += event.key
        return
    }
    if(event.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if(event.key === 'Enter'){
        calculate()
    }
}