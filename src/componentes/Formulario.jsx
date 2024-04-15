import 'https://code.jquery.com/jquery-3.7.1.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.js'
import { useEffect, useState } from 'react'
import ValidCep from './ValidCep';

function Formulario() {
    const estados = [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF',
        'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
        'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
        'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
    ];
    
    const cidades = [
        'Rio Branco', 'Maceió', 'Macapá', 'Manaus', 'Salvador', 'Fortaleza', 'Brasília',
        'Vitória', 'Goiânia', 'São Luís', 'Cuiabá', 'Campo Grande', 'Belo Horizonte',
        'Belém', 'João Pessoa', 'Curitiba', 'Recife', 'Teresina', 'Rio de Janeiro', 'Natal',
        'Porto Alegre', 'Porto Velho', 'Boa Vista', 'Florianópolis', 'São Paulo', 'Aracaju', 'Palmas'
    ];

    const [endereco, setEndereco] = useState({
        rua: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    const handleAddressChange = (address) => {
        setEndereco(address);
    };

    useEffect(() => {
        $('#cep').mask('00000-000');
    }, []);

    return(
        <>
            <section className="conteudoPag">
                <div className="conteudoTitulo">
                    <h1>Cadastro de Pessoas</h1>
                    <p>Insira suas informações para completar o seu cadastro.</p>
                </div>

                <span id="mensagem"></span>

                <div className="conteudoForm">
                    <form className="formulario">
                        <div className="campo1">
                            <div className="campoInput">
                                <label htmlFor="name">Nome</label>
                                <input id="name" type="text" placeholder="Digite o seu nome..." required/>
                            </div>
                            <div className="campoInput">
                                <label htmlFor="password">Senha</label>
                                <input id="password" type="text" placeholder="Digite sua senha..." required/>
                            </div>
                            <div className="campoInput">
                                <label htmlFor="email">E-mail</label>
                                <input id="email" type="email" placeholder="Digite o seu e-mail..." required/>
                            </div>
                        </div>
                        <div className="campo2">
                            <div className="subCampo1">
                                <div className="campoInput">
                                    <label htmlFor="cep">CEP</label>
                                    <ValidCep onAddressChange={handleAddressChange} />
                                </div>
                                <div className="campoInput">
                                    <label htmlFor="endereco">Endereço</label>
                                    <input id="endereco" type="text" placeholder="Digite o seu endereço..." value={endereco.rua}/>
                                </div>
                            </div>
                            <div className="subCampo2">
                                <div className="campoInput">
                                    <label htmlFor="nrResi">Nrº Casa</label>
                                    <input id="nrResi" type="number" placeholder="Digite o número..."/>
                                </div>
                                <div className="campoInput">
                                    <label htmlFor="bairro">Bairro</label>
                                    <input id="bairro" type="text" placeholder="Digite o bairro..." value={endereco.bairro}/>
                                </div>
                            </div>
                            <div className="subCampo3">
                                <div className="campoSelect">
                                    <label htmlFor="cidade">Cidade </label>
                                    <select name="cidade" id="cidade" value={endereco.cidade} onChange={(e) => setEndereco({ ...endereco, cidade: e.target.value })}>
                                        <option value="">Selecione a cidade</option>
                                        {cidades.map((cidade, index) => (
                                            <option key={index} value={cidade}>{cidade}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="campoSelect">
                                    <label htmlFor="estado">Estado </label>
                                    <select name="estado" id="estado" value={endereco.estado} onChange={(e) => setEndereco({ ...endereco, estado: e.target.value })}>
                                    <option value="">Selecione o estado</option>
                                        {estados.map((estado, index) => (
                                            <option key={index} value={estado}>{estado}</option>
                                        ))}
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