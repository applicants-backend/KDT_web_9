const express = require('express');
const router = express.Router();

//router
app.get('/', (req, res) => {
    res.render('index');
});
//get 실습
app.get('/axiosGet', (req, res) => {
    res.render('get');
});
app.get('/resultGet', (req, res) => {
    res.send({ result: true, data: req.query });
});

//post 실습
app.get('/axiosPost', (req, res) => {
    res.render('post');
});
app.post('/resultPost', (req, res) => {
    const id = 'kdt9';
    const pw = '1234';
    if (id === req.body.username && pw === req.body.password) {
        res.send({ result: true, userInfo: req.body });
    } else {s
        res.send({ result: false, userInfo: null });
    }
});

