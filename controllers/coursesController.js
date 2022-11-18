//objeto de conexion
const sequelize = require ('../config/seq')
//DataTypes
const {DataTypes, ValidationError } = require('sequelize')
//el modelo
const coursesModel = require ('../models/courses')
const courses = require('../models/courses')
// crear el objeto usuario
const Courses = coursesModel (sequelize,DataTypes)

//rutas get




//1. traer todos los datos
exports.traerCourses= async(req, res)=>{
    try {
        const courses = await Courses.findAll();
        res.status(200).json({
            "success": true,
            "data": courses
        })   
    } catch (error) {
        res.status(500)
        .json({
            "success": false,
            "errors": "Falla en el servidor"
        })
    }
 
}



exports.traerCoursesPorId=async (req,res)=>{
    const coursesId = await Courses.findByPk(req.params.id)
    res.status(200).json(
        {
            "succes": true,
            "data": coursesId
        }
    )
}



//agregar usuario  con post
exports.crearCourses = async(req, res)=>{
    try{
        const newcourses = await Courses.create(req.body);

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
        console.log(error.errors[0].message )
    }
      
    
        

    }


//PUT - PATCH: actualizar
exports.actualizarCourses = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upcourses = await Courses.findByPk(req.params.id)
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
            await Courses.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const coursesAct = await Courses.findByPk(req.params.id)
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
exports.deleteCourses =async (req,res) =>{
    //buscar el usuario por id
    const u= await Courses.findByPk(req.params.id)
    
    //borrar usuario por id
await Courses.destroy({
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


