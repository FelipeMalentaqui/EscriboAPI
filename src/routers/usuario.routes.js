const express = require('express');
const {

  getAll, findById, create, update, userDelete,

} = require('../controllers/usuario.controller');

const router = express.Router();

router.get('/usuario', getAll);
router.get('/usuario/:id', findById);
router.post('/usuario', create);
router.put('/usuario/:id', update);
router.delete('/usuario/:id', userDelete);

module.exports = router;
