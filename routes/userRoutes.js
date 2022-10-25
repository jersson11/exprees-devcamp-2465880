const express = require('express')
const router = express.Router()

//establecer las rutas de serve

//rutas get

router.get('/', (req,res) =>{
    res.status(200).json(
        {
            "message": `aqui se va a mostrar el id del usuario`,

        }
    )
})
router.get('/:id', (req,res) =>{
    res.status(200).json(
        {
            "message": `aqui se va a mostrar el id del usuario ${req.params.id}`,

        }
    )
})
//agregar datos con post
router.post('/', (re, res)=>{
    res.status(201).json({
        "message": "aquise va a crear usuario"
    })

})

// add put actualizar usuario

router.put('/', (req,res) =>{
    res.status(200).json(
        {
            "message": `aqui se va a actualizar el id del usuario ${req.params.id}`,

        }
    )
})

///delete
router.delete('/', (req,res) =>{
    res.status(200).json(
        {
            "message": `aqui se va a borrar este usuario ${req.params.id}`,

        }
    )
})

module.exports = router