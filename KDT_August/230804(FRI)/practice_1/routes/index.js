const express = require('express');
const router = express.Router();
const cont = require('../controller/Cuser');

//router
router.get('/', cont.main);
//post 실습
router.get('/axiosPost', cont.axiosPost);
router.post('/resultPost', cont.resultPost);

module.exports = router;

