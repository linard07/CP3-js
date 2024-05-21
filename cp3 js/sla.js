function perguntaNotas(){
    let Situaçao
    let media1 = parseFloat(prompt('Diga a primeira nota do aluno '))
    let media2 = parseFloat(prompt('Diga a segunda nota do aluno'))
    let mediaTotal = (media1 + media2) / 2
    let p1 = document.getElementById('nota 1')
    let p2 = document.getElementById('nota  2')
    p1.textContent = 'com as notas '
    
    if(mediaTotal < 3){
        p2.textContent= 'Reprovado '
    }

    else if(mediaTotal < 5){
        p2.textContent= 'Recuperaçao'
    }
    else{
        p2.textContent = 'aprovado'
    }
}
let nome = prompt('Diga o nome do aluno')
let total = document.getElementById('total')


total.textContent = 'Situaçao atual' + nome