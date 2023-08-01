const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// view engine
app.set('view engine','ejs');
app.set('views','./views')

//router 첫 화면 만들기, 열어주기
app.get('/',(req,res) => {
    res.render('index');
})
app.get('/',(req,res) => {
    res.render('index');
})




