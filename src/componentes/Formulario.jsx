function Formulario() {
    return(
        <>
            <section className="conteudoPag">
                <div className="conteudoTitulo">
                    <h1>Cadastro de Pessoas</h1>
                    <p>Insira suas informações para completar o seu cadastro.</p>
                </div>

                <div className="conteudoForm">
                <form className="formulario">
                    <div className="campoInput">
                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text" placeholder="Digite o seu nome..."/>
                    </div>
                    <div className="campoInput">
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="text" placeholder="Digite sua senha..."/>
                    </div>
                    <div className="campoInput">
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" placeholder="Digite o seu e-mail..."/>
                    </div>
                    <div className="divBotao">
                        <input id="buttom" className="botao" type="submit" value="Enviar" />
                    </div>
                </form>
                </div>
            </section>
        </>
    )
}

export default Formulario;