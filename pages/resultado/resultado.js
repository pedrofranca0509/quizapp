import { verificarTema, trocarTema } from "../../helpers/tema-helper.js";

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")
const botaoJogarNovamente = document.querySelector("main button ")

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

botaoJogarNovamente.addEventListener("click", jogarNovamente)

verificarTema(body, botaoTema)

function alterarAssunto() {
    const divIcone = document.querySelector(".assunto_icone ")
    const img = document.querySelector(".assunto_icone img")
    const titulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    img.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    img.setAttribute("alt", `Icone de ${assunto.toLowerCase()}`)
    titulo.innerText = assunto
}

alterarAssunto()


function inserirResultado() {
    const sectionPontuacao = document.querySelector(".pontuacao")
    const divAssunto = document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")

    sectionPontuacao.innerHTML = `
        ${divAssunto.outerhtml}

        <strong>${pontos}</strong>

        <p>${pontos} de 10</p>
    `
}

function jogarNovamente(){
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")

    window.location.href = "../../index.html"
}

inserirResultado()