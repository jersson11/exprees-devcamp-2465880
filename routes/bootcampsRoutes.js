const express = require('express')
const router = express.Router()

//establecer las rutas de serve

//rutas get

router.get('/', (req,res) =>{
    res.status(200).json(
        {
            "message": `aqui se va a mostrar el id ${req.params.id}`,

        }
    )
})
//agregar datos con post
router.post('/', (re, res)=>{
    res.status(201).json({
        "message": "aquise va a crear bootcamp"
    })

})

// add put

router.put('/', (req,res) =>{
    res.status(200).json(
        {
            "message": `aqui se va a actualizar el id ${req.params.id}`,

        }
    )
})

///delete
router.delete('/', (req,res) =>{
    res.status(200).json(
        {
            "message": `aqui se va a borrar este bootcamps ${req.params.id}`,

        }
    )
})

module.exports = router