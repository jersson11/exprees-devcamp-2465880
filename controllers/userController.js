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
    const userId = await user.findBykpk(req.params.id)
    res.status(200).json(
        {
            "succes": true,
            "data": userId
        }
    )
}


//agregar usuario datos con post
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
    }else{
        
    }
        console.log(error.errors[0].message )

    }
    

}

// add put actualizar usuario

exports.actualizarUser = async(req,res) =>{
    await User.update( req.body, {
        where: {
          id: req.params.id
        }
      });
      //consultar datos actualizados
      const upUser = await User.findByPk(req.params.id)


    res.status(200).json(
        {
            "succes" :true,
        "data": upUser   

        }
    )
}

///delete
exports.deleteUser =async (req,res) =>{
    //buscar el usuario por id
    const u= await User.findByPk(req.params.id)
    
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


