const sequileze = require('./seq')

//dependencia a la funcion para crear el modelo
const UserModel = require ('../models/user')
//dependencias a dataTypes 
const {dataTypes} =require('sequelize')

//crear el modelo
const User = UserModel( sequileze, dataTypes)



//crear funcion asyncrona 
const connectDB =async () =>{
try{
    await sequileze.authenicate()
    console.log('conexion estbablecida exitosamente')
    //seleccionar los users
     const users = await User.findAll();
     console.log
} catch(error){
    console.error(error)
}
}