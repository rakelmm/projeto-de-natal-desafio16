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

/* fazer a sombra no header quando der scroll  */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
};

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
  #doacao .image, #doacao .text,
  footer .brand, footer .social
  `, 
  { interval: 100 }
);

  /* Botão voltar para o topo */
  const backToTopButton = document.querySelector('.back-to-top')

  function backToTop()  {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }

  /* Ao clicar em alguma seção do menu, o mesmo ficará ativo (em vermelho) */
  const sections = document.querySelectorAll('main section[id]')

  function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections ) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')

      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

      if(checkpointStart && checkpointEnd) {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.add('active')
          
      } else {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.remove('active')
      }
    }
  }

  /* Local onde os scrolls são chamados */
  window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
  });

  
