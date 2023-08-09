const express = require('express');
const controller = require('../controller/Cuser')
const router = express.Router();

router.get('/', controller.index);

// Get localhost:8000/user/signup
router.get('/signup', controller.signup);

// Post localhost:8000/user/signup
router.post('/signup', controller.post_signup);

// Post localhost:8000/user/signin
router.get('/signin', controller.signin);
router.post('/signin', controller.post_signin);

router.post('/profile', controller.post_profile)
router.patch('/profile/edit', controller.edit_profile)
router.post('/profile/delete', controller.delete_profile)



module.exports = router;