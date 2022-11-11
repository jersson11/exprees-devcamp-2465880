//objeto de conexion
const sequelize = require ('../config/seq')
//DataTypes
const {DataTypes, ValidationError } = require('sequelize')
//el modelo
const coursesModel = require ('../models/courses')
const courses = require('../models/courses')
// crear el objeto usuario
const courses = coursesModel (sequelize,DataTypes)

//rutas get

exports.traercoursesPorId=async (req,res)=>{
    const coursesId = await courses.findBykpk(req.params.id)
    res.status(200).json(
        {
            "succes": true,
            "data": coursesId
        }
    )
}


//agregar usuario  con post
exports.crearcourses = async(req, res)=>{
    try{
        const newcourses = await courses.create(req.body);

    res.status(201).json({
        "succes" :true,
        "data": newcourses
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
exports.actualizarcourses = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upcourses = await courses.findByPk(req.params.id)
      if(!upcourses){
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
            await courses.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const coursesAct = await courses.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  coursesAct
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
exports.deletecourses =async (req,res) =>{
    //buscar el usuario por id
    const u= await courses.findByPk(req.params.id)
    
    //borrar usuario por id
await courses.destroy({
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


