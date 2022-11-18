const express = require('express')
const router = express.Router()
const {crearCourses,traerCoursesPorId, actualizarCourses,deleteCourses,traerCourses} = require('../controllers/coursesController')

//rutas de usuario
router.route('/')
    .get(traerCourses)
    .post(crearCourses)

router.route('/:id')
    .get(traerCoursesPorId)
    .put(actualizarCourses)
    .delete(deleteCourses)

module.exports = router