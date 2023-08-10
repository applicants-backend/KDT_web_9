import express from 'express';
const app = express();
const PORT = 8000;
import db from './models/index.js';

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//router

import userRouter from './routes/user.js';
app.use('/user', userRouter);

app.use('*', (req, res) => {
    res.render('404');
});

db.sequelize.sync({force : false}).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////
