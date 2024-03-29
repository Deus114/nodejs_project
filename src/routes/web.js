const express = require('express');
const router = express.Router();
const { getHomepage, postCreateUser, getCreate, getUpdate, postUpdateUser } = require('../controllers/homeController')

router.get('/', getHomepage);
router.get('/create', getCreate);
router.post('/create-user', postCreateUser);
router.get('/update/:id', getUpdate);
router.post('/update-user', postUpdateUser);

module.exports = router;