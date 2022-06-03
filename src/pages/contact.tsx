export const ContactPage = () => (
    <>
    <div id="background-contact" className="container1">
        <h1>Entre em contato!</h1>
        <form>
            <label htmlFor="nome">Digite seu nome:</label>
            <input type="text" id="nome" className="input-form" placeholder="nome"/>
            <br/>

            <label htmlFor="email">Digite seu email:</label>
            <input type="text" id="email" className="input-form" placeholder="email@email.com"/>
            <br/>

            <label htmlFor="nome">Digite sua mensagem:</label>
            <textarea id="nome" className="input-form" rows="5" />

            <button type="button" className="enviar">Enviar</button>
        </form>
    </div>
    </>
);