const email = document.querySelectory('#email');
const cep = document.querySelectory('#cep');

const endereco = document.querySelectory('#endereco');
const bairro = document.querySelectory('#bairro');
const cidade = document.querySelectory('#cidade');
const estado = document.querySelectory('#estado');

const mensagem = document.querySelectory('#mensagem');

cep.addEventListener('focusout', async () => {
    try {

        const somenteNumeros = /^[0-9]+$/;
        const validarCep = /^[0-9]{8}$/;

        if(!somenteNumeros.test(cep.value) || !validarCep.test(cep.value)) {
            throw {cep_erro: "Cep Inválido."}
        }

        const resposta = await fetch('https://viacep.com.br/ws/${cep.value}/json/');

        if(!resposta.ok) {
            throw await resposta.json();
        }

        const respostaCep = await resposta.json();

        endereco.value = respostaCep.logradouro;
        bairro.value = respostaCep.bairro;
        cidade.value = respostaCep.localidade;
        estado.value = respostaCep.uf;

    } catch (error) {
        if(error?.cep_erro) {
            mensagem.textContent = error.cep_erro;
            setTimeout(() => {mensagem.textContent = ''}, 5000);
        }
    }
});