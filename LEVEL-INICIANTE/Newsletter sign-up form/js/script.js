const formulario = document.querySelector('.formulario');
const box_1 = document.querySelector('.box');
const box_2 = document.querySelector('.box-2')
formulario.addEventListener('submit', (e) =>{
  e.preventDefault();
  box_1.classList.add('esconder');
  box_2.classList.remove('esconder');
})
