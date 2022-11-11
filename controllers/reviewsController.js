//objeto de conexion
const sequelize = require ('../config/seq')
//DataTypes
const {DataTypes, ValidationError } = require('sequelize')
//el modelo
const reviewsModel = require ('../models/reviews')
const reviews = require('../models/reviews')
// crear el objeto usuario
const reviews = reviewsModel (sequelize,DataTypes)

//rutas get

exports.traerreviewsPorId=async (req,res)=>{
    const reviewsId = await reviews.findBykpk(req.params.id)
    res.status(200).json(
        {
            "succes": true,
            "data": reviewsId
        }
    )
}


//agregar usuario  con post
exports.crearreviews = async(req, res)=>{
    try{
        const newreviews = await reviews.create(req.body);

    res.status(201).json({
        "succes" :true,
        "data": newreviews
    })

    }
    
    catch(error){
        //llevar errores a response  
        const errores= error.errors.map((e)=>e.message)
        res
        .status(422)
        .json({
            "succes":false,
            "errors": errores
        })
    }
      
        console.log(error.errors[0].message )
    
        

    }


//PUT - PATCH: actualizar
exports.actualizarreviews = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upreviews = await reviews.findByPk(req.params.id)
      if(!upreviews){
        //response de usuario no encontrado
        res.status(422).json(
            {
                "success": false,
                "errors": [
                    "usuario no existe"
                ]  
            }
           )   
       }else{
            //actualizar usuario por id
            await reviews.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const reviewsAct = await reviews.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  reviewsAct
            })
       }
    } catch (error) {
        res
        .status(500)
        .json({
             "success": false, 
             "errors":  "error de servidor"  
        })
    }
 }

///delete
exports.deletereviews =async (req,res) =>{
    //buscar el usuario por id
    const u= await reviews.findByPk(req.params.id)
    
    //borrar usuario por id
await reviews.destroy({
    where: {
      id: req.params.id
    }
  });
    res.status(200).json(
        {
          "succes": true,
          "data":u
        }
    )
}


