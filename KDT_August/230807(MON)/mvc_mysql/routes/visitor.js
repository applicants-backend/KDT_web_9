// const express = require('express');
// const controller = require('../controller/Cvisitor');
// const router = express.Router();

// // Get / visitor 방명록 전체 보이기
// router.get('/', controller.getVisitors);

// // Get / visitor / get 방명록 하나 조회
// router.get('/get', controller.getVisitor);
// // app.get('/get', (req,res) => {
// //     const query = `select * from visitor WHERE id=${req.query.id}`;
// //     conn.query(query, (err,rows) => {
// //         if (err) {
// //             console.log(err);
// //             return;
// //         }
// //         res.render('visitor', {data : rows });
// //     })
// // });

// // Post/visitor/write 방명록 생성
// router.post('/write', controller.postVisitor);
// // app.post('/write', (req,res) => {
// //     const query = `INSERT INTO visitor (name, comment) VALUES ('${req.body.name}','${req.body.comment}')`;
// //     conn.query(query, (err,rows) => {
// //         console.log('rows',rows)
// //         // res.send({id:name:comment})
// //         // res.send('방명록 하나 생성');
// //         // res.send({id: rows.insertId, name: req.body.name, comment: req.body.comment});
// //     })
// // });


// // Patch/visitor/edit 방명록 수정
// router.patch('/edit', controller.patchVisitor);
// // router.patch('/edit', (req,res) => {
// //     const query = `Update visitor set name='${req.body.name}', comment='${req.body.comment}' WHERE id='${req.body.id}'`
// //     conn.query(query, (err,rows) => {
// //         console.log('rows',rows)
// //         if (err) {
// //             console.log(err);
// //             res.send({result:false});
// //             return;
// //         }
// //         res.send({result:true});
// //     })
// // });

// // Post/visitor/delete 방명록 삭제
// router.delete('/delete', controller.deleteVisitor);
// // app.delete('/delete', (req,res) => {
// //     const query = `delete from visitor WHERE id=${req.body.id}`
// //     conn.query(query, (err,rows) => {
// //         if (err) {
// //             console.log(err);
// //             res.send({result:false});
// //             return;
// //         }
// //         res.send({result:true});
// //     })

// // });

// module.exports = router;

const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// GET /visitor 방명록 전체 보이기
router.get('/', controller.getVisitors);
// GET /visitor/get 방명록 하나 조회
router.get('/get', controller.getVisitor);
// POST /visitor/write 방명록 하나 생성
router.post('/write', controller.postVisitor);
// PATCH /visitor/edit 방명록 하나 수정
router.patch('/edit', controller.patchVisitor);
// DELETE /visitor/delete 방명록 하나 삭제
router.delete('/delete', controller.deleteVisitor);
module.exports = router;