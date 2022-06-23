let pesoPeca = 150
let numeroPeca = 7
let nomePeca = "RODA";

if (pesoPeca > 100) {
    console.log("Pode cadastrar a peça.  ")
} else {
    console.log("Peça com peso insuficiente. ") 
}

if (numeroPeca >= 10) {
    console.log("Numero de peças excedeu o limite, Cadastro nao permitido. ")
} else {
    console.log("Cadastro realizado com SUCESSO ")
}

if (nomePeca.lenght < 3) {
    console.log("Numero de caracteres insuficiente, insira pelo menos 3 caracteres. ")
} else {
    console.log("Cadastro conluído. ")
}