let button, quebralinha, cont = 0, marcacao
let tabuleiro = new Array(5)

for (let i = 0; i < tabuleiro.length; i++) {
    tabuleiro[i] = new Array(11)
}
for (let i = 0; i < tabuleiro.length; i++) {
    quebralinha = document.createElement('br')
    document.body.append(quebralinha)
    for (let j = 0; j < tabuleiro[i].length; j++) {
        button = document.createElement('button')
        button.setAttribute('type', 'button')
        if (j < 5) {
            button.setAttribute('id', 'bt' + i + "" + j)
            button.setAttribute('onclick', "marca(" + i + "," + j + ")")
        } else if (j == 5) {
            button.setAttribute('id', 'btVirifica' + i)
            button.setAttribute('onclick', "")
        } else {
            button.setAttribute('id', 'btResult', + i + "" + j)
        } if (i > 0) {
            button.disabled = true
        }
        button.setAttribute('class', 'btJogo' + i)
        button.setAttribute('class', 'btJogoCol' + j)
        button.append(document.createTextNode(""))
        document.body.append(button)
    }
}
let h1 = document.createElement('h1')
h1.setAttribute('id', 'resultado')
document.body.append(h1)

function marca(linha, coluna) {
    if (coluna < 5) {
        marcarCasa(("bt" + linha + "" + coluna))
    }
}

function marcarCasa(nomeBotao) {
    switch (cont) {
        case 0:
            document.getElementById(nomeBotao).style.backgroundColor = "purple"
            break
        case 1:
            document.getElementById(nomeBotao).style.backgroundColor = "yellow"
            break
        case 2:
            document.getElementById(nomeBotao).style.backgroundColor = "green"
            break
        case 3:
            document.getElementById(nomeBotao).style.backgroundColor = "red"
            break
        case 4:
            document.getElementById(nomeBotao).style.backgroundColor = "blue"
            break
        case 5:
            document.getElementById(nomeBotao).style.backgroundColor = "orange"
            break
        default:
            document.getElementById(nomeBotao).style.backgroundColor = "purple"
            cont = 0
    }
    marcacao = cont
    cont++
}
