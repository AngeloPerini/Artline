document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-contato");
    const mensagemEnvio = document.getElementById("mensagem-envio");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Monta o corpo do e-mail
        const corpoEmail = `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`;

        // Simulação de envio de e-mail (não seguro)
        window.open('mailto:comercial@artlinemoveis.com.br?subject=Contato%20do%20Site&body=' + encodeURIComponent(corpoEmail));
        
        // Limpa o formulário
        form.reset();

        // Exibe mensagem de sucesso
        mensagemEnvio.innerText = "E-mail enviado com sucesso!";
    });
});