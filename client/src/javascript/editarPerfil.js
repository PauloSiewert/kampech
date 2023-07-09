const form = document.querySelector("form")
const botaoApagar = document.querySelector("#apagar__conta")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const nome = document.querySelector("#editar__name").value
    const email = document.querySelector("#editar__email").value
    const senha = document.querySelector("#editar__password").value

    const corpoRequisicao = {
        nome: nome,
        email: email,
        senha: senha,
    }

    const requisicao = await fetch("http://localhost:6942/editar_perfil/", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(corpoRequisicao),
    })

    const resposta = await requisicao.json()

    if (resposta.success) location.href = "/"
})

botaoApagar.addEventListener("click", async () => {
    const requisicao = await fetch("http://localhost:6942/apagar_conta/", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    })

    const resposta = await requisicao.json()

    if (resposta.success) {
        location.href = "/"
    }
})

const loginUsuario = async () => {
    const requisicao = await fetch("http://localhost:6942/login/", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
    })

    const resposta = await requisicao.json()

    if (resposta.success) {
        const inputNome = document.querySelector("#editar__name")
        const inputEmail = document.querySelector("#editar__email")
        const inputSenha = document.querySelector("#editar__password")

        const dadosUsuario = resposta.data

        inputNome.value = dadosUsuario.name
        inputEmail.value = dadosUsuario.email
        inputSenha.value = dadosUsuario.password
    }
}

loginUsuario()
