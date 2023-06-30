const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head>
                <title>Greeting</title>
            </head>
            <body>
                <h1>Hey whatsup!!!</h1>
                <form action="/create-user" method="POST" ><input type="text" name="username"/><button type="submit">Send</button></form>
            </body>

        </html>`);
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody.split('=')[1]);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();

        });
    }

    if (url === '/users') {
        res.write(`<html>
            <head>
                <title>Dummy Users</title>
            </head>
            <body>
                <ul>
                    <li>USER 1</li>
                    <li>USER 2</li>
                </ul>
            </body>
        </html>`);
        return res.end();
    }
});

server.listen(3000);