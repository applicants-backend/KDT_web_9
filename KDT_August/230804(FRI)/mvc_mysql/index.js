const express = require('express')
const app = express();
const PORT = 8000;

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const indexRouter = require('./router')
app.use('/',router);


app.get('*', (req,res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


