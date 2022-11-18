//objeto de conexion
const sequelize = require ('../config/seq')
//DataTypes
const {DataTypes, ValidationError } = require('sequelize')
//el modelo
const reviewsModel = require ('../models/reviews')
const reviews = require('../models/reviews')
// crear el objeto usuario
const Reviews = reviewsModel (sequelize,DataTypes)

//rutas get

//tarer datos
//1. traer todos los datos
exports.traerReviews= async(req, res)=>{
    try {
        const reviews = await Reviews.findAll();
        res.status(200).json({
            "success": true,
            "data": reviews
        })   
    } catch (error) {
        res.status(500)
        .json({
            "success": false,
            "errors": "Falla en el servidor"
        })
    }
 
}


//traer datos por id
exports.traerReviewsPorId=async (req,res)=>{
    const reviewsId = await Reviews.findByPk(req.params.id)
    res.status(200).json(
        {
            "succes": true,
            "data": reviewsId
        }
    )
}


//agregar usuario  con post
exports.crearReviews = async(req, res)=>{
    try{
        const newreviews = await Reviews.create(req.body);

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
exports.actualizarReviews = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upeviews = await Reviews.findByPk(req.params.id)
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
            await Reviews.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const reviewsAct = await Reviews.findByPk(req.params.id)
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
exports.deleteReviews =async (req,res) =>{
    //buscar el usuario por id
    const u= await Reviews.findByPk(req.params.id)
    
    //borrar usuario por id
await Reviews.destroy({
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


