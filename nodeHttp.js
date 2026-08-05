
//create a server aug04-2026
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        return res.end('this is about page');
    }
    if (req.url === '/profile') {
        return res.end('this is profile page profile route');
    }
    if (req.url === '/contact') {
        return res.end('this is contact page');
    }
    if (req.url === '/') {
        return res.end('this is home page');
    }

    return res.end('404 page not found');
})
server.listen(3000, () => {
    console.log('server is running on port 3000')
})