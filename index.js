
//create a server in express js aug05-2026
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('this is home page');
});

app.get('/about', (req, res) => {
    res.send('this is about page');
});

app.post('/signup', (req, res) => {
    res.send('this is signup page');
});

app.put('/update', (req, res) => {
    res.send('this is update page');
});
app.delete('/delete', (req, res) => {
    res.send('this is delete page');
    
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
});