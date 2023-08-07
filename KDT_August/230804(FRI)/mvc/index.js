const express = require('express')
const app = express();
const PORT = 8000;

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = require('./routes');
app.use('/',router);
// examples )
// const userRouter = require('./routes/user')
// app.use('/user', userRouter)

app.get('*', (req,res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
