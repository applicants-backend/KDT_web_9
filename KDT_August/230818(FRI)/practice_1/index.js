const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 8000;

require('dotenv').config();

let pass = ''
let hash = ''

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
app.get('/', (req,res) => {
    res.render('index');
});

// server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);  
});
