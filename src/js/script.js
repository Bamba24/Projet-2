
const menuHamburger = document.querySelector('.menu');
const links = document.querySelector('.links')

menuHamburger.addEventListener("click", ()=>{
  links.classList.toggle('hide')
})

