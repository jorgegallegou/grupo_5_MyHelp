const express = require('express');
const router = express.Router();

const contollerUserApi = require('../../controllers/api/userControllerApi');

router.get('/list', contollerUserApi.list);
router.get('/:id', contollerUserApi.detail);

module.exports = router;
