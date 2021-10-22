

function titulo(){ 
    let titulo = document.querySelector("#tituloPrincipal")
    titulo.style.backgroundColor = "green"; 
} 

function conteudo(){
    let conteudo = document.getElementById('conteudo')
    conteudo.innerHTML = "Modifiquei"
}

document.querySelector("article h2").innerHTML = prompt("Insira o novo título: ");

function noticia(){
    let noticia = document.querySelector('.animado')
    noticia.style.color = "red"
}