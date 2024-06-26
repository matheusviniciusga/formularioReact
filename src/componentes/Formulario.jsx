import 'https://code.jquery.com/jquery-3.7.1.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.js'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
//import ValidCep from './ValidCep';

function Formulario() {
    const [endereco, setEndereco] = useState({
        cidade: '',
        estado: ''
    });
    
    const [erroCep, setErroCep] = useState(false);
    const [mensagemErro, setMensagemErro] = useState('');

    const {register, handleSubmit, setValue, setFocus} = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }

    const checkCep = (e) => {
        const cep = e.target.value;
        console.log(cep);
        if (cep.trim() === '') {
            setValue('endereco', '');
            setValue('bairro', '');
            setValue('cidade', '');
            setValue('estado', '');
            setEndereco({ cidade: '', estado: '' });
            setMensagemErro('');
            return;
        }
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            if (data.erro) {
                setMensagemErro('CEP inválido. Por favor, insira um CEP válido.');
                return;
            }
            console.log(data);
            setValue('endereco', data.logradouro);
            setValue('bairro', data.bairro);
            setValue('cidade', data.localidade);
            setValue('estado', data.uf);
            setEndereco({ cidade: data.localidade, estado: data.uf });
            setMensagemErro('');
            setFocus('nrResi');
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            setErroCep(true);
        });
    }

    useEffect(() => {
        $('#cep').mask('00000-000');
    }, []);

    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    function handleSenhaChange(event) {
        const novaSenha = event.target.value;
        setSenha(novaSenha);

        if (validarSenha(novaSenha) && novaSenha.length >= 6) {
            setErro('');
        } else {
            setErro('A senha deve conter 6 caracteres com pelo menos uma letra e um número.');
        }
    }

    function checkSenha() {
        const novaSenha = event.target.value;
        
        if (novaSenha.trim() === '') {
            setValue('password', '');
            setErro('');
            return;
        }
    }

    function validarSenha(senha) {
        const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
        return regex.test(senha);
    }

    return(
        <>
            <section className="conteudoPag">
                <div className="conteudoTitulo">
                    <h1>Cadastro de Pessoas</h1>
                    <p>Insira suas informações para completar o seu cadastro.</p>
                </div>

                <span id="mensagem">{mensagemErro}</span>
                {erro && (
                    <span id="mensagem">{erro}</span>
                )}

                <div className="conteudoForm">
                    <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                        <div className="campo1">
                            <div className="campoInput">
                                <label htmlFor="name">Nome</label>
                                <input id="name" type="text" placeholder="Digite o seu nome..." {...register("nome")} required/>
                            </div>
                            <div className="campoInput">
                                <label htmlFor="password">Senha</label>
                                <input id="password" value={senha} type="password" placeholder="Digite sua senha..." onChange={handleSenhaChange} onBlur={checkSenha} required/>
                            </div>
                            <div className="campoInput">
                                <label htmlFor="email">E-mail</label>
                                <input id="email" type="email" placeholder="Digite o seu e-mail..." {...register("email")} required/>
                            </div>
                        </div>
                        <div className="campo2">
                            <div className="subCampo1">
                                <div className="campoInput">
                                    <label htmlFor="cep">CEP</label>
                                    <input id="cep" type="text" placeholder="Digite o CEP..." {...register("cep")} onBlur={checkCep} />
                                </div>
                                <div className="campoInput">
                                    <label htmlFor="endereco">Endereço</label>
                                    <input id="endereco" type="text" placeholder="Digite o seu endereço..." {...register("endereco")} value={endereco.rua}/>
                                </div>
                            </div>
                            <div className="subCampo2">
                                <div className="campoInput">
                                    <label htmlFor="nrResi">Nrº Casa</label>
                                    <input id="nrResi" type="number" placeholder="Digite o número..." {...register("nrResi")}/>
                                </div>
                                <div className="campoInput">
                                    <label htmlFor="bairro">Bairro</label>
                                    <input id="bairro" type="text" placeholder="Digite o bairro..." {...register("bairro")}/>
                                </div>
                            </div>
                            <div className="subCampo3">
                                <div className="campoSelect">
                                    <label htmlFor="cidade">Cidade </label>
                                    <select name="cidade" id="cidade" onChange={(e) => setValue("cidade", e.target.value)} value={endereco.cidade}>
                                        <option value="">Selecione a cidade</option>
                                        {endereco.cidade && <option value={endereco.cidade}>{endereco.cidade}</option>}
                                    </select>
                                </div>
                                <div className="campoSelect">
                                    <label htmlFor="estado">Estado </label>
                                    <select name="estado" id="estado" onChange={(e) => setValue("estado", e.target.value)} value={endereco.estado}>
                                        <option value="">Selecione a cidade</option>
                                        {endereco.estado && <option value={endereco.estado}>{endereco.estado}</option>}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="botaoEmbaixo">
                            <div className="divBotao">
                                <input id="buttom" className="botao" type="submit" value="Enviar" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Formulario;