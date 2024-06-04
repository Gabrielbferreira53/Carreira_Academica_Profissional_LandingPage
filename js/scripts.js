/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("form").addEventListener("submit", function (event){
    event.preventDefault();

    const formData = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        email: document.getElementById("email").value,
        sexo: document.querySelector('input[name="sexo"]:checked').value,
        pais: document.querySelector('input[name="pais"]:checked').value,
        carreira: document.getElementById("carreira").value,
    };
    console.log("Dados:", formData);
    fetch("http://localhost:3333/formCarreira", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((response) => {
        // Verifica se a resposta da requisição foi bem-sucedida
        if (response.ok) {
            // Exibe uma mensagem de sucesso
            alert('Formulário enviado com sucesso!');
        } else {
            // Exibe uma mensagem de erro
            alert('Erro ao enviar o formulário. Por favor, tente novamente.');
        }
    })
    .catch((error) => {
        // Exibe uma mensagem de erro caso ocorra algum problema com a requisição
        console.error('Erro:', error);
        alert('Erro ao enviar o formulário. Por favor, tente novamente.');
    });
});
