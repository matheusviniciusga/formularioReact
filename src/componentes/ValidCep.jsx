import React, { useState } from 'react';
import axios from 'axios';

function ValidCep({ onAddressChange }) {
    const [cep, setCep] = useState('');

    const handleChange = (event) => {
        setCep(event.target.value);
    };

    const fetchAddress = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const address = {
                rua: response.data.logradouro,
                bairro: response.data.bairro,
                cidade: response.data.localidade,
                estado: response.data.uf
            };
            onAddressChange(address);
            console.log("Endereço Achado");
        } catch (error) {
            console.error('Erro ao buscar o endereço: ', error);
            console.log("Erro");
        }
    };

    const handleBlur = () => {
        fetchAddress();
    };

    return (
        <>
            <input
                id="cep"
                type="text"
                placeholder="Digite o seu CEP..."
                value={cep}
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue=""
            />
        </>
    );
}

export default ValidCep;

/*const cep = document.querySelector('#cep');

    const endereco = document.querySelector('#endereco');
    const bairro = document.querySelector('#bairro');
    const cidade = document.querySelector('#cidade');
    const estado = document.querySelector('#estado');

    const mensagem = document.querySelector('#mensagem');

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
    });*/