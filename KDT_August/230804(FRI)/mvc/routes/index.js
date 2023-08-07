const express = require('express');
const router = express.Router();
const controller = require('../controller/CComment')


// use 를 사용해도된다. use
router.get('/', controller.main);

router.get('/comments', controller.comments);
// // GET/comment/:id
router.get('/comment/:id' , controller.comment)

// router.get('/', (req,res) => {
//     res.render('index');
// });

// router.get('/comments', (req,res) => {
//     res.render('comments', {commentInfos:comments});
// });

// // GET/comment/:id
// router.get('/comment/:id', (req,res) => {
//     // console.log(req.params);
//     // console.log(req.params.id);
//     const commentId = req.params.id;
//     console.log(comments[commentId-1]);
//     res.render('comment',{commentInfo: comments[commentId-1]})

// });

module.exports = router;
