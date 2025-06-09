let button, quebralinha
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
        if(j < 5){
            button.setAttribute('id', 'bt'  + i + "" + j)
            button.setAttribute('onclick', "")
        }
        document.body.append(button)
    }
}