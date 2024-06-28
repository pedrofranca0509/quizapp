import { trocarTema, verificarTema } from "./helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema( body, botaoTema)
})

verificarTema( body, botaoTema)

const botoesAssuntos = document.querySelectorAll(".assuntos button")

botoesAssuntos.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento){
    const classBotao = evento.target.className
    const assunto = document.querySelector(`.${classBotao} span`).innerText
    localStorage.setItem("assunto", assunto)
    window.location.href = "./pages/quiz/quiz.html"
}