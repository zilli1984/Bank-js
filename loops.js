let nomes = ["Ana", "Joao", "Maria", "Marcos"]

for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

for(let nome of nomes) {
    console.log(nome)
}

nomes.forEach(nome => {
    console.log(nome)
})