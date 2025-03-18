let nome = "";
//HelloWorld

function adicionarNome() {
   nome = document.getElementById("nome").value;
    if (nome == "") {
        alert("Por favor, insira seu nome");
    } else {
        listaDeAmigos.push(nome);
        document.getElementById("nome").value = "";
        novaLista();
    }
}


let listaDeAmigos = [];


function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo == "") {
        alert("Por favor, é necessário um nome de um amigo para ser adicionado.");
    } else {
        listaDeAmigos.push(nomeAmigo);
        document.getElementById("amigo").value ="";
        novaLista();
    }
 
}

function novaLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        lista.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert("Por favor, antes de sortear insira o nome de um amigo.");
        return;

    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos[indiceAleatorio];
    if (nomeSorteado == nome) {
        return;
    }

    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;

}  
