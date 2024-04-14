function Formulario() {
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
                                    <label htmlFor="endereco">Endereço</label>
                                    <input id="endereco" type="text" placeholder="Digite o seu endereço..."/>
                                </div>
                                <div className="campoInput">
                                    <label htmlFor="cep">CEP</label>
                                    <input id="cep" type="text" placeholder="Digite o seu CEP..."/>
                                </div>
                            </div>
                            <div className="subCampo2">
                                <div className="campoInput">
                                    <label htmlFor="nrResi">Nrº Casa</label>
                                    <input id="nrResi" type="number" placeholder="Digite o número..."/>
                                </div>
                                <div className="campoInput">
                                    <label htmlFor="bairro">Bairro</label>
                                    <input id="bairro" type="text" placeholder="Digite o bairro..."/>
                                </div>
                            </div>
                            <div className="subCampo3">
                                <div className="campoSelect">
                                    <label htmlFor="cidade">Cidade </label>
                                    <select name="cidade" id="cidade">
                                        <option value="value1">Recife</option>
                                        <option value="value2">Salvador</option>
                                    </select>
                                </div>
                                <div className="campoSelect">
                                    <label htmlFor="estado">Estado </label>
                                    <select name="estado" id="estado">
                                        <option value="value1">Pernambuco</option>
                                        <option value="value2">Bahia</option>
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