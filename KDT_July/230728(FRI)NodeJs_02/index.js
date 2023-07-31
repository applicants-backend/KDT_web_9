const express = require ('express');
// import express from 'express'
const app = express();
const PORT = 8000;

// set 함수는 서버의 속성을 지정해준다. => view engine 을 ejs 엔진으로 설정한다.
app.set('view engine', 'ejs');
app.set('views','./views');

// 정적인 파일 불러오기.
app.use('/public', express.static('./public'))

// 첫번째 매개변수는 request, response 이다.
// app.get('/', (req , res) => {
    // res.send('Hello Express')
//     res.send({result: true, code:1000, message : `회원가입성공` , data : {name : "minhyun", age: "28"} });
// });
// send() 는 클라이언트에 응답 데이터를 보낼때 사용한다.
// send() 는 데이터를 보낼때 쓰게된다 (문자열 데이터를 보냄) 이렇게 보냈기에 페이지에 hello express 가 보내진건다.)

app.get('/kdt9', (req , res) => {
    // res.send('Hello kdt9')
    res.render('test', {num : [1,2,3,4,5,6,7,8,9]});
    // render 함수는 뷰 엔진을 렌더링 해준다.
    // 렌더링 => 데이터를 쭉 읽어나간다.
});

app.get('/practice1', (req,res) => {
    res.render('practice1')
})


app.get('/practice2', (req,res) => {
    res.render('practice2')
})


// listen => 서버를 열어준다.
app.listen(PORT, () => {
    console.log(`http://localhost:$(PORT)`)
});

