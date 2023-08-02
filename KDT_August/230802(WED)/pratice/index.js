const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//view engine
app.set('view engine', 'ejs')
app.set('views', './views')

// router
app.get('/',(req,res) => {
    res.render('index');
});

//Get 실습
app.get('/axiosGet', (req,res) => {
    res.render('get')
})
//Post 실습
app.get('/axiosPost', (req,res) => {
    res.render('post')
})

// server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

