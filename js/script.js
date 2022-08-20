const slideButton1 = document.querySelector("#slide1")
const slideButton2 = document.querySelector("#slide2")
const slideButton3 = document.querySelector("#slide3")

const slides = document.querySelectorAll(".slide > img")
const slideBox = document.querySelector(".slide-box")
const slideProjectButton = document.querySelector(".slide-project-button")


slideButton1.addEventListener('click', () => {
    slideBox.innerHTML = 
    `
    <h2>Projeto SoftNet</h2>
    <p>Este foi meu primeiro projeto trabalhando os conceitos do <strong>Mobile First</strong> e Minimalismo, bem como, utilizando a biblioteca <strong>jQuery</strong> para o Scroll suave do site.</p>
    `
    slideProjectButton.setAttribute('href', 'https://hiagoalonso.github.io/projeto-softpage/')
})

slideButton2.addEventListener('click', () => {
    slideBox.innerHTML = 
    `
    <h2>Projeto Doguinho's</h2>
    <p>Este foi meu primeiro projeto em <strong>Bootstrap</strong>. Sua criação não demorou menos que algumas poucas horas, provando a eficiência do Framework.</p>
    `
    slideProjectButton.setAttribute('href', 'https://hiagoalonso.github.io/projeto-doguinhos/')
})

slideButton3.addEventListener('click', () => {
    slideBox.innerHTML = 
    `
    <h2>Projeto Dungeons</h2>
    <p>Este foi meu primeiro projeto de um <strong>Site Completo</strong>. Inspirei-me em memórias dos Fóruns e Páginas de jogos RPG que amava na infância. Neste dediquei-me à testar muitos recursos novos, e sua interatividade está toda nas mãos do <strong>jQuery</strong>.</p>
    `
    slideProjectButton.setAttribute('href', 'https://hiagoalonso.github.io/Dungeons-Dragons/')
})




const menuItems = document.querySelectorAll(".header-menu a")
const arrowScrollTop = document.querySelector(".fa-arrow-up-from-bracket")

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault()
    const to = getScrollTopByHref(event.target)
    scrollToPosition(to)
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}

function scrollToPosition(to) {
    smoothScrollTo(0, to)
}

arrowScrollTop.addEventListener('click', () => {
    smoothScrollTo(0, 0)
})




const menuIco = document.querySelector(".fa-bars")
const menuBar = document.querySelector(".header-menu")
const aboutProjectIco = document.querySelector(".fa-circle-info")

function moveToggle(target, emit){
    if (target.style.left == "-100vw") {
        target.style.left = "0"
    } else {
        target.style.left = "-100vw"
    }
}

menuIco.addEventListener('click', () => {
    moveToggle(menuBar, menuBar)
})

aboutProjectIco.addEventListener('click', () => {
    moveToggle(slideBox, aboutProjectIco)
})

if (screen.width < 800) { 
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            moveToggle(slideBox, slide)
        })
    })
}










/**
 * Smooth scroll animation   -   Origamid
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
 function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };