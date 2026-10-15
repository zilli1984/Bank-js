let saldo = 300;

function debitar (valor) {
    if(valor <= 0) {
        console.log("Saldo invalido")
    }else if (valor > saldo ) {
        console.log("Saldo Isuficiente")
    } else {
        saldo -= valor
        console.log(`${valor} debitado do Saldo`)
    }
}

debitar(300)