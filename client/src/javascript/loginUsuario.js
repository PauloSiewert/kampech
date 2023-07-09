const loginUsuario = async () => {
    const requisicao = await fetch("http://localhost:6942/login/", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
    })

    const resposta = await requisicao.json()

    if (resposta.success) {
        document.querySelector(".accountIcon").href = "/html/perfil.html"
    }
}

loginUsuario()
