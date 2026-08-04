const fs = require('fs');

fs.writeFile('heello.txt', 'Hello, World!',  (error) => {

    if (error) {
        console.log('error', error);
    } else {
        console.log('file created successfully');
    }
})

fs.readFile('heello.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('error', error);
        return;
    } else {
        console.log( data);
        console.log('file read successfully');
    }
    
})