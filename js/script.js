const hamburguer = document.querySelector('.hamburguer')
const nav = document.querySelector('nav')
const btnContact = document.querySelector('.button-contact')

const toggleMenu = (event) => {
  if (event.type === 'touchstart') {
    event.preventDefault()
  }
 
  [nav, btnContact].map(element => element.classList.toggle('active'))
}

hamburguer.addEventListener('click', event => toggleMenu(event))
