const express = require('express')
const router = express.Router()
const {crearUser,traerUserPorId, actualizarUser,deleteUser} = require('../controllers/userController')

//rutas de usuario
router.route('/')
    .get()
    .post(crearUser)

    router.route('/:id')

    .get(traerUserPorId)
    .post(actualizarUser)
    .delete(deleteUser)

module.exports = router