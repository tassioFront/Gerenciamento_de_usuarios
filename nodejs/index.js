const http = require ("http"); //o require incorpora algo ao código.Vamos incorporar a biblioteca http

/*
Vamos pegar o método createServer para criar o servidor.
Vamos passar uma => como parametro, que vai ter outros dois parametros: request (req) e response(res)
*/

//importante: o comando crtl + c interrompe o servidor. Isso é importante porque qulquer alteração no code, para ser subida ao servidor, antes este deve ser interronpido.

let server = http.createServer((req, res) => { 

    console.log(req.url);
    console.log(req.method);

    switch (req.url) {
        case "/": //localHost:3000

        res.statusCode=200; //se o status da requisição foi bem sucedida
        res.setHeader("content-type", "text/html"); //respondendo em formato HTML
        res.end(
            `<!DOCTYPE html>
            <html lang="en">
                <head>
                <meta charset="UTF-8">
                <title>Document</title>
                </head>
                <body>
                    <h1>
                        Olá
                    </h1>
                
                </body>
            </html>`
        );
        break;

        case "/users": //localHost:3000/users 
        res.statusCode=200; //se o status da requisição foi bem sucedida
        res.setHeader("content-type", "application/json"); //respondendo em JSON
        res.end(JSON.stringify({
            users:[{
                name:"Tássio",
                email:"tassio@hotmail.com",
                id:1
            }]
        }))
        break;

    }

});

/*
Precisamos informar ao servidor qual a porta que ele ficará escutando os request
Para aí executar as respondes
como atribuimos a criação do servidor a variável server, vamos usa-la para qe fique escutando a porta 3000
*/
server.listen(3000, "127.0.0.1", () => { //no método listen, também passamos o número do IP que será criado.
        console.log("servidor rodando");
})