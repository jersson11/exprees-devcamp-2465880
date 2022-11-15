//objeto de conexion
const sequelize = require ('../config/seq')
//DataTypes
const {DataTypes, ValidationError } = require('sequelize')
//el modelo
const UserModel = require ('../models/user')
const user = require('../models/user')
// crear el objeto usuario
const User = UserModel (sequelize,DataTypes)

//rutas get

exports.traerUserPorId=async (req,res)=>{
    const userId = await User.findBykpk(req.params.id)
    res.status(200).json(
        {
            "succes": true,
            "data": userId
        }
    )
}


//agregar usuario  con post
exports.crearUser = async(req, res)=>{
    try{
        const newUser = await User.create(req.body);

    res.status(201).json({
        "succes" :true,
        "data": newUser
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
exports.actualizarUser = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upUser = await User.findByPk(req.params.id)
      if(!upUser){
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
            await User.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const userAct = await User.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  userAct
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
exports.deleteUser =async (req,res) =>{
    //buscar el usuario por id
    const u= await User.findBykpk(req.params.id)
    
    //borrar usuario por id
await User.destroy({
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


