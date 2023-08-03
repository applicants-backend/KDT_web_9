const express = require('express')
const app = express();
const path = require('path')
const multer = require('multer')
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// 정적파일 갖고오기
app.use('/iploads', express.static(__dirname + '/uploads'))

// multer 세팅
const uploadDetail = multer({
    // storage : 저장할 공간에 대한 정보
    // disk storage : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
    storage : multer.diskStorage({
        destination(req,file,done) {
            done(null, 'uploads/');
        },
        filename (req, file, done) {
            
            console.log('filename: ',req.body);
            const ext = path.extname(file.originalname);
            done(null, req.body.userId + Date.now() + ext)
            // console.log('ext', ext)
            // done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits : {fileSize : 10 * 1024 * 1024}
})

// router
app.get('/', (req,res) => {
    res.render('index')
})

app.post('/result', uploadDetail.single('profile'), (req,res) => {
    res.render('result'), {
        userInfo : req.body,
        profile : req.file.path,
    }
    console.log(req.body)
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
