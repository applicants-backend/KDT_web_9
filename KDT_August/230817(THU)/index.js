const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 8000;
let pass = ''

// router
app.get('/', (req,res) => {
    res.render('index');
});
app.post('/hash', (req,res) => {
    const {pw} = req.body;
    const hash = createHashedPassword(pw);
    res.json({hash});
})

const salt = crypto.randomBytes(16).toString('hex') // 솔트 생성
const leng = 1000 // 반복 횟수
const key = 64 // 생성할 키의 길이
const algo = 'sha512'; // algorithm

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.post('/login', (req,res) => {
    const {pw} = req.body;
    // createHash : 지정한 알고리즘을 이용하여 해쉬 생성
    // pass = crypto.createHash("sha512").update(pw).digest('base64');
    // pdkdf2 (Sync) : (sync) 가 붙으면 동기 안붙으면 비동기
    pass = crypto.pbkdf2Sync(pw, salt, leng, key, algo).toString('base64');
    res.send(pass);
});

app.post('/verify', (req,res) => {
    const {pw} = req.body;
    const compare = crypto.pbkdf2Sync(pw, salt, leng, key, algo).toString('base64');
    console.log(compare);
    
    // 기본적인 방법
    if (compare === pass) {
        res.send(true);
    } else {
        res.send(false);
    };

    // crypto.timingSafeEqual 두개의 버퍼를 상수시간으로 비교하는 함수.
    // const result = crypto.timingSafeEqual(compare, Buffer.from(pass, 'base64'));
    // res.send(result);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);  
});

////////////암호화//////////////
/////단방향
const crypto = require('crypto');
/// 해쉬 함수
const createHashedPassword = (password) => {
    // createHah(알고리즘).update(암호화할 값).digest(인코딩 방식)
    return crypto.createHash('sha512').update(password).digest('base64');
    
}
