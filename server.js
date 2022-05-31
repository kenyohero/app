const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1>Internet de las cosas</h1>'))

app.listen(8080);
console.log('Server on port 8080')