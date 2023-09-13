const formulario = document.querySelector('.formulario');
const emailInput = document.querySelector('#email')
const box_1 = document.querySelector('.box');
const box_2 = document.querySelector('.box-2')
formulario.addEventListener('submit', (e) =>{
  e.preventDefault();
  if (isEmailValid(emailInput.value)){
    box_1.classList.add('esconder');
    box_2.classList.remove('esconder');
  } else {
    alert("Por favor, digite um email válido");
    return;
  }
});
function isEmailValid(email){
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if(emailRegex.test(email)) {
    return true
  } 
  
    return false
}