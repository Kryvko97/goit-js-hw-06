const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
input.addEventListener('input',changeFonSize)
function changeFonSize (e){
    text.style.fontSize = `${input.value}.px`
}
