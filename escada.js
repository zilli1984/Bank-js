function escada(n) {
    if(n === 0) {
        return;
    }

    escada(n - 1);

    let linha = ""

    for(let i = 1; i <= n; i++ ){
        linha += i
    }
    console.log(linha)
}
escada(5)