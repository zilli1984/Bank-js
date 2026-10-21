let clientes = [

]

function createCliente(cliente) {
    clientes.push(cliente)
}

function getCliente(CPF) {
    let encontrado = false;

    for (let i = 0; i < clientes.length; i++) {
        if (CPF === clientes[i].CPF)
            return clientes[i];
    }
    if (encontrado === false) {
        return("Cliente nao encontrado");
    }
}

let cliente1 = {
    "nome": "Joao",
    "data Nascimento": new Date(2010, 9, 10),
    "Pais": "Brasil",
    "CPF": "14236827594"
}

let cliente2 = {
    "nome": "Maria",
    "data Nascimento": new Date(2004, 7, 10),
    "Pais": "Alemanha",
    "CPF": "17843827594"
}

let cliente3 = {
    "nome": "Ana",
    "data Nascimento": new Date(2000, 3, 10),
    "Pais": "Portugal",
    "CPF": "14236333944"
}

createCliente(cliente1)
createCliente(cliente2)
createCliente(cliente3)

console.log(getCliente("14236827594"))

