Para fazer o repostório rodar, você deve: 
1- Abrir o VSCode e clonar o repositório para a pasta que desejar
2- Clique em abrir folder e abra apenas a pasta "Client"
3- Abra uma nova janela no VSCode e clique em abrir folder e abra apenas a pasta "Server"
4- Abra o MYSQL e importe o arquivo do banco de dados, caminho: kampech>server>src>database>"kampech(1)".sql
5- Na janela onde está aberta a pasta "Server", abra um terminal e digite o comando:"npm run dev"
ps: caso ocorra um erro e na mensagem de erro estar escrito algo relacionado a "password" (senha), você deve ir até a pasta index.ts, e fazer a seguinte alteração:
caminho: kampech>server>src>database>"index.ts"
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "", (colocar a palavra "root" dentro das aspas do campo password)
    database: "kampech",
})
caso de certo, deve aparecer no console: "Servidor escutando na porta 6942"
6- Na janela onde está aberta a pasta "Client", abra um terminal e digite o comando:"npm run dev", no console aparecerá: 
Available on:
  http://26.145.159.16:5501
  http://192.168.0.10:5501
  http://127.0.0.1:5501
Acesse qualquer um dos links acima e estará visualizando o repositório em forma de localhost.
