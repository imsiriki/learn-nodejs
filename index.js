
//create a server aug04-2026
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        return res.end('this is about page');
    }

    return res.end('created server')
})
server.listen(3000, () => {
    console.log('server is running on port 3000')
})