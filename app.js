const express = require('express');
const app = express();
const path = require('path')

app.set("/", "html")
app.use(express.static(path.join(__dirname, "/")));

app.get('/', (req, res) => {
    // res.render('index')
    res.render('index')
});

app.get('/test', (req, res) =>{
    res.sendFile(__dirname + '/test.html');
})

app.get('/cube', (req, res) =>{
    res.sendFile(__dirname + '/cube.html');
})

app.get('/ball', (req, res) =>{
    res.sendFile(__dirname + '/ball.html');
})

app.get('/model_cube', (req, res) =>{
    res.sendFile(__dirname + '/model_cube.html');
})

app.get('/event', (req, res) =>{
    res.sendFile(__dirname + '/event.html');
})

app.get('/card', (req, res) => {
    // res.render('index')
    res.sendFile(__dirname + '/card.html');
});

app.listen(7000, () => {
    console.log("Listening")
})