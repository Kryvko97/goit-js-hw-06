const input =document.querySelector('#name-input')
const nameLabel = document.querySelector('#name-output')




input.addEventListener('input', onInputChange)

function onInputChange(e){
nameLabel.textContent = e.target.value.trim() === '' ? 'Anonymous' : e.target.value.trim();

}







