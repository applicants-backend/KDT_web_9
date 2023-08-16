const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const userInfo = { id: 'kdt9', pw: '1234' };

// app.get('/', (req,res) => {
//     const user = req.session.user;
//     console.log(user);
//     res.render('index');
//     if (user === undefined) {
//         res.render('index', { isLogin: false });
//     } else {
//         res.render('index', { isLogin: true, user });
//     }
// })
const secret = 'secretKey'

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/login', (req,res) => {
    if (req.headers.authorization) {

    } else {
        res.render('login')
    }
})

app.post('/login', (req,res) => {
    const {id, pw} = req.body

    const token = jwt.sign({id}, secret);
    res.send({result:true, token})
});

app.get('/login', (req,res) => {
    res.render('login;');
});

// app.post('login', (req,res) => {
//     if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
//         req.session.user = req.body.id;
//         res.send(`<script>alert('${req.body.id}님 환영합니다.');document.location.href='/';</script>`)
//         res.redirect('/');
//     } else {
//         res.send(`<script>alert('로그인실패');document.location.href='/';</script>`);
//     }
// });

app.post('/verify', (req,res) => {
    console.log(req.headers.authorization);
    const auth = req.headers.authorization
    const token = auth.split('');
    if ( token[0] === 'Bearer') {
        jwt.verify(token[1], secret, (err) => {
            if (err) {
                return res.status(403).send({message:'검증 실패'})
            }
            res.send({user : decoded });
            console.log(decoded);
        });
        console.log(verify)
    } else {
        res.send({message : '잘못된 인증 방식입니다.'});
    };
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});