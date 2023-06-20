const value = document.getElementById('value')
const btnDecrement = document.querySelector('button[data-action="decrement"]')
const btnIncrement = document.querySelector('button[data-action="increment"]')

let counterValue = 0;
const clickDecrement = (e) =>{
    counterValue-= 1
    value.textContent = counterValue;
}

const clickIncrement = (e) =>{
    counterValue +=1
    value.textContent = counterValue
}

btnDecrement.addEventListener('click', clickDecrement)
btnIncrement.addEventListener('click', clickIncrement)