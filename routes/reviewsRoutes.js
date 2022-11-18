const express = require('express')
const router = express.Router()
const {crearReviews,traerReviewsPorId, actualizarReviews,deleteReviews,traerReviews} = require('../controllers/reviewsController')

//rutas de usuario
router.route('/')
    .get(traerReviews)
    .post(crearReviews)

    router.route('/:id')

    .get(traerReviewsPorId)
    .put(actualizarReviews)
    .delete(deleteReviews)

module.exports = router