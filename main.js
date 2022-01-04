/* abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    });
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', ()=> {
    nav.classList.remove('show')
  });
}

/* fazer a sombra quando der scroll  */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
});

/* ScrollRevell: Mostra os elementos aparecendo lentamente na página ao dar scroll */
const scrollRevell = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollRevell.reveal(
  `#home .image, #home .text,
  #acessorios .card, #acessorios .img,
  #acessorios .title,
  #doacao .image, #doacao .text
  `, 
  { interval: 100 })