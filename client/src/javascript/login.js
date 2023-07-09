const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = document.querySelector("#login__email").value
    const senha = document.querySelector("#login__password").value

    const corpoRequisicao = {
        email: email,
        senha: senha,
    }

    const requisicao = await fetch("http://localhost:6942/login/", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(corpoRequisicao),
    })

    const resposta = await requisicao.json()

    if (resposta.success) {
        alert("Login efetuado com sucesso!")
        location.href = "/"
    } else {
        const mensagemErro = document.querySelector(".mensagem__erro")

        mensagemErro.innerHTML = "<b>Erro:</b> " + resposta.message
    }
})
