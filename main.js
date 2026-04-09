//Cria função para validar preeechimento de campos da tela de login

function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;

    let loginSenha = document.getElementById('loginSenha').value;

    //Estrutura que verifica se os campos foram preenchidos

    if (!loginEmail || !loginSenha) {
        alert('Favor, preencha todos campos');
    } else {
        window.location.href = 'cadastro.html';
    }

}

/*
const acessar = () =>{
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert('favor, inserir todas as informações')
    }else{
        window.location.href = 'cadastro.html';
    }
}
*/

//Cria Array de forma global

var dadosLista = [];

// Função para salver usuário

function salvarUser() {

    let nomeUser = document.getElementById('nomeUser').value;

    if (nomeUser) {
        dadosLista.push(nomeUser);
        console.log(dadosLista)

        document.getElementById('nomeUser').value = "";

        criaLista();
    }
    else {
        alert("Usuário, favor prencher o campo nome")
    }
}

// Função para criar lista do Array

function criaLista(){

    let tabela = document.getElementById('tabela').innerHTML = "<tr> <th>Nome Usuário</th> <th>Ações</th> </tr>";

    for(let i = 0; i<= (dadosLista.length-1); i++){
            tabela += "<tr> <td>"+ dadosLista[i] +"</td> <td> <button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'  >Editar</button>  <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td> </tr>";
            document.getElementById('tabela').innerHTML = tabela;

    }

}

// Função para editar nomes da lista

function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i -1)];
    dadosLista.splice(dadosLista[(i-1)], 1);

}

// Função para excluir nomes da lista

function excluir(i){
    dadosLista.splice(dadosLista[(i -1)], 1);
    document.getElementById('tabela').deleteRow(i);
}