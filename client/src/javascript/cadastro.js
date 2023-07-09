const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const nome = document.querySelector("#register__name").value
    const email = document.querySelector("#register__email").value
    const senha = document.querySelector("#register__password").value

    const corpoRequisicao = {
        nome: nome,
        email: email,
        senha: senha,
    }

    const requisicao = await fetch("http://localhost:6942/cadastro/", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(corpoRequisicao),
    })

    const resposta = await requisicao.json()

    if (resposta.success) location.href = "/html/login.html"
})
