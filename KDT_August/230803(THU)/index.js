const express = require('express')
const app = express();
const path = require('path')
const multer = require('multer')
const PORT = 8000;

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// w
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/userImg', express.static(__dirname + '/uploads'))

// multer
const upload = multer({
    // 업로드한 파일을 저장할 경로를 지정
    dest: 'uploads/'
})

// const uploadDetail = multer({
//     // storage : 저장할 공간에 대한 정보
//     // disk storage : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
//     storage : multer.diskStorage({
//         destination(req,file, done) {
//             done(null, 'uploads/');
//         },
//         filename (req, file, done) {
//             const ext = path.extname(file.originalname)
//             console.log('ext', ext)
//             done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//         },
//     }),
//     limits : {fileSize : 5 * 1024 * 1024}
// })
const uploadDetail = multer({
    // storage : 저장할 공간에 대한 정보
    // disk storage : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
    storage : multer.diskStorage({
        destination(req,file, done) {
            done(null, 'uploads/');
        },
        filename (req, file, done) {
            const ext = path.extname(file.originalname)
            console.log('ext', ext)
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits : {fileSize : 5 * 1024 * 1024}
})
// practice router 1
app.get('/', (req,res) => {
    res.render('practice1')
})


//router
// app.get('/', (req,res) => {
//     res.render('index')
// })

// // single
// app.post('/upload',uploadDetail.single('userfile'), (req,res) => {
//     console.log(req.file),
//     console.log(req.body);
// })

// // multi (ver1)
// app.post('/upload/array',uploadDetail.array('userfiles'), (req,res) => {
//     console.log(req.files),
//     console.log(req.body);
// })

// // multi (ver2) ------> key : value 로 객체를 만들어줘야함.
// app.post('/upload/fields',uploadDetail.fields([{name : 'userfile1'},{name : 'userfile2'},{name : 'userfile3'}]), (req,res) => {
//     console.log(req.files),
//     console.log(req.body);
// })

// 동적
// app.post('/dynamicFile', uploadDetail.single('dynamicFile'), (req,res) => {
//     console.log(req.file);
//     res.send(req.file);
// })

//practice1 
app.post('/userImg', uploadDetail.single('userImg'), (req,res) => {
    console.log(req.file);
    res.send(req.file);
})

// server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})