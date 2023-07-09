import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mysql from "mysql2"

const port = 6942
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "kampech",
})

interface UsuarioLogado {
    id?: number
}

interface LoginResults {
    id_user: number
    email: string
    name: string
    password: string
}

let usuario_logado: UsuarioLogado = {}

app.post("/cadastro/", (req, res) => {
    const form = req.body

    const nome = form.nome
    const email = form.email
    const senha = form.senha

    const sql = `INSERT INTO user (\`name\`, \`email\`, \`password\`)
        VALUES ("${nome}", "${email}", "${senha}")`

    connection.query(sql, (err) => {
        if (err) {
            console.error(err)
            res.send({ success: false, message: err })
            return
        }

        res.send({ success: true })
    })
})

app.get("/login/", (req, res) => {
    const sql = `SELECT * FROM user WHERE \`id_user\` = '${usuario_logado.id}'`

    connection.query(sql, (err, results: LoginResults[]) => {
        if (err) {
            console.error(err)
            res.send({ success: false, message: err })
            return
        }

        if (results.length > 0) {
            res.send({ success: true, data: results[0] })
        } else {
            res.send({ success: false, message: "Você não está logado." })
        }
    })
})

app.post("/login/", (req, res) => {
    const form = req.body

    const email = form.email
    const senha = form.senha

    const sql = `SELECT * FROM user WHERE \`email\` = '${email}' AND \`password\` = '${senha}'`

    connection.query(sql, (err, results: LoginResults[]) => {
        if (err) {
            console.error(err)
            res.send({ success: false, message: err })
            return
        }

        if (results.length > 0) {
            usuario_logado.id = results[0].id_user
            res.send({ success: true })
        } else {
            res.send({ success: false, message: "Seu e-mail ou senha estão incorretos." })
        }
    })
})

app.post("/editar_perfil/", (req, res) => {
    const form = req.body

    const nome = form.nome
    const email = form.email
    const senha = form.senha

    const sql = `UPDATE \`user\`
        SET \`name\`='${nome}', \`email\`='${email}',\`password\`='${senha}'
        WHERE \`id_user\` = ${usuario_logado.id}`

    connection.query(sql, (err) => {
        if (err) {
            console.error(err)
            res.send({ success: false, message: err })
            return
        }

        res.send({ success: true })
    })
})

app.post("/apagar_conta/", (req, res) => {
    const sql = `DELETE FROM \`user\` WHERE \`id_user\` = ${usuario_logado.id}`

    connection.query(sql, (err) => {
        if (err) {
            console.error(err)
            res.send({ success: false, message: err })
            return
        }

        res.send({ success: true })
    })
})

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})
