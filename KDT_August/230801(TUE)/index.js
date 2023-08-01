const express = require('express');
const { title } = require('process');
const app = express();
const PORT = 8000;

// 변수는 맨 위 , 그다음 미들웨어, listen 밑에는 아무것도 적으면 안된다.
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine", 'ejs');
app.set(express.json());

//router
app.get('/', (req,res) => {
   // console.log(req.body);
   res.render('practice2' , {
    title : '실습 2'
   })
});

// app.get('/', (req,res) => {
//    // res.send('hello');
//     res.render('practice1',{
//         title : '실습 1',
//     })
// });

// app.get('/getForm', (req,res) => {
//     console.log(req.query)
//     res.render('result', {
//         title:'GET 요청 폼 결과 확인', 
//         userInfo : req.query,
//     })
// })

// app.post('/postForm', (req,res) => {
//     console.log(req.body)
//     res.render('result', {
//         title : 'POST 요청 폼 결과 확인',
//         userInfo: req.body,
//     })
// })

app.post('/postForm', (req,res) => {
    console.log(req.body)
    res.render('result', {
        title : '실습 2',
        userInfo: req.body,
    })
})



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});