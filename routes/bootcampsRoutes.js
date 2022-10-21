const express = require('express')
const Router = express.Router()

//establecer las rutas de serve

//rutas get

Router.get('/', (req,res) =>{
    res.status(200).json(
        {
            "message": `aqui se va a mostrar el id ${req.params.id}`,

        }
    )
})
//agregar datos con post
Router.post('/', (re, res)=>{
    res.status(201).json({
        "message": "aquise va a crear bootcamp"
    })

})

// add put

Router.put('/', (req,res) =>{
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

module.export = router