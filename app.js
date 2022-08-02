const path = require('path')
const express = require('express')

const app = express();

const publicDirectory = (path.join(__dirname, './public'));
app.use(express.static(publicDirectory));

const port = 2000;

app.get('/', (req, res) => {
    res.send('<h1>This is the Homepage</h1>');
});


app.get('/api', (req, res) => {
    res.send({ name: 'Soliu', location: 'lagos' });
})

app.get('*', (req, res) => {
    res.send('<h1> Page not found</h1> ');
});

// EXPRESS LISTEN PORT
app.listen(port, () => {
    console.log(`application is running on port ${port}`);
});