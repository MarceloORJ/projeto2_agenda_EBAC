const form = document.getElementById('formulario');

const contato = [];
const telefone = [];

let linhas ='';

form.addEventListener('submit', function(e){

    e.preventDefault();

    adicionarLinha();

    atualizaTabela();

});


function adicionarLinha(){

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('telefone-contato');

    

    if(telefone.includes(inputNumeroContato.value) || contato.includes(inputNomeContato.value)){

        alert(`O numero: ${inputNumeroContato.value} ou nome: ${inputNomeContato.value} já foi cadastrado antes`);

    }
    else{
        contato.push(inputNomeContato.value);
        telefone.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value.substring(0,4) + ' - ' + inputNumeroContato.value.substring(4,8)}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value='';
    inputNumeroContato.value='';

}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}