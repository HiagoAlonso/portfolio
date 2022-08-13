const slideButton1 = document.querySelector("#slide1")
const slideButton2 = document.querySelector("#slide2")
const slideButton3 = document.querySelector("#slide3")
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