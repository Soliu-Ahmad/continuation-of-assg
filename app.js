const path = require('path')
const express = require('express')
const hbs = require('hbs');


// EXPRESS Config
const app = express();
app.set('view engine', 'hbs');

// Rendering startic files
const publicDirectory = (path.join(__dirname, './public'));
const viewsPath = (path.join(__dirname, './templates/views'));
const partialsPath = (path.join(__dirname, './templates/partials'))
app.set('views', viewsPath);
app.use(express.static(publicDirectory));
hbs.registerPartials(partialsPath);

const port = 3000;

app.get('/', (req, res) => {
    res.render('index', {
        app: 'Express Application',
        page: 'Dashboard'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        app: 'Express Application',
        page: 'About page'
    })
})


app.get('/api', (req, res) => {
    if (!req.query.search) {
        res.send({
            error: 'You have to put a search term'
        })
    } else {
        // console.log(req.query)
        res.send({ name: 'Soliu', location: 'lagos' });
    }

})

app.get('*', (req, res) => {
    res.send('<h1> Page not found</h1> ');
});

// EXPRESS LISTEN PORT
app.listen(port, () => {
    console.log(`application is running on port ${port}`);
});